import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-navy-900/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-accent-cyan font-semibold">Pavan Kumar</span>. All Rights Reserved. 
          <br className="md:hidden" />
          <span className="md:ml-2">Engineered with ECE Circuit Intelligence.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
