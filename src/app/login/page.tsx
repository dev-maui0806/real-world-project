'use client';
import React from 'react'; 
import Link from 'next/link'; 
import WhatYouLearnSection from '@/components/WhatYouLearnSection';
import TheRealWorldAccessSection from '@/components/TheRealWorldAccessSection';
import LockInPriceSection from '@/components/LockInPriceSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function LoginPage() {
  return (
    <>
    <Header/>
      {/* First Section - Portal Login */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            decoding="auto"
            width="2000"
            height="1414"
            alt=""
            loading="lazy"
            src="https://framerusercontent.com/images/ccv2CcNyZZFDP3kOD1mLmmH7o8.webp?width=2000&height=1414"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(5,14,21,0.35)] to-[rgb(5,14,21)]" />

        {/* Logo with Annotation */}
        <div className="absolute top-20 z-20 flex flex-col items-center gap-4">
          <a
            href="https://therealworld.net/"
            className="relative w-[120px] h-[120px] flex items-center justify-center"
          >
            <img
              decoding="auto"
              width="473"
              height="473"
              alt="The Real World Logo"
              loading="lazy"
              src="https://framerusercontent.com/images/73dcnwXHWU7BxiI8tkEaNmbZ9xw.webp?width=473&height=473"
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        </div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-10 w-full px-4">
          {/* Title and Subtitle Section */}
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide">
              The Real World Portal
            </h1>

            <div className="flex flex-col items-center gap-0">
              <p className="text-center text-white text-base md:text-lg leading-relaxed">
                <span className="text-white/84">Login to</span>
                <span className="text-white font-normal ml-1" />
                <span className="text-white font-semibold">The Real World</span>
                <span className="text-white font-normal ml-1" />
                <span className="text-white/84">app</span>
              </p>
              <p className="text-center text-white text-base md:text-lg leading-relaxed mt-1">
                <span className="text-white/84">Stop procrastinating. Start</span>
                <span className="text-white font-normal ml-1" />
                <span className="text-white font-semibold">making money instead.</span>
              </p>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            {/* Sign Up Button */}
            <Link
              target="_blank"
              rel="noopener"
              href="/checkout"
              className="w-full h-[60px] flex items-center justify-center bg-transparent border-2 border-gray-600/30 rounded-lg hover:border-gray-500/50 transition-all duration-300"
            >
              <p className="text-gray-300 text-center font-medium text-lg">
                I don't have an account
              </p>
            </Link>

            {/* Login Button */}
            <a
              target="_blank"
              rel="noopener"
              href="https://app.jointherealworld.com/auth/login?a=zwqn9rf9&subid=official"
              className="w-full h-[64px] flex items-center justify-center bg-gradient-to-b from-yellow-300 to-yellow-300 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              <p className="text-slate-900 text-center font-semibold text-lg uppercase">
                Log In
              </p>
            </a>
          </div>
        </div>

        {/* Logo Link (Bottom Right) */}
        <a
          aria-hidden="true"
          href="https://therealworld.net/"
          className="fixed bottom-8 right-8 z-20 w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 50 50"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <circle cx="25" cy="25" r="24" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
            <path
              d="M25 15 L35 25 L25 35 L15 25 Z"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </a>
      </div>

      {/* Third Section - Gradient Overlay */}
      <div className="relative w-full bg-black">
        <div className="absolute inset-0 h-[376px] w-full bg-gradient-to-b from-[rgb(6,14,21)] to-transparent z-40 pointer-events-none" />
      </div>

      {/* Second Section - Why You Are Still On The Outside */}
      <div className="w-full bg-gradient-to-b from-[rgb(9,16,27)] via-[rgb(6,14,21)] to-[rgb(5,14,21)] py-20 md:py-32 relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why You Are Still On The
                <span className="font-bold"> Outside</span>
              </h2>

              <div className="space-y-6">
                <p className="text-white/64 text-lg leading-relaxed">
                  The modern world is designed to keep you distracted. While you scroll, verify credentials, and wait for permission, the economy is shifting.
                  <span className="text-white font-medium"> The Real World</span>
                  was built to be a fortress against the
                  <span className="text-white font-medium"> incompetence of the status quo</span>
                  . When you are on the outside, you are playing by rules that were written to
                  <span className="text-white font-medium"> make you fail.</span>
                </p>

                <p className="text-white/64 text-lg leading-relaxed">
                  Gaining access to this portal is not just about logging
                  <span className="text-white font-medium"> into a website</span>
                  ; it is about plugging into a hive mind of hyper-successful individuals. Most people spend their lives guessing how money is made. They try to learn from
                  <span className="text-white font-medium"> outdated textbooks</span>
                  or professors who have
                  <span className="text-white font-medium"> never run a business</span>
                  . That is why they stay poor.
                </p>

                <p className="text-white/64 text-lg leading-relaxed">
                  Inside, we do not guess. We execute. We have removed the barriers to entry for
                  <span className="text-white font-medium"> high-level business education</span>
                  . Andrew Tate and the professors inside provide the blueprint. The only thing missing is your decision to step through the door. If you are already a member, your
                  <span className="text-white font-bold"> access</span>
                  is waiting above. If you are not, realize that
                  <span className="text-white font-medium"> every second you wait</span>
                  is another opportunity given to someone else.
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1 lg:sticky lg:top-8">
              <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg">
                <img
                  decoding="auto"
                  loading="lazy"
                  width="680"
                  height="615"
                  alt=""
                  src="https://framerusercontent.com/images/zN0tnwsx7sjZX6qAIYIs9IQKQ.png?width=680&height=615"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage: 'radial-gradient(50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                    WebkitMaskImage: 'radial-gradient(50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Curriculum */}
      <WhatYouLearnSection topText="Inside The Curriculum: What You Will Learn" />

      {/* Fifth Section - The Real World Access & Features */}
      <TheRealWorldAccessSection />

      {/* Sixth Section - Price Increase Is Imminent */}
      <LockInPriceSection
        heading="Price Increase Is Imminent"
        description={
          <>
            <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 500 }}>
              The price of the real world is being increased.
            </span>
            <br />
            <br />
            <span>
              Hundreds of thousands of students have already joined THE REAL WORLD
              and are on their way to financial freedom.
            </span>
            <br />
            <br />
            <span style={{ color: 'rgb(255, 255, 255)' }}>Lock in your spot now.</span>
          </>
        }
        buttonUrl="https://checkout.jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
