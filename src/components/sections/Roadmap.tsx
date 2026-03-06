// src/components/sections/Roadmap.tsx
'use client';

import { motion } from 'framer-motion';
import { roadmapData } from '@/data/content';
import TimelineItem from '@/components/ui/TimelineItem';
import {
  Hourglass as TimelineIcon,
  Award,
  TrendingUp,
  Target,
  Briefcase
} from 'lucide-react';

const Roadmap = () => {
  // Sort items by date (most recent first)
  const sortedData = [...roadmapData].sort((a, b) => {
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });

  // Calculate statistics
  const totalExperience = sortedData
    .filter(item => item.type === 'experience')
    .reduce((acc, item) => {
      const start = new Date(item.startDate);
      const end = new Date(item.endDate);
      const months = (end.getFullYear() - start.getFullYear()) * 12 +
                     (end.getMonth() - start.getMonth());
      return acc + months;
    }, 0);

  const achievements = sortedData.flatMap(item => item.achievements).length;

  return (
    <section id="roadmap" className="relative py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Roadmap
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional experience building production-grade systems
            and pushing the boundaries of AI and Full-Stack development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Award,
              label: "Education",
              value: sortedData.filter(i => i.type === 'education').length,
              description: "Degree Programs",
              color: "primary"
            },
            {
              icon: Briefcase,
              label: "Experience",
              value: sortedData.filter(i => i.type === 'experience').length,
              description: `${Math.floor(totalExperience / 12)}+ Years Total`,
              color: "secondary"
            },
            {
              icon: Target,
              label: "Achievements",
              value: achievements,
              description: "Key Milestones",
              color: "purple"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-muted/20 backdrop-blur-sm rounded-xl border border-${stat.color}-500/20 p-6 text-center group hover:border-${stat.color}-500/40 transition-all duration-300`}
            >
              <div className={`inline-flex p-3 bg-${stat.color}-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-lg font-medium text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground/60">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-primary/20">
              <TimelineIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Journey Timeline</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {sortedData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === sortedData.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">What's Next</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Research Publication",
                description: "Complete and publish computer vision research paper on agricultural disease detection",
                date: "2026"
              },
              {
                title: "Part-Time Role",
                description: "Seeking opportunities as a Full-Stack or AI/ML Engineer",
                date: "2026"
              },
              {
                title: "Open Source",
                description: "Contribute to major AI/ML frameworks and tools",
                date: "Ongoing"
              }
            ].map((goal, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <div className="relative bg-muted/30 p-5 rounded-lg border border-primary/10">
                  <div className="text-sm text-primary mb-2">{goal.date}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;