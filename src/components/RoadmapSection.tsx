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
      <style>{`
        @media (max-width: 640px) {
          .roadmap-header-padding { padding: 2rem 1rem; }
          .roadmap-title { font-size: 1.75rem; line-height: 2.1rem; }
          .roadmap-description { font-size: 1rem; line-height: 1.5rem; }
          .roadmap-cta { padding: 0.75rem 1rem; font-size: 0.9rem; }
          .roadmap-step-number { font-size: 2rem; line-height: 2.4rem; }
          .roadmap-step-label { font-size: 0.75rem; }
          .roadmap-step-title { font-size: 1.25rem; line-height: 1.5rem; }
          .roadmap-step-description { font-size: 0.9375rem; line-height: 1.2rem; }
          .roadmap-steps { gap: 0; }
          .roadmap-step-row { flex-direction: column; gap: 1.5rem; }
          .roadmap-step-left { max-width: 100%; }
          .roadmap-step-center { display: none; }
          .roadmap-step-right { max-width: 100%; }
          .roadmap-timeline { min-height: 120px; }
          .roadmap-step-content { padding-bottom: 2rem; min-height: auto; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .roadmap-header-padding { padding: 3rem 2rem; }
          .roadmap-title { font-size: 2rem; line-height: 2.4rem; }
          .roadmap-description { font-size: 1.125rem; line-height: 1.6rem; }
          .roadmap-cta { padding: 0.875rem 1.5rem; font-size: 1rem; }
          .roadmap-step-number { font-size: 2.5rem; line-height: 3rem; }
          .roadmap-step-label { font-size: 0.875rem; }
          .roadmap-step-title { font-size: 1.5rem; line-height: 1.8rem; }
          .roadmap-step-description { font-size: 1rem; line-height: 1.4rem; }
          .roadmap-steps { gap: 0; }
          .roadmap-step-row { flex-direction: column; gap: 2rem; }
          .roadmap-step-left { max-width: 100%; }
          .roadmap-step-center { display: none; }
          .roadmap-step-right { max-width: 100%; }
          .roadmap-timeline { min-height: 180px; }
          .roadmap-step-content { padding-bottom: 3rem; min-height: auto; }
        }
        @media (min-width: 1025px) {
          .roadmap-header-padding { padding: 6rem 2rem; }
          .roadmap-title { font-size: 2.25rem; line-height: 2.7rem; }
          .roadmap-description { font-size: 1.25rem; line-height: 1.75rem; }
          .roadmap-cta { padding: 1rem 2rem; font-size: 1.3rem; }
          .roadmap-step-number { font-size: 4rem; line-height: 4.8rem; }
          .roadmap-step-label { font-size: 0.875rem; }
          .roadmap-step-title { font-size: 2.25rem; line-height: 3.375rem; }
          .roadmap-step-description { font-size: 1rem; line-height: 1.2rem; }
          .roadmap-steps { gap: 0; }
          .roadmap-step-row { flex-direction: row; gap: 3rem; }
          .roadmap-step-left { max-width: 610px; }
          .roadmap-step-center { display: flex; }
          .roadmap-step-right { max-width: 610px; }
          .roadmap-timeline { min-height: 340.5px; }
          .roadmap-step-content { padding-bottom: 2rem; min-height: 385px; }
        }
      `}</style>

      {/* Header Section */}
      <div className="roadmap-header-padding w-full flex flex-col items-center">
        <div className="max-w-[1280px] w-full flex flex-col items-center gap-4 sm:gap-8">
          {/* Title */}
          <div className="flex flex-col max-w-[900px] w-full px-4 sm:px-0">
            <h2 className="roadmap-title text-center font-bold tracking-tight text-white">
              <span className="text-white">{title}</span>
              <br />
              <span className="text-white">{subtitle}</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[700px] w-full px-4 sm:px-0">
            <p className="roadmap-description text-center font-medium text-white/80">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative z-5 px-4 sm:px-0">
            <a
              href={ctaHref}
              rel="noopener"
              className="roadmap-cta inline-flex items-center justify-center gap-2 rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgb(255, 165, 69) 0%, rgb(255, 188, 71) 100%)',
                boxShadow: 'rgba(201, 108, 8, 0.3) 0px 4px 50px 0px'
              }}
            >
              {/* Left Arrow Icon */}
              <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-full h-full" style={{
                  fill: 'rgb(19, 19, 19)',
                  color: 'rgb(19, 19, 19)'
                }}>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>

              {/* Text */}
              <p className="font-semibold leading-[20.8px] uppercase select-none" style={{
                color: 'rgb(19, 19, 19)'
              }}>
                {ctaText}
              </p>

              {/* Right Arrow Icon */}
              <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
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
      <div className="w-full flex flex-col items-center gap-2 sm:gap-5 pt-8 sm:pt-24 px-4 sm:px-5">
        <div className="max-w-[1280px] w-full roadmap-steps flex flex-col">
          {steps.map((step, index) => (
            <div key={index} className="roadmap-step-row w-full flex items-stretch">
              {/* Left Column */}
              <div className="roadmap-step-left flex flex-col gap-3 sm:gap-6 roadmap-step-content" style={{
                willChange: 'transform',
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
              }}>
                {index % 2 === 1 && (
                  <>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <p className="roadmap-step-label uppercase tracking-[0.5px] text-[#ffa545]">
                        {step.label}
                      </p>
                      <h3 className="roadmap-step-title font-semibold tracking-[-0.5px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="roadmap-step-description text-white/80">
                      {step.description}
                    </p>
                  </>
                )}
              </div>

              {/* Center Column - Number and Progress Line */}
              <div className="roadmap-step-center flex flex-col items-center gap-2 sm:gap-5 w-[50px] sm:w-[100px] flex-shrink-0">
                {/* Step Number */}
                <div style={{
                  willChange: 'transform',
                  transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
                }}>
                  <div className="roadmap-step-number font-bold tracking-[-0.5px] text-white whitespace-pre">
                    {step.number}
                  </div>
                </div>

                {/* Progress Line */}
                {index !== steps.length - 1 && (
                  <div className="roadmap-timeline relative w-1 flex-grow bg-white/5">
                    <div
                      className="absolute left-0 right-0 w-full bg-[rgb(255,165,69)]"
                      style={{
                        willChange: 'transform',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="roadmap-step-right flex flex-col gap-3 sm:gap-6 roadmap-step-content" style={{
                willChange: 'transform',
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1)'
              }}>
                {index % 2 === 0 && (
                  <>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <p className="roadmap-step-label uppercase tracking-[0.5px] text-[#ffa545]">
                        {step.label}
                      </p>
                      <h3 className="roadmap-step-title font-semibold tracking-[-0.5px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="roadmap-step-description text-white/80">
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
