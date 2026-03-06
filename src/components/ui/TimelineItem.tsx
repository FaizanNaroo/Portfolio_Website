// src/components/ui/TimelineItem.tsx
'use client';

import { motion } from 'framer-motion';
import { RoadmapItem } from '@/types';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface TimelineItemProps {
  item: RoadmapItem;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  const isEducation = item.type === 'education';

  return (
    <motion.div
      initial={{ opacity: 0, x: isEducation ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
      )}

      {/* Icon Container */}
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-xl bg-muted/30 border-2 ${
          isEducation
            ? 'border-primary group-hover:border-primary/80'
            : 'border-secondary group-hover:border-secondary/80'
        } flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
          {isEducation ? (
            <GraduationCap className={`w-8 h-8 ${
              isEducation ? 'text-primary' : 'text-secondary'
            }`} />
          ) : (
            <Briefcase className={`w-8 h-8 ${
              isEducation ? 'text-primary' : 'text-secondary'
            }`} />
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 ml-6 pb-12">
        <div className={`bg-muted/20 backdrop-blur-sm rounded-xl border ${
          isEducation ? 'border-primary/20' : 'border-secondary/20'
        } p-6 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg`}>

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className={`text-lg ${
                isEducation ? 'text-primary' : 'text-secondary'
              } font-medium`}>
                {item.organization}
              </p>
            </div>

            {/* Duration Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-muted/40 rounded-full border border-primary/20">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {item.startDate} - {item.endDate}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            {item.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2 group/achievement"
              >
                <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${
                  isEducation ? 'text-primary' : 'text-secondary'
                } group-hover/achievement:translate-x-1 transition-transform`} />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className={`absolute top-6 right-6 w-20 h-20 ${
            isEducation ? 'bg-primary' : 'bg-secondary'
          } rounded-full filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`} />
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;