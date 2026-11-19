import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, Zap, ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      icon: Layers,
      title: 'Visual Consistency',
      summary: 'Maintain a coherent product identity across every single image angle and campaign season.',
      description: 'Traditional multi-day photoshoots often battle shifting sunlight, varying camera sensor profiles, and fatigue. Our computational pipeline ensures exact garment colors, logos, and shadow falloffs remain synchronized across your website, lookbook, and paid advertisements.',
    },
    {
      number: '02',
      icon: Compass,
      title: 'Creative Flexibility',
      summary: 'Freely explore diverse locations, international architectures, and model styling without logistical overhead.',
      description: 'Test your new collection against minimalist Scandinavian concrete, sunny Parisian cobblestones, or neon-lit Tokyo avenues. Shift model demographics, lighting moods, and seasonal backgrounds without booking international travel or physical studio days.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Efficient Production',
      summary: 'Deploy complete campaign lookbooks in days rather than waiting 4 to 6 weeks for physical shoot coordination.',
      description: 'Traditional fashion shoots require booking photographers, hair & makeup artists, models, lighting grips, studio rentals, and location permits. We collapse the timeline into 3 to 5 business days, letting you react to fast fashion trends and flash drops.',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Product-Focused Execution',
      summary: 'Preserve your actual product’s graphics, collar ribs, seams, and fabric weave as closely as possible.',
      description: 'A beautiful AI image that changes the garment is commercially useless. We calibrate output against your real physical sample: typography kerning, chest embroidery dimensions, and textile drape are protected with relentless quality control.',
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-[#d4ff00] uppercase block mb-4">
            // EDITORIAL INTEGRITY & COMMERCIAL REALISM
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            MORE THAN AN IMAGE.<br />
            <span className="italic font-light">A BETTER WAY TO PRESENT YOUR PRODUCT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#9b9ba3] font-light max-w-2xl leading-relaxed">
            We don’t make synthetic promises or fabricate metrics. We solve the tangible creative bottlenecks facing contemporary fashion and product brands.
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
                className="relative p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#d4ff00]/40 hover:bg-white/[0.035] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold tracking-widest text-[#d4ff00]">
                      PILLAR // {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-[#f7f7f5] font-normal mb-3 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                  <span>MODEPIXEL STANDARD</span>
                  <span className="text-white/60 group-hover:text-[#d4ff00] transition-colors duration-240">VERIFIED WORKFLOW</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent Honesty Banner */}
        <div className="mt-14 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs text-[#a1a1aa] leading-relaxed">
            <span className="text-[#d4ff00] font-semibold">// TRANSPARENCY NOTICE: </span>
            We do not promise synthetic perfection or guaranteed business outcomes. We deliver disciplined art direction, accurate product references, and campaign-ready photography tailored to your brand’s commercial goals.
          </p>
        </div>

      </div>
    </section>
  );
};
