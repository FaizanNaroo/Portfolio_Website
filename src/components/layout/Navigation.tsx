












// src/components/layout/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  User,
  Code2,
  Briefcase,
  CalendarRange,
  Send
} from 'lucide-react';
import Link from 'next/link';
import ResumeMenu from '@/components/ui/ResumeMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'roadmap', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User, description: 'My story & journey' },
    { name: 'Skills', href: '#skills', icon: Code2, description: 'Technologies & expertise' },
    { name: 'Projects', href: '#projects', icon: Sparkles, description: 'Featured work' },
    { name: 'Roadmap', href: '#roadmap', icon: CalendarRange, description: 'Experience & education' },
    { name: 'Contact', href: '#contact', icon: Send, description: 'Get in touch' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with animated gradient */}
            <Link
              href="/"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-background font-bold text-lg">{'<>'}</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground tracking-tight">
                    Muhammad <span className="text-primary">Fezaan</span>
                  </span>
                  <span className="absolute -bottom-4 left-0 text-[10px] text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    ./full-stack-ai-engineer
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Elegant Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2"
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      }`}>
                        {item.name}
                      </span>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-muted border border-primary/20 rounded text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {item.description}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Resume & Social */}
            <div className="hidden md:flex items-center gap-3">
              {/* Resume Button */}
              <ResumeMenu label="Resume" variant="nav" align="right" />

              {/* Social Icons with Tooltips */}
              <div className="flex items-center gap-1 border-l border-primary/20 pl-3">
                {[
                { icon: Github, href: "https://github.com/FaizanNaroo", label: "GitHub", username: "@FaizanNaroo" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/faizannaroo/", label: "LinkedIn", username: "in/faizannaroo" },
                  { icon: Mail, href: "mailto:faizannaroo.pk@gmail.com", label: "Email", username: "faizannaroo.pk@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/social relative p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors" />

                    {/* Tooltip */}
                    <div className="absolute -bottom-10 right-0 px-3 py-2 bg-muted border border-primary/20 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none">
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-muted-foreground">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Elegant Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-primary/10 bg-background/95 backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Mobile Menu Items */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.substring(1);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center gap-4 p-3 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary/20 border border-primary/30'
                              : 'hover:bg-primary/10 border border-transparent'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${
                            isActive ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary/20'
                          } transition-colors`}>
                            <Icon className={`w-4 h-4 ${
                              isActive ? 'text-primary-foreground' : 'text-primary'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${
                              isActive ? 'text-primary' : 'text-foreground'
                            }`}>
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          {isActive && (
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Resume & Social */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-primary/10"
                >
                  {/* Resume Button */}
                  <ResumeMenu
                    label="Download Resume"
                    variant="mobile"
                    align="left"
                    download
                  />

                  {/* Social Links */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Github, href: "https://github.com/FaizanNaroo", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/faizannaroo/", label: "LinkedIn" },
                      { icon: Mail, href: "mailto:faizannaroo.pk@gmail.com", label: "Email" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors group"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary mb-1" />
                        <span className="text-xs text-muted-foreground group-hover:text-foreground">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;