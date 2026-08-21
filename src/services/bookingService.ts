import emailjs from '@emailjs/browser';

export interface BookingSubmissionData {
  // Section 1: Contact Information
  full_name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  city_country?: string;

  // Section 2: Celebration & Event Details
  event_type: string;
  event_date: string;
  start_time?: string;
  end_time?: string;
  venue_name?: string;
  event_location: string;
  guest_count?: string;

  // Section 3: Artwork & Canvas Specifications
  package: string;
  canvas_size: string;
  package_price: string;
  painting_vision: string;
  key_figures?: string;
  special_requests?: string;
  reference_image?: string;

  // Section 4: Consultation Preferences
  communication_channel: string;
  best_time: string;
}

// EmailJS Credentials Configuration
export const EMAILJS_CONFIG = {
  publicKey: 'iZJxZ7OGnKAaXXR-3',
  serviceId: 'service_8ldr8wq',
  templateId: 'template_ns1w8qg',
};

export const submitBookingFormWithEmailJS = async (
  formElement: HTMLFormElement
): Promise<{ success: boolean; message: string }> => {
  try {
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formElement,
      EMAILJS_CONFIG.publicKey
    );

    if (result.status === 200 || result.text === 'OK') {
      return {
        success: true,
        message: 'Your inquiry has been received. Arsh Dhiman Art will contact you shortly.',
      };
    } else {
      return {
        success: false,
        message: "We couldn't send your inquiry. Please try again or contact us directly on WhatsApp.",
      };
    }
  } catch (error) {
    console.error('EmailJS Submission Error:', error);
    return {
      success: false,
      message: "We couldn't send your inquiry. Please try again or contact us directly on WhatsApp.",
    };
  }
};
