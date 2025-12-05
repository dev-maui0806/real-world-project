'use client';

import React from 'react';

export default function CopywritingIntroduction() {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-20 w-full bg-[#060e15] overflow-hidden py-8 sm:py-16 lg:py-28 px-4 sm:px-8 lg:px-16">
      <style>{`
        @media (max-width: 640px) {
          .intro-label { font-size: 0.875rem; line-height: 1.5rem; }
          .intro-title { font-size: 1.5rem; line-height: 1.8rem; }
          .intro-description { font-size: 0.9375rem; line-height: 1.35rem; }
          .intro-feature-title { font-size: 0.9375rem; line-height: 0.875rem; }
          .intro-feature-description { font-size: 0.75rem; line-height: 1.5rem; }
          .intro-button { padding: 0.75rem 1.25rem; font-size: 1rem; }
          .intro-max-width { max-width: 100%; }
          .intro-gap { gap: 1.5rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .intro-label { font-size: 1rem; line-height: 1.5rem; }
          .intro-title { font-size: 1.75rem; line-height: 2.1rem; }
          .intro-description { font-size: 1rem; line-height: 1.5rem; }
          .intro-feature-title { font-size: 1.125rem; line-height: 1rem; }
          .intro-feature-description { font-size: 0.9375rem; line-height: 1.5rem; }
          .intro-button { padding: 0.875rem 1.5rem; font-size: 1.125rem; }
          .intro-max-width { max-width: 90%; }
          .intro-gap { gap: 2rem; }
        }
        @media (min-width: 1025px) {
          .intro-label { font-size: 1rem; line-height: 1.5rem; }
          .intro-title { font-size: 3rem; line-height: 3.6rem; }
          .intro-description { font-size: 1.125rem; line-height: 1.7rem; }
          .intro-feature-title { font-size: 1.25rem; line-height: 1.75rem; }
          .intro-feature-description { font-size: 1rem; line-height: 1.5rem; }
          .intro-button { padding: 1rem 2rem; font-size: 1.625rem; }
          .intro-max-width { max-width: 100%; }
          .intro-gap { gap: 1.5rem; }
        }
      `}</style>

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-20 w-full intro-max-width mx-auto">
        {/* Left Content Column */}
        <div className="flex flex-col flex-grow gap-4 sm:gap-6">
          {/* Main Content Block */}
          <div className="flex flex-col gap-4 sm:gap-8">
            {/* Introduction Label */}
            <div className="flex flex-col w-full">
              <p className="intro-label text-center leading-6 text-[#ffa545]">
                Introduction
              </p>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Title */}
              <div className="flex flex-col">
                <h2 className="intro-title text-center font-bold leading-[57.6px] text-white whitespace-pre-wrap">
                  Master the Art of Copywriting with Millionaire Professor Andrew Bass.
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <p className="intro-description text-center text-white/70 whitespace-pre-wrap">
                  Welcome to "The Real World Copywriting Course" led by Professor Andrew Bass. With over a million dollars in earnings from his copywriting skills, Professor Bass is here to guide you through the world of copywriting and help you unlock the potential to earn a six-figure income.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col gap-3 sm:gap-6 py-1 sm:py-2">
            {/* Feature 1 */}
            <div className="flex flex-col intro-gap">
              <div className="flex flex-col">
                <h3 className="intro-feature-title text-center font-bold text-white whitespace-pre-wrap">
                  Why Copywriting?
                </h3>
              </div>
              <div className="flex flex-col">
                <p className="intro-feature-description text-center text-white/70 whitespace-pre-wrap">
                  Because it's more than just writing—it's a strategic tool for success.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col intro-gap">
              <div className="flex flex-col">
                <h3 className="intro-feature-title text-center font-bold text-white whitespace-pre-wrap">
                  Unleash Potential
                </h3>
              </div>
              <div className="flex flex-col">
                <p className="intro-feature-description text-center text-white/70 whitespace-pre-wrap">
                  Copywriting is the art of persuading your audience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Now Button */}
      <div style={{
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
      }}>
        <a
          href="/checkout"
          rel="noopener"
          className="intro-button flex items-center justify-center rounded-[50px] text-white cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: 'linear-gradient(310deg, rgb(255, 136, 56) 0%, rgb(255, 181, 76) 100%)',
            minWidth: 'min-content',
          }}
        >
          <span className="text-center font-black leading-[34px] text-[#080d0d] uppercase whitespace-nowrap">
            Join Now
          </span>
        </a>
      </div>
    </section>
  );
}
