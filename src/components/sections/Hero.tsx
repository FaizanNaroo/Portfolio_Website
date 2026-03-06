// src/components/sections/Hero.tsx
'use client'; // Needed for Framer Motion

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';
import { PersonalInfo } from '@/types';
import { Mail, Code2, Brain, Download, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  // Type assertion for safety
  const info: PersonalInfo['heroTagline'] = personalInfo.heroTagline;
  const subtitle = personalInfo.heroSubtitle;
  const name = personalInfo.name;
  const title = personalInfo.title;

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Glow/Grid - 'Dark Laboratory' feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Terminal-style prompt */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/30 mb-6 font-mono text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>$ ./build-future.sh --specialization ai-fullstack</span>
        </motion.div>


        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-primary">{name}</span>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
          {title}
        </motion.h2>

        {/* Tagline - Your 'Terminal-Style' Core */}
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight my-6 bg-gradient-to-r from-primary/80 via-foreground to-primary/80 bg-clip-text text-transparent bg-300% animate-gradient"
        >
          {info}
        </motion.p>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Contact Me — primary green fill */}
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-[#0a0e27] font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_22px_#00ff9d55] active:scale-95"
          >
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            Contact Me
          </Link>

          {/* Download — secondary blue fill */}
          <a
            href="/resume.pdf"
            download="Faizan_Naroo_Resume.pdf"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-[#0a0e27] font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_22px_#00b8ff55] active:scale-95"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Download CV
          </a>

          {/* Preview — gradient outline pill */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 text-foreground font-semibold text-sm transition-all duration-300 hover:from-primary/25 hover:to-secondary/25 hover:border-secondary/60 hover:shadow-[0_0_18px_#00b8ff30] active:scale-95"
          >
            <Eye className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:scale-110" />
            Preview CV
          </a>
        </motion.div>








{/* Profile Image - Decorative Element (Commented Out)
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/50 transition-all">
              <img
                src="/images/profile-thumbnail.jpg"
                alt="Your Name"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
            >
              <Code2 className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-2 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center"
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
        */}






      </motion.div>
    </section>
  );
};

export default Hero;