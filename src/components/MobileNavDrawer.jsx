import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Service", href: "/services" },
    { label: "Certificates", href: "/#certificates" },
    { label: "Why Choose Us", href: "/#why-choose-us" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
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
          <div className="flex items-center space-x-3">
            <img
              src="/assets/Basanti_Logo.png"
              alt="Basanti Logo"
              className="h-12 w-auto object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            />
            <div className="flex flex-col">
              <span className="font-roboto font-extrabold text-lg text-[#FFA91E] leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Basanti Jyotish
              </span>
              <span className="font-roboto font-bold text-xs text-white tracking-[0.15em] uppercase leading-tight">
                Karyalaya
              </span>
            </div>
          </div>
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
