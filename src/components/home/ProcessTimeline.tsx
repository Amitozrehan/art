import React from 'react';
import { MessageSquare, Package, Paintbrush, Award } from 'lucide-react';

interface ProcessTimelineProps {
  onNavigate: (page: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '01',
      title: 'CONSULTATION',
      description: 'Discuss the wedding, preferred moment (ceremony, first dance, kiss), canvas size, and artistic vision.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'CHOOSE YOUR PACKAGE',
      description: 'Select the experience that best suits your celebration, from intimate package options to bespoke custom canvases.',
      icon: Package,
    },
    {
      number: '03',
      title: 'LIVE PAINTING',
      description: 'Arsh arrives early at your venue to capture architectural elements before painting your moment live in real time.',
      icon: Paintbrush,
    },
    {
      number: '04',
      title: 'YOUR ARTWORK',
      description: 'Receive a museum-ready finished acrylic canvas painting, sealed and delivered to preserve your memory forever.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-[#0A090B] relative border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
            Seamless Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
            How It <span className="gold-gradient-text italic font-serif font-normal">Works</span>
          </h2>
          <p className="text-sm text-[#FAF6F0]/70 font-sans max-w-xl mx-auto font-light">
            From initial consultation to the final brushstroke on your wedding day.
          </p>
        </div>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Gold Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[1px] bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/50 to-[#D4AF37]/10 -translate-y-10 pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-[#121115] border border-[#D4AF37]/25 p-8 rounded-lg flex flex-col justify-between group hover:border-[#D4AF37] transition-all duration-300"
              >
                <div>
                  {/* Step Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl font-bold gold-gradient-text">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#2A0510] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-sm font-bold tracking-wider text-[#FAF6F0] uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/75 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D4AF37]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Step 0{index + 1} of 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to Packages / Booking */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('reviews-packages')}
            className="luxury-button-secondary text-xs tracking-widest"
          >
            EXPLORE PACKAGES & DETAILS
          </button>
        </div>

      </div>
    </section>
  );
};
