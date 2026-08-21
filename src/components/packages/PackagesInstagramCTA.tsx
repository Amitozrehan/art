import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../InstagramIcon';
import { INSTAGRAM_CONFIG, openInstagram } from '../../utils/instagram';

export const PackagesInstagramCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#121115] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Radial Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Instagram Crest */}
        <div className="w-14 h-14 mx-auto rounded-full bg-[#2A0510] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-xl">
          <InstagramIcon className="w-7 h-7" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
          Inspired by <span className="gold-gradient-text italic font-serif font-normal">Real Celebrations</span>
        </h2>

        {/* Text */}
        <p className="font-serif italic text-base sm:text-xl text-[#F7E7C4] max-w-2xl mx-auto leading-relaxed">
          “Explore more live wedding paintings, portraits and behind-the-scenes moments on Instagram.”
        </p>

        {/* Handle Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#D4AF37] font-semibold tracking-widest font-sans">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>{INSTAGRAM_CONFIG.USERNAME}</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>

        {/* Button */}
        <div className="pt-2">
          <button
            onClick={() => openInstagram()}
            className="luxury-button-primary text-xs sm:text-sm py-4 px-8 inline-flex items-center justify-center gap-2 shadow-2xl group min-h-[44px]"
            aria-label="Explore Arsh Dhiman Art on Instagram"
          >
            <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>EXPLORE INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
