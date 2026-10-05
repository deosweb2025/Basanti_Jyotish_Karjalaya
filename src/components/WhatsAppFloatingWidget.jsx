import React, { useState } from "react";

export default function WhatsAppFloatingWidget() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end space-y-3">
      {/* 1. Real Phone / Call Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          className={`mr-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FFA91E] to-[#F77D0E] text-black text-xs font-bold shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
            activeTooltip === "call" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 hidden group-hover:block group-hover:opacity-100 group-hover:translate-x-0"
          }`}
        >
          Call: +91 98314 19874
        </div>

        {/* Real Phone Button */}
        <a
          href="tel:9831419874"
          aria-label="Call Smt. Amrita Maitra"
          onMouseEnter={() => setActiveTooltip("call")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#E67E22] via-[#FFA91E] to-[#F39C12] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(255,169,30,0.5)] hover:shadow-[0_12px_30px_rgba(255,169,30,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/40"
        >
          {/* Subtle Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#FFA91E]/50 animate-ping pointer-events-none opacity-40" />

          {/* Real Phone Icon SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* 2. Real WhatsApp Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          className={`mr-3 px-3 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
            activeTooltip === "whatsapp" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 hidden group-hover:block group-hover:opacity-100 group-hover:translate-x-0"
          }`}
        >
          Chat on WhatsApp
        </div>

        {/* Real WhatsApp Button */}
        <a
          href="https://wa.me/919831419874"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setActiveTooltip("whatsapp")}
          onMouseLeave={() => setActiveTooltip(null)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/40"
        >
          {/* Subtle Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-ping pointer-events-none opacity-40" />

          {/* Real WhatsApp Official Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
