// src/hooks/useVideoPreload.ts
'use client';

import { useEffect, useState } from 'react';

export const useVideoPreload = (videoUrls: string[]) => {
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const preloadVideos = async () => {
      const videoElements = videoUrls.map(url => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;

        video.addEventListener('loadedmetadata', () => {
          setLoadedVideos(prev => new Set([...prev, url]));
        });

        video.addEventListener('error', (e) => {
          setErrors(prev => new Map([...prev, [url, 'Failed to load video']]));
        });

        return video;
      });

      // Cleanup
      return () => {
        videoElements.forEach(video => {
          video.remove();
        });
      };
    };

    preloadVideos();
  }, [videoUrls]);

  return { loadedVideos, errors };
};