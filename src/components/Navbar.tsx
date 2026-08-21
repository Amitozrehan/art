import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { InstagramIcon } from './InstagramIcon';
import { INSTAGRAM_CONFIG } from '../utils/instagram';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'artist', label: 'Artist' },
    { id: 'reviews-packages', label: 'Reviews & Packages' },
    { id: 'book', label: 'Book Your Date' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A090B]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A090B]/90 via-[#0A090B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('artist')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            aria-label="Arsh Dhiman Art Home"
          >
            <BrandLogo variant="full" size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm tracking-[0.12em] uppercase font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#F7E7C4] font-semibold'
                      : 'text-[#FAF6F0]/80 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#997A35] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA & Social (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Instagram */}
            <a
              href={INSTAGRAM_CONFIG.PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Arsh Dhiman Art on Instagram"
              className="p-2.5 rounded border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-all duration-300 flex items-center justify-center min-h-[44px] min-w-[44px]"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CBFgcYS9d/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Arsh Dhiman Art on Facebook"
              className="p-2.5 rounded border border-[#D4AF37]/30 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 flex items-center justify-center min-h-[44px] min-w-[44px]"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@arsh_dhiman_art?si=WtE2Ou2AlPnqOSng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Arsh Dhiman Art on YouTube"
              className="p-2.5 rounded border border-[#D4AF37]/30 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 flex items-center justify-center min-h-[44px] min-w-[44px]"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <button
              onClick={() => handleNavClick('book')}
              className="luxury-button-primary text-xs flex items-center gap-2 group min-h-[44px]"
            >
              <Calendar className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>BOOK YOUR DATE</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Social Icons */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={INSTAGRAM_CONFIG.PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Arsh Dhiman Art on Instagram"
              className="p-2 rounded-sm text-[#D4AF37] bg-[#2A0510]/60 border border-[#D4AF37]/30 flex items-center justify-center min-h-[40px] min-w-[40px]"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1CBFgcYS9d/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Arsh Dhiman Art on Facebook"
              className="p-2 rounded-sm text-[#1877F2] bg-[#2A0510]/60 border border-[#D4AF37]/30 flex items-center justify-center min-h-[40px] min-w-[40px]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@arsh_dhiman_art?si=WtE2Ou2AlPnqOSng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Arsh Dhiman Art on YouTube"
              className="p-2 rounded-sm text-[#FF0000] bg-[#2A0510]/60 border border-[#D4AF37]/30 flex items-center justify-center min-h-[40px] min-w-[40px]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <button
              onClick={() => handleNavClick('book')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0A090B] font-bold text-[10px] tracking-wider uppercase px-2.5 py-2.5 rounded-sm shadow-md min-h-[40px]"
            >
              BOOK
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-sm text-[#FAF6F0] hover:text-[#D4AF37] bg-[#2A0510]/60 border border-[#D4AF37]/30 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] min-h-[40px] min-w-[40px]"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-[#FAF6F0]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Luxury Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A090B]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="px-6 pt-6 pb-8 space-y-4">
            <div className="border-b border-[#D4AF37]/15 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Menu Navigation
              </span>
            </div>

            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-md text-base font-medium tracking-wider flex items-center justify-between transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-[#2A0510] text-[#F7E7C4] border border-[#D4AF37]/40 shadow-lg'
                      : 'text-[#FAF6F0]/90 hover:bg-[#1A1920] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                </button>
              );
            })}

            <div className="flex items-center justify-around pt-2 border-t border-[#D4AF37]/15">
              <a
                href={INSTAGRAM_CONFIG.PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1CBFgcYS9d/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#1877F2] hover:text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://youtube.com/@arsh_dhiman_art?si=WtE2Ou2AlPnqOSng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#FF0000] hover:text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('book')}
                className="w-full luxury-button-primary py-4 text-center text-xs tracking-widest flex items-center justify-center gap-2 shadow-xl min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK YOUR DATE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
