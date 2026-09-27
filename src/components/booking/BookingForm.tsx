import React, { useState, useEffect, useRef } from 'react';
import {
  User, Calendar, Paintbrush, CheckCircle,
  ArrowRight, ArrowLeft, Loader2, Sparkles, AlertCircle, MessageCircle
} from 'lucide-react';
import { InstagramIcon } from '../InstagramIcon';
import { submitBookingFormWithEmailJS } from '../../services/bookingService';
import type { BookingSubmissionData } from '../../services/bookingService';
import { openWhatsApp, WHATSAPP_MESSAGES, generateBookingWhatsAppMessage } from '../../utils/whatsapp';
import { openInstagram } from '../../utils/instagram';

interface BookingFormProps {
  initialPackage?: string;
  onNavigate: (page: string) => void;
}

const packageOptions = [
  {
    id: 'pkg-35k',
    label: '18" × 24" Canvas',
    size: '18" × 24" Inches',
    price: '₹39,999',
    subtitle: 'Ideal for intimate & elegant wedding celebrations',
    badge: null,
  },
  {
    id: 'pkg-42k',
    label: '20" × 30" Canvas',
    size: '20" × 30" Inches',
    price: '₹46,999',
    subtitle: 'Our most popular choice for grand celebrations',
    badge: 'MOST POPULAR',
  },
  {
    id: 'pkg-45k',
    label: '24" × 30" Canvas',
    size: '24" × 30" Inches',
    price: '₹49,999',
    subtitle: 'Luxury grand canvas for statement portraits',
    badge: 'LUXURY COLLECTION',
  },
  {
    id: 'pkg-custom',
    label: 'Custom / Bespoke Canvas',
    size: 'Custom',
    price: 'Price on consultation',
    subtitle: 'Tailored dimensions and special multi-canvas coverage',
    badge: 'BESPOKE',
  },
];

const getPackageDetails = (selectedStr: string) => {
  if (selectedStr.includes('35') || selectedStr.includes('39') || selectedStr.includes('18')) {
    return {
      package: '18" × 24" Canvas',
      canvas_size: '18" × 24" Inches',
      package_price: '₹39,999',
    };
  }
  if (selectedStr.includes('45') || selectedStr.includes('49') || selectedStr.includes('24')) {
    return {
      package: '24" × 30" Canvas',
      canvas_size: '24" × 30" Inches',
      package_price: '₹49,999',
    };
  }
  if (selectedStr.includes('Custom') || selectedStr.includes('Bespoke')) {
    return {
      package: 'Custom / Bespoke Canvas',
      canvas_size: 'Custom',
      package_price: 'Price on consultation',
    };
  }
  return {
    package: '20" × 30" Canvas',
    canvas_size: '20" × 30" Inches',
    package_price: '₹46,999',
  };
};

export const format12HourTime = (time24: string): string => {
  if (!time24) return '';
  const [hStr, mStr] = time24.split(':');
  let h = parseInt(hStr, 10);
  if (isNaN(h)) return time24;
  const m = mStr || '00';
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m} ${ampm}`;
};

const initialFormState: BookingSubmissionData = {
  full_name: '',
  email: '',
  phone: '',
  whatsapp: '',
  city_country: '',

  event_type: 'Wedding',
  event_date: '',
  start_time: '',
  end_time: '',
  venue_name: '',
  event_location: '',
  guest_count: '',

  package: '20" × 30" Canvas',
  canvas_size: '20" × 30" Inches',
  package_price: '₹46,999',
  painting_vision: '',
  key_figures: '2',
  special_requests: '',
  reference_image: 'Shared via WhatsApp after inquiry',

  communication_channel: 'WhatsApp',
  best_time: 'Afternoon — 12 PM–5 PM',
};

export const BookingForm: React.FC<BookingFormProps> = ({ initialPackage, onNavigate }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState<BookingSubmissionData>(initialFormState);

  useEffect(() => {
    if (initialPackage) {
      const details = getPackageDetails(initialPackage);
      setFormData((prev) => ({
        ...prev,
        ...details,
      }));
    }
  }, [initialPackage]);

  const updateField = (field: keyof BookingSubmissionData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg(null);
  };

  const handleSelectPackageOption = (opt: typeof packageOptions[0]) => {
    setFormData((prev) => ({
      ...prev,
      package: opt.label,
      canvas_size: opt.size,
      package_price: opt.price,
    }));
    setErrorMsg(null);
  };

  // Step Validation Logic
  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.full_name.trim()) {
        setErrorMsg('Please enter your full name.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return false;
      }
      if (!formData.phone.trim()) {
        setErrorMsg('Please enter your phone number.');
        return false;
      }
    }
    if (step === 2) {
      if (!formData.event_date) {
        setErrorMsg('Please select your event date.');
        return false;
      }
      if (!formData.event_location.trim()) {
        setErrorMsg('Please enter your city / event location.');
        return false;
      }
      if (formData.start_time && formData.end_time) {
        if (formData.end_time <= formData.start_time) {
          setErrorMsg('Event End Time cannot be earlier than or equal to Event Start Time.');
          return false;
        }
      }
    }
    if (step === 3) {
      if (!formData.painting_vision.trim()) {
        setErrorMsg('Please describe what moment you would like painted.');
        return false;
      }
      if (!formData.communication_channel) {
        setErrorMsg('Please select your preferred communication channel.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setErrorMsg(null);
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrev = () => {
    setErrorMsg(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (currentStep < 3) {
        handleNext();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if already in flight
    if (isSubmitting) return;

    // CRITICAL: Only allow submission on the final step (Step 3)
    if (currentStep !== 3) {
      return;
    }

    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) return;

    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await submitBookingFormWithEmailJS(formRef.current);
      if (response.success) {
        setIsSubmitted(true);
        setFormData(initialFormState);
      } else {
        setErrorMsg(response.message || "We couldn't send your inquiry. Please try again or contact us directly on WhatsApp.");
      }
    } catch {
      setErrorMsg("We couldn't send your inquiry. Please try again or contact us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State View
  if (isSubmitted) {
    const bookingWhatsAppMessage = generateBookingWhatsAppMessage(formData);

    return (
      <section className="pt-28 md:pt-36 pb-24 bg-[#0A090B] min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 rounded-full bg-[#2A0510] border-2 border-[#D4AF37] mx-auto flex items-center justify-center text-[#D4AF37] shadow-2xl">
            <CheckCircle className="w-10 h-10" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Inquiry Confirmed
          </span>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
            YOUR INQUIRY HAS BEEN <br />
            <span className="gold-gradient-text italic font-serif font-normal">RECEIVED</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#F7E7C4] max-w-lg mx-auto leading-relaxed">
            “Your inquiry has been received. Arsh Dhiman Art will contact you shortly.”
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('artist')}
              className="luxury-button-secondary w-full sm:w-auto text-xs tracking-widest min-h-[44px]"
            >
              BACK TO HOME
            </button>
            <button
              type="button"
              onClick={() => openWhatsApp(bookingWhatsAppMessage)}
              className="luxury-button-primary w-full sm:w-auto text-xs tracking-widest inline-flex items-center justify-center gap-2 min-h-[44px]"
              aria-label="Contact on WhatsApp with booking details"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CONTACT ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-36 pb-24 bg-[#0A090B] relative min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Form Header Title */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold font-sans">
            Reserve Your Celebration
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
            Book Your <span className="gold-gradient-text italic font-serif font-normal">Date</span>
          </h1>
          <p className="font-serif italic text-sm sm:text-lg text-[#F7E7C4]">
            “Tell us about your celebration and let’s create something unforgettable.”
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.BOOKING_HELP)}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider px-4 py-2 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all duration-300 min-h-[44px]"
              aria-label="Need Help? Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Need Help? Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Step Progress Indicator */}
        <div className="bg-[#121115] border border-[#D4AF37]/25 p-4 sm:p-6 rounded-xl mb-8 shadow-xl">
          <div className="flex items-center justify-between text-xs text-[#FAF6F0]/80 font-sans mb-3">
            <span className="font-bold text-[#D4AF37] uppercase tracking-wider">
              Step {currentStep} of 3
            </span>
            <span className="font-serif italic text-[#F7E7C4]">
              {currentStep === 1 && '1. Contact Information'}
              {currentStep === 2 && '2. Celebration & Event Details'}
              {currentStep === 3 && '3. Artwork Specifications & Consultation'}
            </span>
          </div>

          <div className="w-full bg-[#0A090B] h-2 rounded-full overflow-hidden border border-[#D4AF37]/20">
            <div
              className="bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#997A35] h-full transition-all duration-500 rounded-full"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-lg bg-[#3B0918] border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Multi-Step EmailJS HTML Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onKeyDown={handleFormKeyDown}
          className="bg-[#121115] border border-[#D4AF37]/30 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-8"
        >
          {/* Hidden Form Inputs for EmailJS Template Serialization */}
          <input type="hidden" name="package" value={formData.package} />
          <input type="hidden" name="canvas_size" value={formData.canvas_size} />
          <input type="hidden" name="package_price" value={formData.package_price} />
          <input type="hidden" name="reference_image" value={formData.reference_image} />
          <input type="hidden" name="start_time" value={formData.start_time ? format12HourTime(formData.start_time) : ''} />
          <input type="hidden" name="end_time" value={formData.end_time ? format12HourTime(formData.end_time) : ''} />

          {/* SECTION 1 — CONTACT INFORMATION */}
          <div className={currentStep === 1 ? "space-y-6 animate-in fade-in duration-300" : "hidden"}>
            <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-3">
              <User className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-heading text-lg font-bold text-[#FAF6F0] uppercase tracking-wider">
                Section 1 — Contact Information
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="e.g. Elizabeth Bennett"
                  value={formData.full_name}
                  onChange={(e) => updateField('full_name', e.target.value)}
                  className="luxury-input"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. elizabeth@example.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="luxury-input"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="luxury-input"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="+91 98765 43210 (Optional)"
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  className="luxury-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  City & Country
                </label>
                <input
                  type="text"
                  name="city_country"
                  placeholder="e.g. New Delhi, India"
                  value={formData.city_country}
                  onChange={(e) => updateField('city_country', e.target.value)}
                  className="luxury-input"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2 — CELEBRATION & EVENT DETAILS */}
          <div className={currentStep === 2 ? "space-y-6 animate-in fade-in duration-300" : "hidden"}>
            <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-3">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-heading text-lg font-bold text-[#FAF6F0] uppercase tracking-wider">
                Section 2 — Celebration & Event Details
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  Event Type *
                </label>
                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={(e) => updateField('event_type', e.target.value)}
                  className="luxury-input bg-[#121115]"
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Reception">Reception</option>
                  <option value="Anand Karaj">Anand Karaj</option>
                  <option value="Engagement">Engagement</option>
                  <option value="1st Birthday Milestone">1st Birthday Milestone</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    required
                    value={formData.event_date}
                    onChange={(e) => updateField('event_date', e.target.value)}
                    className="luxury-input"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2 flex items-center justify-between">
                    <span>Event Start Time</span>
                    {formData.start_time && (
                      <span className="text-[10px] text-[#D4AF37] font-semibold lowercase">
                        ({format12HourTime(formData.start_time)})
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="start_time_picker"
                      value={formData.start_time}
                      onChange={(e) => updateField('start_time', e.target.value)}
                      className="luxury-input cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2 flex items-center justify-between">
                    <span>Event End Time</span>
                    {formData.end_time && (
                      <span className="text-[10px] text-[#D4AF37] font-semibold lowercase">
                        ({format12HourTime(formData.end_time)})
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="end_time_picker"
                      value={formData.end_time}
                      onChange={(e) => updateField('end_time', e.target.value)}
                      className="luxury-input cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    name="venue_name"
                    placeholder="e.g. Taj Palace / Leela"
                    value={formData.venue_name}
                    onChange={(e) => updateField('venue_name', e.target.value)}
                    className="luxury-input"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    City / Event Location *
                  </label>
                  <input
                    type="text"
                    name="event_location"
                    required
                    placeholder="e.g. New Delhi / Jaipur"
                    value={formData.event_location}
                    onChange={(e) => updateField('event_location', e.target.value)}
                    className="luxury-input"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    name="guest_count"
                    placeholder="e.g. 250"
                    value={formData.guest_count}
                    onChange={(e) => updateField('guest_count', e.target.value)}
                    className="luxury-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3 — ARTWORK SPECIFICATIONS & CONSULTATION */}
          <div className={currentStep === 3 ? "space-y-6 animate-in fade-in duration-300" : "hidden"}>
            <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-3">
              <Paintbrush className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-heading text-lg font-bold text-[#FAF6F0] uppercase tracking-wider">
                Section 3 — Artwork Specifications & Consultation
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-3">
                  Preferred Package Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {packageOptions.map((opt) => {
                    const isSelected = formData.package === opt.label;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectPackageOption(opt)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all relative flex flex-col justify-between ${isSelected
                          ? 'bg-gradient-to-b from-[#2A0510] to-[#1C030A] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                          : 'bg-[#0A090B] border-[#D4AF37]/25 hover:border-[#D4AF37]/50'
                          }`}
                      >
                        {opt.badge && (
                          <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-[#0A090B] text-[9px] font-extrabold tracking-widest px-2.5 py-0.5 rounded-full uppercase shadow">
                            {opt.badge}
                          </span>
                        )}
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="font-heading text-sm font-bold text-[#FAF6F0]">
                              {opt.label}
                            </h3>
                            {isSelected && <CheckCircle className="w-4 h-4 text-[#D4AF37]" />}
                          </div>
                          <p className="text-xs text-[#FAF6F0]/70 font-sans mt-1">
                            {opt.subtitle}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between">
                          <span className="text-xs text-[#D4AF37] font-semibold">{opt.size}</span>
                          <span className="font-heading text-base font-bold gold-gradient-text">{opt.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                  What You Would Like Painted *
                </label>
                <textarea
                  name="painting_vision"
                  required
                  rows={4}
                  placeholder="Tell us what moment you'd love captured — for example, first dance under chandeliers, Anand Karaj ceremony, couple beneath a floral arch, etc."
                  value={formData.painting_vision}
                  onChange={(e) => updateField('painting_vision', e.target.value)}
                  className="luxury-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Number of Key Figures to Include
                  </label>
                  <input
                    type="text"
                    name="key_figures"
                    placeholder="e.g. Couple (2 key figures)"
                    value={formData.key_figures}
                    onChange={(e) => updateField('key_figures', e.target.value)}
                    className="luxury-input"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="special_requests"
                    rows={2}
                    placeholder="Framing preferences, pet cameos, specific florals, or family inclusions..."
                    value={formData.special_requests}
                    onChange={(e) => updateField('special_requests', e.target.value)}
                    className="luxury-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Preferred Communication Channel *
                  </label>
                  <select
                    name="communication_channel"
                    required
                    value={formData.communication_channel}
                    onChange={(e) => updateField('communication_channel', e.target.value)}
                    className="luxury-input bg-[#121115]"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Video Call">Video Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF6F0]/80 font-medium mb-2">
                    Preferred Time to Contact
                  </label>
                  <select
                    name="best_time"
                    value={formData.best_time}
                    onChange={(e) => updateField('best_time', e.target.value)}
                    className="luxury-input bg-[#121115]"
                  >
                    <option value="Morning — 9 AM–12 PM">Morning — 9 AM–12 PM</option>
                    <option value="Afternoon — 12 PM–5 PM">Afternoon — 12 PM–5 PM</option>
                    <option value="Evening — 5 PM–8 PM">Evening — 5 PM–8 PM</option>
                  </select>
                </div>
              </div>

              {/* Reference Image Note */}
              <div className="p-4 rounded-xl bg-[#0A090B] border border-[#D4AF37]/20 flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#FAF6F0]/80 font-sans leading-relaxed">
                  <strong className="text-[#F7E7C4]">Reference Images & Venue Photos:</strong> Reference images can be shared through WhatsApp (<span className="text-[#25D366] font-semibold">+91 8500100095</span>) directly after submitting your inquiry.
                </p>
              </div>

              {/* Summary Confirmation Card */}
              <div className="p-6 rounded-xl bg-[#0A090B] border border-[#D4AF37]/30 space-y-3 font-sans text-xs">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-2">
                  <span className="font-heading text-xs text-[#D4AF37] uppercase tracking-wider">
                    Inquiry Summary Review
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[#FAF6F0]/80">
                  <div><span className="text-[#FAF6F0]/50">Full Name:</span> {formData.full_name || '—'}</div>
                  <div><span className="text-[#FAF6F0]/50">Email:</span> {formData.email || '—'}</div>
                  <div><span className="text-[#FAF6F0]/50">Phone:</span> {formData.phone || '—'}</div>
                  <div><span className="text-[#FAF6F0]/50">Event Type:</span> {formData.event_type}</div>
                  <div><span className="text-[#FAF6F0]/50">Event Date:</span> {formData.event_date || '—'}</div>
                  <div><span className="text-[#FAF6F0]/50">Start Time:</span> {formData.start_time ? format12HourTime(formData.start_time) : 'Not specified'}</div>
                  <div><span className="text-[#FAF6F0]/50">End Time:</span> {formData.end_time ? format12HourTime(formData.end_time) : 'Not specified'}</div>
                  <div><span className="text-[#FAF6F0]/50">Location:</span> {formData.event_location || '—'}</div>
                  <div><span className="text-[#FAF6F0]/50">Selected Package:</span> <span className="text-[#F7E7C4] font-bold">{formData.package} ({formData.package_price})</span></div>
                  <div><span className="text-[#FAF6F0]/50">Preferred Channel:</span> {formData.communication_channel}</div>
                  <div><span className="text-[#FAF6F0]/50">Preferred Time:</span> {formData.best_time}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Step Controls */}
          <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                disabled={isSubmitting}
                className="luxury-button-secondary text-xs flex items-center gap-2 disabled:opacity-50 min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="luxury-button-primary text-xs flex items-center gap-2 min-h-[44px]"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button-primary text-xs py-4 px-8 flex items-center gap-2 shadow-2xl disabled:opacity-50 min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SENDING ENQUIRY...</span>
                  </>
                ) : (
                  <span>SEND ENQUIRY</span>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Footer Instagram Prompt */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#2A0510]/60 via-[#121115] to-[#1C030A] border border-[#D4AF37]/30 text-center space-y-4 shadow-2xl">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0A090B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
            <InstagramIcon className="w-6 h-6" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF6F0]">
            Want to See More of Our Work?
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-[#F7E7C4] max-w-lg mx-auto">
            “Take a look at our latest paintings and wedding moments on Instagram.”
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openInstagram()}
              className="luxury-button-secondary text-xs sm:text-sm py-3.5 px-6 flex items-center justify-center gap-2 group min-h-[44px] w-full sm:w-auto"
              aria-label="View Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>VIEW INSTAGRAM</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
