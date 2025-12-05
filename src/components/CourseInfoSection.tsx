'use client';

import React from 'react';

interface InfoCard {
  title: string;
  description: string;
}

interface CourseInfoSectionProps {
  subtitle: string;
  title: string;
  description: string[];
  infoCards?: InfoCard[];
  ctaText: string;
  ctaHref: string;
  image?: {
    src: string;
    alt: string;
  };
}

export default function CourseInfoSection({
  subtitle,
  title,
  description,
  infoCards,
  ctaText,
  ctaHref,
  image,
}: CourseInfoSectionProps) {
  return (
    <section className="w-full bg-[#050e15] flex flex-col items-center py-8 sm:py-16 lg:py-28 px-4 sm:px-8">
      <style>{`
        @media (max-width: 640px) {
          .info-section-padding { padding: 1rem; gap: 1rem; }
          .info-subtitle { font-size: 0.875rem; }
          .info-title { font-size: 1.75rem; line-height: 2.1rem; }
          .info-description { font-size: 1rem; line-height: 1.5rem; }
          .info-card-title { font-size: 1.125rem; line-height: 1.4rem; }
          .info-card-description { font-size: 0.9375rem; line-height: 1.35rem; }
          .info-button { padding: 0.75rem 1.5rem; font-size: 1rem; }
          .info-image { height: 250px; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .info-section-padding { padding: 1.5rem; gap: 1.5rem; }
          .info-subtitle { font-size: 1rem; }
          .info-title { font-size: 2.25rem; line-height: 2.7rem; }
          .info-description { font-size: 1.125rem; line-height: 1.6rem; }
          .info-card-title { font-size: 1.25rem; line-height: 1.5rem; }
          .info-card-description { font-size: 1rem; line-height: 1.5rem; }
          .info-button { padding: 0.875rem 1.75rem; font-size: 1rem; }
          .info-image { height: 300px; }
        }
        @media (min-width: 1025px) {
          .info-section-padding { padding: 2rem; gap: 2rem; }
          .info-subtitle { font-size: 1rem; }
          .info-title { font-size: 3rem; line-height: 3.6rem; }
          .info-description { font-size: 1.125rem; line-height: 1.7rem; }
          .info-card-title { font-size: 1.25rem; line-height: 1.75rem; }
          .info-card-description { font-size: 1rem; line-height: 1.5rem; }
          .info-button { padding: 0.875rem 1.5rem; font-size: 1.25rem; }
          .info-image { height: auto; }
        }
      `}</style>

      <div className={`w-full max-w-[1200px] flex flex-col ${image ? 'lg:flex-row' : 'justify-center'} gap-8 sm:gap-12 lg:gap-20 items-center`}>
        <div className={`${image ? 'w-full lg:flex-1' : 'w-full max-w-3xl'} flex flex-col gap-4 sm:gap-6`}>
          {/* Subtitle */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="info-subtitle text-center font-normal text-[#ffa545]">
              {subtitle}
            </p>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="info-title text-center font-bold text-white">
                {title}
              </h2>
            </div>

            <div className="flex flex-col gap-2 sm:gap-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="info-description text-center text-white/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          {infoCards && infoCards.length > 0 && (
            <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-2">
              {infoCards.map((card, index) => (
                <div key={index} className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <h3 className="info-card-title text-center font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <p className="info-card-description text-center text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-center pt-3 sm:pt-6">
            <a
              rel="noopener"
              href={ctaHref}
              className="info-button inline-flex items-center justify-center bg-gradient-to-br from-[#ff8838] to-[#ffb54c] rounded-full cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="text-center font-bold text-[#080d0d] uppercase">
                {ctaText}
              </p>
            </a>
          </div>
        </div>

        {/* Image Section */}
        {image && (
          <div className="w-full lg:flex-1 relative rounded-[20px] overflow-hidden info-image">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
