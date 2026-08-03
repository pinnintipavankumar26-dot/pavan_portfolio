'use client';

import { motion } from 'framer-motion';
import { ABOUT_DATA } from '@/lib/data';
import { User, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            System Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            About <span className="gradient-blue-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Master Vercel Glass Card - 2 Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="vercel-glass rounded-2xl p-8 sm:p-12 relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-500"
        >
          {/* Subtle Left Accent Line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-sky-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            
            {/* Column 1: About Me */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">About Me</h3>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {ABOUT_DATA.aboutMe.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Column 2: Career Objective */}
            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-sky-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Career Objective</h3>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 text-base leading-relaxed relative">
                <p>{ABOUT_DATA.careerObjective}</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
