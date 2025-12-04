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
    <main className="flex flex-col items-center gap-[110px] w-full max-w-[1200px] mx-auto bg-[#060e15] overflow-hidden pb-16 pt-16">
      <div className="flex flex-col items-center gap-8 w-full pt-[61px]">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Logo Container */}
          <div className="flex justify-center w-full">
            <div
              className="relative h-[162px] w-[215px]"
              style={{
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
              }}
            >
              <div className="absolute inset-0">
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
          </div>

          {/* Title Container */}
          <div
            className="flex flex-col items-center justify-start w-full"
            style={{
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
            }}
          >
            <h1 className="text-center text-[58px] font-bold leading-[68px] tracking-[2px] text-[#ffa545] whitespace-pre-wrap">
              {title.main}
              <br className="inline" />
              <span className="text-white/90">{title.highlight}</span>
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div
          className="flex flex-col items-center gap-0 w-full"
          style={{
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
          }}
        >
          {description.map((line, index) => (
            <p
              key={index}
              className="text-center text-[24px] font-medium leading-[28.8px] text-white/80 whitespace-pre-wrap"
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex items-center justify-center gap-[10px] w-full"
          style={{
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
          }}
        >
          {/* Primary Button */}
          <a
            href={primaryCTA.href}
            rel="noopener"
            className="flex items-center justify-center gap-[10px] rounded-[30px] bg-[#ffa545] px-8 py-4 cursor-pointer hover:bg-[#ff9b38] transition-colors"
          >
            <span className="text-[16px] font-bold leading-[19.2px] text-[#050e15] whitespace-nowrap">
              {primaryCTA.text}
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryCTA.href}
            className="flex items-center justify-center gap-[10px] rounded-[30px] border-2 border-[#ffffff] px-8 py-4 cursor-pointer hover:bg-white/5 transition-colors"
          >
            <span className="text-[16px] font-bold leading-[19.2px] text-white/80 whitespace-nowrap">
              {secondaryCTA.text}
            </span>
          </a>
        </div>
      </div>

      {/* Video and Stats Section */}
      {(videoSrc || stats) && (
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Video Container */}
          {videoSrc && (
            <div className="flex justify-center w-full">
              <div
                className="relative w-[972px] h-[552px] rounded-[24px] overflow-hidden shadow-lg"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 16px 0px',
                  transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                }}
              >
                <div className="absolute inset-0">
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
            </div>
          )}

          {/* Stats Section */}
          {stats && (
            <div className="flex justify-center w-full">
              <div
                className="relative bg-[#131313] rounded-[20px] shadow-lg px-8 py-8 w-[840px] flex flex-col items-center gap-[10px]"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 8px -2px',
                  transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)',
                  border: '3px solid rgb(255, 165, 69)',
                }}
              >
                {badge && (
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-center text-[20px] font-semibold leading-[24px] text-[#ffa545] whitespace-nowrap">
                      {badge}
                    </p>
                  </div>
                )}
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-center text-[26px] font-bold leading-[39px] text-white whitespace-pre-wrap">
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
    </main>
  );
}
