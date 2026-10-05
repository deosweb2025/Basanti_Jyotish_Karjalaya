import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function CertificateCarousel() {
  const images = [
    {
      id: 1,
      src: "/assets/certificates/cert-1.jpg",
      title: "Certificate of Merit (M.Phil)",
      issuer: "Astrological Research Project - Govt. of WB",
    },
    {
      id: 2,
      src: "/assets/certificates/cert-2.jpg",
      title: "Certificate of Participation",
      issuer: "International Astrology & Oriental Heritage Conference",
    },
    {
      id: 3,
      src: "/assets/certificates/cert-3.jpg",
      title: "Golden Achievement Award",
      issuer: "11th International Astrological Conference",
    },
    {
      id: 4,
      src: "/assets/certificates/cert-4.jpg",
      title: "Jyotish Bharati (Diploma)",
      issuer: "Viswa Jyotish Vidyapith",
    },
    {
      id: 5,
      src: "/assets/certificates/cert-5.jpg",
      title: "Astrological Excellence Award",
      issuer: "Viswa Jyotish Vidyapith & Research Project",
    },
    {
      id: 6,
      src: "/assets/certificates/cert-6.jpg",
      title: "Tantra & Vastu Research Honor",
      issuer: "Astrological Research Project",
    },
    {
      id: 7,
      src: "/assets/certificates/cert-7.jpg",
      title: "Spiritual Science Achievement",
      issuer: "Govt. of West Bengal Recognized Institute",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - slidesToShow);

  // Auto-play interval: scrolls every 3.5 seconds when not hovered/modal open
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, maxIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") handleModalPrev(e);
      if (e.key === "ArrowRight") handleModalNext(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleModalPrev = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleModalNext = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <section
        id="certificates"
        className="relative w-full bg-[#0C0704] py-16 md:py-24 overflow-hidden scroll-mt-[85px] lg:scroll-mt-[110px] text-white"
      >
        {/* Background Ambient Glowing Orbs & Glass Highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFA91E]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#3E4100]/30 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFA91E] text-xs uppercase tracking-widest font-semibold">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-roboto">
              Our Certifications &amp; Awards
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFA91E] to-[#F77D0E] mx-auto rounded-full mb-6 shadow-sm"></div>
            <p className="font-roboto text-gray-300 text-[15px] sm:text-base leading-relaxed font-light">
              Smt. Amrita Maitra has been honored with prestigious accolades
              including <strong className="text-white font-semibold">Jyotish Bharati</strong>,{" "}
              <strong className="text-white font-semibold">Jyotish Vidya Bachaspati (M.Phil)</strong>, and the{" "}
              <strong className="text-white font-semibold">Golden Achievement Award</strong> from the renowned Viswa
              Jyotish Vidyapith and Astrological Research Project, Govt. of West Bengal.
            </p>
          </div>

          {/* Automatic Glass Slider Container */}
          <div
            className="relative flex flex-col items-center justify-center group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Previous Glass Control Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-2 sm:-left-3 md:-left-5 z-30 p-3 sm:p-4 rounded-full backdrop-blur-xl bg-white/10 hover:bg-[#FFA91E] border border-white/20 hover:border-[#FFA91E] text-white hover:text-black shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Carousel Viewport */}
            <div className="w-full overflow-hidden px-2 sm:px-4 py-6">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                }}
              >
                {images.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-3 md:px-4"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    {/* Glass Card Container */}
                    <div
                      onClick={() => openModal(index)}
                      className="group/card relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/[0.07] border border-white/15 hover:border-[#FFA91E]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,169,30,0.25)] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                    >
                      {/* Top Specular Glass Reflection */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

                      {/* Full View Certificate Canvas Container */}
                      <div className="relative w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] p-4 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-t-2xl overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover/card:scale-105"
                          loading="lazy"
                        />

                        {/* Full View Hover Glass Glass Overlay */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px] opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                          <div className="p-3.5 rounded-full bg-[#FFA91E] text-black shadow-lg transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                          <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-wider uppercase bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                            Click For Full View
                          </span>
                        </div>
                      </div>

                      {/* Glass Card Caption */}
                      <div className="p-4 bg-white/[0.04] backdrop-blur-md border-t border-white/10 flex flex-col justify-between flex-grow">
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover/card:text-[#FFA91E] transition-colors line-clamp-1 font-roboto">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-light line-clamp-1">
                          {item.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Glass Control Button */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-2 sm:-right-3 md:-right-5 z-30 p-3 sm:p-4 rounded-full backdrop-blur-xl bg-white/10 hover:bg-[#FFA91E] border border-white/20 hover:border-[#FFA91E] text-white hover:text-black shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Pagination Glass Indicators */}
            <div className="flex items-center space-x-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    currentIndex === idx
                      ? "w-8 bg-[#FFA91E] shadow-[0_0_12px_rgba(255,169,30,0.8)]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for HD Full View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-xl transition-all duration-300"
          onClick={closeModal}
        >
          {/* Close Glass Button */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-[#FFA91E] hover:text-black border border-white/20 rounded-full p-3 backdrop-blur-md transition-all duration-200 z-50 shadow-xl"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Previous Modal Button */}
          <button
            onClick={handleModalPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-50 text-white bg-white/10 hover:bg-[#FFA91E] hover:text-black border border-white/20 rounded-full p-3 sm:p-4 backdrop-blur-md transition-all duration-200 shadow-xl"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Image Container */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 p-3 sm:p-5 shadow-2xl flex flex-col items-center max-h-[80vh]">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-3 text-center">
                <h4 className="text-white font-bold text-base sm:text-lg">
                  {images[selectedImageIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#FFA91E]">
                  {images[selectedImageIndex].issuer}
                </p>
              </div>
            </div>

            {/* Image Counter Badge */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-wider">
              {selectedImageIndex + 1} of {images.length}
            </div>
          </div>

          {/* Next Modal Button */}
          <button
            onClick={handleModalNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-50 text-white bg-white/10 hover:bg-[#FFA91E] hover:text-black border border-white/20 rounded-full p-3 sm:p-4 backdrop-blur-md transition-all duration-200 shadow-xl"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </>
  );
}
