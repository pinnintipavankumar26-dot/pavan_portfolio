import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/80 backdrop-blur-md shadow-glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <svg className="w-8 h-8 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm3-2v2m6-2v2m-6 16v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2" />
          </svg>
          <span className="text-xl font-bold font-outfit text-white tracking-wide">Pavan Kumar</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-cyan ${
                  activeSection === link.id ? 'text-accent-cyan' : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download="Pinninti-Pavan-Kumar-Resume.pdf"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-navy-800 text-white border border-accent-cyan/30 hover:bg-navy-700 hover:border-accent-cyan/60 hover:scale-105 hover:shadow-glow-blue transition-all duration-300 text-sm font-medium"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <a
            href="/resume.pdf"
            download="Pinninti-Pavan-Kumar-Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy-800 text-white border border-accent-cyan/30 hover:bg-navy-700 hover:border-accent-cyan/60 hover:shadow-glow-blue transition-all duration-300 text-xs font-medium"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
