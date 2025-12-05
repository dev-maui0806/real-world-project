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
    <section className="w-full bg-[#050e15] flex flex-col items-center py-8 sm:py-16 lg:py-24 px-4 sm:px-8">
      <style>{`
        @media (max-width: 640px) {
          .action-title { font-size: 1.5rem; line-height: 1.8rem; }
          .action-video { height: auto; aspect-ratio: 16/9; border-radius: 0.75rem; }
          .action-card { padding: 1.5rem; }
          .action-card-title { font-size: 1.25rem; line-height: 1.5rem; }
          .action-price { font-size: 1.5rem; }
          .action-old-price { font-size: 1.5rem; }
          .action-feature { font-size: 0.9375rem; gap: 0.75rem; }
          .action-icon { width: 1.5rem; height: 1.5rem; }
          .action-button { padding: 0.75rem 1rem; font-size: 0.875rem; height: auto; }
          .action-bottom-text { font-size: 0.875rem; }
          .action-image-container { width: 1rem; aspect-ratio: auto; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .action-title { font-size: 2rem; line-height: 2.4rem; }
          .action-video { height: auto; aspect-ratio: 16/9; border-radius: 0.875rem; }
          .action-card { padding: 2rem; }
          .action-card-title { font-size: 1.5rem; line-height: 1.8rem; }
          .action-price { font-size: 2rem; }
          .action-old-price { font-size: 2rem; }
          .action-feature { font-size: 1rem; gap: 1rem; }
          .action-icon { width: 2rem; height: 2rem; }
          .action-button { padding: 0.875rem 1.5rem; font-size: 1rem; height: auto; }
          .action-bottom-text { font-size: 1rem; }
          .action-image-container { width: 1.25rem; aspect-ratio: auto; }
        }
        @media (min-width: 1025px) {
          .action-title { font-size: 3.5rem; line-height: 4rem; }
          .action-video { height: 515px; border-radius: 0.625rem; }
          .action-card { padding: 2rem; }
          .action-card-title { font-size: 2rem; line-height: 2.4rem; }
          .action-price { font-size: 2.1875rem; }
          .action-old-price { font-size: 2.1875rem; }
          .action-feature { font-size: 1.3rem; gap: 1rem; }
          .action-icon { width: 2rem; height: 2rem; }
          .action-button { padding: 0; font-size: 1.3rem; height: 4.25rem; }
          .action-bottom-text { font-size: 1rem; }
          .action-image-container { width: 1.625rem; aspect-ratio: auto; }
        }
      `}</style>

      <div className="w-full max-w-[1200px] flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-16">
          <h2 className="action-title text-center font-bold leading-[64px] text-white whitespace-pre-wrap px-2">
            Get access to the Worlds best Education platform for only $49.99
          </h2>

          {/* Video Container */}
          <div className="w-full flex justify-center px-2 sm:px-0">
            <div className="action-video relative w-full max-w-[924px] rounded-[10px] overflow-hidden bg-black">
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
        <div className="w-full flex flex-col items-center gap-4 px-2 sm:px-0">
          {/* Card with Features */}
          <div className="action-card relative bg-gradient-to-b from-[#1a1d24] to-[#131313] rounded-[20px] shadow-lg w-full max-w-[600px]">
            {/* Title */}
            <div className="flex flex-col items-center gap-2 mb-4 sm:mb-8">
              <p className="action-card-title text-center font-bold leading-[38.4px] text-white uppercase">
                Take Action
              </p>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-start gap-3 sm:gap-4 mb-4 sm:mb-8">
              {/* Price Display */}
              <div className="flex items-center gap-2 flex-wrap">
                <p className="action-old-price font-medium text-[#8d8f92] line-through">
                  $147
                </p>
                <p className="action-price font-bold text-[#ffa545]">
                  $49.99
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-2 sm:gap-4 w-full">
                {/* Feature 1 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    Simple-step-by-step tutorials
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    19 wealth creation methods
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    Access to millionaire mentors
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    Community chat groups
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    No experience
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-icon flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="font-medium text-white/72 flex-1">
                    New, custom-made app
                  </p>
                </div>

                {/* Icon and Text 1 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-image-container flex-shrink-0">
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
                  <p className="font-medium text-white/72 flex-1">
                    Cancel anytime, risk-free
                  </p>
                </div>

                {/* Icon and Text 2 */}
                <div className="action-feature flex items-center w-full">
                  <div className="action-image-container flex-shrink-0">
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
                  <p className="font-medium text-white/72 flex-1">
                    $49.99/month forever
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-2">
              <div className="action-button w-full max-w-[562px]">
                <a
                  rel="noopener"
                  href="/checkout"
                  className="action-button flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-[#ffa545] to-[#ffbc47] rounded-[10px] px-2 py-0 cursor-pointer hover:opacity-90 transition-opacity w-full"
                >
                  <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
                    <RightArrowIcon />
                  </div>
                  <p className="font-semibold leading-[20.8px] text-[#131313] uppercase whitespace-nowrap">
                    JOIN The real world
                  </p>
                  <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
                    <LeftArrowIcon />
                  </div>
                </a>
              </div>

              {/* Bottom Text */}
              <p className="action-bottom-text text-center font-medium text-white leading-6 whitespace-pre-wrap">
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
