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
      className="relative w-full bg-[#060e15] flex flex-col items-center py-24 px-8 overflow-hidden"
    >
      {/* Background Image - Absolute positioned */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Alert Icon */}
        <div className="relative w-[72px] aspect-[1.10769/1]">
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
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-[20.8px] font-semibold leading-[31.2px] text-white tracking-[3px] whitespace-pre">
            WARNING:
          </p>
          <h2 className="text-center text-[40px] font-bold leading-[48px] text-white whitespace-pre">
            LOCK-IN YOUR PRICE OF $49.99
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-[690px] w-full">
          <p className="text-center text-[20.8px] leading-[31.2px] text-white/70 whitespace-pre-wrap break-words">
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
        <div className="h-[68px] relative z-20">
          <a
            rel="noopener"
            href="/checkout"
            className="flex items-center justify-center gap-2 h-full bg-gradient-to-b from-[#ffa545] to-[#ffbc47] rounded-[10px] px-2 py-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
              <RightArrowIcon />
            </div>
            <p className="text-[20.8px] font-semibold leading-[20.8px] text-[#131313] uppercase whitespace-nowrap">
              JOIN The real world
            </p>
            <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
              <LeftArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
