import React from 'react';
import { Calendar, Sparkles, MessageCircle, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

interface HeroProps {
  onNavigate: (page: string) => void;
  onScrollToArtist?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onScrollToArtist }) => {
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A090B] via-[#1C030A] to-[#0A090B]">
      {/* Background Decorative Gold Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#3B0918]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Luxury Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A0510]/80 border border-[#D4AF37]/30 text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium font-sans">
                Fine Art Live Event Painter
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FAF6F0] tracking-wide">
              Luxury Live Wedding <br />
              <span className="gold-gradient-text italic font-serif font-normal">
                Paintings & Portraits
              </span>
            </h1>

            {/* Gold Decorative Divider */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 py-1">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            {/* Supporting Text */}
            <p className="font-serif font-semibold text-xl sm:text-2xl text-[#F7E7C4] tracking-wide max-w-2xl mx-auto lg:mx-0">
              Turning your most unforgettable moments into timeless works of art.
            </p>

            {/* Additional Text */}
            <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              “Live wedding painting and bespoke portrait artistry created to preserve the emotion, elegance and beauty of your most meaningful moments.”
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('book')}
                className="luxury-button-primary w-full sm:w-auto flex items-center justify-center gap-2 group text-xs sm:text-sm min-h-[44px]"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>BOOK YOUR DATE</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('artist');
                  if (onScrollToArtist) {
                    setTimeout(() => onScrollToArtist(), 100);
                  }
                }}
                className="luxury-button-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[44px]"
                aria-label="Meet Arsh Dhiman"
              >
                <Palette className="w-4 h-4 text-[#D4AF37]" />
                <span>MEET THE ARTIST</span>
              </button>

              <button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.HERO_INQUIRY)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest px-6 py-3.5 rounded bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all duration-300 min-h-[44px]"
                aria-label="Chat with Arsh Dhiman Art on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Cinematic Artwork Frame */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md lg:max-w-none">
              {/* Gold Frame Border Accent */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#997A35] opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-700" />
              
              <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#121115]">
                <img
                  src="/assets/hero.png"
                  alt="Luxury Live Wedding Painting by Arsh Dhiman Art"
                  className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Floating Artwork Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A090B]/85 backdrop-blur-md p-3.5 rounded border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-xs text-[#FAF6F0] tracking-wider uppercase">
                      Live Canvas Artwork
                    </p>
                    <p className="text-[11px] text-[#D4AF37] font-serif italic">
                      Original Acrylic Colours on Canvas
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F7E7C4] bg-[#3B0918] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                    Handcrafted
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
