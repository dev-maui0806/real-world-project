'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function FAQAccordion({
  items = [],
  title = 'Frequently Asked Questions',
  showCTA = true,
  ctaText = 'Join Now',
  ctaHref = 'https://jointherealworld.com/checkout?a=zwqn9rf9&subid=official',
}: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center py-8 sm:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-[40px]">
      <style>{`
        @media (max-width: 640px) {
          .faq-title { font-size: 1.75rem; line-height: 2.1rem; letter-spacing: -1px; }
          .faq-container { gap: 0; margin-bottom: 2rem; }
          .faq-button { padding: 0.75rem 1rem; gap: 1rem; }
          .faq-question-text { font-size: 0.9375rem; line-height: 1.35rem; }
          .faq-answer { font-size: 0.9375rem; line-height: 1.35rem; padding: 1rem; }
          .faq-icon { width: 1rem; height: 1rem; }
          .faq-cta { padding: 0.75rem 1.5rem; font-size: 1rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .faq-title { font-size: 2.25rem; line-height: 2.7rem; letter-spacing: -1.3px; }
          .faq-container { gap: 0; margin-bottom: 3rem; }
          .faq-button { padding: 1rem 1.5rem; gap: 1.25rem; }
          .faq-question-text { font-size: 1rem; line-height: 1.5rem; }
          .faq-answer { font-size: 1rem; line-height: 1.5rem; padding: 1.25rem 1.5rem; }
          .faq-icon { width: 1.25rem; height: 1.25rem; }
          .faq-cta { padding: 0.875rem 1.75rem; font-size: 1.125rem; }
        }
        @media (min-width: 1025px) {
          .faq-title { font-size: 3.75rem; line-height: 4.5rem; letter-spacing: -1.625px; }
          .faq-container { gap: 0; margin-bottom: 3.75rem; }
          .faq-button { padding: 1.25rem 2.5rem; gap: 1.5rem; }
          .faq-question-text { font-size: 1rem; line-height: 1.5rem; }
          .faq-answer { font-size: 1rem; line-height: 1.5rem; padding: 1.25rem 2.5rem; }
          .faq-icon { width: 1rem; height: 1rem; }
          .faq-cta { padding: 0.5rem 2rem; font-size: 1.625rem; }
        }
      `}</style>

      {/* Title */}
      <div className="w-full flex flex-col justify-start mb-8 sm:mb-12 lg:mb-[60px]">
        <h2 className="faq-title text-center font-bold text-white tracking-[-2.6px]">
          {title}
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="w-full flex justify-center faq-container">
        <div className="w-full max-w-[1000px] flex flex-col">
          {/* FAQ Items */}
          <div className="w-full rounded-[20px] bg-[#121821] overflow-hidden flex flex-col">
            {items.map((item, index) => (
              <div key={index} className="w-full">
                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="faq-button w-full flex items-center justify-start cursor-pointer bg-[#121821] hover:bg-[#1a2330] transition-colors user-select-none border-none"
                  type="button"
                >
                  {/* Toggle Icon */}
                  <div className="faq-icon relative flex-shrink-0 z-10">
                    {/* Horizontal Bar */}
                    <div
                      className="absolute rounded-[10px] h-0.5 w-full transition-opacity duration-200"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgb(255, 165, 69)',
                        opacity: expandedId === index ? 0 : 1,
                      }}
                    />

                    {/* Vertical Bar */}
                    <div
                      className="absolute rounded-[10px] h-full w-0.5 transition-opacity duration-200"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgb(255, 165, 69)',
                        opacity: expandedId === index ? 0 : 1,
                      }}
                    />
                  </div>

                  {/* Question Text */}
                  <p className="faq-question-text text-left font-semibold text-white flex-1">
                    {item.question}
                  </p>
                </button>

                {/* Answer Section - Expandable */}
                {expandedId === index && (
                  <div className="w-full flex flex-col gap-1 sm:gap-2.5 bg-[#121821] faq-answer">
                    <p className="font-semibold text-white">
                      {item.answer}
                    </p>
                  </div>
                )}

                {/* Divider */}
                {index < items.length - 1 && (
                  <div className="h-px w-full bg-black/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {showCTA && (
        <div className="flex flex-col items-center justify-center gap-0 relative">
          <a
            rel="noopener"
            href={ctaHref}
            className="faq-cta inline-flex items-center justify-center rounded-[50px] cursor-pointer transition-all duration-300 hover:shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(310deg, rgb(255, 136, 56) 0%, rgb(255, 181, 76) 100%)',
            }}
          >
            <p className="text-[#080d0d] font-black leading-[34px] uppercase tracking-normal">
              {ctaText}
            </p>
          </a>
        </div>
      )}
    </section>
  );
}
