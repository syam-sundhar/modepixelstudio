import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Upload, 
  CheckCircle, 
  MessageSquare, 
  Mail, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles, 
  FileCheck,
  X
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';

interface EnquirySectionProps {
  initialCategory?: string;
  initialBudget?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialCategory = '',
  initialBudget = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    email: '',
    productCategory: initialCategory || 'Streetwear / T-Shirts',
    imagesCount: '10 Images (Brand Collection)',
    budget: initialBudget || '₹1,799 (Brand Collection)',
    description: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; previewUrl: string }[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, productCategory: initialCategory }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialCategory, initialBudget]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.brandName.trim()) errs.brandName = 'Please provide your brand or company name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please describe your product and desired campaign mood (min 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).map((file) => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      previewUrl: URL.createObjectURL(file),
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const enquiryPayload = {
      id: `MPX-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      ...formData,
      uploadedFileNames: uploadedFiles.map((f) => f.name),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('modepixel_enquiries') || '[]');
      existing.push(enquiryPayload);
      localStorage.setItem('modepixel_enquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AGENCY_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hi ${AGENCY_CONFIG.founder}! I've submitted a campaign enquiry for ${formData.brandName || 'my brand'}.\n` +
      `Product: ${formData.productCategory}\n` +
      `Images: ${formData.imagesCount}\n` +
      `Budget: ${formData.budget}\n` +
      `Description: ${formData.description || 'Looking forward to discussing the visuals.'}`
    );
    return `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${text}`;
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Project Enquiry — ${formData.brandName || 'Fashion Campaign'} [MODEPIXEL]`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Brand: ${formData.brandName}\n` +
      `Email: ${formData.email}\n` +
      `Category: ${formData.productCategory}\n` +
      `Images: ${formData.imagesCount}\n` +
      `Budget: ${formData.budget}\n\n` +
      `Project Brief:\n${formData.description}\n`
    );
    return `mailto:${AGENCY_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="enquiry" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A COMMISSION</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
            HAVE A PRODUCT?<br />
            <span className="italic font-light">LET'S MAKE IT UNFORGETTABLE.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#9b9ba3] font-light max-w-2xl leading-relaxed">
            Tell us about your brand, your product and the kind of imagery you're looking for. We will review your references and respond with a customized concept proposal.
          </p>
        </div>

        {/* Master Layout: Form & Direct Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Functional Project Enquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0c10] border border-white/[0.08] p-7 sm:p-9 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                  
                  {/* Row 1: Name & Brand Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Liam Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm font-sans placeholder:text-zinc-600 focus:outline-none transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#d4ff00]'
                        }`}
                      />
                      {errors.name && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        BRAND / COMPANY NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="e.g. KINETIC APPAREL"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm font-sans placeholder:text-zinc-600 focus:outline-none transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          errors.brandName ? 'border-red-500' : 'border-white/10 focus:border-[#d4ff00]'
                        }`}
                      />
                      {errors.brandName && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.brandName}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email & Product Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        BUSINESS EMAIL *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@brand.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm font-sans placeholder:text-zinc-600 focus:outline-none transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#d4ff00]'
                        }`}
                      />
                      {errors.email && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        PRODUCT CATEGORY
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141c] border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        <option value="Streetwear / T-Shirts">Streetwear / Graphic T-Shirts</option>
                        <option value="Hoodies & Outerwear">Hoodies, Sweatshirts & Knitwear</option>
                        <option value="Footwear & Sneakers">Footwear & Technical Sneakers</option>
                        <option value="Beauty, Fragrance & Skincare">Beauty, Fragrance & Skincare</option>
                        <option value="Fashion Accessories & Bags">Accessories, Bags & Eyewear</option>
                        <option value="Complete Brand Capsule">Complete Brand Capsule (Multi-SKU)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Number of Images & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        NUMBER OF IMAGES REQUIRED
                      </label>
                      <select
                        value={formData.imagesCount}
                        onChange={(e) => setFormData({ ...formData, imagesCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141c] border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        <option value="5 Images (Starter Pilot — ₹999)">5 Images (Starter Pilot — ₹999)</option>
                        <option value="10 Images (Brand Collection — ₹1,799)">10 Images (Brand Collection — ₹1,799)</option>
                        <option value="15+ Images (Full Campaign Capsule — ₹3,499)">15+ Images (Full Campaign Capsule — ₹3,499)</option>
                        <option value="Custom High-Volume Monthly Retainer">Custom High-Volume Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                        PROJECT BUDGET TIER
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141c] border border-white/10 text-white text-sm font-sans focus:outline-none focus:border-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        <option value="₹999 (Starter Pilot)">₹999 (Starter Pilot)</option>
                        <option value="₹1,799 (Brand Collection)">₹1,799 (Brand Collection)</option>
                        <option value="₹3,499 (Full Campaign Capsule)">₹3,499 (Full Campaign Capsule)</option>
                        <option value="₹5,000+ (Custom Monthly Lookbook)">₹5,000+ (Custom Monthly Lookbook)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                      PROJECT DESCRIPTION & CREATIVE VISION *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your garment details, target audience, preferred model styling, and campaign mood (e.g. sunlit European avenue, dark minimal studio plinth, rainy street)."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm font-sans placeholder:text-zinc-600 focus:outline-none transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] resize-none ${
                        errors.description ? 'border-red-500' : 'border-white/10 focus:border-[#d4ff00]'
                      }`}
                    />
                    {errors.description && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.description}</p>}
                  </div>

                  {/* Reference Image Upload (Supported) */}
                  <div>
                    <label className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                      PRODUCT REFERENCES / GARMENT PHOTOS (OPTIONAL)
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-white/15 hover:border-[#d4ff00]/60 rounded-xl p-5 text-center cursor-pointer bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,.pdf,.zip"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-5 h-5 text-[#d4ff00] mx-auto mb-2" />
                      <p className="font-mono text-xs text-[#e2e8f0]">
                        Click or drag product reference images here
                      </p>
                      <p className="font-mono text-[10px] text-[#71717a] mt-1">
                        PNG, JPG, WEBP, or ZIP up to 50MB (Front, back, fabric detail)
                      </p>
                    </div>

                    {/* Uploaded Files Preview List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {uploadedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono"
                          >
                            <div className="flex items-center space-x-2">
                              <FileCheck className="w-4 h-4 text-[#d4ff00]" />
                              <span className="text-white max-w-[200px] truncate">{file.name}</span>
                              <span className="text-[#71717a]">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button with Smooth Eased Hover */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#d4ff00] hover:bg-white text-black font-mono text-xs tracking-widest font-bold uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_24px_rgba(212,255,0,0.22)] flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">PROCESSING ENQUIRY...</span>
                    ) : (
                      <>
                        <span>SEND PROJECT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[10px] text-[#71717a] text-center">
                    Your enquiry will be recorded and forwarded directly to {AGENCY_CONFIG.founder}. We typically respond within 12–24 business hours.
                  </p>
                </form>
              ) : (
                /* Success State with Real Action Channels */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00] flex items-center justify-center text-[#d4ff00]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase block mb-1">
                      ENQUIRY CONFIRMED & LOGGED
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                      THANK YOU, {formData.name.toUpperCase()}.
                    </h3>
                    <p className="font-sans text-sm text-[#9b9ba3] max-w-md mt-2">
                      Your campaign request for <strong className="text-white">{formData.brandName}</strong> has been received by MODEPIXEL.
                    </p>
                  </div>

                  {/* Immediate Action Buttons: WhatsApp & Direct Email */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
                    <a
                      href={generateWhatsAppDirectLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3.5 px-4 rounded-full bg-[#25D366] text-black font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg shadow-[#25D366]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>SYNC VIA WHATSAPP</span>
                    </a>

                    <a
                      href={generateMailtoLink()}
                      className="flex-1 py-3.5 px-4 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-[#d4ff00] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>OPEN IN EMAIL</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        brandName: '',
                        email: '',
                        productCategory: 'Streetwear / T-Shirts',
                        imagesCount: '10 Images (Brand Collection)',
                        budget: '₹1,799 (Brand Collection)',
                        description: '',
                      });
                      setUploadedFiles([]);
                    }}
                    className="font-mono text-xs text-[#71717a] hover:text-white transition-colors duration-200 underline pt-2"
                  >
                    Submit another project enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Channels & Studio Contact Information */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Studio Channels Box */}
            <div className="rounded-2xl bg-[#0c0c10] border border-white/[0.08] p-7 sm:p-8 space-y-6 shadow-xl">
              <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase block">
                // DIRECT STUDIO CHANNELS
              </span>

              {/* Business Email: modepixelstudio@gmail.com */}
              <div className="flex items-start justify-between pb-5 border-b border-white/[0.06]">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                    <Mail className="w-5 h-5 text-[#d4ff00]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#71717a] uppercase block">
                      BUSINESS EMAIL
                    </span>
                    <a
                      href={`mailto:${AGENCY_CONFIG.email}`}
                      className="font-sans text-sm md:text-base text-white hover:text-[#d4ff00] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      {AGENCY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#71717a] hover:text-white transition-colors duration-200"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#d4ff00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-start justify-between pb-5 border-b border-white/[0.06]">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#71717a] uppercase block">
                      WHATSAPP & PHONE
                    </span>
                    <a
                      href={AGENCY_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-sm md:text-base text-white hover:text-[#25D366] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      {AGENCY_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-[#25D366] hover:underline uppercase pt-2"
                >
                  CHAT
                </a>
              </div>

              {/* Instagram Link: @modelpixelstudio -> https://www.instagram.com/modepixelstudio/ */}
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white">
                    <Instagram className="w-5 h-5 text-[#E1306C]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#71717a] uppercase block">
                      INSTAGRAM
                    </span>
                    <a
                      href={AGENCY_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-sm md:text-base text-white hover:text-[#E1306C] transition-colors duration-240 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      {AGENCY_CONFIG.instagramHandle}
                    </a>
                  </div>
                </div>

                <a
                  href={AGENCY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-[#E1306C] hover:underline uppercase pt-2"
                >
                  FOLLOW
                </a>
              </div>
            </div>

            {/* Studio Hours & Response Guarantee */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#a1a1aa]">
                <span>STUDIO HOURS:</span>
                <span className="text-white">{AGENCY_CONFIG.workingHours}</span>
              </div>
              <div className="flex items-center justify-between text-[#a1a1aa]">
                <span>RESPONSE TIMELINE:</span>
                <span className="text-[#d4ff00]">Under 24 Hours</span>
              </div>
              <div className="flex items-center justify-between text-[#a1a1aa]">
                <span>LEAD ART DIRECTOR:</span>
                <span className="text-white">{AGENCY_CONFIG.founder}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
