import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const total = TESTIMONIALS_DATA.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Touch Gesture Handlers for Mobile (iOS & Android)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Helper to fetch 2 consecutive review items for desktop side-by-side display
  const getVisibleReviews = () => {
    const first = TESTIMONIALS_DATA[currentIndex];
    const second = TESTIMONIALS_DATA[(currentIndex + 1) % total];
    return [first, second];
  };

  return (
    <section className="py-24 bg-[#0A090B] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#3B0918]/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold font-sans">
            Client Words & Celebrations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
            Kind Words From <span className="gold-gradient-text italic font-serif font-normal">Our Couples</span>
          </h2>
          <p className="text-sm text-[#FAF6F0]/70 font-sans max-w-xl mx-auto font-light">
            Memories preserved live on canvas at unforgettable weddings and receptions.
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Carousel Container with Touch Swipe Support */}
        <div 
          className="relative px-2 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile View: 1 Review Card */}
          <div className="block md:hidden">
            {(() => {
              const review = TESTIMONIALS_DATA[currentIndex];
              return (
                <div
                  key={review.id}
                  className="bg-gradient-to-b from-[#2A0510]/60 to-[#121115]/95 border border-[#D4AF37]/30 p-7 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md space-y-5 text-center transition-all duration-300"
                >
                  <Quote className="w-10 h-10 text-[#D4AF37]/40 mx-auto" />

                  {/* 5 Stars */}
                  <div className="flex items-center justify-center space-x-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-base sm:text-lg text-[#F7E7C4] leading-relaxed font-normal min-h-[100px] flex items-center justify-center">
                    “{review.quote}”
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-[#D4AF37]/20">
                    <h3 className="font-heading text-base font-bold tracking-widest text-[#FAF6F0] uppercase">
                      {review.author}
                    </h3>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Desktop View: 2 Side-by-Side Review Cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {getVisibleReviews().map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-b from-[#2A0510]/60 to-[#121115]/95 border border-[#D4AF37]/30 p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-5 text-center flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#D4AF37]/40 mx-auto" />

                  {/* 5 Stars */}
                  <div className="flex items-center justify-center space-x-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-base lg:text-lg text-[#F7E7C4] leading-relaxed font-normal min-h-[90px] flex items-center justify-center">
                    “{review.quote}”
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <h3 className="font-heading text-sm lg:text-base font-bold tracking-widest text-[#FAF6F0] uppercase">
                    {review.author}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A090B] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-all duration-300 flex items-center justify-center shadow-2xl focus:outline-none z-20 min-h-[44px] min-w-[44px]"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A090B] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A090B] transition-all duration-300 flex items-center justify-center shadow-2xl focus:outline-none z-20 min-h-[44px] min-w-[44px]"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#D4AF37]'
                  : 'w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* WhatsApp Inquiry Button */}
        <div className="mt-10">
          <button
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.REVIEWS_INQUIRY)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest px-6 py-3.5 rounded bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-white transition-all duration-300 min-h-[44px]"
            aria-label="Discuss Your Wedding on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Discuss Your Wedding</span>
          </button>
        </div>

      </div>
    </section>
  );
};
