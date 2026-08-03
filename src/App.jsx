import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';

function App() {
  // Custom glowing cursor effect
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorGlow = document.getElementById('cursor-glow');

    if (!cursorDot || !cursorGlow) return;
    
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cursorDot.style.display = 'none';
      cursorGlow.style.display = 'none';
      return;
    }

    let mouseX = -100, mouseY = -100;
    let glowX = -100, glowY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const renderGlow = () => {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      animationFrameId = requestAnimationFrame(renderGlow);
    };
    renderGlow();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
      <BackgroundCanvas />
      
      {/* Custom Cursor */}
      <div id="cursor-dot" className="fixed w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"></div>
      <div id="cursor-glow" className="fixed w-12 h-12 bg-accent-cyan/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 blur-md transition-transform duration-75"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
