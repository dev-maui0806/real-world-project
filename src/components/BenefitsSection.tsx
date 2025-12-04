'use client';

import React from 'react';

interface Benefit {
  icon?: React.ReactNode;
  image?: string;
  label: string;
}

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
    <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
  </svg>
);

const MoneyBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z"></path>
    <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
  </svg>
);

const TrafficConeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 20l16 0"></path>
    <path d="M9.4 10l5.2 0"></path>
    <path d="M7.8 15l8.4 0"></path>
    <path d="M6 20l5 -15h2l5 15"></path>
  </svg>
);

const ChartBarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    <path d="M4 20l14 0"></path>
  </svg>
);

export default function BenefitsSection({
  title,
  subtitle,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="w-full bg-[#050e15] flex flex-col items-center py-28 px-8 gap-20">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center gap-16">
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-4">
          <h2 className="text-center text-[47px] font-bold leading-[55px] text-white">
            {title}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-[47px] font-bold leading-[55px] text-white whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-16">
        {/* First Row - 3 items */}
        <div className="w-full flex gap-12 justify-center">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-4 flex-1">
              {/* Icon/Image Container */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-[6px] bg-gradient-to-b from-[#ffbc47] to-[#ffa545] shadow-[0px_4px_8px_rgba(255,165,69,0.36)]">
                {benefit.image ? (
                  <img
                    src={benefit.image}
                    alt={benefit.label}
                    className="w-[30px] h-[30px] object-cover"
                  />
                ) : (
                  <div className="text-[#131313] flex items-center justify-center w-6 h-6">
                    {benefit.icon}
                  </div>
                )}
              </div>

              {/* Label */}
              <p className="text-center text-[24px] font-semibold leading-[28px] text-white">
                {benefit.label}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 items */}
        <div className="w-full flex gap-12 justify-center">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index + 3} className="flex flex-col items-center gap-4 flex-1">
              {/* Icon/Image Container */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-[6px] bg-gradient-to-b from-[#ffbc47] to-[#ffa545] shadow-[0px_4px_8px_rgba(255,165,69,0.36)]">
                {benefit.image ? (
                  <img
                    src={benefit.image}
                    alt={benefit.label}
                    className="w-[30px] h-[30px] object-cover"
                  />
                ) : (
                  <div className="text-[#131313] flex items-center justify-center w-6 h-6">
                    {benefit.icon}
                  </div>
                )}
              </div>

              {/* Label */}
              <p className="text-center text-[24px] font-semibold leading-[28px] text-white">
                {benefit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export icon components for reuse
export { SearchIcon, ShoppingBagIcon, MoneyBagIcon, TrafficConeIcon, ChartBarIcon };
