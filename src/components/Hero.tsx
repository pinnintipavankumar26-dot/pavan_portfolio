'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HERO_DATA } from '@/lib/data';
import { GraduationCap, Cpu, Code2, Brain, ArrowRight, Download, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Greeting, Name, Role, Intro, Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Vercel-style Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            {HERO_DATA.badge}
          </div>

          <h2 className="text-slate-400 font-medium text-lg md:text-xl mb-2">
            {HERO_DATA.greeting}
          </h2>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
            Pinninti Pavan <span className="gradient-blue-text">Kumar</span>
          </h1>

          <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-6 tracking-wide">
            {HERO_DATA.role}
          </h3>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {HERO_DATA.shortIntro}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-bold text-sm tracking-wide shadow-glow hover:shadow-glow-blue hover:-translate-y-0.5 transition-all"
            >
              <Cpu className="w-4 h-4" />
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-white font-semibold text-sm tracking-wide backdrop-blur-md hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Photo & Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
            
            {/* Soft Ambient Glowing Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-4 rounded-full border border-blue-500/30 border-dashed animate-spin-reverse" style={{ animationDuration: '20s' }} />

            {/* Profile Photo Wrapper */}
            <div className="relative w-60 sm:w-64 h-60 sm:h-64 rounded-full p-1.5 bg-gradient-to-b from-cyan-400/50 to-blue-600/30 shadow-glow-blue">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0a0a0a]">
                <Image
                  src={HERO_DATA.profileImage}
                  alt={HERO_DATA.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Abstract Tech Cards */}
            <div className="absolute -top-2 -left-2 p-3 rounded-xl vercel-glass text-cyan-400 shadow-glow animate-bounce-slow">
              <GraduationCap className="w-5 h-5" />
            </div>
            
            <div className="absolute top-8 -right-4 p-3 rounded-xl vercel-glass text-sky-400 shadow-glow animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <Cpu className="w-5 h-5" />
            </div>

            <div className="absolute -bottom-2 -left-2 p-3 rounded-xl vercel-glass text-blue-400 shadow-glow animate-bounce-slow" style={{ animationDelay: '2s' }}>
              <Code2 className="w-5 h-5" />
            </div>

            <div className="absolute bottom-8 -right-4 p-3 rounded-xl vercel-glass text-cyan-400 shadow-glow animate-bounce-slow" style={{ animationDelay: '3s' }}>
              <Brain className="w-5 h-5" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
