import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Anjali Roy',
      content:
        'Basanti Jyotish has been a game-changer for me. The guidance I received helped me make crucial decisions in my career and personal life. Highly recommended!',
    },
    {
      name: 'Rakesh Mehra',
      content:
        'The astrological insights provided by Basanti Jyotish were incredibly accurate and enlightening. Their expert advice gave me a fresh perspective on handling challenges.',
    },
    {
      name: 'Sonal Gupta',
      content:
        'I am grateful for the clear and precise readings from Basanti Jyotish. The remedies suggested have brought positivity and balance into my life. Truly remarkable service!',
    },
  ];

  return (
    <section
      id="testimonial"
      className="relative w-full bg-cover bg-no-repeat bg-center py-[50px] lg:py-[100px] scroll-mt-[70px] lg:scroll-mt-[100px]"
      style={{
        backgroundImage: `url('/assets/testimonials-bg.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      {/* Rule 110: Multiply Overlay linear-gradient(180deg, #36CC00 0%, #154700 100%) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(180deg, #36CC00 0%, #154700 100%)',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rule 111: Header Container (padding 50px 0 70px 0 on desktop, 0 on mobile) */}
        <div className="text-left md:text-center max-w-2xl mx-auto pt-0 md:pt-[50px] pb-8 md:pb-[70px]">
          <h2 className="font-aclonica font-normal text-white text-[30px] lg:text-[40px] leading-[1.3] mb-3">
            What peoples say about us
          </h2>
          <p className="font-roboto text-white text-base sm:text-lg leading-relaxed">
            Let's see what they say about us and what was their experience with us.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid with exact radial-gradient(at top left, #3E4100 29%, #FFA91E 100%) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-[30px] rounded-[10px] text-left flex flex-col justify-between"
              style={{
                backgroundImage: 'radial-gradient(at top left, #3E4100 29%, #FFA91E 100%)',
                boxShadow: '0px 20px 70px 0px rgba(192, 198, 211, 0.25)',
              }}
            >
              <p className="font-roboto font-normal text-white text-[17px] leading-relaxed mb-6">
                "{item.content}"
              </p>
              <div>
                <span className="font-roboto font-semibold text-white text-[17px] block">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
