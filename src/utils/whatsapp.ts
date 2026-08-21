import type { BookingSubmissionData } from '../services/bookingService';

export const WHATSAPP_CONFIG = {
  // Official business WhatsApp number in international format
  RAW_NUMBER: '+91 8500100095',
  FORMATTED_NUMBER: '918500100095',
  BASE_URL: 'https://wa.me/918500100095',
};

// Standardized pre-filled messages across the website
export const WHATSAPP_MESSAGES = {
  // General / Floating Button Message
  DEFAULT_GENERAL:
    'Hello Arsh Dhiman Art! I would like to know more about your Luxury Live Wedding Paintings & Portraits.',

  // Hero Section Secondary Button Message
  HERO_INQUIRY:
    'Hello Arsh Dhiman Art! I am interested in your Luxury Live Wedding Paintings & Portraits. I would like to know more about your services.',

  // Artist Section CTA Message
  ARTIST_INQUIRY:
    'Hello Arsh Dhiman Art! I would like to ask about the live painting experience for my event.',

  // Packages CTAs Messages
  PACKAGE_35K:
    'Hello Arsh Dhiman Art! I am interested in the ₹35,000 (18" x 24" Canvas) package for my event. Please share more details.',

  PACKAGE_42K:
    'Hello Arsh Dhiman Art! I am interested in the ₹42,000 (20" x 30" Canvas) package for my event. Please share more details.',

  PACKAGE_45K:
    'Hello Arsh Dhiman Art! I am interested in the ₹45,000 (24" x 30" Canvas) package for my event. Please share more details.',

  PACKAGE_SIGNATURE:
    'Hello Arsh Dhiman Art! I am interested in the ₹35,000 (18" x 24" Canvas) package for my event. Please share more details.',

  PACKAGE_GRAND:
    'Hello Arsh Dhiman Art! I am interested in the ₹42,000 (20" x 30" Canvas) package for my event. Please share more details.',

  PACKAGE_BESPOKE:
    'Hello Arsh Dhiman Art! I am interested in the ₹45,000 (24" x 30" Canvas) package for my event. Please share more details.',

  // Testimonials Section Message
  REVIEWS_INQUIRY:
    'Hello Arsh Dhiman Art! I read your client reviews and would like to discuss my wedding painting.',

  // Booking Form Help / Consultation Message
  BOOKING_HELP:
    'Hello Arsh Dhiman Art! Need help with my live wedding painting booking.',
};

/**
 * Builds a WhatsApp Click-to-Chat URL with encoded pre-filled text.
 * @param message Text message to prefill in WhatsApp chat
 */
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.DEFAULT_GENERAL): string => {
  const encodedText = encodeURIComponent(message.trim());
  return `${WHATSAPP_CONFIG.BASE_URL}?text=${encodedText}`;
};

/**
 * Utility to safely trigger opening WhatsApp in a new window/tab or native app.
 * @param message Pre-filled message string
 */
export const openWhatsApp = (message: string = WHATSAPP_MESSAGES.DEFAULT_GENERAL): void => {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Dynamically builds a formatted WhatsApp message from submitted booking form data.
 * @param data Booking form submission data
 */
export const generateBookingWhatsAppMessage = (data: BookingSubmissionData): string => {
  const name = data.full_name || 'Valued Client';
  const event = data.event_type || 'Wedding Celebration';
  const date = data.event_date || 'To be decided';
  const venue = data.venue_name || 'To be decided';
  const location = data.event_location || 'To be decided';
  const pkg = data.package || 'Luxury Live Painting';

  return `Hello Arsh Dhiman Art!

I have submitted a booking enquiry.

Name: ${name}
Event: ${event}
Event Date: ${date}
Venue: ${venue}
Location: ${location}
Preferred Package: ${pkg}

I would like to discuss my booking further.`;
};
