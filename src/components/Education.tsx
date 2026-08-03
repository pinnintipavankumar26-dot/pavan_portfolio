'use client';

import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '@/lib/data';
import { GraduationCap, BookOpen, Award, Calendar, Building2 } from 'lucide-react';

export default function Education() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-blue-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            My Academic Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Education <span className="gradient-blue-text">History</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Equal Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="vercel-glass rounded-2xl p-7 flex flex-col justify-between group border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-vercel"
            >
              <div>
                {/* Top Row: Icon & Year Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-glow transition-all">
                    {getIcon(item.icon)}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.years}
                  </div>
                </div>

                {/* Main Info */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-semibold text-sky-400 mb-4">
                  {item.stream}
                </h4>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium mb-4">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  {item.institution}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                {item.status ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {item.status}
                  </span>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
                    {item.gradeLabel}: <span className="font-bold text-white">{item.gradeValue}</span>
                  </div>
                  {item.secondaryGradeValue && (
                    <div className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
                      {item.secondaryGradeLabel}: <span className="font-bold text-white">{item.secondaryGradeValue}</span>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
