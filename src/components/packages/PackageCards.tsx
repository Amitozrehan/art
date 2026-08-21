import React from 'react';
import { Check, Star, Sparkles } from 'lucide-react';

interface PackageCardsProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackageCards: React.FC<PackageCardsProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      id: 'pkg-35k',
      title: '18" x 24" CANVAS',
      price: '₹35,000',
      dimension: '18 x 24 inches',
      subtitle: 'Ideal for intimate & elegant wedding celebrations',
      badge: null,
      features: [
        'Canvas size: 18" x 24" Inches',
        'Fine art studio varnish & acrylic finishing',
        'Insured hand-delivery or white-glove shipping',
        'Social Media Reels & Video Production',
      ],
      buttonText: 'CHOOSE 18" x 24"',
      highlighted: false,
    },
    {
      id: 'pkg-42k',
      title: '20" x 30" CANVAS',
      price: '₹42,000',
      dimension: '20 x 30 inches',
      subtitle: 'Our most popular choice for grand celebrations',
      badge: 'MOST POPULAR',
      features: [
        'Canvas size: 20" x 30" Inches',
        'In-depth design & moment consultation',
        'Elaborate venue background & lighting detail',
        'Fine art studio varnish & acrylic finishing',
        'Social Media Reels & Video Production',
      ],
      buttonText: 'CHOOSE 20" x 30"',
      highlighted: true,
    },
    {
      id: 'pkg-45k',
      title: '24" x 30" CANVAS',
      price: '₹45,000',
      dimension: '24 x 30 inches',
      subtitle: 'Luxury grand canvas for statement portraits',
      badge: 'LUXURY COLLECTION',
      features: [
        'Canvas size: 24" x 30" Inches',
        'Fine art studio varnish & framing options',
        'Priority hand delivery worldwide',
        'Social Media Reels & Video Production',
      ],
      buttonText: 'CHOOSE 24" x 30"',
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-[#0A090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 ${pkg.highlighted
                ? 'bg-gradient-to-b from-[#2A0510] to-[#1C030A] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.2)] transform lg:-translate-y-3'
                : 'bg-[#121115] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60'
                }`}
            >
              {/* Badge if Popular */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#997A35] text-[#0A090B] font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#0A090B]" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Title & Price Header */}
                <div className="text-center pb-6 border-b border-[#D4AF37]/15 space-y-2">
                  <h3 className="font-heading text-xl font-bold tracking-widest text-[#FAF6F0] uppercase">
                    {pkg.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#F7E7C4]">
                    {pkg.subtitle}
                  </p>
                  <div className="pt-2">
                    <span className="font-heading text-3xl font-extrabold gold-gradient-text tracking-wide block">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] font-sans text-[#D4AF37] uppercase tracking-widest font-semibold bg-[#2A0510]/80 inline-block px-3 py-1 rounded border border-[#D4AF37]/30 mt-1">
                      {pkg.dimension}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-4 text-xs sm:text-sm text-[#FAF6F0]/85 font-sans font-light">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#3B0918] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#D4AF37]/15">
                <button
                  onClick={() => onSelectPackage(`${pkg.price} (${pkg.dimension})`)}
                  className={`w-full text-center text-xs tracking-widest py-3.5 min-h-[44px] ${pkg.highlighted
                    ? 'luxury-button-primary'
                    : 'luxury-button-secondary'
                    }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Notice */}
        <div className="mt-12 text-center text-xs text-[#F7E7C4] font-serif italic bg-[#2A0510]/40 p-4 rounded-lg border border-[#D4AF37]/20 max-w-2xl mx-auto">
          <Sparkles className="w-4 h-4 text-[#D4AF37] inline-block mr-2" />
          “Every celebration is unique. Custom packages are available upon request.”
        </div>

      </div>
    </section>
  );
};
