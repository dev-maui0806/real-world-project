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
    <section className="w-full bg-black flex flex-col items-center justify-center py-[100px] px-[40px]">
      {/* Title */}
      <div className="w-full flex flex-col justify-start mb-[60px]">
        <h2 className="text-center text-[60px] font-bold leading-[72px] text-white tracking-[-2.6px]">
          {title}
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="w-full flex justify-center mb-[60px]">
        <div className="w-full max-w-[1000px] flex flex-col gap-0">
          {/* FAQ Items */}
          <div className="w-full rounded-[20px] bg-[#121821] overflow-hidden flex flex-col">
            {items.map((item, index) => (
              <div key={index} className="w-full">
                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-start gap-6 px-[40px] py-5 cursor-pointer bg-[#121821] hover:bg-[#1a2330] transition-colors user-select-none border-none"
                  type="button"
                >
                  {/* Toggle Icon */}
                  <div className="relative w-4 h-4 flex-shrink-0 z-10">
                    {/* Horizontal Bar */}
                    <div
                      className="absolute rounded-[10px] h-0.5 w-4 transition-opacity duration-200"
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
                      className="absolute rounded-[10px] h-4 w-0.5 transition-opacity duration-200"
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
                  <p className="text-left text-base font-semibold leading-6 text-white flex-1">
                    {item.question}
                  </p>
                </button>

                {/* Answer Section - Expandable */}
                {expandedId === index && (
                  <div className="w-full px-[40px] pb-5 flex flex-col gap-2.5 bg-[#121821]">
                    <p className="text-left text-base font-semibold leading-6 text-white">
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
            className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] cursor-pointer transition-all duration-300 hover:shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(310deg, rgb(255, 136, 56) 0%, rgb(255, 181, 76) 100%)',
            }}
          >
            <p className="text-[#080d0d] text-[26px] font-black leading-[34px] uppercase tracking-normal">
              {ctaText}
            </p>
          </a>
        </div>
      )}
    </section>
  );
}
