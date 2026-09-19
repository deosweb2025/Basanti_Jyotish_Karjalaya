import React, { useState, useEffect } from 'react';

export default function CertificateCarousel() {
  const images = [
    { id: 1, src: '/assets/certificates/cert-1.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.22 PM' },
    { id: 2, src: '/assets/certificates/cert-2.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.23 PM' },
    { id: 3, src: '/assets/certificates/cert-3.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.23 PM (1)' },
    { id: 4, src: '/assets/certificates/cert-4.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.23 PM (2)' },
    { id: 5, src: '/assets/certificates/cert-5.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.24 PM' },
    { id: 6, src: '/assets/certificates/cert-6.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.24 PM (1)' },
    { id: 7, src: '/assets/certificates/cert-7.jpg', alt: 'WhatsApp Image 2024-09-09 at 1.19.24 PM (2)' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1.5);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - Math.floor(slidesToShow));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="relative w-full bg-white py-[50px] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative flex items-center">
          {/* Exact Elementor Left Arrow SVG in #F77D0E */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute -left-2 sm:-left-6 z-20 p-1 text-[#F77D0E] hover:scale-110 transition-transform focus:outline-none"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 1000"
              className="w-8 h-8 sm:w-10 sm:h-10 fill-[#F77D0E]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>

          {/* Carousel Viewport */}
          <div className="w-full overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {images.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <figure className="m-0 text-center">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-[220px] sm:h-[260px] object-cover rounded shadow-sm"
                      loading="lazy"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Exact Elementor Right Arrow SVG in #F77D0E */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute -right-2 sm:-right-6 z-20 p-1 text-[#F77D0E] hover:scale-110 transition-transform focus:outline-none"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 1000"
              className="w-8 h-8 sm:w-10 sm:h-10 fill-[#F77D0E]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
