import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';


export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Vibrant Floral Reception Canvas',
      category: 'reception',
      image: '/assets/gallery_1.jpg',
      caption: 'Live acrylic painting of couple against a handcrafted floral backdrop.',
      aspect: 'vertical',
    },
    {
      id: 2,
      title: 'Royal Mandap Arch Ceremony',
      category: 'ceremony',
      image: '/assets/gallery_2.jpg',
      caption: 'Traditional royal attire captured under golden archways and floral decor.',
      aspect: 'vertical',
    },
    {
      id: 3,
      title: 'Anand Karaj Holy Ceremony',
      category: 'ceremony',
      image: '/assets/gallery_3.jpg',
      caption: 'Live Gurdwara ceremony artwork created on easel during Anand Karaj.',
      aspect: 'vertical',
    },
    {
      id: 4,
      title: 'Vibrant Red Floral Royal Portrait',
      category: 'portraits',
      image: '/assets/gallery_4.jpg',
      caption: 'Sikh couple in mint green sherwani & red lehenga against a vibrant red floral backdrop.',
      aspect: 'vertical',
    },
    {
      id: 5,
      title: 'Bespoke Milestone Portrait',
      category: 'details',
      image: '/assets/gallery_5.jpg',
      caption: 'Custom 1st Birthday live canvas painting with archway & floral detailing.',
      aspect: 'vertical',
    },
    {
      id: 6,
      title: 'Easel Display Floral Arch Portrait',
      category: 'reception',
      image: '/assets/gallery_6.jpg',
      caption: 'Finished live canvas painting displayed on easel amidst luxurious floral arrangements.',
      aspect: 'vertical',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A090B] via-[#121115] to-[#0A090B] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium font-sans">
            Fine Art Exhibition
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0]">
            Moments, <span className="gold-gradient-text italic font-serif font-normal">Painted Forever</span>
          </h2>
          <p className="text-sm text-[#FAF6F0]/70 font-sans max-w-xl mx-auto font-light">
            Explore handcrafted acrylic canvas paintings created live at real celebrations.
          </p>
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="group relative rounded-lg overflow-hidden border border-[#D4AF37]/25 bg-[#121115] cursor-pointer shadow-xl transition-all duration-500 hover:border-[#D4AF37]"
            >
              <div className="h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Hover Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A090B] via-[#0A090B]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between text-[#D4AF37] mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-semibold">
                      Live Fine Art Canvas
                    </span>
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#FAF6F0]">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#F7E7C4] mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#0A090B]/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#FAF6F0] hover:text-[#D4AF37] p-2 bg-[#2A0510] border border-[#D4AF37]/40 rounded-full"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl w-full p-2 bg-[#121115] rounded-lg border border-[#D4AF37]/50 shadow-2xl">
            <img
              src={selectedImage}
              alt="Enlarged Artwork"
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <div className="p-4 text-center">
              <p className="font-heading text-sm text-[#F7E7C4] tracking-widest uppercase">
                Arsh Dhiman Art — Live Wedding Canvas
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
