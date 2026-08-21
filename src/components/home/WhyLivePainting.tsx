import React from 'react';
import { Eye, Brush, Gem, HeartHandshake } from 'lucide-react';

export const WhyLivePainting: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'LIVE EXPERIENCE',
      description: 'Your special moments are painted live during your celebration, offering interactive entertainment for guests as art comes alive.',
    },
    {
      icon: Brush,
      title: 'HANDCRAFTED ARTWORK',
      description: 'Every painting is individually created with artistic attention to detail using master-grade acrylic colours on archival canvas.',
    },
    {
      icon: Gem,
      title: 'TIMELESS KEEPSAKE',
      description: 'A unique luxury artwork that preserves your special memories and heirloom heritage for generations to come.',
    },
    {
      icon: HeartHandshake,
      title: 'PERSONALIZED',
      description: 'Every artwork captures the couple, venue architecture, ambient lighting, and rich emotion of your wedding day.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A090B] via-[#121115] to-[#0A090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
            The Bespoke Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
            More Than a Painting. <br />
            <span className="gold-gradient-text italic font-serif font-normal">
              A Memory Made Live.
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="luxury-card p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#3B0918]/60 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0A090B] transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-heading text-sm font-bold tracking-widest text-[#F7E7C4] uppercase mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span className="font-serif italic">Bespoke Detail</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
