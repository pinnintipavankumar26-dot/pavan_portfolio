import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">Establish Link</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Contact <span className="text-accent-cyan">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-navy-800/40 backdrop-blur-md border border-accent-blue/30 p-8 md:p-12 rounded-3xl shadow-glow text-center relative overflow-hidden"
        >
          {/* PCB Traces */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent-cyan/20 rounded-tl-3xl m-4 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent-cyan/20 rounded-br-3xl m-4 opacity-50"></div>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10">
            I am always open to discussing new opportunities, academic collaborations, AI research projects, and tech innovations. Connect with me through any channel below:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            {socialLinks.map((link, index) => {
              const Icon = Icons[link.icon];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-navy-900 border border-white/10 rounded-xl hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 shadow-glass group"
                >
                  <span className="text-2xl text-accent-cyan group-hover:text-white transition-colors">
                    {Icon && <Icon />}
                  </span>
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{link.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
