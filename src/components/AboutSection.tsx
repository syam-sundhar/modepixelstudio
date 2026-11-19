import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Camera, Palette, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      icon: Eye,
      title: 'Art Direction First',
      text: 'AI tools alone do not understand fashion attitude, drape, or brand narrative. Every campaign is guided by human creative direction, deliberate composition, and European editorial styling.',
    },
    {
      icon: ShieldCheck,
      title: 'Garment Fidelity',
      text: 'We never permit generative hallucination to distort your physical products. Logos, seam paths, ribbing, and fabric weight are rigorously matched against client references.',
    },
    {
      icon: Camera,
      title: 'Cinematic Lighting',
      text: 'We recreate 35mm and medium-format lens characteristics — from shallow depth of field to authentic chromatic falloff and natural chiaroscuro highlights.',
    },
    {
      icon: Palette,
      title: 'Master Retouching',
      text: 'Raw generative outputs are meticulously color-graded and cleaned in post-production, guaranteeing output ready for digital lookbooks and billboard print.',
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDIO MANIFESTO</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            BUILT AROUND THE ART<br />
            <span className="italic font-light">OF VISUAL STORYTELLING.</span>
          </h2>
        </div>

        {/* Studio Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7 space-y-5 text-[#d5d5e0] font-sans text-base sm:text-lg font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">{AGENCY_CONFIG.name}</strong> is an independent creative production studio founded on a singular principle: high-fashion editorial imagery should not be gatekept by six-figure photoshoot budgets.
            </p>
            <p className="text-[#9b9ba3]">
              We sit at the intersection of emerging generative diffusion models, rigorous art direction, and meticulous product preservation. Rather than treating AI as an automated gimmick, we wield it like a virtual digital studio — with full control over camera focal lengths, specular rim kickers, environmental atmospheres, and model styling.
            </p>
            <p className="text-[#9b9ba3]">
              Whether working with an emerging streetwear label dropping twenty oversized graphic tees or an artisanal botanical fragrance brand launching its signature extract, our mission is to craft commercial photography that commands attention and respects the garment.
            </p>

            <div className="pt-4 flex items-center space-x-4 font-mono text-xs text-[#71717a]">
              <span>LEAD ART DIRECTOR:</span>
              <span className="text-white font-medium">{AGENCY_CONFIG.founder}</span>
              <span>·</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase block mb-3">
                OUR COMMITMENT
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-4">
                "NO STOCK SAMPLES. NO HALLUCINATED LOGOS. JUST PURE PRODUCT STORYTELLING."
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] leading-relaxed">
                Every project we release is calibrated to commercial standards. If an AI artifact threatens garment accuracy, it is eliminated in our post-production grading pipeline before client delivery.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-[#71717a]">
              <span>COMMERCIAL LICENSING</span>
              <span className="text-[#d4ff00]">FULL USAGE INCLUDED</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craft Grid with Smooth Eased Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.035] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d4ff00] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-medium text-base text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9b9ba3] leading-relaxed">
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
