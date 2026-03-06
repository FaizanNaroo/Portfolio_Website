// src/components/ui/ProjectCard.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import {
  Github,
  ExternalLink,
  ChevronDown,
  Code2,
  AlertCircle,
  CheckCircle2,
  X
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

      <div className="relative bg-muted/20 backdrop-blur-sm rounded-xl border border-primary/10 p-6 hover:border-primary/30 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

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

        {/* Expandable Challenge/Solution Section */}
        <div className="mt-4">
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

        {/* Footer with tech highlights */}
        <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>Key Technologies:</span>
          <span className="text-primary">
            {project.techStack.slice(0, 3).join(' • ')}
            {project.techStack.length > 3 && ' • ...'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;