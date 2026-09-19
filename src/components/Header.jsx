import React, { useState, useEffect } from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header({ onOpenSearch, onOpenMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#service' },
    { label: 'Testimonials', href: '#testimonial' },
    { label: 'Conatct', href: '#footer' }, // Preserving exact WordPress menu label & anchor
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-[#0C0606] h-[70px] lg:h-[100px] shadow-[0px_10px_20px_rgba(43,61,80,0.06)]'
          : 'bg-[#000000] sm:bg-[rgba(255,255,255,0.48)] border-b border-white/10 h-[70px] lg:h-[100px]'
      } flex items-center`}
    >
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Site Title: 20px bold */}
        <a
          href="#home"
          className={`font-roboto font-bold text-[20px] transition-colors ${
            isSticky
              ? 'text-[#FFA91E]'
              : 'text-[#FFA91E] sm:text-[#102136] hover:text-[#ffe6a2]'
          }`}
        >
          Basanti Jyotish Karyalaya
        </a>

        {/* Desktop Navigation: 12px uppercase bold, 30px spacing */}
        <div className="hidden lg:flex items-center space-x-[30px]">
          <nav className="flex items-center space-x-[30px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-roboto font-bold text-[12px] uppercase tracking-wider transition-colors ${
                  isSticky
                    ? 'text-[#d8d8d8] hover:text-[#FFA91E]'
                    : 'text-[#E7EBEE] hover:text-[#FFA91E]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search Trigger Icon */}
          <button
            onClick={onOpenSearch}
            aria-label="Open Search"
            className={`p-1 transition-colors ${
              isSticky
                ? 'text-[#d8d8d8] hover:text-[#FFA91E]'
                : 'text-[#E7EBEE] hover:text-[#FFA91E]'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile & Tablet Trigger Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenSearch}
            aria-label="Open Search"
            className="text-white hover:text-[#FFA91E] p-2 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenMobileMenu}
            aria-label="Open Menu"
            className="text-[#FF3D0D] hover:text-[#FFA91E] p-2 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
