import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-navy-800/50 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-glass"
        >
          {/* Card left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent-cyan to-accent-blue"></div>
          
          {/* Background grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="p-8 md:p-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6 flex items-center gap-3">
              <FaUserAlt className="text-accent-cyan" /> 
              About <span className="text-accent-cyan">Me</span>
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                I am a B.Tech student in Electronics and Communication Engineering (ECE) with a strong interest in 
                software development, Artificial Intelligence, Machine Learning, and Verilog/HDL design. I am 
                passionate about building innovative solutions by combining software and digital hardware 
                technologies.
              </p>
              <p>
                Currently, I am strengthening my programming skills in Java and Python through hands-on projects, 
                algorithmic problem-solving, and continuous learning. I enjoy integrating digital design concepts 
                with modern AI technologies to develop efficient and intelligent systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
