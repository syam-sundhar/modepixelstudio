import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const displayService = hoveredService || activeService;

  const handleMouseEnter = (service: ServiceItem) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Smooth hover debounce: allows fluid glide across items without frantic jumping
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredService(service);
    }, 70);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredService(null);
  };

  const handleClickService = (service: ServiceItem) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveService(service);
    setHoveredService(null);
  };

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED CREATIVE CAPABILITIES</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            CREATIVE PRODUCTION,<br />
            <span className="italic font-light">WITHOUT THE TRADITIONAL SHOOT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#9b9ba3] font-light max-w-2xl leading-relaxed">
            Eliminate models casting agency markups, venue permits, bad weather reshoots, and lengthy equipment logistics. We build commercial campaigns directly from your product references.
          </p>
        </div>

        {/* Master Services Layout: Interactive Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Stable, Fluid Service Rows */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5">
            {SERVICES_DATA.map((service) => {
              const isActive = activeService.id === service.id;
              const isHovered = hoveredService?.id === service.id;

              return (
                <motion.div
                  layout
                  key={service.id}
                  onClick={() => handleClickService(service)}
                  onMouseEnter={() => handleMouseEnter(service)}
                  onMouseLeave={handleMouseLeave}
                  transition={{
                    layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className={`group rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border cursor-pointer p-6 sm:p-7 relative overflow-hidden ${
                    isActive
                      ? 'bg-white/[0.04] border-[#d4ff00]/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                      : isHovered
                      ? 'bg-white/[0.025] border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
                      : 'bg-[#0a0a0e]/60 border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 sm:space-x-5">
                      <span className={`font-mono text-xs sm:text-sm font-semibold tracking-widest mt-1 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? 'text-[#d4ff00]' : isHovered ? 'text-white' : 'text-[#71717a]'
                      }`}>
                        {service.number}
                      </span>
                      <div>
                        <h3 className={`font-editorial text-2xl sm:text-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? 'text-white translate-x-1.5'
                            : isHovered
                            ? 'text-white translate-x-1.5'
                            : 'text-[#d5d5e0]'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] mt-2 font-light leading-relaxed max-w-xl">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'bg-[#d4ff00] text-black shadow-[0_0_12px_rgba(212,255,0,0.3)] rotate-45'
                        : isHovered
                        ? 'bg-white/15 text-white scale-105 rotate-45'
                        : 'bg-white/5 text-white/50'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Deliverables when Active */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`content-${service.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
                        }}
                        className="overflow-hidden pt-5 mt-5 border-t border-white/[0.07]"
                      >
                        <p className="font-sans text-xs sm:text-sm text-[#c5c5d0] leading-relaxed mb-4">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-[#a1a1aa]">
                              <Check className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectServiceForEnquiry(service.title);
                          }}
                          className="px-5 py-2.5 rounded-full bg-[#d4ff00] hover:bg-white text-black font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_2px_12px_rgba(212,255,0,0.2)]"
                        >
                          ENQUIRE ABOUT {service.title.toUpperCase()}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Visual with Fluid Crossfade */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="rounded-2xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c0c10]">
                {SERVICES_DATA.map((service) => {
                  const isVisible = displayService.id === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <img
                        src={service.previewImage}
                        alt={service.title}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                    </div>
                  );
                })}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Sticky Preview Meta */}
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase block mb-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    SERVICE // {displayService.number}
                  </span>
                  <h4 className="font-editorial text-2xl text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {displayService.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {displayService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-[#a1a1aa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
