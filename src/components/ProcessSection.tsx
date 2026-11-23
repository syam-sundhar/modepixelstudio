import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, CLIENT_CHECKLIST } from '../data/processData';
import { CheckSquare, Square, Clock, ChevronRight, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    4: true,
  });

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="process" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#d4ff00] uppercase block mb-3">
            // SIMPLE WORKFLOW
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            HOW IT WORKS.<br />
            <span className="italic font-light">FOUR STEPS TO DELIVERY.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#9b9ba3] font-light max-w-xl leading-relaxed">
            From product references to uncompressed master assets in 3–5 business days.
          </p>
        </div>

        {/* 4-Step Connected Animated Timeline with Refined Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16 md:mb-20">
          
          {/* Horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-white/[0.08] z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 p-6 sm:p-7 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-white/[0.05] border-[#d4ff00] shadow-[0_4px_28px_rgba(212,255,0,0.14)]'
                    : 'bg-[#0b0b0f] border-white/[0.07] hover:border-white/20 hover:bg-[#0e0e14]'
                }`}
              >
                <div>
                  {/* Step Number & Timeline Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center font-mono font-bold text-sm transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isSelected
                        ? 'bg-[#d4ff00] border-[#d4ff00] text-black shadow-[0_0_12px_rgba(212,255,0,0.4)]'
                        : 'bg-[#08080a] border-white/20 text-[#a1a1aa]'
                    }`}>
                      {step.number}
                    </div>

                    <div className="flex items-center space-x-1 font-mono text-[10px] text-[#71717a] px-2.5 py-1 rounded bg-white/[0.03]">
                      <Clock className="w-3 h-3 text-[#d4ff00]" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] leading-relaxed mb-6 font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] text-[#71717a] uppercase block mb-2">
                    KEY MILESTONE:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-1.5 text-[11px] text-[#d5d5e0]">
                        <Check className="w-3 h-3 text-[#d4ff00] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Product Image Intake Checklist */}
        <div className="p-7 md:p-10 rounded-2xl bg-[#0d0d12] border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase block mb-1">
                // WHAT TO PROVIDE
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white">
                CLIENT ASSET CHECKLIST
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] max-w-lg mt-1.5 font-light">
                Clean smartphone photos against good lighting are sufficient to initiate production.
              </p>
            </div>

            <a
              href="#enquiry"
              className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#d4ff00] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap self-start lg:self-auto flex items-center space-x-2"
            >
              <span>SUBMIT PRODUCT ASSETS</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            {CLIENT_CHECKLIST.map((item, index) => {
              const isChecked = !!checkedItems[index];

              return (
                <div
                  key={index}
                  onClick={() => toggleCheck(index)}
                  className={`p-4 rounded-xl border transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex items-start space-x-3 select-none ${
                    isChecked
                      ? 'bg-white/[0.035] border-white/20'
                      : 'bg-transparent border-white/[0.06] opacity-70 hover:opacity-100 hover:border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 text-[#d4ff00] focus:outline-none"
                    aria-label="Toggle Check"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-[#d4ff00]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#71717a]" />
                    )}
                  </button>

                  <div className="flex flex-col">
                    <span className="font-sans text-xs sm:text-sm text-[#f7f7f5] leading-snug">
                      {item.item}
                    </span>
                    <span className="font-mono text-[10px] text-[#71717a] mt-1">
                      {item.required ? (
                        <span className="text-[#d4ff00]">REQUIRED FOR PRODUCTION</span>
                      ) : (
                        'RECOMMENDED / OPTIONAL'
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
