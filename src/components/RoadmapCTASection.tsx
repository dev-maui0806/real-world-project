'use client';

import React from 'react';

interface RoadmapCTASectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 24 24"
    className="w-full h-full"
    style={{
      fill: '#131313',
      color: '#131313',
    }}
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
  </svg>
);

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 24 24"
    className="w-full h-full"
    style={{
      fill: '#131313',
      color: '#131313',
    }}
  >
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
  </svg>
);

export default function RoadmapCTASection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
}: RoadmapCTASectionProps) {
  return (
    <section className="w-full bg-[#050e15] flex flex-col items-center py-24 px-5">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-8">
        {/* Title Section */}
        <div className="w-full max-w-[900px] flex flex-col items-center">
          <h2 className="text-center text-[47px] font-bold leading-[55px] text-white whitespace-pre-wrap break-words">
            <span className="text-white">{title}</span>
            <br />
            <br />
            <span className="text-white">{subtitle}</span>
          </h2>
        </div>

        {/* Description Section */}
        <div className="w-full max-w-[700px] flex flex-col items-center">
          <p className="text-center text-[20px] font-medium leading-[28px] text-white/80 break-words">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-5">
          <a
            rel="noopener"
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 h-[68px] px-2 bg-gradient-to-t from-[#ffa545] to-[#ffbc47] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_4px_50px_rgba(201,108,8,0.3)]"
          >
            {/* Left Arrow */}
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <RightArrowIcon />
            </div>

            {/* Text */}
            <p className="text-center text-[20.8px] font-semibold leading-[20.8px] text-[#131313] uppercase whitespace-nowrap">
              {ctaText}
            </p>

            {/* Right Arrow */}
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <LeftArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
