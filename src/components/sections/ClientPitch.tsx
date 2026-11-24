// src/components/sections/ClientPitch.tsx
'use client';

import { motion } from 'framer-motion';
import { Building2, School, AlertCircle, Target, MessageSquare } from 'lucide-react';

const ClientPitch = () => {
  return (
    <section id="client-pitch" className="relative py-20 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />

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
              Client Pitch Demo
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A scenario-based demo showing how I explain a technical solution to a
            non-technical client: clearly, confidently, and without the jargon.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="group relative lg:col-span-3"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            <div className="relative bg-muted/20 backdrop-blur-sm rounded-xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-video bg-black">
                <video
                  src="/videos/ClientPitch.mp4"
                  poster="/videos/images/ClientPitch.jpeg"
                  controls
                  preload="none"
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg border border-primary/30 pointer-events-none">
                  <h3 className="text-sm font-semibold text-white">Pitch to Greenwood International School</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scenario Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-muted/20 backdrop-blur-sm rounded-xl border border-primary/10 p-6 space-y-5"
          >
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-foreground border border-primary/20">
                <Building2 className="w-3 h-3" /> TechBridge Solutions
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-foreground border border-primary/20">
                <School className="w-3 h-3" /> Greenwood International School
              </span>
            </div>

            <div className="relative pl-4 border-l-2 border-red-500/30">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">The Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    Teachers keep attendance, academic progress, and parent communication
                    in separate Excel sheets, so the administration has trouble keeping
                    track of everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-yellow-500/30">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">The Client</h4>
                  <p className="text-sm text-muted-foreground">
                    The principal has no technical background and is hesitant about
                    adopting unfamiliar software.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-green-500/30">
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">My Task</h4>
                  <p className="text-sm text-muted-foreground">
                    Introduce the school management platform, communicate its value,
                    address the principal&apos;s concerns, and make the case for it
                    without overwhelming them with technical details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientPitch;
