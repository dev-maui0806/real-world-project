'use client';

import React from 'react';

export default function CopywritingIntroduction() {
  return (
    <section className="flex flex-col items-center gap-20 w-full bg-[#060e15] overflow-hidden py-28 px-16">
      <div className="flex gap-20 w-full max-w-[1200px] mx-auto">
        {/* Left Content Column */}
        <div className="flex flex-col flex-grow gap-6">
          {/* Main Content Block */}
          <div className="flex flex-col gap-8">
            {/* Introduction Label */}
            <div className="flex flex-col w-full">
              <p className="text-center text-base leading-6 text-[#ffa545]">
                Introduction
              </p>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div className="flex flex-col">
                <h2 className="text-center text-[48px] font-bold leading-[57.6px] text-white whitespace-pre-wrap">
                  Master the Art of Copywriting with Millionaire Professor Andrew Bass.
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <p className="text-center text-[18px] leading-[27px] text-white/70 whitespace-pre-wrap">
                  Welcome to "The Real World Copywriting Course" led by Professor Andrew Bass. With over a million dollars in earnings from his copywriting skills, Professor Bass is here to guide you through the world of copywriting and help you unlock the potential to earn a six-figure income.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col gap-6 py-2">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-center text-[20px] font-bold leading-7 text-white whitespace-pre-wrap">
                  Why Copywriting?
                </h3>
              </div>
              <div className="flex flex-col">
                <p className="text-center text-base leading-6 text-white/70 whitespace-pre-wrap">
                  Because it's more than just writing—it's a strategic tool for success.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h3 className="text-center text-[20px] font-bold leading-7 text-white whitespace-pre-wrap">
                  Unleash Potential
                </h3>
              </div>
              <div className="flex flex-col">
                <p className="text-center text-base leading-6 text-white/70 whitespace-pre-wrap">
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
          className="flex items-center justify-center rounded-[50px] text-white cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: 'linear-gradient(310deg, rgb(255, 136, 56) 0%, rgb(255, 181, 76) 100%)',
            padding: '16px 32px',
            minWidth: 'min-content',
          }}
        >
          <span className="text-center text-[26px] font-black leading-[34px] text-[#080d0d] uppercase whitespace-nowrap">
            Join Now
          </span>
        </a>
      </div>
    </section>
  );
}
