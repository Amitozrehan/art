import React from 'react';
import { Sparkles } from 'lucide-react';

export const PackagesHeader: React.FC = () => {
  return (
    <section className="pt-28 md:pt-36 pb-12 bg-gradient-to-b from-[#0A090B] via-[#1C030A] to-[#0A090B] text-center border-b border-[#D4AF37]/15 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A0510] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Live Painting Offerings</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF6F0]">
          The <span className="gold-gradient-text italic font-serif font-normal">Experience</span>
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl text-[#F7E7C4] max-w-2xl mx-auto">
          “Thoughtfully designed experiences for unforgettable celebrations.”
        </p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-2" />
      </div>
    </section>
  );
};
