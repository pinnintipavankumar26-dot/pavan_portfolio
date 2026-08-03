'use client';

import { HERO_DATA, CONTACT_DATA } from '@/lib/data';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white tracking-tight">
            Pinninti Pavan <span className="text-cyan-400">Kumar</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            © 2026 {HERO_DATA.name}. All Rights Reserved. Engineered with Vercel Precision.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
          Back to Top
        </button>

      </div>
    </footer>
  );
}
