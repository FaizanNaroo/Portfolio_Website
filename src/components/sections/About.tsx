
// src/components/sections/About.tsx
'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { personalInfo } from '@/data/content';
import { PersonalInfo } from '@/types';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  Users
} from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const About = () => {
  const about = personalInfo.about;
  const educationEntries = Array.isArray(about.education) ? about.education : [about.education];
  const [imgError, setImgError] = useState(false);

  // For 3D tilt effect
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Photo and Personal Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Terminal-style intro */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/30 mb-2 font-mono text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>$ whoami</span>
            </div>

            {/* Photo Card with 3D Tilt Effect */}
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1 overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border-2 border-primary/30">
                  {!imgError ? (
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="Muhammad Fezaan - Full Stack Developer & AI Anthusiast"
                      fill
                      className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-4">
                          <Users className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Photo coming soon</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay with status indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-primary/30">
                    <div className="relative">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping" />
                    </div>
                    <span className="text-xs text-white font-medium">Available for work</span>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 flex gap-2"
              >
                {[
                  { icon: Code2, label: "Full-Stack", color: "from-blue-500 to-cyan-500" },
                  { icon: Brain, label: "AI/ML", color: "from-purple-500 to-pink-500" },
                  { icon: Cpu, label: "Natural language processing", color: "from-green-500 to-emerald-500" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`px-3 py-1.5 bg-gradient-to-r ${badge.color} rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1.5`}
                  >
                    <badge.icon className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Calendar, label: "Experience", value: "1 semester", color: "primary" },
                { icon: BookOpen, label: "Projects", value: "7+", color: "secondary" },
                // { icon: Award, label: "Dean's List", value: "3x", color: "purple" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-muted/30 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <stat.icon className={`w-5 h-5 text-${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Personal Story & Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Name and Title */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Mhummad <span className="text-primary">Fezaan</span>
              </h3>
              <p className="text-xl text-muted-foreground">
                Computer Science Student at{' '}
                <span className="text-primary">FAST NUCES</span>
              </p>
            </div>

            {/* Bio with animated highlight */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {about.story.split('. ').map((sentence, index, array) => {
                  if (index < 2) {
                    return (
                      <span key={index}>
                        <span className="text-foreground font-medium">
                          {sentence.split(' ').slice(0, 3).join(' ')}
                        </span>
                        {sentence.split(' ').slice(3).join(' ')}.
                        {index === 0 && <><br /><br /></>}
                      </span>
                    );
                  }
                  return index === array.length - 1 ? sentence : `${sentence}. `;
                })}
              </p>
            </div>

            {/* Education Cards with hover effect */}
            <div className="space-y-4">
              {educationEntries.map((education, index) => (
                <motion.div
                  key={`${education.degree}-${education.institution}-${index}`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {education.degree}
                      </h4>
                      <p className="text-primary font-medium mb-2">{education.institution}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {education.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Lahore, Pakistan
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{education.details}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Coursework with animated tags */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Architecture",
                  "Database Systems",
                  "Natural Language Processing",
                  "Artificial Intelligence",
                  "Machine Learning",
                ].map((course, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Current Research Focus</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["LLM Fine-tuning", "Edge AI", "MLOps", "Computer Vision"].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;