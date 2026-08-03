'use client';

import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/data';
import { Code2, FileCode2, Cpu, Binary, Brain, Database, CircuitBoard, Zap, Sliders, Activity, GitBranch } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-indigo-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'CircuitBoard': return <CircuitBoard className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-sky-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-sky-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            Technical Modules
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Skills & <span className="gradient-blue-text">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="vercel-glass rounded-2xl p-7 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow" />
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
