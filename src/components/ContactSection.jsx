import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Calendar, User, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Vedic Astrology Consultation",
    date: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Vedic Astrology Consultation",
    "Horoscope Matching (Jotuk Milon)",
    "Vastu Shastra Consultation",
    "Palmistry & Hand Reading",
    "Numerology Analysis",
    "Gemstone Therapy & Remedies",
    "Tantra & Mantra Spiritual Guidance",
    "General Inquiry",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your Name and Phone Number.");
      return;
    }

    // Format WhatsApp pre-filled message with line breaks
    const messageText = `Hello Smt. Amrita Maitra,
I would like to request an astrological consultation at Basanti Jyotish Karyalaya:

📌 *Full Name:* ${formData.name.trim()}
📞 *Phone / WhatsApp:* ${formData.phone.trim()}
🔮 *Service Requested:* ${formData.service}
📅 *Preferred Date/Time:* ${formData.date.trim() || "Earliest Available"}
📍 *City / Area:* ${formData.location.trim() || "Not specified"}
💬 *Message / Questions:* ${formData.message.trim() || "No additional notes"}

Please confirm the appointment slot and consultation details. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919831419874?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset feedback after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0606] py-16 md:py-24 text-white scroll-mt-[85px] lg:scroll-mt-[110px] overflow-hidden"
    >
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#FFA91E]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3E4100]/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFA91E] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Book Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-roboto">
            Ask For Service &amp; Book Via WhatsApp
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFA91E] to-[#F77D0E] mx-auto rounded-full mb-6 shadow-sm"></div>
          <p className="font-roboto text-gray-300 text-[15px] sm:text-base leading-relaxed font-light">
            Select your desired service, fill in your details, and submit directly to receive instant appointment confirmation from Smt. Amrita Maitra on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details & Chamber Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.05] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA91E]/10 blur-2xl rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-2 font-roboto">
                Basanti Jyotish Karyalaya
              </h3>
              <p className="text-xs text-[#FFA91E] uppercase tracking-widest font-semibold mb-6">
                Chamber &amp; Consultation Center
              </p>

              <div className="space-y-6 text-gray-300 text-sm font-light">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#FFA91E] group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FFA91E] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Chamber Address</h4>
                    <p className="leading-relaxed text-gray-300">
                      2No, Sarada Sarani, Sreepur, Badamtala, Madhyamgram, West Bengal, Kolkata - 700130
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#FFA91E] group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#FFA91E] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Call / WhatsApp Consultation</h4>
                    <a
                      href="tel:9831419874"
                      className="text-gray-300 hover:text-[#FFA91E] transition-colors block"
                    >
                      +91 98314 19874
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#FFA91E] group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FFA91E] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Email Inquiry</h4>
                    <a
                      href="mailto:amritamaitra95@gmail.com"
                      className="text-gray-300 hover:text-[#FFA91E] transition-colors break-all block"
                    >
                      amritamaitra95@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Call Banner */}
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#25D366] uppercase tracking-wider">Need Urgent Guidance?</p>
                  <p className="text-xs text-gray-300 mt-0.5">Chat directly with Smt. Amrita Maitra</p>
                </div>
                <a
                  href="https://wa.me/919831419874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-lg transition-all transform hover:scale-105"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic WhatsApp Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 backdrop-blur-xl bg-white/[0.07] border border-white/20 shadow-2xl relative">
              <h3 className="text-2xl font-extrabold text-white mb-1 font-roboto">
                Service Request Form
              </h3>
              <p className="text-xs text-gray-300 mb-8 font-light">
                Fill in the details below. Clicking submit will automatically open WhatsApp with your pre-formatted request.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center gap-3 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Redirecting to WhatsApp with your details... Please press Send in WhatsApp!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Mr. Suman Bar"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98314 19874"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                    Select Required Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#130E07] border border-white/20 text-white focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-[#130E07] text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                      Preferred Consultation Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                      Your City / Area
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Madhyamgram / Barasat"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                    Your Question / Additional Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention birth details (Date/Time/Place) or specific problem..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFA91E] focus:ring-1 focus:ring-[#FFA91E] text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20ba5a] to-[#128C7E] hover:from-[#20ba5a] hover:to-[#0e7065] text-white font-extrabold text-base tracking-wide shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Details &amp; Connect On WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
