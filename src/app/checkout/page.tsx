'use client';

import React, { useState } from 'react';

const CheckmarkIcon = () => (
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <path
      d="M2 8.5L7.5 14L19 2"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CreditCardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  soldOut?: boolean;
}

interface NetworkOption {
  id: string;
  name: string;
  icon: string;
}

interface TokenOption {
  id: string;
  symbol: string;
  type: string;
  icon: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'earn',
    name: 'Earn',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: '',
    features: [
      'Choose 1 Business Model',
      'Daily Live Broadcasts',
      'Real-Time Course Updates',
      '3 Connected Devices',
      'Community Access',
    ],
    soldOut: true,
  },
  {
    id: 'prosper',
    name: 'Prosper',
    monthlyPrice: 69,
    yearlyPrice: 690,
    description: '',
    features: [
      'Everything in Earn',
      '1 Extra Business Model',
      'Priority Support',
      '5 Connected Devices',
      'Exclusive Workshops',
    ],
    soldOut: true,
  },
  {
    id: 'conquer',
    name: 'Conquer',
    monthlyPrice: 99,
    yearlyPrice: 996,
    description: '',
    features: [
      'Everything in Prosper',
      '9+ Extra Business Models',
      'VIP Account Ranking',
      '7 Connected Devices',
      'Early Access to New Content',
    ],
    highlighted: true,
  },
];

const networkOptions: NetworkOption[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: 'https://www.jointherealworld.com/checkout/_next/static/media/eth.8e5a63b6.svg',
  },
  {
    id: 'solana',
    name: 'Solana',
    icon: 'https://www.jointherealworld.com/checkout/_next/static/media/sol.74df50bd.svg',
  },
];

const tokenOptions: TokenOption[] = [
  {
    id: 'usdt',
    symbol: 'USDT',
    type: 'ERC-20',
    icon: 'https://www.jointherealworld.com/checkout/_next/static/media/usdt.6d35925e.svg',
  },
  {
    id: 'usdc',
    symbol: 'USDC',
    type: 'ERC-20',
    icon: 'https://www.jointherealworld.com/checkout/_next/static/media/usdc.3e92b3cf.svg',
  },
  {
    id: 'eth',
    symbol: 'ETH',
    type: 'ERC-20',
    icon: 'https://www.jointherealworld.com/checkout/_next/static/media/eth.8e5a63b6.svg',
  },
];

export default function CheckoutPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<string>('ethereum');
  const [selectedToken, setSelectedToken] = useState<string>('usdt');

  const calculateYearlySavings = () => {
    const savings = Math.round(((pricingPlans[0].monthlyPrice * 12 - pricingPlans[0].yearlyPrice) / (pricingPlans[0].monthlyPrice * 12)) * 100);
    return savings;
  };

  const selectedTokenData = tokenOptions.find(t => t.id === selectedToken) || tokenOptions[0];

  return (
    <main className="w-full bg-black min-h-screen">
      {/* Upgrade Banner */}
      <div className="w-full bg-gradient-to-r from-orange-500/40 via-orange-500/95 to-orange-500/40 border-b border-orange-500 py-4 px-4">
        <div className="flex items-center justify-center gap-4">
          <img
            alt="JTRW 2.0 Upgrade In Progress"
            loading="lazy"
            width="29"
            height="26"
            src="https://www.jointherealworld.com/checkout/_next/static/media/upgrade.53187437.svg"
            className="w-[29px] h-[26px]"
          />
          <p className="text-white text-sm md:text-base font-bold uppercase tracking-wide">
            TRW 2.0 UPGRADE IN PROGRESS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-orange-600/45 to-transparent rounded-full opacity-50 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center mb-16">
          <img
            alt="logo"
            loading="lazy"
            src="https://www.jointherealworld.com/checkout/_next/static/media/trw-256.c3bb2895.png"
            className="w-[105px] h-[105px] mb-6"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text bg-gradient-to-r from-white via-white to-white">
            CHOOSE YOUR PATH TO SUCCESS
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Join thousands crushing their competition and building enemies
          </p>
        </div>

        {/* Toggle Section */}
        <div className="relative z-10 flex flex-col items-center gap-6 mb-12">
          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setIsYearly(false)}
              className={`text-xl font-bold transition-all ${
                !isYearly
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>

            {/* Toggle Switch */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-20 items-center rounded-full border border-white/15 bg-gradient-to-b from-slate-800 to-slate-900 transition-all hover:border-white/25"
            >
              <span
                className={`absolute h-8 w-8 rounded-full bg-gradient-to-b from-white to-yellow-200 border border-gray-500/30 transition-transform ${
                  isYearly ? 'translate-x-10' : 'translate-x-1'
                }`}
              />
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`text-xl font-bold transition-all ${
                isYearly
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>

          {/* Savings Badge */}
          {isYearly && (
            <div className="flex items-center justify-center gap-3 bg-gradient-to-b from-slate-800 to-slate-900 border border-white/15 rounded-full px-12 py-2">
              <img
                alt="Savings Icon"
                loading="lazy"
                width="23"
                height="28"
                src="https://www.jointherealworld.com/checkout/_next/static/media/sparkle.90056d7e.svg"
                className="w-6 h-7"
              />
              <p className="text-white text-center font-semibold">
                SAVE UP TO
                <span className="text-yellow-300 font-bold ml-1">{calculateYearlySavings()}%</span>
                WITH YEARLY
              </p>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-lg border transition-all duration-300 flex flex-col justify-between h-full ${
                plan.highlighted
                  ? 'border-pink-600 bg-gradient-to-br from-white/5 via-pink-600/5 to-orange-600/5'
                  : 'border-red-900 bg-transparent'
              } p-6`}
            >
              {/* Sold Out Badge */}
              {plan.soldOut && (
                <div className="absolute -right-0 top-4 bg-red-500 text-white px-6 py-1 rounded-l-full text-sm font-semibold">
                  SOLD OUT
                </div>
              )}

              {/* Plan Content */}
              <div className={plan.soldOut ? 'opacity-50 pointer-events-none' : ''}>
                {/* Plan Name */}
                <h3 className="text-xl md:text-2xl font-bold text-white/70 text-center mb-4 uppercase">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex justify-center mb-8">
                  <div className="text-4xl font-bold text-white">
                    <span className="text-2xl">$</span>
                    {isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    <span className="text-xl text-white/70 font-bold">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-white/70 text-sm md:text-base"
                    >
                      <CheckmarkIcon />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button - Only for Conquer */}
              {plan.id === 'conquer' && (
                <div className="mt-8 pt-8 flex flex-col gap-3">
                  {isYearly ? (
                    <button
                      onClick={() => setShowCardInfo(true)}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-b from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-yellow-400 text-white rounded-lg px-4 py-3 transition-all font-bold"
                    >
                      <img
                        alt="Crypto"
                        loading="lazy"
                        width="32"
                        height="32"
                        src="https://www.jointherealworld.com/checkout/_next/image?url=%2Fcheckout%2F_next%2Fstatic%2Fmedia%2Fpay-with-crypto.72b66985.png&w=128&q=75"
                        className="w-8 h-8"
                      />
                      <span>Join with Crypto</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowCardInfo(true)}
                      className="w-full flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 border border-slate-700 text-white/70 hover:text-white rounded-lg px-4 py-2 transition-all font-bold"
                    >
                      <CreditCardIcon />
                      <span className="flex-1 text-center">Join with Card</span>
                      <span className="w-6" />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="relative z-10 flex justify-center py-8 md:py-12">
          <div className="flex items-center gap-4">
            <img
              alt="Students"
              loading="lazy"
              width="89"
              height="35"
              src="https://www.jointherealworld.com/checkout/_next/image?url=%2Fcheckout%2F_next%2Fstatic%2Fmedia%2Fstudents.c90cac6a.png&w=96&q=75"
              className="w-[89px] h-[35px]"
            />
            <p className="text-white font-bold text-lg">
              Join
              <span className="text-yellow-300 ml-1">155,000+</span>
              members already transforming their lives
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="relative z-10 text-center text-white/50 text-sm mt-8">
          *All Prices Are Presented In USD.
        </p>

        {/* Payment Information Section */}
        {showCardInfo && (
          <div className="relative z-10 mt-16 space-y-8">
            {/* Header - Different based on payment type */}
            <div className="flex justify-start">
              <h2 className="text-3xl font-semibold text-gray-400 bg-clip-text bg-gradient-to-r from-white via-white to-white opacity-75">
                {isYearly ? 'SELECT NETWORK & TOKEN' : 'CARD INFORMATION'}
              </h2>
            </div>

            {/* Conditional Content */}
            {isYearly ? (
              <>
                {/* Network Selection */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    {networkOptions.map((network) => (
                      <button
                        key={network.id}
                        onClick={() => setSelectedNetwork(network.id)}
                        className={`flex-1 flex items-center justify-center gap-4 py-3 rounded-lg border transition-all ${
                          selectedNetwork === network.id
                            ? 'bg-slate-700 border-white/30'
                            : 'bg-slate-800 border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          alt={network.name}
                          loading="lazy"
                          width="30"
                          height="30"
                          src={network.icon}
                          className="w-8 h-8"
                        />
                        <span className="text-white font-bold text-lg">{network.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Token Selection */}
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {tokenOptions.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => setSelectedToken(token.id)}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg border transition-all text-left ${
                          selectedToken === token.id
                            ? 'bg-slate-700 border-white/30'
                            : 'bg-slate-800 border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          alt={token.symbol}
                          loading="lazy"
                          width="30"
                          height="30"
                          src={token.icon}
                          className="w-8 h-8"
                        />
                        <div className="flex-1">
                          <div className="text-white font-bold">
                            {token.symbol}
                            <span className="ml-2 text-white/70 font-normal text-sm">
                              ({token.type})
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Card Details Inputs */}
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <label className="flex justify-between items-center mb-3 px-1">
                        <span className="text-white font-medium text-lg">Card number</span>
                        <span className="text-red-500 text-xs">Enter a card number</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="xxxx xxxx xxxx xxxx"
                        autoComplete="cc-number"
                        aria-label="Card number"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 pl-14 text-white placeholder-gray-600 text-lg letter-spacing font-mono focus:outline-none focus:border-white/20 transition-all"
                      />
                      <svg
                        className="absolute bottom-4 left-4 text-gray-800 h-6 w-6"
                        aria-label="Placeholder card"
                        viewBox="0 0 24 16"
                      >
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g>
                            <rect fill="#D8D8D8" x="0" y="0" width="24" height="16" rx="1" />
                            <rect fill="#A6A6A6" x="0.923" y="10.353" width="4.615" height="1.882" rx="0.941" />
                            <rect fill="#FFFFFF" x="16.615" y="3.765" width="4.615" height="2.824" rx="1" />
                            <rect fill="#A6A6A6" x="6.462" y="10.353" width="4.615" height="1.882" rx="0.941" />
                            <rect fill="#A6A6A6" x="11.923" y="10.353" width="5.615" height="1.882" rx="0.941" />
                            <rect fill="#A6A6A6" x="18.462" y="10.353" width="4.615" height="1.882" rx="0.941" />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="flex-1">
                      <label className="flex justify-between items-center mb-3 px-1">
                        <span className="text-white font-medium text-lg">Expiration Date</span>
                        <span className="text-red-500 text-xs">Enter an expiry date</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="MM/YY"
                        autoComplete="cc-exp"
                        aria-label="Expiry date in format MM YY"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-600 text-lg focus:outline-none focus:border-white/20 transition-all"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="flex justify-between items-center mb-3 px-1">
                        <span className="text-white font-medium text-lg">CVC</span>
                        <span className="text-red-500 text-xs">Enter a CVC</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="xxx"
                        autoComplete="cc-csc"
                        aria-label="CVC"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-600 text-lg letter-spacing font-mono focus:outline-none focus:border-white/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <label className="flex justify-between items-center mb-3 px-1">
                      <span className="text-white font-medium text-lg">Billing Address</span>
                      <span className="text-red-500 text-xs">Enter your street address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Billing Address"
                      autoComplete="off"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-600 text-lg focus:outline-none focus:border-white/20 transition-all"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Your Information Section */}
            <div className="space-y-6 mt-8">
              <h3 className="text-3xl font-semibold text-gray-400 bg-clip-text bg-gradient-to-r from-white via-white to-white opacity-75">
                YOUR INFORMATION
              </h3>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="flex justify-between items-center mb-3 px-1">
                    <span className="text-white font-medium text-lg">Email address</span>
                    <span className="text-red-500 text-xs">Enter a valid email address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    autoComplete="email"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-600 text-lg focus:outline-none focus:border-white/20 transition-all"
                  />
                </div>

                <div className="flex-1">
                  <label className="flex justify-between items-center mb-3 px-1">
                    <span className="text-white font-medium text-lg">Full Name</span>
                    <span className="text-red-500 text-xs">Enter your full name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-gray-600 text-lg focus:outline-none focus:border-white/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Total Due Section */}
            <div className="mt-8 space-y-6">
              <div className="bg-slate-900 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
                <h3 className="text-white font-semibold text-2xl">Total Due:</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-yellow-300 font-bold text-3xl">${isYearly ? '996' : '99'}</span>
                  <span className="text-yellow-300 font-bold text-lg">/ {isYearly ? 'year' : 'month'}</span>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreed"
                    className="mt-1 w-6 h-6 border border-red-500 rounded cursor-pointer"
                  />
                  <label htmlFor="agreed" className="text-white/70 text-base leading-relaxed">
                    I accept the
                    <a
                      href="https://jointherealworld.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                    <span className="text-white/70"> and </span>
                    <a
                      href="https://jointherealworld.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-gradient-to-r from-white via-yellow-300 to-orange-600 text-slate-950 font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all text-lg">
                {isYearly ? (
                  <>
                    <img
                      alt="Crypto Token"
                      loading="lazy"
                      width="32"
                      height="32"
                      src={selectedTokenData.icon}
                      className="w-8 h-8"
                    />
                    <span>Join with 996.00 {selectedTokenData.symbol} ({selectedTokenData.type})</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span>Enter The Real World</span>
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="text-right text-gray-600 text-xs mt-8">
              Copyright © 2025 The Real World
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
