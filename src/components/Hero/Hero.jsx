import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaPaperPlane, FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';
import profileImg from '../../assets/images/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-sky text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            ECE & JAVA DEVELOPER
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-4">
            Pinninti Pavan <span className="text-accent-cyan drop-shadow-glow">Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-medium">
            B.Tech ECE Student
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
            Passionate Electronics & Communication Engineering undergraduate specializing in Java, Python, 
            and Artificial Intelligence & Machine Learning. Building next-generation tech solutions bridging 
            hardware and software logic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-accent-blue text-white font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <FaMicrochip /> View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              <FaPaperPlane /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex justify-center items-center w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] aspect-square mx-auto mt-10 md:mt-0"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 border-2 border-accent-cyan/20 rounded-full animate-[spin_20s_linear_infinite] m-[2%] border-dashed"></div>
          <div className="absolute inset-0 border border-accent-blue/30 rounded-full animate-[spin_15s_linear_infinite_reverse] m-[8%]"></div>
          
          {/* Profile Image */}
          <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-navy-800 shadow-glow-blue z-10 bg-navy-900">
            <img src={profileImg} alt="Pavan Kumar" className="w-full h-full object-cover" />
          </div>

          {/* Floating Icons */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-[10%] left-[5%] p-4 bg-navy-800/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg z-20 text-accent-cyan">
            <FaGraduationCap size={24} />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 1 }} className="absolute bottom-[15%] left-[2%] p-4 bg-navy-800/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg z-20 text-accent-blue">
            <FaMicrochip size={24} />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }} className="absolute top-[15%] right-[2%] p-4 bg-navy-800/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg z-20 text-purple-400">
            <FaCode size={24} />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} className="absolute bottom-[10%] right-[8%] p-4 bg-navy-800/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg z-20 text-accent-sky">
            <FaBrain size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
