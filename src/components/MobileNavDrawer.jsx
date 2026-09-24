import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Service", href: "/services" },
    { label: "Testimonials", href: "/#testimonial" },
    { label: "Contact", href: "/#footer" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel: exact Blocksy background rgba(18, 21, 25, 0.98) */}
      <div
        className="relative ml-auto w-[90vw] sm:w-[65vw] max-w-sm h-full shadow-2xl flex flex-col p-6 z-10"
        style={{ backgroundColor: "rgba(18, 21, 25, 0.98)" }}
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="font-roboto font-bold text-lg text-[#FFA91E]">
            Basanti Jyotish
          </span>
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="text-white hover:text-[#FFA91E] p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu items: 20px, bold, uppercase, white */}
        <nav className="flex flex-col py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={onClose}
              className="font-roboto font-bold text-[20px] uppercase text-white hover:text-[#FFA91E] transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10 text-sm text-gray-400">
          <a
            href="tel:9831419874"
            className="inline-block bg-[#FFA91E] text-[#0C0606] font-bold px-4 py-3 rounded text-center w-full hover:bg-white transition-colors"
          >
            Call: +91 98314 19874
          </a>
        </div>
      </div>
    </div>
  );
}
