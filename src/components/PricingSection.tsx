import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/pricingData';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT COMMERCIAL PACKAGES</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            SIMPLE PACKAGES.<br />
            <span className="italic font-light">NO HIDDEN CREW SURCHARGES.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#9b9ba3] font-light max-w-2xl leading-relaxed">
            Direct pricing for emerging fashion labels and independent brands. Clear deliverables, included revisions, and unconditional commercial usage rights.
          </p>
        </div>

        {/* Pricing Cards Grid with Silky Eased Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
                  tier.isPopular
                    ? 'bg-[#0e0e15] border-2 border-[#d4ff00] shadow-[0_4px_36px_rgba(212,255,0,0.14)] md:-translate-y-1'
                    : 'bg-[#0a0a0e] border border-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4ff00] text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                    RECOMMENDED COLLECTION
                  </div>
                )}

                <div>
                  {/* Tier Title & Price */}
                  <div className="mb-6">
                    <span className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase block mb-1">
                      {tier.name}
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-editorial text-4xl sm:text-5xl text-white">
                        {tier.price}
                      </span>
                      <span className="font-mono text-xs text-[#71717a]">
                        / project
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#9b9ba3] font-light mb-6 min-h-[36px]">
                    {tier.idealFor}
                  </p>

                  {/* Highlights Bar */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-6 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#d4ff00] font-semibold">{tier.imagesCount}</span>
                    <span className="text-[#a1a1aa]">{tier.turnaround}</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-[#c5c5d0]">
                        <Check className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Package Button with Fluid Elevation */}
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center space-x-2 hover:-translate-y-0.5 active:translate-y-0 ${
                    tier.isPopular
                      ? 'bg-[#d4ff00] hover:bg-white text-black shadow-lg shadow-[#d4ff00]/20'
                      : 'bg-white/[0.06] hover:bg-white text-white hover:text-black border border-white/10'
                  }`}
                >
                  <span>SELECT {tier.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Commercial Payment Terms Note */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-[#71717a] max-w-xl mx-auto leading-relaxed">
            Standard Terms: 50% advance upon creative brief sign-off, 50% upon final delivery of unwatermarked, high-resolution master files. Custom high-volume monthly content retainer packages available on request.
          </p>
        </div>

      </div>
    </section>
  );
};
