'use client';

import React from 'react';

export interface RoadmapStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

interface RoadmapSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  steps: RoadmapStep[];
}

export default function RoadmapSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  steps,
}: RoadmapSectionProps) {
  return (
    <section className="w-full bg-[#060e15] flex flex-col items-center overflow-hidden" aria-label="Timeline Section">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center gap-6 pt-24 px-5">
        <div className="max-w-[1280px] w-full flex flex-col items-center gap-8">
          {/* Title */}
          <div className="flex flex-col max-w-[900px] w-full">
            <h2 className="text-center text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-800">
              <span className="text-white">{title}</span>
              <br />
              <span className="text-white">{subtitle}</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[700px] w-full">
            <p className="text-center text-lg sm:text-xl font-medium leading-[28px] text-white/80">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative z-5">
            <a
              href={ctaHref}
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 h-[68px] px-2 rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgb(255, 165, 69) 0%, rgb(255, 188, 71) 100%)',
                boxShadow: 'rgba(201, 108, 8, 0.3) 0px 4px 50px 0px'
              }}
            >
              {/* Left Arrow Icon */}
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-full h-full" style={{
                  fill: 'rgb(19, 19, 19)',
                  color: 'rgb(19, 19, 19)'
                }}>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>

              {/* Text */}
              <p className="text-[20.8px] font-semibold leading-[20.8px] uppercase whitespace-nowrap select-none" style={{
                color: 'rgb(19, 19, 19)'
              }}>
                {ctaText}
              </p>

              {/* Right Arrow Icon */}
              <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-full h-full" style={{
                  fill: 'rgb(19, 19, 19)',
                  color: 'rgb(19, 19, 19)'
                }}>
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full flex flex-col items-center gap-5 pt-24 px-5">
        <div className="max-w-[1280px] w-full">
          {steps.map((step, index) => (
            <div key={index} className="w-full flex gap-12 items-stretch">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-6 max-w-[610px] pb-32" style={{
                minHeight: index === 0 ? '385px' : 'auto',
                willChange: 'transform',
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
              }}>
                {index % 2 === 1 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] leading-[18px] tracking-[0.5px] text-[#ffa545] uppercase">
                        {step.label}
                      </p>
                      <h3 className="text-3xl sm:text-[36px] font-semibold leading-[54px] tracking-[-0.5px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[16px] leading-[19.2px] text-white/80">
                      {step.description}
                    </p>
                  </>
                )}
              </div>

              {/* Center Column - Number and Progress Line */}
              <div className="flex flex-col items-center gap-5 w-[100px] flex-shrink-0">
                {/* Step Number */}
                <div style={{
                  willChange: 'transform',
                  transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
                }}>
                  <div className="text-[64px] font-bold leading-[76.8px] tracking-[-0.5px] text-white whitespace-pre">
                    {step.number}
                  </div>
                </div>

                {/* Progress Line */}
                {index !== steps.length - 1 && (
                  <div className="relative w-1 flex-grow bg-white/5 min-h-[340.5px]">
                    <div
                      className="absolute left-0 right-0 w-full bg-[rgb(255,165,69)]"
                      style={{
                        height: '340.5px',
                        willChange: 'transform',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-6 max-w-[610px] pb-32" style={{
                minHeight: index === 0 ? '385px' : 'auto',
                willChange: 'transform',
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
              }}>
                {index % 2 === 0 && (
                  <>
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] leading-[18px] tracking-[0.5px] text-[#ffa545] uppercase">
                        {step.label}
                      </p>
                      <h3 className="text-3xl sm:text-[36px] font-semibold leading-[54px] tracking-[-0.5px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[16px] leading-[19.2px] text-white/80">
                      {step.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
