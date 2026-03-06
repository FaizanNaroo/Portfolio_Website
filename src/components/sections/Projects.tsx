// // src/components/sections/Projects.tsx
// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { projectsData } from '@/data/content';
// import ProjectCard from '@/components/ui/ProjectCard';
// import { Filter, X } from 'lucide-react';

// const Projects = () => {
//   const [filter, setFilter] = useState<string>('all');

//   // Extract all unique technologies
//   const allTechnologies = Array.from(
//     new Set(projectsData.flatMap(p => p.techStack))
//   ).sort();

//   const filteredProjects = filter === 'all'
//     ? projectsData
//     : projectsData.filter(project => project.techStack.includes(filter));

//   return (
//     <section id="projects" className="relative py-20 bg-background overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work, demonstrating technical expertise
//             and problem-solving abilities across AI, Computer Vision, and Full-Stack development.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
//         </motion.div>

//         {/* Filter Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-8"
//         >
//           <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg border border-primary/10">
//               <button
//                 onClick={() => setFilter('all')}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
//                   filter === 'all'
//                     ? 'bg-primary text-primary-foreground'
//                     : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
//                 }`}
//               >
//                 All Projects
//               </button>
//               {allTechnologies.slice(0, 6).map(tech => (
//                 <button
//                   key={tech}
//                   onClick={() => setFilter(tech)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
//                     filter === tech
//                       ? 'bg-primary text-primary-foreground'
//                       : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
//                   }`}
//                 >
//                   {tech}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Active filter indicator */}
//           {filter !== 'all' && (
//             <div className="flex items-center gap-2 mt-4">
//               <span className="text-sm text-muted-foreground">Filtering by:</span>
//               <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30 flex items-center gap-2">
//                 {filter}
//                 <button
//                   onClick={() => setFilter('all')}
//                   className="hover:text-foreground transition-colors"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             </div>
//           )}
//         </motion.div>

//         {/* Projects Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={filter}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {filteredProjects.map((project, index) => (
//               <ProjectCard key={project.id} project={project} index={index} />
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* If no projects match filter */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <p className="text-muted-foreground">
//               No projects found with {filter}. Try another filter.
//             </p>
//           </motion.div>
//         )}

//         {/* View More link */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
//           >
//             <span>View all on GitHub</span>
//             {/* <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" /> */}
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;














// src/components/sections/Projects.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/content';
import VideoProjectCard from '@/components/ui/VideoProjectCard';
import { Filter, Github, X, Film } from 'lucide-react';

// Enhanced projects data with video URLs
const projectsWithVideos = projectsData.map(project => ({
  ...project,
  videoUrl: project.id === 'faststay-dashboard' ? '/videos/FastStay.mp4' :
            project.id === 'moviemate' ? '/videos/MovieMate.mp4' :
            project.id === 'flappy-bird' ? '/videos/FlappyBird.mp4' :
            project.id === 'sam-chatbot' ? '/videos/Sam_Chatbot.mp4' :
            project.id === 'medai' ? '/videos/MedAI.mp4' :
            undefined
}));

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  // Extract all unique technologies
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(p => p.techStack))
  ).sort();

  const filteredProjects = filter === 'all'
    ? projectsWithVideos
    : projectsWithVideos.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="relative py-20 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical expertise
            and problem-solving abilities across AI, Computer Vision, and Full-Stack development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
            <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg border border-primary/10">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                }`}
              >
                All Projects
              </button>
              {allTechnologies.slice(0, 5).map(tech => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    filter === tech
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-muted/20 p-1 rounded-lg border border-primary/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Video</span>
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'detailed'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
              }`}
            >
              Detailed
            </button>
          </div>
        </motion.div>

        {/* Active filter indicator */}
        {filter !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-sm text-muted-foreground">Filtering by:</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30 flex items-center gap-2">
              {filter}
              <button
                onClick={() => setFilter('all')}
                className="hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <VideoProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* If no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found with {filter}. Try another filter.
            </p>
          </motion.div>
        )}

        {/* View More link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span>View all on GitHub</span>
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
