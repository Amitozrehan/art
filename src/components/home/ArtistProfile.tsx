import React from 'react';
import { Palette, Award, Sparkles, MessageCircle } from 'lucide-react';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export const ArtistProfile: React.FC = () => {
  return (
    <section id="artist-profile" className="py-24 bg-[#0A090B] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#3B0918]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Artist Portrait Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Gold Accent Outline Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/30 transform -rotate-1 transition-transform group-hover:rotate-0 duration-500" />
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/20 transform rotate-2 transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 bg-[#121115]">
                <img
                  src="/assets/artist.png"
                  alt="Arsh Dhiman - Fine Art Live Wedding Painter"
                  className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A090B] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center bg-[#0A090B]/80 backdrop-blur-md p-4 rounded border border-[#D4AF37]/30">
                  <p className="font-heading text-lg text-[#F7E7C4] tracking-widest uppercase">
                    Arsh Dhiman
                  </p>
                  <p className="font-sans text-xs text-[#FAF6F0]/80 tracking-wider mt-0.5">
                    Lead Fine Artist & Portraitist
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Bio & Story Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
                Fine Art Portfolio & Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] mt-2">
                Meet the <span className="gold-gradient-text italic font-serif font-normal">Artist</span>
              </h2>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#F7E7C4] leading-relaxed italic">
              “Arsh Dhiman is an artist specializing in luxury live wedding paintings and portraits, transforming meaningful moments into handcrafted pieces of art.”
            </p>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#FAF6F0]/80 leading-relaxed font-light">
              <p>
                With years of classical painting experience and an instinct for emotional storytelling, Arsh captures the quiet romance, grand architecture, and vibrant joy of luxury celebrations live in real time.
              </p>
              <p>
                Each live wedding commission is created using rich acrylic colours, archival cotton or linen canvas, and exquisite brush technique. Guests watch in fascination as a blank canvas blossoms into a museum-worthy heirloom throughout the wedding celebration.
              </p>
            </div>

            {/* Specialization & Style Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#2A0510]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <Palette className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-xs uppercase tracking-wider text-[#FAF6F0]">Painting Style</h3>
                  <p className="text-xs text-[#FAF6F0]/70 mt-0.5">Acrylic Colours on Canvas</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#2A0510]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-xs uppercase tracking-wider text-[#FAF6F0]">Specialization</h3>
                  <p className="text-xs text-[#FAF6F0]/70 mt-0.5">Live Weddings, Receptions & Heirloom Portraits</p>
                </div>
              </div>
            </div>

            {/* Signature Element & WhatsApp CTA */}
            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FAF6F0]/60">Handcrafted With Passion</p>
                <div className="font-editorial text-4xl sm:text-5xl text-[#D4AF37] italic font-normal tracking-wide mt-1">
                  Arsh Dhiman
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] bg-[#3B0918]/60 px-3 py-1.5 rounded border border-[#D4AF37]/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Worldwide Travel</span>
                </div>

                <button
                  onClick={() => openWhatsApp(WHATSAPP_MESSAGES.ARTIST_INQUIRY)}
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider px-4 py-2 rounded bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all duration-300 min-h-[44px]"
                  aria-label="Ask Arsh Dhiman Art about the experience on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Ask About the Experience</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
