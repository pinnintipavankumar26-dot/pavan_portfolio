'use client';

import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/lib/data';
import { GraduationCap, Calculator, ShoppingCart, Code, ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-cyan-400" />;
      case 'Calculator': return <Calculator className="w-8 h-8 text-sky-400" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-blue-400" />;
      case 'Code': return <Code className="w-8 h-8 text-cyan-400" />;
      default: return <FolderGit2 className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            Execution Logs
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Projects & <span className="gradient-blue-text">Practice</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="vercel-glass rounded-2xl p-8 flex flex-col justify-between group border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-vercel"
            >
              <div>
                {/* Header Row: Badge & Visual Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                    {project.badge}
                  </span>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-glow transition-all">
                    {getIcon(project.iconName)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      GitHub Repo
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-xs font-semibold text-cyan-400 hover:bg-cyan-400/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
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
