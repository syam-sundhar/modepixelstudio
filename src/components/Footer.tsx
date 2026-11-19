import React from 'react';
import { ArrowUp, Instagram, Mail, MessageSquare } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';
import logoSymbol from '../assets/Logo.png';
import brandWordmark from '../assets/name.png';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    smoothScrollTo('#top', { duration: 900, offset: 0 });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, { duration: 900, offset: 72 });
  };

  return (
    <footer className="relative w-full bg-[#050507] border-t border-white/[0.08] text-[#a1a1aa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col space-y-16">
        
        {/* Top Tier: Official Logo + Wordmark, Brand Statement & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-white/[0.06]">
          <div className="max-w-md">
            {/* Official Modepixel Symbol (Logo.png) + Wordmark (name.png) */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-4 select-none">
              <img
                src={logoSymbol}
                alt="MODEPIXEL Symbol"
                className="h-8 md:h-9 w-auto object-contain flex-shrink-0"
                loading="lazy"
              />
              <img
                src={brandWordmark}
                alt="MODEPIXEL"
                className="h-4 md:h-4.5 w-auto object-contain flex-shrink-0"
                loading="lazy"
              />
            </div>

            {/* Short Brand Statement */}
            <p className="font-sans text-xs sm:text-sm text-[#71717a] font-light leading-relaxed">
              {AGENCY_CONFIG.subline}
            </p>
          </div>

          {/* Back to top button with smooth hover */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 font-mono text-xs text-white hover:text-[#d4ff00] transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] p-2.5 px-4 rounded-full border border-white/10 hover:border-[#d4ff00]/50 hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Middle Tier: Minimal Editorial Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs">
          
          {/* Col 1: Portfolio */}
          <div className="flex flex-col space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold">
              PORTFOLIO
            </span>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              T-Shirt Campaign
            </a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Ombré Hoodie Capsule
            </a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Kinetic Footwear
            </a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Botanical Serum Beauty
            </a>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold">
              SERVICES
            </span>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              AI Fashion Photography
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Product Photography
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Lifestyle Campaigns
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Creative Advertising
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              E-Commerce Catalogues
            </a>
          </div>

          {/* Col 3: About & Process */}
          <div className="flex flex-col space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold">
              STUDIO
            </span>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Manifesto & Philosophy
            </a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Why Work With Us
            </a>
            <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Four-Step Workflow
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]">
              Pricing Packages
            </a>
          </div>

          {/* Col 4: Verified Contact Channels */}
          <div className="flex flex-col space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold">
              CHANNELS
            </span>
            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center space-x-2"
              title="Send email to ModePixel"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
              <span className="break-all sm:break-normal">{AGENCY_CONFIG.email}</span>
            </a>
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#71717a] hover:text-[#25D366] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center space-x-2"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href={AGENCY_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#71717a] hover:text-[#E1306C] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center space-x-2"
              title="Visit Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>{AGENCY_CONFIG.instagramHandle}</span>
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#525260] gap-4">
          <p>
            © {new Date().getFullYear()} {AGENCY_CONFIG.name} STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-4">
            <span>INDEPENDENT AI FASHION & CREATIVE PRODUCTION</span>
            <span>·</span>
            <span>LED BY {AGENCY_CONFIG.founder.toUpperCase()}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
