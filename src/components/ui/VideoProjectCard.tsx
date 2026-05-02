// src/components/ui/VideoProjectCard.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import {
  Github,
  ExternalLink,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Loader2
} from 'lucide-react';

// ─── Module-level singletons (shared across all card instances) ──────────────
// Ensures only ONE video plays at a time and limits concurrent network loads.
let globalActiveVideo: HTMLVideoElement | null = null;
let globalLoadCount = 0;
const MAX_CONCURRENT_LOADS = 2;

function claimActiveVideo(video: HTMLVideoElement) {
  if (globalActiveVideo && globalActiveVideo !== video) {
    globalActiveVideo.pause();
  }
  globalActiveVideo = video;
}

function incrementLoad() { globalLoadCount++; }
function decrementLoad() { if (globalLoadCount > 0) globalLoadCount--; }
// ─────────────────────────────────────────────────────────────────────────────

type LoadState = 'idle' | 'loading' | 'ready' | 'error';

interface VideoProjectCardProps {
  project: Project & { videoUrl?: string };
  index: number;
}

const VideoProjectCard = ({ project, index }: VideoProjectCardProps) => {
  const [isExpanded, setIsExpanded]   = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [isMuted, setIsMuted]         = useState(true);
  const [loadState, setLoadState]     = useState<LoadState>('idle');
  const [progress, setProgress]       = useState(0);
  const [videoSrc, setVideoSrc]       = useState<string | undefined>(undefined);

  const videoRef       = useRef<HTMLVideoElement>(null);
  const cardRef        = useRef<HTMLDivElement>(null);
  const srcLoadedRef   = useRef(false);  // true once src has been assigned
  const countedRef     = useRef(false);  // true while this card holds a load slot
  const pendingPlayRef = useRef(false);  // play as soon as src becomes ready (hover before load)

  const resolvedUrl = project.videoUrl ?? '/videos/placeholder.mp4';

  // Derive poster image path from video URL: /videos/FastStay.mp4 → /videos/images/FastStay.png
  const posterUrl = resolvedUrl
    .replace('/videos/', '/videos/images/')
    .replace(/\.mp4$/i, '.png');

  // Detect save-data / slow connection
  const isSlowNetwork = useCallback((): boolean => {
    if (typeof navigator === 'undefined') return false;
    const conn = (navigator as unknown as { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
    return !!(conn?.saveData || conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g');
  }, []);

  // Load src and claim a concurrent-load slot
  const activateSrc = useCallback(() => {
    if (srcLoadedRef.current) return;
    if (globalLoadCount >= MAX_CONCURRENT_LOADS) return;
    srcLoadedRef.current = true;
    countedRef.current   = true;
    incrementLoad();
    setVideoSrc(resolvedUrl);
    setLoadState('loading');
  }, [resolvedUrl]);

  // Release src to free browser memory + bandwidth for cards below
  const revokeSrc = useCallback(() => {
    if (!srcLoadedRef.current) return;
    srcLoadedRef.current = false;
    if (countedRef.current) { countedRef.current = false; decrementLoad(); }
    setVideoSrc(undefined);
    setLoadState('idle');
    setProgress(0);
    setIsPlaying(false);
  }, []);

  // ─── EFFECT 1: Preload zone — load src when card approaches viewport ────────
  useEffect(() => {
    const slow = isSlowNetwork();

    // First two cards (above the fold) load without waiting for observer,
    // but only if we are not on a slow connection and slots are available.
    if (index < 2 && !slow) {
      activateSrc();
    }

    if (!cardRef.current) return;

    const rootMargin = slow ? '150px 0px' : '600px 0px';

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activateSrc();
          // Keep observing: activateSrc is a no-op if already loaded or slots full.
          // Once loaded, disconnect.
          if (srcLoadedRef.current) preloadObserver.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    preloadObserver.observe(cardRef.current);
    return () => preloadObserver.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── EFFECT 2: Memory reclaim — revoke src when card is far above viewport ──
  useEffect(() => {
    if (!cardRef.current || !videoSrc) return;

    const reclaimObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const farAbove = rect.bottom < -(typeof window !== 'undefined' ? window.innerHeight : 800);
          if (farAbove) revokeSrc();
        }
      },
      { threshold: 0, rootMargin: '0px 0px' }
    );

    reclaimObserver.observe(cardRef.current);
    return () => reclaimObserver.disconnect();
  }, [videoSrc, revokeSrc]);

  // ─── Hover handlers — play on enter, pause+reset on leave ─────────────────
  const handleMouseEnter = useCallback(() => {
    if (!srcLoadedRef.current) {
      // Force-load on direct user intent even if slot limit is full
      srcLoadedRef.current = true;
      if (!countedRef.current) { countedRef.current = true; incrementLoad(); }
      pendingPlayRef.current = true;
      setVideoSrc(resolvedUrl);
      setLoadState('loading');
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    claimActiveVideo(video);
    video.play().catch(() => setIsPlaying(false));
  }, [resolvedUrl]);

  const handleMouseLeave = useCallback(() => {
    pendingPlayRef.current = false;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0; // reset to start so poster image shows again
  }, []);

  // ─── Video event handlers ───────────────────────────────────────────────────
  const handleCanPlay = useCallback(() => {
    setLoadState('ready');
    // Release load slot — video is buffered enough to play
    if (countedRef.current) { countedRef.current = false; decrementLoad(); }
    // If hover triggered load before src was ready, play now
    if (pendingPlayRef.current && videoRef.current) {
      claimActiveVideo(videoRef.current);
      videoRef.current.play().catch(() => setIsPlaying(false));
      pendingPlayRef.current = false;
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    // If src not yet loaded (e.g. slot was full), force-load on manual tap
    if (!srcLoadedRef.current) {
      srcLoadedRef.current = true;
      if (!countedRef.current) { countedRef.current = true; incrementLoad(); }
      pendingPlayRef.current = true;
      setVideoSrc(resolvedUrl);
      setLoadState('loading');
      return; // will play via handleCanPlay → pendingPlayRef
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      claimActiveVideo(videoRef.current);
      videoRef.current.play();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };


  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      Python: 'from-blue-500 to-cyan-500',
      Django: 'from-green-600 to-emerald-600',
      'React.js': 'from-cyan-400 to-blue-500',
      'Node.js': 'from-green-500 to-lime-500',
      TensorFlow: 'from-orange-500 to-amber-500',
      OpenCV: 'from-red-500 to-pink-500',
      PostgreSQL: 'from-indigo-500 to-blue-500',
      MongoDB: 'from-green-600 to-emerald-600',
      TypeScript: 'from-blue-600 to-indigo-600',
      'Next.js': 'from-gray-700 to-gray-900',
      Docker: 'from-blue-400 to-indigo-500',
      AWS: 'from-yellow-500 to-orange-500',
    };
    return colors[tech] || 'from-primary to-secondary';
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

      <div className="relative bg-muted/20 backdrop-blur-sm rounded-xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300">

        {/* Video Section */}
        <div className="relative aspect-video bg-black overflow-hidden">

          {/* Poster image — always rendered, visible whenever video is not actively playing */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterUrl}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 ${
              isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />

          {/* Loading spinner — shown while buffering (above poster) */}
          {loadState === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          )}

          <video
            ref={videoRef}
            src={videoSrc}
            preload="none"
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onCanPlay={handleCanPlay}
            onLoadedData={handleCanPlay}
            onWaiting={() => setLoadState('loading')}
            onPlaying={() => setLoadState('ready')}
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              if (v.duration && !Number.isNaN(v.duration)) {
                setProgress((v.currentTime / v.duration) * 100);
              }
            }}
            onError={() => setLoadState('error')}
            className="w-full h-full object-cover"
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  if (videoRef.current) {
                    videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
                  }
                }}
              >
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 bg-white/20 hover:bg-primary/50 rounded-lg backdrop-blur-sm transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 bg-white/20 hover:bg-primary/50 rounded-lg backdrop-blur-sm transition-all"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Play hint on poster — visible on hover when not yet playing */}
          {!isPlaying && loadState !== 'loading' && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-200 z-30"
            >
              <Play className="w-6 h-6 text-white translate-x-0.5" />
            </button>
          )}

          {/* Project Title Overlay */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg border border-primary/30 z-30">
            <h3 className="text-sm font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Description */}
          <p className={`text-muted-foreground mb-2 ${showFullDescription ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            {showFullDescription ? 'Show less' : 'Read more'}
          </button>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getTechColor(tech)} bg-opacity-10 text-foreground border border-primary/20`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 mb-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm shadow-emerald-600/30 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-semibold">Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                aria-label="GitHub repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Expandable Challenge/Solution Section */}
          <div className="mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/btn"
            >
              <span>Technical Deep Dive</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    {/* Challenge */}
                    <div className="relative pl-4 border-l-2 border-red-500/30">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="relative pl-4 border-l-2 border-green-500/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoProjectCard;