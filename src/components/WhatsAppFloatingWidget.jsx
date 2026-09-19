import React, { useState } from 'react';

export default function WhatsAppFloatingWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-[15px] right-[15px] z-50 flex items-center">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="mr-3 bg-[#25D366] text-white text-sm font-medium px-3 py-1.5 rounded shadow-lg whitespace-nowrap transition-opacity animate-fade-in">
          WhatsApp us
        </div>
      )}

      {/* WhatsApp circular button */}
      <a
        href="https://wa.me/919831419874"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-[50px] h-[50px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          className="fill-current text-white"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.771.869 2.796.869 3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.388-.45-4.825-1.238l-7.175 1.88 1.91-6.974c-.878-1.488-1.39-3.23-1.39-5.088 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
        </svg>
      </a>
    </div>
  );
}

