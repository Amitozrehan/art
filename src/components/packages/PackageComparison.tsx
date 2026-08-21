import React from 'react';


export const PackageComparison: React.FC = () => {
  const comparisonData = [
    { feature: 'Consultation', signature: '1-on-1 Pre-event', grand: 'In-Depth Design Session', bespoke: 'VIP VIP Concept Design' },
    { feature: 'Live Painting', signature: 'Yes', grand: 'Yes', bespoke: 'Yes (Multi-Day Option)' },
    { feature: 'Canvas Type', signature: '18" x 24" Fine Linen', grand: '24" x 36" Gallery Linen', bespoke: 'Custom Master Canvas (Up to 36"x48"+)' },
    { feature: 'Painting Duration', signature: 'Up to 5 Hours', grand: 'Up to 7 Hours', bespoke: 'Extended / Complete Event' },
    { feature: 'Number of Subjects', signature: '2 Key Figures (Couple)', grand: 'Couple + Key Guests/Family', bespoke: 'Multiple Figures & Guest Cameos' },
    { feature: 'Custom Requests', signature: 'Basic Palette Choice', grand: 'Venue & Guest Details', bespoke: 'Fully Custom Elements & Relatives' },
    { feature: 'Premium Finishing', signature: 'Studio Varnish', grand: 'Studio Varnish + Framing Option', bespoke: 'Archival Gold-Gilded Framing' },
    { feature: 'Delivery', signature: 'Hand Delivery / Insured', grand: 'White-Glove Insured Delivery', bespoke: 'Priority Hand Delivery Worldwide' },
  ];

  return (
    <section className="py-20 bg-[#121115] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
            Side-by-side Overview
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FAF6F0]">
            Package <span className="gold-gradient-text italic font-serif font-normal">Comparison</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans font-light">
            Compare features across our luxury live wedding painting collections.
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-[#D4AF37]/25 shadow-2xl bg-[#0A090B]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2A0510]/80 border-b border-[#D4AF37]/30 text-[#D4AF37]">
                <th className="p-4 font-heading text-xs uppercase tracking-widest">Feature</th>
                <th className="p-4 font-heading text-xs uppercase tracking-widest text-center">Signature</th>
                <th className="p-4 font-heading text-xs uppercase tracking-widest text-center bg-[#3B0918]/60 text-[#F7E7C4]">
                  Grand (Popular)
                </th>
                <th className="p-4 font-heading text-xs uppercase tracking-widest text-center">Bespoke</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D4AF37]/15 text-xs sm:text-sm font-sans text-[#FAF6F0]/85 font-light">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1A1920]/60 transition-colors">
                  <td className="p-4 font-medium text-[#FAF6F0]">{row.feature}</td>
                  <td className="p-4 text-center text-[#FAF6F0]/80">{row.signature}</td>
                  <td className="p-4 text-center font-medium text-[#F7E7C4] bg-[#2A0510]/20">
                    {row.grand}
                  </td>
                  <td className="p-4 text-center text-[#D4AF37] font-medium">{row.bespoke}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Comparison Cards (Optimal Mobile UX) */}
        <div className="md:hidden space-y-6">
          {[
            { name: 'SIGNATURE', badge: 'Intimate', dataKey: 'signature' as const },
            { name: 'GRAND', badge: 'Most Popular', dataKey: 'grand' as const, highlight: true },
            { name: 'BESPOKE', badge: 'Ultimate Luxury', dataKey: 'bespoke' as const },
          ].map((pkgInfo, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 border ${
                pkgInfo.highlight
                  ? 'bg-[#2A0510]/60 border-[#D4AF37] shadow-xl'
                  : 'bg-[#0A090B] border-[#D4AF37]/25'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D4AF37]/20">
                <h3 className="font-heading text-lg font-bold text-[#F7E7C4]">
                  {pkgInfo.name}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#3B0918] text-[#D4AF37] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                  {pkgInfo.badge}
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start py-1 border-b border-[#D4AF37]/10">
                    <span className="text-[#FAF6F0]/60 font-medium">{item.feature}:</span>
                    <span className="text-right text-[#FAF6F0] font-semibold max-w-[60%]">
                      {item[pkgInfo.dataKey]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
