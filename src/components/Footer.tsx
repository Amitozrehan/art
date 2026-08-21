import { BrandLogo } from './BrandLogo';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, WHATSAPP_CONFIG } from '../utils/whatsapp';
import { INSTAGRAM_CONFIG } from '../utils/instagram';


interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.DEFAULT_GENERAL);

  return (
    <footer className="bg-[#0A090B] border-t border-[#D4AF37]/20 pt-16 pb-12 text-[#FAF6F0] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#3B0918]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#D4AF37]/15">
          {/* Brand Identity Column */}
          <div className="md:col-span-1 space-y-4">
            <button
              onClick={() => onNavigate('artist')}
              className="text-left focus:outline-none"
            >
              <BrandLogo variant="full" size="lg" />
            </button>
            <p className="font-editorial text-sm text-[#FAF6F0]/80 italic max-w-md">
              “Turning your most unforgettable wedding moments into timeless works of fine art created live before your eyes.”
            </p>
          </div>

          {/* FOLLOW US Column */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              FOLLOW US
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-[#FAF6F0]/80">
              <li>
                <a
                  href={INSTAGRAM_CONFIG.PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Arsh Dhiman Art on Instagram"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Instagram: <span className="text-[#F7E7C4] font-semibold">{INSTAGRAM_CONFIG.USERNAME}</span></span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Arsh Dhiman Art on WhatsApp"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: <span className="text-[#F7E7C4] font-semibold">{WHATSAPP_CONFIG.RAW_NUMBER}</span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@arsh_dhiman_art?si=WtE2Ou2AlPnqOSng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Arsh Dhiman Art on YouTube"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#FF0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube: <span className="text-[#F7E7C4] font-semibold">@arsh_dhiman_art</span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1CBFgcYS9d/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Arsh Dhiman Art on Facebook"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook: <span className="text-[#F7E7C4] font-semibold">Arsh Dhiman Art</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate('artist')}
                  className="text-[#FAF6F0]/70 hover:text-[#D4AF37] transition-colors"
                >
                  Artist / Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews-packages')}
                  className="text-[#FAF6F0]/70 hover:text-[#D4AF37] transition-colors"
                >
                  Reviews & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book')}
                  className="text-[#FAF6F0]/70 hover:text-[#D4AF37] transition-colors"
                >
                  Book Your Date
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Service Info Column */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Bespoke Artistry
            </h3>
            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed font-sans">
              Available for luxury destination weddings, receptions, anniversaries, & private commissions worldwide.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('book')}
                className="luxury-button-secondary text-[11px] py-2 px-4 inline-block"
              >
                Request Availability
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 space-y-4 sm:space-y-0">
          <p>© 2026 Arsh Dhiman Art. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer" onClick={() => onNavigate('reviews-packages')}>
              Privacy & Studio Terms
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#D4AF37] hover:text-[#F7E7C4] transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
