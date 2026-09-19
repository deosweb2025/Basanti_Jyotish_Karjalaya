import React, { useState } from 'react';
import Header from './components/Header.jsx';
import MobileNavDrawer from './components/MobileNavDrawer.jsx';
import SearchModal from './components/SearchModal.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import AboutSection from './components/AboutSection.jsx';
import CertificateCarousel from './components/CertificateCarousel.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloatingWidget from './components/WhatsAppFloatingWidget.jsx';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col relative selection:bg-[#FFA91E] selection:text-white">
      {/* Header with Sticky & Transparent overlay */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Single-Page Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CertificateCarousel />
        <ServicesSection />
        <CtaBanner />
        <TestimonialsSection />
      </main>

      {/* Multi-Column Footer & Copyright Bar */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Fixed WhatsApp CTA */}
      <WhatsAppFloatingWidget />
    </div>
  );
}

