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
    <section className="w-full bg-[#050e15] flex flex-col items-center py-28 px-8">
      <div className={`w-full max-w-[1200px] flex gap-20 items-center ${image ? 'flex-row' : 'justify-center'}`}>
        <div className={`${image ? 'flex-1' : 'flex-1 max-w-3xl'} flex flex-col gap-6`}>
          {/* Subtitle */}
          <div className="flex flex-col gap-4">
            <p className="text-center text-base font-normal text-[#ffa545]">
              {subtitle}
            </p>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-center text-[48px] font-bold leading-[57.6px] text-white">
                {title}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-center text-lg leading-[27px] text-white/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          {infoCards && infoCards.length > 0 && (
            <div className="flex flex-col gap-6 py-2">
              {infoCards.map((card, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-center text-[20px] font-bold leading-[28px] text-white">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-center text-base leading-[24px] text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-center pt-6">
            <a
              rel="noopener"
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-br from-[#ff8838] to-[#ffb54c] rounded-full cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="text-center text-[20px] font-bold text-[#080d0d] uppercase">
                {ctaText}
              </p>
            </a>
          </div>
        </div>

        {/* Image Section */}
        {image && (
          <div className="flex-1 relative rounded-[20px] overflow-hidden">
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
