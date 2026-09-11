import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { educationData } from '../../data/education';
import { socialLinks } from '../../data/socialLinks';

const EducationAndContact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">Background & Connectivity</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Education & <span className="text-accent-cyan">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Icons.FaGraduationCap className="text-accent-cyan" />
              Education
            </h3>
            
            <div className="relative border-l-2 border-accent-blue/30 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 bg-navy-900 border-2 border-accent-cyan rounded-full shadow-glow-blue z-10"></span>
                  
                  <div className="bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-navy-700/50 hover:border-accent-cyan/30 transition-all shadow-glass">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">{edu.title}</h4>
                    <p className="text-accent-sky font-medium text-sm md:text-base mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5"><Icons.FaMapMarkerAlt /> {edu.location}</span>
                      <span className="flex items-center gap-1.5"><Icons.FaCalendarAlt /> {edu.period}{edu.status ? ` \u2022 ${edu.status}` : ''}</span>
                    </div>

                    {edu.studentStatus && (
                      <p className="text-slate-300 text-sm mb-4">{edu.studentStatus}</p>
                    )}

                    {edu.metrics && edu.metrics.length > 0 && (
                      <div className="mb-4">
                        {edu.metrics.map((metric, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-navy-900 text-accent-cyan border border-accent-cyan/20 rounded-md text-sm font-semibold">
                            {metric.label}: {metric.value}
                          </span>
                        ))}
                      </div>
                    )}

                    {edu.coursework && edu.coursework.length > 0 && (
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs bg-white/5 text-slate-300 rounded border border-white/5">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
              <Icons.FaPaperPlane className="text-accent-cyan" />
              Contact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = Icons[link.icon];
                
                // If it's a link with 'url' as #, it's just info (like location)
                if (link.url === "#") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col items-center justify-center p-6 bg-navy-800/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-glass text-center h-full"
                    >
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-navy-900 border border-white/10 text-xl text-accent-cyan mb-4">
                        {Icon && <Icon />}
                      </span>
                      <h4 className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold">{link.name}</h4>
                      <p className="text-white text-sm font-medium">{link.text}</p>
                    </motion.div>
                  );
                }

                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target={link.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-navy-800/40 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-navy-700/80 hover:border-accent-blue/50 hover:-translate-y-1 transition-all duration-300 shadow-glass group text-center h-full"
                  >
                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-navy-900 border border-white/10 text-xl text-accent-cyan group-hover:text-white group-hover:bg-accent-blue transition-colors mb-4">
                      {Icon && <Icon />}
                    </span>
                    <h4 className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold group-hover:text-slate-300 transition-colors">{link.name}</h4>
                    <p className="text-white text-sm font-medium truncate w-full px-2" title={link.url.replace('mailto:', '')}>
                      {link.name === "Email" ? "pinnintipavankumar26@gmail.com" : (link.name === "LinkedIn" ? "in/pinninti-pavan-kumar" : "pinnintipavankumar26")}
                    </p>
                  </motion.a>
                );
              })}
            </div>

            {/* Resume Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-md border border-accent-cyan/20 rounded-2xl text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl"></div>
              <h4 className="text-lg font-bold text-white mb-2">Want to see more details?</h4>
              <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">Download my complete resume to view all my technical qualifications and projects.</p>
              <a
                href="/resume.pdf"
                download="Pinninti-Pavan-Kumar-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue/10 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan hover:text-navy-900 hover:shadow-glow-blue transition-all duration-300 font-semibold"
              >
                <Icons.FaDownload />
                Download Resume
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndContact;
