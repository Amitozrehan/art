import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.DEFAULT_GENERAL);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Arsh Dhiman Art on WhatsApp"
      className="fixed z-40 group flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba5a] hover:to-[#0f7a6e] text-white px-3.5 sm:px-4 py-3 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0A090B] min-h-[44px] min-w-[44px]"
      style={{
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-transparent flex-shrink-0" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F7E7C4] rounded-full animate-ping" />
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-wide font-sans hidden xs:inline sm:inline pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
};
