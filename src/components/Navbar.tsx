import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';
import logoSymbol from '../assets/Logo.png';
import brandWordmark from '../assets/name.png';
import { smoothScrollTo } from '../utils/smoothScroll';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'SERVICES', href: '#services' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'PROCESS', href: '#process' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'ABOUT', href: '#about' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    smoothScrollTo(href, { duration: 900, offset: 72 });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'py-3 bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'py-5 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Official Modepixel Symbol (Logo.png) + Wordmark (name.png) */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="group flex items-center space-x-2.5 sm:space-x-3 transition-opacity duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-85 select-none"
            aria-label="MODEPIXEL Home"
          >
            {/* Symbol: Logo.png */}
            <img
              src={logoSymbol}
              alt="MODEPIXEL Symbol"
              className="h-8 sm:h-8.5 md:h-9 w-auto object-contain flex-shrink-0"
              loading="eager"
            />
            {/* Wordmark: name.png */}
            <img
              src={brandWordmark}
              alt="MODEPIXEL"
              className="h-3.5 sm:h-4 md:h-4.5 w-auto object-contain flex-shrink-0"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Links with Smooth Easing */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative font-mono text-[11px] tracking-[0.18em] text-[#9b9ba3] hover:text-white transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4ff00] transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Live Commissions Status & CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            {/* Live Studio Status */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-[#a1a1aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              <span className="tracking-wider">COMMISSIONS OPEN</span>
            </div>

            {/* Primary Action Button with Refined Hover */}
            <a
              href="#enquiry"
              onClick={(e) => {
                if (onOpenEnquiry) {
                  e.preventDefault();
                  onOpenEnquiry();
                } else {
                  handleScrollTo(e, '#enquiry');
                }
              }}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#d4ff00]/60 bg-transparent text-white font-mono text-[11px] tracking-wider uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#d4ff00] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(212,255,0,0.22)] active:translate-y-0"
            >
              <span className="absolute inset-0 bg-[#d4ff00] translate-y-full group-hover:translate-y-0 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center space-x-1.5 group-hover:text-black transition-colors duration-240 font-medium">
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#d4ff00] transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#08080a]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2.5 pb-4 border-b border-white/[0.08]">
                <img
                  src={logoSymbol}
                  alt="MODEPIXEL Symbol"
                  className="h-8 w-auto object-contain"
                />
                <img
                  src={brandWordmark}
                  alt="MODEPIXEL"
                  className="h-4 w-auto object-contain"
                />
              </div>

              <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase pt-2">
                // NAVIGATION
              </span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-editorial text-3xl sm:text-4xl text-[#f7f7f5] hover:text-[#d4ff00] transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/[0.08] flex flex-col space-y-4">
              <a
                href="#enquiry"
                onClick={(e) => handleScrollTo(e, '#enquiry')}
                className="w-full py-4 text-center rounded-full bg-[#d4ff00] text-black font-mono text-xs font-semibold tracking-wider uppercase active:scale-[0.98] transition-transform"
              >
                START A PROJECT
              </a>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#71717a] pt-2">
                <span>{AGENCY_CONFIG.founder}</span>
                <a 
                  href={AGENCY_CONFIG.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#d4ff00] transition-colors"
                >
                  {AGENCY_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
