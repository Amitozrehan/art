import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon } from '../InstagramIcon';
import { INSTAGRAM_CONFIG, INSTAGRAM_GALLERY_ITEMS, openInstagram } from '../../utils/instagram';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A090B] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Soft Background Atmospheric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3B0918]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A0510]/80 border border-[#D4AF37]/30 text-[#D4AF37]">
            <InstagramIcon className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium font-sans">
              Official Instagram Feed
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
            Follow the <span className="gold-gradient-text italic font-serif font-normal">Art</span>
          </h2>

          <p className="font-serif italic text-base sm:text-xl text-[#F7E7C4] leading-relaxed max-w-2xl mx-auto">
            “Live paintings, beautiful celebrations and timeless portraits — follow{' '}
            <a
              href={INSTAGRAM_CONFIG.PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] underline decoration-[#D4AF37]/40 hover:text-white transition-colors"
            >
              {INSTAGRAM_CONFIG.USERNAME}
            </a>{' '}
            for more.”
          </p>

          {/* Profile Handle Badge */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href={INSTAGRAM_CONFIG.PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121115] border border-[#D4AF37]/30 text-xs text-[#FAF6F0] hover:border-[#D4AF37] transition-all group min-h-[44px]"
            >
              <InstagramIcon className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wider">{INSTAGRAM_CONFIG.USERNAME}</span>
              <span className="text-xs text-[#D4AF37] font-serif italic pl-1 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                View More on Instagram <ArrowUpRight className="w-3.5 h-3.5 inline" />
              </span>
            </a>
          </div>
        </div>

        {/* 6-Card Instagram Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {INSTAGRAM_GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => openInstagram(item.postUrl)}
              className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-[#121115] cursor-pointer shadow-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
            >
              {/* Image Frame */}
              <div className="h-56 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Instagram Badge Tag */}
                <div className="absolute top-3 right-3 bg-[#0A090B]/80 backdrop-blur-md p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37]">
                  <InstagramIcon className="w-4 h-4" />
                </div>

                <div className="absolute top-3 left-3 bg-[#0A090B]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-sans uppercase tracking-widest text-[#F7E7C4] border border-[#D4AF37]/20">
                  {item.category}
                </div>
              </div>

              {/* Hover Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A090B] via-[#0A090B]/70 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                  <div className="flex items-center justify-between text-[#D4AF37] text-xs">
                    <span className="font-semibold tracking-wider">{INSTAGRAM_CONFIG.USERNAME}</span>
                    <span className="flex items-center gap-1 text-[11px] text-[#F7E7C4]/80">
                      <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      {item.likes}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#FAF6F0]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#FAF6F0]/80 font-sans font-light line-clamp-2">
                    {item.caption}
                  </p>

                  <div className="pt-2 text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase flex items-center gap-1">
                    <span>View Post on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Profile CTA Area */}
        <div className="mt-14 text-center space-y-4">
          <button
            onClick={() => openInstagram()}
            className="luxury-button-primary text-xs sm:text-sm py-4 px-8 inline-flex items-center justify-center gap-3 group shadow-2xl min-h-[44px]"
            aria-label="Follow Arsh Dhiman Art on Instagram"
          >
            <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>FOLLOW ON INSTAGRAM</span>
          </button>

          <p className="text-xs text-[#FAF6F0]/60 font-sans tracking-wider uppercase">
            Join our community for live painting reels, venue reveals & behind-the-scenes artistry
          </p>
        </div>

      </div>
    </section>
  );
};
