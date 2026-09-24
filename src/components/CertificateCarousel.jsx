import React, { useState, useEffect } from "react";

export default function CertificateCarousel() {
  const images = [
    {
      id: 1,
      src: "/assets/certificates/cert-1.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.22 PM",
    },
    {
      id: 2,
      src: "/assets/certificates/cert-2.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.23 PM",
    },
    {
      id: 3,
      src: "/assets/certificates/cert-3.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.23 PM (1)",
    },
    {
      id: 4,
      src: "/assets/certificates/cert-4.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.23 PM (2)",
    },
    {
      id: 5,
      src: "/assets/certificates/cert-5.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.24 PM",
    },
    {
      id: 6,
      src: "/assets/certificates/cert-6.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.24 PM (1)",
    },
    {
      id: 7,
      src: "/assets/certificates/cert-7.jpg",
      alt: "WhatsApp Image 2024-09-09 at 1.19.24 PM (2)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

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

  const maxIndex = Math.max(0, images.length - Math.floor(slidesToShow));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Modal handlers
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
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
      <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Certifications & Awards
            </h2>
            <div className="w-24 h-1.5 bg-[#F77D0E] mx-auto rounded-full mb-6"></div>
            <p className="font-roboto text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Smt. Amrita Maitra has been honored with prestigious accolades
              including <strong>Jyotish Bharati</strong>,{" "}
              <strong>Jyotish Vidya Bachaspati (M.Phil)</strong>, and the{" "}
              <strong>Golden Achievement Award</strong> from the renowned Viswa
              Jyotish Vidyapith and Astrological Research Project, Govt. of West
              Bengal.
            </p>
          </div>

          <div className="relative flex items-center justify-center group">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-0 sm:-left-4 md:-left-6 lg:-left-8 z-20 p-2 sm:p-3 bg-white/90 hover:bg-white text-[#F77D0E] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F77D0E] focus:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 1000"
                className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
              </svg>
            </button>

            {/* Carousel Viewport */}
            <div className="w-full overflow-hidden px-2 sm:px-4 py-6">
              <div
                className="flex transition-transform duration-700 ease-in-out"
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
                    <figure
                      className="m-0 relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100 group/image h-full flex flex-col cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative overflow-hidden bg-gray-100">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover/image:scale-105"
                          loading="lazy"
                        />
                        {/* Overlay with subtle zoom hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 bg-white/80 rounded-full p-2 text-gray-800 transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-0 sm:-right-4 md:-right-6 lg:-right-8 z-20 p-2 sm:p-3 bg-white/90 hover:bg-white text-[#F77D0E] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F77D0E] focus:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 1000"
                className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors duration-200 focus:outline-none z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Modal Button */}
          <button
            onClick={handleModalPrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 sm:p-4 transition-colors duration-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Modal Image */}
          <div
            className="relative w-full max-w-5xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
            />
            {/* Image Counter */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-medium">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Modal Button */}
          <button
            onClick={handleModalNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 sm:p-4 transition-colors duration-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
