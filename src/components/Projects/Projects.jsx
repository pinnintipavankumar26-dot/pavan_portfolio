import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { projectsData } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">Execution Logs</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Projects & <span className="text-accent-cyan">Practice</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => {
            const Icon = Icons[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full hover:shadow-glow transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-sky text-xs font-bold rounded-md">
                    {project.badge}
                  </span>
                  <div className="text-slate-400 text-2xl bg-navy-900 p-2 rounded-lg border border-white/5">
                    {Icon && <Icon />}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-col flex-grow mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-navy-900 text-accent-cyan border border-accent-cyan/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Section */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 text-center py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/10"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 text-center py-2 text-sm font-medium text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/40 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        Live Demo <Icons.FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
