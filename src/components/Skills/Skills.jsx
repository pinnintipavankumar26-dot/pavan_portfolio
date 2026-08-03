import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { skillsData } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">Technical Modules</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Skills & <span className="text-accent-cyan">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = Icons[skill.icon];
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:bg-navy-700/60 hover:shadow-glow-blue transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-2xl text-accent-cyan group-hover:text-accent-sky transition-colors shadow-inner">
                    {Icon && <Icon />}
                  </div>
                  <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-slate-400 border border-white/5">
                    {skill.code}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2">{skill.description}</p>
                
                <div className="w-full h-2 bg-navy-900 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
