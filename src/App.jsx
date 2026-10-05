import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Critical layout components loaded synchronously for fast FCP/LCP
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloatingWidget from "./components/WhatsAppFloatingWidget.jsx";

// Code-split non-critical below-the-fold components using React.lazy
const CertificateCarousel = lazy(() => import("./components/CertificateCarousel.jsx"));
const WhyChooseUsSection = lazy(() => import("./components/WhyChooseUsSection.jsx"));
const CtaBanner = lazy(() => import("./components/CtaBanner.jsx"));
const SeoContentSection = lazy(() => import("./components/SeoContentSection.jsx"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection.jsx"));
const FaqSection = lazy(() => import("./components/FaqSection.jsx"));
const ContactSection = lazy(() => import("./components/ContactSection.jsx"));
const MobileNavDrawer = lazy(() => import("./components/MobileNavDrawer.jsx"));
const SearchModal = lazy(() => import("./components/SearchModal.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));

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

// Fallback skeleton loader while lazy components load
function SectionLoader() {
  return (
    <div className="w-full py-16 flex items-center justify-center bg-black/5 animate-pulse">
      <div className="w-12 h-12 rounded-full border-4 border-[#FFA91E] border-t-transparent animate-spin" />
    </div>
  );
}

function Home() {
  return (
    <main className="flex-grow">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Best Astrologer &amp; Vastu Consultant in Kolkata | Basanti Jyotish Karyalaya</title>
        <meta name="description" content="Consult Smt. Amrita Maitra (M.Phil in Astrology) at Basanti Jyotish Karyalaya. Best Astrologer in Madhyamgram, Barasat &amp; Kolkata for Vedic Astrology, Vastu Shastra &amp; Horoscope Matching." />
        <meta name="keywords" content="best astrologer in Madhyamgram kolkata, best numerologist in barasat kolkata, best tantrik near barasat, best vastu consultant in new barrackpore, best horoscope consultant in airport, best astrologer in kolkata, best vastu consultant in birati, best tantrik in dum dum cantorment, best vastu consultant in kolkata" />
        <link rel="canonical" href="http://www.basantijyotishkaryalaya.co.in/" />

        {/* OpenGraph Social Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Astrologer & Vastu Consultant in Kolkata | Basanti Jyotish Karyalaya" />
        <meta property="og:description" content="Expert Vedic Astrology, Vastu Shastra & Spiritual Remedies by Smt. Amrita Maitra (M.Phil) in Madhyamgram, Barasat & Kolkata." />
        <meta property="og:image" content="http://www.basantijyotishkaryalaya.co.in/assets/about-astrologer.jpg" />
        <meta property="og:url" content="http://www.basantijyotishkaryalaya.co.in/" />
        <meta property="og:site_name" content="Basanti Jyotish Karyalaya" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Astrologer & Vastu Consultant in Kolkata | Basanti Jyotish" />
        <meta name="twitter:description" content="Consult Smt. Amrita Maitra for accurate horoscope readings, Vastu consultation & gemstone remedies." />
        <meta name="twitter:image" content="http://www.basantijyotishkaryalaya.co.in/assets/about-astrologer.jpg" />

        {/* Enhanced JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AstrologicalService",
            "name": "Basanti Jyotish Karyalaya",
            "image": "http://www.basantijyotishkaryalaya.co.in/assets/Basanti_Logo.png",
            "url": "http://www.basantijyotishkaryalaya.co.in/",
            "telephone": "+919831419874",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2No, Sarada Sarani, Sreepur, Badamtala",
              "addressLocality": "Madhyamgram",
              "addressRegion": "West Bengal",
              "postalCode": "700130",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.6967,
              "longitude": 88.4527
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "21:00"
            },
            "description": "Basanti Jyotish Karyalaya provides top-tier Vedic astrology, Vastu Shastra consultation, numerology, tantra siddhi, and Kundali matching by M.Phil qualified astrologer Smt. Amrita Maitra across Kolkata.",
            "areaServed": ["Madhyamgram", "Barasat", "New Barrackpore", "Airport", "Birati", "Dum Dum Cantonment", "Kolkata"],
            "founder": {
              "@type": "Person",
              "name": "Smt. Amrita Maitra",
              "jobTitle": "Senior Astrologer & Vastu Consultant",
              "honorificSuffix": "M.Phil (Jyotish Vidya Bachaspati)"
            }
          })}
        </script>
      </Helmet>

      {/* 1. Home Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* Lazy loaded below-the-fold sections */}
      <Suspense fallback={<SectionLoader />}>
        {/* 4. Certificates Section */}
        <CertificateCarousel />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection />

        <CtaBanner />

        {/* SEO Rich Text Section */}
        <SeoContentSection />

        <TestimonialsSection />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Contact & WhatsApp Booking Section */}
        <ContactSection />
      </Suspense>
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

      <Suspense fallback={<SectionLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>

      {/* Multi-Column Footer & Copyright Bar */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <Suspense fallback={null}>
        {isMobileMenuOpen && (
          <MobileNavDrawer
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
        {isSearchOpen && (
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        )}
      </Suspense>

      {/* Fixed WhatsApp & Call CTA */}
      <WhatsAppFloatingWidget />
    </div>
  );
}
