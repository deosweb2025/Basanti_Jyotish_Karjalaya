import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
import { Helmet } from "react-helmet-async";
import Header from "./components/Header.jsx";
import MobileNavDrawer from "./components/MobileNavDrawer.jsx";
import SearchModal from "./components/SearchModal.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CertificateCarousel from "./components/CertificateCarousel.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import SeoContentSection from "./components/SeoContentSection.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloatingWidget from "./components/WhatsAppFloatingWidget.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

function Home() {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Best Astrologer & Vastu Consultant in Kolkata | Basanti Jyotish Karyalaya</title>
        <meta name="description" content="Consult the best astrologer in Madhyamgram, Kolkata. Smt. Amrita Maitra offers expert Astrology, Numerology in Barasat, Vastu in New Barrackpore, and Horoscope matching." />
        <meta name="keywords" content="best astrologer in Madhyamgram kolkata, best numerologist in barasat kolkata, best tantrik near barasat, best vastu consultant in new barrackpore, best horoscope consultant in airport, best astrologer in kolkata, best vastu consultant in birati, best tantrik in dum dum cantorment, best vastu consultant in kolkata" />
        <link rel="canonical" href="http://www.basantijyotishkaryalaya.co.in/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Basanti Jyotish Karyalaya",
            "image": "http://www.basantijyotishkaryalaya.co.in/assets/about-astrologer.jpg",
            "url": "http://www.basantijyotishkaryalaya.co.in/",
            "telephone": "+919831419874",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madhyamgram",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            },
            "description": "Basanti Jyotish Karyalaya provides the best astrology, vastu consulting, numerology, and tantrik services across Madhyamgram, Barasat, New Barrackpore, Birati, and Dum Dum Cantonment.",
            "areaServed": ["Madhyamgram", "Barasat", "New Barrackpore", "Airport", "Birati", "Dum Dum Cantonment", "Kolkata"]
          })}
        </script>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <CertificateCarousel />
      <ServicesSection />
      <CtaBanner />

      {/* SEO Rich Text Section */}
      <SeoContentSection />

      <TestimonialsSection />

      {/* SEO FAQ Section */}
      <FaqSection />
    </main>
  );
}

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

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

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
