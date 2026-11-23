import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Camera, Palette, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: Eye,
      title: 'Art Direction First',
      text: 'Human creative vision, lighting design, and editorial model styling guide every shot.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hallucinations',
      text: 'Logos, graphics, seams, and fabric texture remain strictly calibrated to your physical sample.',
    },
    {
      icon: Camera,
      title: 'Cinematic Optics',
      text: 'Simulated 35mm lens depth of field, natural chiaroscuro highlights, and authentic grain.',
    },
    {
      icon: Palette,
      title: 'Master Retouching',
      text: 'Color-graded and retouched in post-production, ready for web lookbooks and billboard print.',
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 md:py-28 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-xs tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDIO MANIFESTO</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            CREATIVE DIRECTION<br />
            <span className="italic font-light">MEETS AI PRODUCTION.</span>
          </h2>
        </div>

        {/* Studio Editorial Narrative - Tight & Punchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-14 md:mb-16">
          <div className="lg:col-span-7 space-y-4 text-[#d5d5e0] font-sans text-base sm:text-lg font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">{AGENCY_CONFIG.name}</strong> is an independent studio producing high-fashion campaign imagery for contemporary apparel and product brands.
            </p>
            <p className="text-[#9b9ba3]">
              We replace complex photoshoot logistics with precision AI production. By controlling lighting architecture, lens optics, and model styling, we turn ordinary product references into luxury lookbooks.
            </p>

            <div className="pt-3 flex items-center space-x-4 font-mono text-xs text-[#71717a]">
              <span>CREATIVE LEAD:</span>
              <span className="text-white font-medium">{AGENCY_CONFIG.founder}</span>
              <span>·</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Right Trust Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0c0c10] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase block mb-2">
                THE STANDARD
              </span>
              <h3 className="font-editorial text-2xl text-white mb-3">
                "NO STOCK SAMPLES. NO DISTORTED LOGOS. 100% PRODUCT FIDELITY."
              </h3>
              <p className="font-sans text-xs text-[#9b9ba3] leading-relaxed">
                If an image does not faithfully represent your physical garment, it does not leave our studio.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-[#71717a]">
              <span>COMMERCIAL LICENSE</span>
              <span className="text-[#d4ff00]">FULL USAGE INCLUDED</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craft Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.035] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d4ff00] mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-medium text-sm sm:text-base text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9b9ba3] leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
