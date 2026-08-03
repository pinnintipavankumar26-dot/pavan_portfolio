'use client';

import { motion } from 'framer-motion';
import { CONTACT_DATA } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const CONTACT_CARDS = [
    {
      title: 'Email Direct',
      value: CONTACT_DATA.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_DATA.email}&su=Portfolio%20Contact`,
      icon: Mail,
      color: 'text-cyan-400',
    },
    {
      title: 'LinkedIn Network',
      value: 'Pinninti Pavan Kumar',
      href: CONTACT_DATA.linkedin,
      icon: LinkedinIcon,
      color: 'text-sky-400',
    },
    {
      title: 'GitHub Profile',
      value: 'pinnintipavankumar26-dot',
      href: CONTACT_DATA.github,
      icon: GithubIcon,
      color: 'text-blue-400',
    },
    {
      title: 'Phone Contact',
      value: CONTACT_DATA.phone,
      href: `tel:${CONTACT_DATA.phone}`,
      icon: Phone,
      color: 'text-cyan-400',
    },
    {
      title: 'Location',
      value: CONTACT_DATA.location,
      href: '#',
      icon: MapPin,
      color: 'text-sky-400',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-white/5 border border-cyan-400/20 px-3.5 py-1.5 rounded-full shadow-glow">
            Establish Link
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Contact <span className="gradient-blue-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Master Glass Box */}
        <div className="vercel-glass rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-5xl mx-auto mb-12 relative overflow-hidden">
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            I am open to discussing software engineering roles, academic collaborations, AI research projects, and tech innovations. Connect with me through any channel below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACT_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all group flex flex-col items-center text-center shadow-vercel"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 ${card.color} mb-4 group-hover:scale-110 transition-all`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {card.title}
                  </h3>

                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all">
                    {card.value}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
