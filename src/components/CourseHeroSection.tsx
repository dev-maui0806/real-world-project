'use client';

import React from 'react';

interface CourseHeroSectionProps {
  title: {
    main: string;
    highlight: string;
  };
  description: string[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  stats?: {
    number: string;
    text: string;
  };
  badge?: string;
  videoSrc?: string;
}

export default function CourseHeroSection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  badge,
  videoSrc,
}: CourseHeroSectionProps) {
  return (
    <main className="flex flex-col items-center w-full bg-[#060e15] overflow-hidden">
      <style>{`
        @media (max-width: 640px) {
          .hero-main-gap { gap: 2rem; }
          .hero-top-gap { gap: 2rem; }
          .hero-logo { width: 120px !important; height: 120px !important; }
          .hero-title { font-size: 1.5rem; line-height: 1.8rem; letter-spacing: 0.5px; }
          .hero-description { font-size: 1rem; line-height: 1.4rem; }
          .hero-buttons { flex-direction: column; gap: 0.75rem; }
          .hero-button { padding: 0.75rem 1.25rem; font-size: 0.875rem; }
          .hero-video { width: 100% !important; height: auto !important; aspect-ratio: 16/9; border-radius: 1rem; max-width: none; }
          .hero-stats-box { padding: 1.5rem; max-width: 100%; margin: 0 1rem; }
          .hero-stats-number { font-size: 1.5rem; }
          .hero-stats-text { font-size: 1rem; line-height: 1.4rem; }
          .hero-badge { font-size: 1rem; }
          .hero-content-padding { padding: 2rem 1rem; }
          .hero-video-padding { padding: 0 1rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-main-gap { gap: 3rem; }
          .hero-top-gap { gap: 3rem; }
          .hero-logo { width: 140px !important; height: 140px !important; }
          .hero-title { font-size: 2.25rem; line-height: 2.7rem; letter-spacing: 1px; }
          .hero-description { font-size: 1.125rem; line-height: 1.6rem; }
          .hero-buttons { flex-direction: row; gap: 0.75rem; flex-wrap: wrap; }
          .hero-button { padding: 0.875rem 1.75rem; font-size: 0.9375rem; }
          .hero-video { width: 100% !important; height: auto !important; aspect-ratio: 16/9; border-radius: 1.25rem; max-width: 700px; }
          .hero-stats-box { padding: 2rem; max-width: 800px; }
          .hero-stats-number { font-size: 1.75rem; }
          .hero-stats-text { font-size: 1.125rem; line-height: 1.6rem; }
          .hero-badge { font-size: 1.125rem; }
          .hero-content-padding { padding: 3rem 2rem; }
          .hero-video-padding { padding: 0 2rem; }
        }
        @media (min-width: 1025px) {
          .hero-main-gap { gap: 6.875rem; }
          .hero-top-gap { gap: 4rem; }
          .hero-logo { width: 215px !important; height: 162px !important; }
          .hero-title { font-size: 3.625rem; line-height: 4.25rem; letter-spacing: 1.25px; }
          .hero-description { font-size: 1.5rem; line-height: 1.8rem; }
          .hero-buttons { flex-direction: row; gap: 0.625rem; }
          .hero-button { padding: 1rem 2rem; font-size: 1rem; }
          .hero-video { width: 972px !important; height: 552px !important; border-radius: 1.5rem; }
          .hero-stats-box { padding: 2rem; max-width: 840px; }
          .hero-stats-number { font-size: 1.625rem; }
          .hero-stats-text { font-size: 1rem; line-height: 1.5rem; }
          .hero-badge { font-size: 1.25rem; }
          .hero-content-padding { padding: 4rem 2rem; }
          .hero-video-padding { padding: 0 2rem; }
        }
      `}</style>
      
      <div className="hero-content-padding w-full flex justify-center">
        <div className="flex flex-col items-center hero-main-gap w-full max-w-[1200px]">
          <div className="flex flex-col items-center hero-top-gap w-full">
            {/* Logo and Title Section */}
            <div className="flex flex-col items-center gap-4 sm:gap-16 w-full">
              {/* Logo Container */}
              <div className="flex justify-center w-full">
                <div
                  className="hero-logo relative flex-shrink-0"
                  style={{
                    transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                  }}
                >
                  <img
                    src="https://framerusercontent.com/images/lVFqGPfJm0f8Q6XqNcyZnWvQUe8.webp?width=256&height=256"
                    alt="TRW Logo"
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title Container */}
              <div
                className="flex flex-col items-center justify-start w-full px-2"
                style={{
                  transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                }}
              >
                <h1 className="hero-title text-center font-bold tracking-[2px] text-[#ffa545] whitespace-pre-wrap">
                  {title.main}
                  <br className="inline hidden sm:inline" />
                  <span className="text-white/90">{title.highlight}</span>
                </h1>
              </div>
            </div>

            {/* Description Section */}
            <div
              className="flex flex-col items-center gap-0 w-full px-2"
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
              }}
            >
              {description.map((line, index) => (
                <p
                  key={index}
                  className="hero-description text-center font-medium text-white/80 whitespace-pre-wrap"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-buttons flex items-center justify-center w-full px-2"
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
              }}
            >
              {/* Primary Button */}
              <a
                href={primaryCTA.href}
                rel="noopener"
                className="hero-button flex items-center justify-center gap-[10px] rounded-[30px] bg-[#ffa545] cursor-pointer hover:bg-[#ff9b38] transition-colors"
              >
                <span className="font-bold leading-[19.2px] text-[#050e15] whitespace-nowrap">
                  {primaryCTA.text}
                </span>
              </a>

              {/* Secondary Button */}
              <a
                href={secondaryCTA.href}
                className="hero-button flex items-center justify-center gap-[10px] rounded-[30px] border-2 border-[#ffffff] cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-bold leading-[19.2px] text-white/80 whitespace-nowrap">
                  {secondaryCTA.text}
                </span>
              </a>
            </div>
          </div>

          {/* Video and Stats Section */}
          {(videoSrc || stats) && (
            <div className="flex flex-col items-center gap-4 sm:gap-8 w-full">
              {/* Video Container */}
              {videoSrc && (
                <div className="hero-video-padding flex justify-center w-full">
                  <div
                    className="hero-video relative rounded-[24px] overflow-hidden shadow-lg flex-shrink-0"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 16px 0px',
                      transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <iframe
                        src={videoSrc}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Course Preview"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Section */}
              {stats && (
                <div className="hero-video-padding flex justify-center w-full">
                  <div
                    className="hero-stats-box relative bg-[#131313] rounded-[20px] shadow-lg flex flex-col items-center gap-[10px]"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 8px -2px',
                      transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                      border: '3px solid rgb(255, 165, 69)',
                    }}
                  >
                    {badge && (
                      <div className="flex flex-col items-center justify-start">
                        <p className="hero-badge text-center font-semibold text-[#ffa545] whitespace-nowrap">
                          {badge}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="hero-stats-text text-center font-bold text-white whitespace-pre-wrap">
                        <span className="text-[#ffa545]">{stats.number}</span>
                        <span className="text-[#303536]"> </span>
                        {stats.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
