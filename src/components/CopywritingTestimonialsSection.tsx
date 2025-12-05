'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote: 'Thank you to this campus for earning me a lot of money through digital marketing. I have signed on 2 clients on a commission basis and another on a continous basis, whenever they require my services. Have created logos, slogans small services for around a dozen other people. Waiting for a $290 payment for another ongoing deal as well.'
  },
  {
    id: 2,
    stars: 5,
    quote: 'Much Love to you Andrew for teaching me a lot of things and much love to the cc+ai campus for helping in my journey as well. Merged all the knowledge from copywriting and cc+ai campuses and got me a 2nd client for a 200cad weekly retainer.'
  }
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="w-5 h-5"
    style={{
      color: 'rgb(255, 165, 69)',
      fill: 'rgb(255, 165, 69)'
    }}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function CopywritingTestimonialsSection() {
  return (
    <section className="w-full bg-[#050e15] flex flex-col items-center py-8 sm:py-16 lg:py-28 px-4 sm:px-8 gap-8 sm:gap-12 lg:gap-20" aria-label="testimonials section">
      <style>{`
        @media (max-width: 640px) {
          .testimonials-title { font-size: 1.5rem; line-height: 1.8rem; }
          .testimonial-quote { font-size: 1rem; line-height: 1.4rem; }
          .testimonial-gap { gap: 2rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .testimonials-title { font-size: 1.875rem; line-height: 2.25rem; }
          .testimonial-quote { font-size: 1.125rem; line-height: 1.6rem; }
          .testimonial-gap { gap: 2rem; }
        }
        @media (min-width: 1025px) {
          .testimonials-title { font-size: 2.25rem; line-height: 2.7rem; }
          .testimonial-quote { font-size: 1.3125rem; line-height: 1.75rem; }
          .testimonial-gap { gap: 4rem; }
        }
      `}</style>

      <div className="w-full max-w-6xl flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="testimonials-title font-bold text-white leading-tight tracking-tight">
            We've taught over 200,000+<br className="hidden sm:inline" />
            Students how to grow their Income<br className="hidden sm:inline" />
            <br />
            Now we can do it for you.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 sm:gap-8"
            >
              {/* Star Rating */}
              <div className="flex gap-0 h-5">
                {[...Array(testimonial.stars)].map((_, idx) => (
                  <div key={idx} className="w-5 h-5">
                    <StarIcon />
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="testimonial-quote font-bold text-white whitespace-pre-wrap leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
