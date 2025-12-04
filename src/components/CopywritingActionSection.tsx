'use client';

import React from 'react';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    style={{
      color: 'rgb(255, 165, 69)',
      fill: 'rgb(255, 165, 69)'
    }}
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

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

export default function CopywritingActionSection() {
  return (
    <section className="w-full bg-[#050e15] flex flex-col items-center py-24 px-8">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-16">
          <h2 className="text-center text-[56px] font-bold leading-[64px] text-white whitespace-pre-wrap">
            Get access to the Worlds best Education platform for only $49.99
          </h2>

          {/* Video Container */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[924px] h-[515px] rounded-[10px] overflow-hidden bg-black">
              <iframe
                src="https://player.vimeo.com/video/861012892?autopause=0&app_id=122963"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="YOU HAVE TWO OPTIONS"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content Section with Card and Details */}
        <div className="w-full flex flex-col items-center gap-4">
          {/* Card with Features */}
          <div className="relative bg-gradient-to-b from-[#1a1d24] to-[#131313] rounded-[20px] shadow-lg p-8 w-full max-w-[600px]">
            {/* Title */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <p className="text-center text-[32px] font-bold leading-[38.4px] text-white uppercase">
                Take Action
              </p>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-start gap-4 mb-8">
              {/* Price Display */}
              <div className="flex items-center gap-2">
                <p className="text-[35px] font-medium text-[#8d8f92] line-through">
                  $147
                </p>
                <p className="text-[35px] font-bold text-[#ffa545]">
                  $49.99
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-4 w-full">
                {/* Feature 1 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    Simple-step-by-step tutorials
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    19 wealth creation methods
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    Access to millionaire mentors
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    Community chat groups
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    No experience
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-8 w-8 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    New, custom-made app
                  </p>
                </div>

                {/* Icon and Text 1 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="relative w-[26px] aspect-[0.8125/1] flex-shrink-0">
                    <img
                      decoding="auto"
                      loading="lazy"
                      width="108"
                      height="133"
                      alt="Risk-free"
                      src="https://framerusercontent.com/images/bR2p5E6K7H6EkrqlA04JszTWoM.png?width=108&height=133"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    Cancel anytime, risk-free
                  </p>
                </div>

                {/* Icon and Text 2 */}
                <div className="flex items-center gap-4 w-full">
                  <div className="relative w-[25px] aspect-[0.78125/1] flex-shrink-0">
                    <img
                      decoding="auto"
                      loading="lazy"
                      width="104"
                      height="133"
                      alt="Monthly pricing"
                      src="https://framerusercontent.com/images/8U8yZ2SZsAzbt2pO5cBExJ4924.png?width=104&height=133"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[20.8px] font-medium text-white/72">
                    $49.99/month forever
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-[68px] w-full max-w-[562px]">
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

              {/* Bottom Text */}
              <p className="text-center text-base font-medium text-white leading-6 whitespace-pre-wrap">
                Limited spots available.
                <span className="text-[#ffa545] font-medium"> Act fast.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
