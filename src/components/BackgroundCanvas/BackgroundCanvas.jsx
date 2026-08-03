import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let glowingOrbs = [];
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      glowingOrbs = [];
      particles = [];

      const orbColors = [
        { r: 0, g: 240, b: 255 },
        { r: 56, g: 189, b: 248 },
        { r: 59, g: 130, b: 246 },
        { r: 147, g: 51, b: 234 }
      ];

      for (let i = 0; i < 5; i++) {
        glowingOrbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 200 + 150,
          color: orbColors[i % orbColors.length],
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.12 + 0.08
        });
      }

      const particleCount = Math.floor((width * height) / 16000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.6,
          baseAlpha: Math.random() * 0.4 + 0.1,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.015
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    initElements();

    const render = () => {
      ctx.fillStyle = '#050a14';
      ctx.fillRect(0, 0, width, height);

      // Corner glows
      const cornerGlow1 = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(width, height) * 0.6);
      cornerGlow1.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
      cornerGlow1.addColorStop(1, 'transparent');
      ctx.fillStyle = cornerGlow1;
      ctx.fillRect(0, 0, width, height);

      const cornerGlow2 = ctx.createRadialGradient(width, height, 0, width, height, Math.max(width, height) * 0.6);
      cornerGlow2.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      cornerGlow2.addColorStop(1, 'transparent');
      ctx.fillStyle = cornerGlow2;
      ctx.fillRect(0, 0, width, height);

      // Orbs
      glowingOrbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < 0 || orb.x + orb.radius > width) orb.vx *= -1;
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > height) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, ${orb.alpha})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dust particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulse) * 0.15;
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        const mouseEffect = dist < 180 ? (1 - dist / 180) * 0.5 : 0;

        ctx.fillStyle = `rgba(0, 240, 255, ${Math.min(1, Math.max(0, currentAlpha + mouseEffect))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + (mouseEffect > 0 ? 1 : 0), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default BackgroundCanvas;
