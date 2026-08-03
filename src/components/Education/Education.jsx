import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">My Academic Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Education <span className="text-accent-cyan">History</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-navy-700/50 transition-colors shadow-glass flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center text-2xl shadow-glow">
                  {edu.emoji}
                </div>
                <div className="px-3 py-1 bg-navy-900 rounded-full text-xs font-medium text-slate-300 border border-white/10 flex items-center gap-2">
                  <svg className="w-3 h-3 text-accent-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {edu.period}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                <h4 className="text-sm text-accent-sky mb-4">{edu.stream}</h4>
                
                <div className="flex items-center gap-2 text-slate-300 mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium text-sm">{edu.institution}</span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${edu.statusType === 'pursuing' ? 'bg-accent-cyan' : 'bg-emerald-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${edu.statusType === 'pursuing' ? 'bg-accent-cyan' : 'bg-emerald-500'}`}></span>
                  </span>
                  <span className="text-xs text-slate-300 font-medium">{edu.status}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.metrics.map((metric, i) => (
                    <div key={i} className="px-3 py-1.5 bg-navy-900 border border-white/5 rounded-md flex gap-2 items-center">
                      <span className="text-xs text-slate-400">{metric.label}</span>
                      <span className="text-sm font-bold text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
