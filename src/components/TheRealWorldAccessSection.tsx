'use client';

import React from 'react';

interface FeatureProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  aspectRatio: string;
}

const Feature = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  aspectRatio
}: FeatureProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className="w-full flex flex-col lg:flex-row gap-0 items-center justify-center">
      {/* Image Container */}
      <div
        className={`flex-1 flex items-center justify-center overflow-hidden w-full lg:w-auto ${
          isImageLeft ? 'order-first' : 'order-last'
        }`}
        style={{ opacity: 0.55 }}
      >
        <div
          className="relative w-full"
          style={{ aspectRatio }}
        >
          <img
            decoding="auto"
            loading="lazy"
            alt={imageAlt}
            src={imageSrc}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div
        className={`flex-1 flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-start p-4 sm:p-6 md:p-12 lg:p-20 w-full lg:w-auto ${
          isImageLeft ? 'order-last' : 'order-first'
        }`}
      >
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full">
          <h3 className="text-white text-lg sm:text-2xl md:text-[28px] font-bold leading-6 sm:leading-8 md:leading-[36.4px] font-sans">
            {title}
          </h3>
          <p className="text-white/64 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-[22.4px] font-sans break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TheRealWorldAccessSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 py-8 sm:py-16 md:py-24 px-4 sm:px-8 bg-gradient-to-b from-[rgb(9,16,27)] via-[rgb(10,17,28)] to-[rgb(5,14,21)]">
      {/* Title */}
      <div className="flex justify-center w-full">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-7 sm:leading-9 md:leading-[55px] font-sans uppercase text-center max-w-2xl">
          <span className="text-white">The Real World</span>
          <br />
          Access &amp; Features
        </h2>
      </div>

      {/* Features Container */}
      <div className="w-full max-w-5xl flex flex-col gap-0">
        {/* Feature 1: The Campus */}
        <Feature
          title="The Campus"
          description={
            <>
              We don't teach theory. This is a
              <span className="text-white font-medium"> business campus.</span>
              {' '}From
              <span className="text-white font-medium"> copywriting</span>
              {' '}and
              <span className="text-white font-medium"> content creation</span>
              {' '}to
              <span className="text-white font-medium"> stocks</span>
              {' '}and
              <span className="text-white font-medium"> crypto</span>
              {' '}, you get direct guidance on how to
              <span className="text-white font-medium"> monetize modern skills.</span>
            </>
          }
          imageSrc="https://framerusercontent.com/images/WFSJh0SPfkYfWx6XtirFMSdivIY.webp?width=640&height=452"
          imageAlt="image of the real world step by step learning"
          imagePosition="left"
          aspectRatio="640 / 452"
        />

        {/* Feature 2: Daily Wins */}
        <Feature
          title="Daily Wins"
          description={
            <>
              See the
              <span className="text-white font-medium"> world wins</span>
              {' '}in real-time. Our
              <span className="text-white font-medium"> students</span>
              {' '}are posting results every single day. This is
              <span className="text-white font-medium"> online education</span>
              {' '}that actually works.
            </>
          }
          imageSrc="https://framerusercontent.com/images/TSHdHn9kwxNGmPfuU3O453Q.png?width=850&height=837"
          imageAlt="image of the real world live sessions"
          imagePosition="right"
          aspectRatio="850 / 837"
        />

        {/* Feature 3: The Network */}
        <Feature
          title="The Network"
          description={
            <>
              <span className="text-white font-medium">Andrew Tate</span>
              {' '}created this Community to break the illusion. Get support,
              <span className="text-white font-medium"> network with winners</span>
              {' '}, and utilize our proprietary tools and knowledge to
              <span className="text-white font-medium"> escape the 9-to-5</span>
              {' '}.
            </>
          }
          imageSrc="https://framerusercontent.com/images/5qeJmi3ALthM0cIa4OXf6Fm2K9M.webp?width=640&height=529"
          imageAlt="image of the real world community"
          imagePosition="left"
          aspectRatio="640 / 529"
        />
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 w-full max-w-sm px-4">
        {/* Button */}
        <a
          rel="noopener"
          href="https://checkout.jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
          className="w-full flex items-center justify-center rounded-[10px] px-4 sm:px-6 py-3 sm:py-5 bg-gradient-to-r from-[rgb(255,169,48)] via-[rgb(255,171,35)] to-[rgb(213,170,18)] hover:opacity-90 transition-opacity"
        >
          <p className="text-slate-900 text-center font-bold text-base sm:text-lg md:text-2xl uppercase tracking-[0.6px] sm:tracking-[1.2px]">
            JOIN THE REAL WORLD
          </p>
        </a>

        {/* Price Lock Notice */}
        <div className="flex items-center gap-1.5 sm:gap-2 justify-center flex-wrap">
          <div className="w-3 sm:w-4 flex-shrink-0">
            <img
              decoding="auto"
              loading="lazy"
              width="16"
              height="27"
              alt=""
              src="https://framerusercontent.com/images/JsI5CAvy5xqUtXAh73O67xpLws.svg?width=16&height=27"
              className="w-full h-auto"
            />
          </div>
          <p className="text-white/60 text-center text-xs sm:text-sm md:text-base leading-4 sm:leading-5" style={{fontFamily: '"General Sans", sans-serif'}}>
            Lock-in your price before it increases.
            <span className="text-[rgb(255,207,35)] font-normal"> Act fast.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
