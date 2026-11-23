import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, Zap, ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      icon: ShieldCheck,
      title: 'Garment Fidelity',
      description: 'Your actual product graphics, typography, seams, and fabric weave are preserved with precision from your physical reference.',
      stat: '100% PRODUCT ACCURATE'
    },
    {
      number: '02',
      icon: Compass,
      title: 'Global Environments',
      description: 'Place your collection in European cobblestone avenues, minimalist concrete lofts, or golden hour streets without travel logistics.',
      stat: 'ON-LOCATION AESTHETICS'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Rapid Turnaround',
      description: 'Receive campaign-ready lookbooks in 3–5 business days, ready for immediate digital drops and marketing rollouts.',
      stat: '3–5 DAY DELIVERY'
    },
    {
      number: '04',
      icon: Layers,
      title: 'Full Commercial Rights',
      description: 'Unrestricted global usage included across e-commerce, lookbooks, paid media advertising, and large-format print.',
      stat: 'UNRESTRICTED LICENSE'
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-20 md:py-28 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header - Editorial & Crisp */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#d4ff00] uppercase block mb-3">
            // WHY MODEPIXEL
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            BUILT FOR COMMERCIAL<br />
            <span className="italic font-light">PRECISION & TRUST.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#9b9ba3] font-light max-w-xl leading-relaxed">
            Eliminate traditional photoshoot overhead while preserving 100% product fidelity.
          </p>
        </div>

        {/* 4 Pillars Grid with Fluid Eased Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#d4ff00]/40 hover:bg-white/[0.035] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold tracking-widest text-[#d4ff00]">
                      // {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-[#9b9ba3] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                  <span>STANDARD</span>
                  <span className="text-[#d4ff00] font-medium">{pillar.stat}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Trust Strip */}
        <div className="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00]" />
            <p className="font-mono text-xs text-[#a1a1aa]">
              COMMERCIAL GUARANTEE: Real physical references only. Zero generic stock photography.
            </p>
          </div>
          <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">
            VERIFIED PRODUCTION PIPELINE
          </span>
        </div>

      </div>
    </section>
  );
};
