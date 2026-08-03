'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES_DATA } from '@/lib/data';
import { CertificateItem } from '@/types';
import { Award, Brain, FileCode2, Activity, GraduationCap, Layers, Maximize2, ExternalLink, X } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'aiml', label: 'AI & Machine Learning', icon: Brain },
  { id: 'python', label: 'Python', icon: FileCode2 },
  { id: 'matlab', label: 'MATLAB', icon: Activity },
  { id: 'nptel', label: 'NPTEL', icon: Award },
  { id: 'coursera', label: 'Coursera', icon: GraduationCap },
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = CERTIFICATES_DATA.filter((cert) =>
    activeFilter === 'all' ? true : cert.category.includes(activeFilter)
  );

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Certifications & <span className="gradient-blue-text">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-black shadow-glow'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/30 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid (3 Cards Per Row Desktop) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="vercel-glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Hover Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="p-3 rounded-xl bg-white/20 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                      title="Quick Preview"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                    <a
                      href={cert.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/20 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                      title="Open Image"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/70 border border-white/20 text-cyan-400 text-xs font-bold backdrop-blur-md">
                    {cert.tagLabel}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-sky-400 font-semibold mb-4">{cert.year}</p>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    View Certificate
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-vercel relative"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white pr-8">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-6 overflow-y-auto flex items-center justify-center bg-[#050505] min-h-[400px]">
                <div className="relative w-full h-[60vh]">
                  <Image
                    src={selectedCert.imageSrc}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 flex justify-end gap-3 bg-[#0a0a0a]">
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-bold text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open High-Res Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
