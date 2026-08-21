import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How far in advance should I book?',
      a: 'We recommend booking 6 to 12 months in advance to secure your wedding date, as live painting availability per season is strictly limited to ensure uncompromising artistic quality.',
    },
    {
      q: 'Do you travel for weddings?',
      a: 'Yes, Arsh Dhiman Art is available for travel across the nation and internationally for luxury destination weddings and celebrations.',
    },
    {
      q: 'What moments can be painted live?',
      a: 'Popular moments include the wedding ceremony vows, first kiss, first dance, grand reception entrance, or a romantic couple portrait set against the venue’s architecture.',
    },
    {
      q: 'How large can the painting be?',
      a: 'Standard canvas sizes range from 18" x 24" (Signature) to 24" x 36" (Grand). Larger custom sizes (such as 30" x 40" or 36" x 48") are available in our Bespoke package.',
    },
    {
      q: 'Can I request a custom package?',
      a: 'Absolutely. Every celebration is unique. We gladly create bespoke packages tailored to multi-day wedding events, extra canvas commissions, or custom framing preferences.',
    },
    {
      q: 'How long does a live painting take?',
      a: 'A typical live painting session spans 5 to 7 hours during your wedding day. Arsh arrives 1-2 hours prior to guest arrival to lay down the background architecture and lighting.',
    },
    {
      q: 'When will I receive the finished artwork?',
      a: 'While the painting is substantially completed live at your event for guests to admire, it is brought back to the studio for fine detailing, curing, and varnish, typically delivered within 3-6 weeks.',
    },
    {
      q: 'Can you paint from photographs?',
      a: 'Yes. If your wedding date has already passed or you prefer a studio portrait, Arsh can create bespoke acrylic paintings directly from your favorite high-resolution wedding photography.',
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#121115] relative border-t border-[#D4AF37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FAF6F0]">
            Everything You Need <span className="gold-gradient-text italic font-serif font-normal">To Know</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans font-light max-w-lg mx-auto">
            Answers to common inquiries regarding our live wedding painting process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0A090B] border border-[#D4AF37]/25 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/50"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#2A0510]/30"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-[#F7E7C4] flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#2A0510] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-[#D4AF37] text-[#0A090B]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D4AF37]/10 font-sans text-xs sm:text-sm text-[#FAF6F0]/80 leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
