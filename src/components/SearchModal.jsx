import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const lower = query.toLowerCase();
    if (lower.includes('about')) {
      window.location.hash = '#about';
    } else if (lower.includes('service') || lower.includes('astrology') || lower.includes('vastu') || lower.includes('gem')) {
      window.location.hash = '#service';
    } else if (lower.includes('test') || lower.includes('review')) {
      window.location.hash = '#testimonial';
    } else if (lower.includes('contact') || lower.includes('call') || lower.includes('phone')) {
      window.location.hash = '#footer';
    } else {
      window.location.hash = '#service';
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
        aria-label="Close search"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-xl">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search services, consultations..."
            autoFocus
            className="w-full bg-white/10 text-white placeholder-gray-400 text-lg sm:text-xl px-6 py-4 pr-14 rounded-full border border-white/20 focus:outline-none focus:border-[#FFA91E] shadow-xl"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#FFA91E] p-2 transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd> to close
        </p>
      </div>
    </div>
  );
}

