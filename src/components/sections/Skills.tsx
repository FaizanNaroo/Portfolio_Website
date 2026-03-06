// src/components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/content';
import {
  Code2,
  Brain,
  Wrench,
  Cpu,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Proficient",
      icon: CheckCircle2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      fillColor: "bg-primary",
      level: "90%",
      levelLabel: "Advanced",
      skills: skillsData.proficient
    },
    {
      title: "Intermediate",
      icon: TrendingUp,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      fillColor: "bg-secondary",
      level: "70%",
      levelLabel: "Working Knowledge",
      skills: skillsData.intermediate
    },
    {
      title: "Familiar",
      icon: Code2,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      fillColor: "bg-yellow-500",
      level: "50%",
      levelLabel: "Learning",
      skills: skillsData.familiar
    },
    {
      title: "Core CS",
      icon: Cpu,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      fillColor: "bg-purple-500",
      level: "85%",
      levelLabel: "Strong Foundation",
      skills: skillsData.coreCs
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="relative py-20 bg-muted/5 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:48px_48px]" />

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML,
            and computer science fundamentals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group bg-muted/20 backdrop-blur-sm rounded-xl border ${category.borderColor} p-6 hover:shadow-lg hover:shadow-${category.color}/5 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 ${category.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className={`text-xl font-semibold ${category.color}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className={`group/skill relative px-3 py-2 ${category.bgColor} rounded-lg border ${category.borderColor} hover:border-${category.color} transition-all duration-200`}
                  >
                    <span className={`text-sm font-medium ${category.color} block truncate`}>
                      {skill}
                    </span>

                    {/* Hover effect tooltip for full name if needed */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-muted rounded text-xs text-foreground opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary/20">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skill level indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full ${category.bgColor}`}>
                  <div
                    className={`h-1 rounded-full ${category.fillColor}`}
                    style={{
                      width: category.level
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {category.levelLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Current Focus & Learning</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {["LLM Fine-tuning", "Computer Vision", "AI/ML Research", "Applied Human Computer Interaction", "Computer Architecture"].map((focus, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted/40 rounded-full text-sm text-foreground border border-primary/20 hover:border-primary transition-colors"
              >
                {focus}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;