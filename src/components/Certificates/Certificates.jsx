import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { certificatesData } from '../../data/certificates';

const Certificates = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const filters = [
    { id: 'all', label: 'All', icon: 'FaLayerGroup' },
    { id: 'aiml', label: 'AI & Machine Learning', icon: 'FaBrain' },
    { id: 'python', label: 'Python', icon: 'FaPython' },
    { id: 'matlab', label: 'MATLAB', icon: 'FaWaveSquare' },
    { id: 'nptel', label: 'NPTEL', icon: 'FaAward' },
    { id: 'coursera', label: 'Coursera', icon: 'FaGraduationCap' },
  ];

  const filteredCerts = filter === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category.includes(filter));

  return (
    <section id="certifications" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">Verified Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mt-2">
            Certifications & <span className="text-accent-cyan">Training</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => {
            const Icon = Icons[f.icon];
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-accent-cyan text-black shadow-glow' 
                    : 'bg-navy-800 text-slate-300 border border-white/10 hover:bg-navy-700 hover:border-accent-cyan/50'
                }`}
              >
                {Icon && <Icon />} {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map(cert => {
              const BadgeIcon = Icons[cert.badgeIcon];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cert.id}
                  className="bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:shadow-glass hover:border-accent-cyan/30 transition-all"
                >
                  <div className="relative h-48 overflow-hidden bg-navy-900 flex items-center justify-center p-4">
                    <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain z-10 transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
                      <button 
                        onClick={() => setSelectedCert(cert)}
                        className="w-12 h-12 bg-accent-cyan text-black rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"
                      >
                        <Icons.FaExpand />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full text-xs font-bold text-accent-cyan flex items-center gap-2">
                      {BadgeIcon && <BadgeIcon />} {cert.badgeLabel}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.tags.map((tag, i) => (
                        <span key={i} className={`text-xs font-semibold px-2 py-1 rounded ${
                          tag.type === 'aiml' ? 'bg-purple-500/20 text-purple-400' :
                          tag.type === 'python' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-accent-blue/20 text-accent-sky'
                        }`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">{cert.title}</h3>
                    
                    <div className="mt-auto space-y-2 text-sm text-slate-400">
                      <p className="flex items-center gap-2"><Icons.FaBuilding className="text-slate-500" /> {cert.issuer}</p>
                      <p className="flex items-center gap-2"><Icons.FaCalendarAlt className="text-slate-500" /> {cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-900 border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h3 className="text-white font-bold truncate pr-4">{selectedCert.title}</h3>
                <button onClick={() => setSelectedCert(null)} className="text-slate-400 hover:text-white transition-colors">
                  <Icons.FaTimes size={20} />
                </button>
              </div>
              <div className="p-4 bg-black/50 flex items-center justify-center min-h-[50vh]">
                <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-[70vh] object-contain" />
              </div>
              <div className="p-4 border-t border-white/10 flex justify-end">
                <a 
                  href={selectedCert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent-blue text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Icons.FaExternalLinkAlt /> Open High-Res Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
