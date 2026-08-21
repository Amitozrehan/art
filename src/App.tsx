import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Page 1 Components
import { Hero } from './components/home/Hero';
import { ArtistProfile } from './components/home/ArtistProfile';
import { WhyLivePainting } from './components/home/WhyLivePainting';
import { ProcessTimeline } from './components/home/ProcessTimeline';
import { Gallery } from './components/home/Gallery';
import { FinalCTA } from './components/home/FinalCTA';

// Page 2 Components
import { PackagesHeader } from './components/packages/PackagesHeader';
import { PackageCards } from './components/packages/PackageCards';
import { TestimonialCarousel } from './components/packages/TestimonialCarousel';
import { PackagesInstagramCTA } from './components/packages/PackagesInstagramCTA';

// Page 3 Component
import { BookingForm } from './components/booking/BookingForm';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('artist');
  const [selectedPackage, setSelectedPackage] = useState<string>('Grand');

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToArtist = () => {
    const el = document.getElementById('artist-profile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    handleNavigate('book');
  };

  return (
    <div className="min-h-screen bg-[#0A090B] text-[#FAF6F0] flex flex-col font-sans relative">
      {/* Global Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* PAGE 1: ARTIST / HOME */}
        {currentPage === 'artist' && (
          <div>
            <Hero onNavigate={handleNavigate} onScrollToArtist={handleScrollToArtist} />
            <ArtistProfile />
            <WhyLivePainting />
            <ProcessTimeline onNavigate={handleNavigate} />
            <Gallery />
            <FinalCTA onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 2: REVIEWS & PACKAGES */}
        {currentPage === 'reviews-packages' && (
          <div>
            <PackagesHeader />
            <PackageCards onSelectPackage={handlePackageSelect} />
            <TestimonialCarousel />
            <PackagesInstagramCTA />
            <FinalCTA onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 3: BOOK YOUR DATE */}
        {currentPage === 'book' && (
          <div>
            <BookingForm initialPackage={selectedPackage} onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Global Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
