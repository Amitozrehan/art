import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 bg-[#1C030A] relative overflow-hidden border-t border-[#D4AF37]/30">
      {/* Background Decorative Gold Grid Lines & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Crown Icon / Crest Sparkle */}
        <div className="w-14 h-14 mx-auto rounded-full bg-[#2A0510] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-xl">
          <Sparkles className="w-7 h-7" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF6F0] leading-tight">
          Your Story Deserves <br />
          <span className="gold-gradient-text italic font-serif font-normal">
            to Be Painted.
          </span>
        </h2>

        {/* Subtext */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#F7E7C4] max-w-2xl mx-auto font-normal">
          “Let’s turn one unforgettable moment into a work of art you can keep forever.”
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={() => onNavigate('book')}
            className="luxury-button-primary text-sm sm:text-base py-4 px-10 inline-flex items-center gap-3 group shadow-2xl"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>BOOK YOUR DATE</span>
          </button>
        </div>

        <p className="text-xs text-[#FAF6F0]/60 font-sans tracking-widest uppercase pt-4">
          Limited Live Event Availability Per Season • Worldwide Commissions
        </p>
      </div>
    </section>
  );
};
