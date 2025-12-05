'use client';

import React from 'react';

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    style={{
      color: 'rgb(19, 19, 19)',
      fill: 'rgb(19, 19, 19)'
    }}
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    style={{
      color: 'rgb(19, 19, 19)',
      fill: 'rgb(19, 19, 19)'
    }}
  >
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

export default function CopywritingFomoSection() {
  return (
    <section
      aria-label="Fomo Section"
      className="relative w-full bg-[#060e15] flex flex-col items-center py-8 sm:py-16 lg:py-24 px-4 sm:px-8 overflow-hidden"
    >
      <style>{`
        @media (max-width: 640px) {
          .fomo-alert-icon { width: 3rem; height: 3.4rem; }
          .fomo-warning-text { font-size: 1rem; line-height: 1.5rem; letter-spacing: 1.5px; }
          .fomo-title { font-size: 1.5rem; line-height: 1.8rem; }
          .fomo-description { font-size: 0.9375rem; line-height: 1.4rem; }
          .fomo-button { padding: 0.75rem 1rem; height: auto; gap: 0.5rem; font-size: 0.875rem; }
          .fomo-icon { width: 1.5rem; height: 1.5rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .fomo-alert-icon { width: 3.5rem; height: 4rem; }
          .fomo-warning-text { font-size: 1.125rem; line-height: 1.7rem; letter-spacing: 1.875px; }
          .fomo-title { font-size: 2rem; line-height: 2.4rem; }
          .fomo-description { font-size: 1.0625rem; line-height: 1.6rem; }
          .fomo-button { padding: 0.875rem 1.5rem; height: auto; gap: 0.75rem; font-size: 1rem; }
          .fomo-icon { width: 2rem; height: 2rem; }
        }
        @media (min-width: 1025px) {
          .fomo-alert-icon { width: 4.5rem; height: 5.5rem; }
          .fomo-warning-text { font-size: 1.3rem; line-height: 1.95rem; letter-spacing: 1.875px; }
          .fomo-title { font-size: 2.5rem; line-height: 3rem; }
          .fomo-description { font-size: 1.3rem; line-height: 1.95rem; }
          .fomo-button { padding: 0; height: 4.25rem; gap: 0.5rem; font-size: 1.3rem; }
          .fomo-icon { width: 2.5rem; height: 2.5rem; }
        }
      `}</style>

      {/* Background Image - Absolute positioned */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 sm:opacity-50 lg:opacity-100">
        <div className="absolute inset-0">
          <img
            decoding="auto"
            loading="lazy"
            width="1764"
            height="1490"
            alt=""
            src="https://framerusercontent.com/images/WuK5XNKSxoe9CVidCa5FjzV7bSg.png?width=1764&height=1490"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content - Relative positioned with higher z-index */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-8">
        {/* Alert Icon */}
        <div className="fomo-alert-icon relative">
          <div className="absolute inset-0">
            <img
              decoding="auto"
              loading="lazy"
              width="1250"
              height="1129"
              alt="Alert Icon"
              src="https://framerusercontent.com/images/EQAHgVSBMHVGKAO949uRHsQoBso.png?scale-down-to=512&width=1250&height=1129"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <p className="fomo-warning-text font-semibold text-white tracking-[3px] whitespace-pre">
            WARNING:
          </p>
          <h2 className="fomo-title font-bold text-white whitespace-pre-wrap text-center">
            LOCK-IN YOUR PRICE OF $49.99
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-[690px] w-full px-2 sm:px-0">
          <p className="fomo-description text-center text-white/70 whitespace-pre-wrap break-words">
            The price will increase to $147 a month, it's your last chance.
            <br />
            <br />
            Hundreds of thousands of students have already joined Hustlers
            University and are on their way to financial freedom. Join now before
            the price increases to $147 a month. Don't miss out on this
            opportunity.
          </p>
        </div>

        {/* CTA Button */}
        <div className="fomo-button relative z-20">
          <a
            rel="noopener"
            href="/checkout"
            className="fomo-button flex items-center justify-center bg-gradient-to-b from-[#ffa545] to-[#ffbc47] rounded-[10px] px-2 py-0 cursor-pointer hover:opacity-90 transition-opacity w-full"
          >
            <div className="fomo-icon flex items-center justify-center flex-shrink-0">
              <RightArrowIcon />
            </div>
            <p className="font-semibold leading-[20.8px] text-[#131313] uppercase whitespace-nowrap">
              JOIN The real world
            </p>
            <div className="fomo-icon flex items-center justify-center flex-shrink-0">
              <LeftArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
