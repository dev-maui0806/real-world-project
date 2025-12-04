'use client';

import React from 'react';

interface CourseCardProps {
  icon: string;
  title: React.ReactNode;
  description: React.ReactNode;
  learnMoreUrl: string;
  videoUrl: string;
  hasLearnMore?: boolean;
  hasVideo?: boolean;
  isNew?: boolean;
}

const CourseCard = ({
  icon,
  title,
  description,
  learnMoreUrl,
  videoUrl,
  hasLearnMore = true,
  hasVideo = true,
  isNew = false
}: CourseCardProps) => (
  <div className="relative bg-[#131b23] rounded-lg flex flex-col justify-end overflow-hidden pt-18 z-[5] flex-1 min-w-0 gap-2.5 w-full md:w-1/2">
    {/* NEW Badge */}
    {isNew && (
      <div className="absolute top-4 right-[27px] z-10">
        <p className="text-[#ffcf23] text-sm leading-[33px] font-inter">NEW</p>
      </div>
    )}

    <div className="flex flex-col gap-10 justify-end w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-8 justify-center items-center px-10 w-full">
        {/* Icon and Title */}
        <div className="flex gap-4 justify-center items-center min-w-0 w-full">
          <div className="w-12 h-12 relative flex-shrink-0">
            <img
              src={icon}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-8 font-sans text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="text-white/71 text-xl leading-[30px] font-general-sans text-center break-words">
            {description}
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      {hasLearnMore && (
        <div className="w-full relative">
          <div className="flex flex-col gap-2.5 justify-center items-center cursor-pointer w-full">
            <a
              href={learnMoreUrl}
              className="flex gap-2.5 justify-center items-center bg-transparent border border-transparent rounded-lg px-6 py-3 relative z-10 min-w-0"
            >
              <p className="text-[#ffa545] text-xl font-semibold leading-6 tracking-[1.2px] font-general-sans text-center cursor-pointer whitespace-nowrap">
                Learn More
              </p>
            </a>
          </div>
        </div>
      )}

      {/* Video Section */}
      {hasVideo && (
        <div 
          className="relative bg-[#181b21] overflow-hidden w-full"
          style={{ aspectRatio: '1.7633 / 1' }}
        >
          {/* Video Overlay */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-black/80 z-10"
            style={{ aspectRatio: '1.7633 / 1' }}
          />
          
          {/* Video Container */}
          <div className="absolute inset-0 z-[9]">
            <div className="flex justify-center items-center h-full w-full overflow-hidden relative">
              <div className="h-full w-full">
                <div className="h-full w-full relative">
                  <iframe
                    src={videoUrl}
                    className="absolute inset-0 w-full h-full border-0 overflow-hidden"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`${title} Campus`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

interface CryptoCardProps {
  icon: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const CryptoCard = ({ icon, title, description, imageSrc, imageAlt }: CryptoCardProps) => (
  <div className="bg-[#131b23] rounded-lg flex flex-col justify-end overflow-hidden pt-18 relative z-[5] flex-1 min-w-0 gap-2.5 w-full h-full">
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-8 justify-center items-center px-10 w-full">
        {/* Icon and Title */}
        <div className="flex gap-4 justify-center items-center w-full">
          <div className="w-12 h-12 relative flex-shrink-0">
            <img
              src={icon}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-8 font-sans text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="text-white/71 text-xl leading-[30px] font-general-sans text-center break-words">
            {description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div 
        className="relative bg-[#181b21] overflow-hidden w-full"
        style={{ aspectRatio: '1.7633 / 1' }}
      >
        {/* Image Overlay */}
        <div 
          className="absolute left-0 top-0 w-full bg-black/80 z-10"
          style={{ aspectRatio: '1.7633 / 1' }}
        />
        
        {/* Image Container */}
        <div className="contents">
          <div 
            className="absolute bottom-0 left-0 w-full z-10"
            style={{ aspectRatio: '1.78025 / 1' }}
          >
            <div className="absolute inset-0">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FitnessCard = () => (
  <div className="bg-[#131b23] rounded-lg flex flex-col justify-end overflow-hidden pt-13 relative z-[5] gap-2.5 w-full max-w-[663px]">
    {/* NEW Badge */}
    <div className="absolute top-4 right-[27px] z-10">
      <p className="text-[#ffcf23] text-sm leading-[33px] font-inter">NEW</p>
    </div>

    <div className="flex flex-col gap-10 justify-end w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-8 justify-center items-center px-10 w-full">
        {/* Icon and Title */}
        <div className="flex gap-4 justify-center items-center min-w-0">
          <div className="w-12 h-12 relative flex-shrink-0">
            {/* Fitness Icon - using a placeholder icon since SVG reference won't work */}
            <div className="w-full h-full bg-white/10 rounded flex items-center justify-center">
              <span className="text-white text-xl">💪</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-2xl md:text-3xl font-semibold leading-8 font-sans text-center">
              Fitness
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-start overflow-wrap break-word w-full">
          <p className="text-white/74 text-xl leading-[30px] font-general-sans text-center break-words">
            <span className="text-white font-semibold">The Real World</span>
            {' '}approach to fitness focuses on sculpting a{' '}
            <span className="text-white font-semibold">disciplined, resilient character,</span>
            {' '}not just a strong physique.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div 
        className="relative bg-[#181b21] overflow-hidden w-full"
        style={{ aspectRatio: '1.77926 / 1' }}
      >
        {/* Video Container */}
        <div className="absolute inset-0 z-[9]">
          <div className="flex justify-center items-center h-full w-full overflow-hidden relative">
            <div className="h-full w-full">
              <div className="h-full w-full relative">
                <iframe
                  src="https://player.vimeo.com/video/968317872?autopause=0&app_id=122963"
                  className="absolute inset-0 w-full h-full border-0 overflow-hidden"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="The Real World Fitness Campus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface WhatYouLearnSectionProps {
  topText?: string;
}

export default function WhatYouLearnSection({ topText = "WHAT YOU'LL LEARN" }: WhatYouLearnSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#060e15] relative gap-10 pt-8">
      {/* Background Image */}
      <div
        className="absolute left-1/2 top-0 w-full z-0"
        style={{
          aspectRatio: '2.22042 / 1',
          transform: 'matrix(1, 0, 0, 1, -952.5, 0)'
        }}
      >
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/2WzQE2MX4XbieuzeEvYwzyJ8.png?width=1914&height=862"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute left-0 top-0 w-full z-[4] bg-gradient-to-b from-[#060e15] to-transparent"
        style={{ height: '376.435px' }}
      />

      {/* Header Content */}
      <div className="flex flex-col items-center justify-center gap-3 overflow-hidden relative w-full z-[7] px-4">
        <div className="contents">
          <div className="flex flex-col justify-start overflow-wrap break-word relative w-full">
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight md:leading-[67px] font-sans text-center break-words">
              {topText.includes(':') ? (
                <>
                  {topText.split(':')[0]}:
                  <br />
                  <span className="font-medium">{topText.split(':')[1].trim()}</span>
                </>
              ) : (
                topText
              )}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 overflow-hidden relative w-full max-w-4xl">
          <div className="contents">
            <div className="flex flex-col justify-start overflow-wrap break-word relative w-full">
              <p className="text-white/60 text-lg md:text-2xl leading-relaxed md:leading-[38.4px] font-sans text-center break-words">
                When a new technology revolutionizes an industry,
              </p>
            </div>
          </div>

          <div className="contents">
            <div className="flex flex-col justify-start overflow-wrap break-word relative w-full">
              <p className="text-white/60 text-lg md:text-2xl leading-relaxed md:leading-[38.4px] font-sans text-center break-words">
                <span className="text-white font-semibold">
                  <strong className="font-black">THE REAL WORLD will</strong>
                </span>
                {' '}be the first and only place to teach you
              </p>
              <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed md:leading-[38.4px] font-sans text-center break-words">
                <strong className="font-black">how to take advantage of it.</strong>
              </p>
            </div>
          </div>

          <div className="contents">
            <div className="flex flex-col justify-start overflow-wrap break-word relative w-full">
              <p className="text-white/60 text-lg md:text-2xl leading-relaxed md:leading-[38.4px] font-sans text-center break-words">
                Our students receive the latest information at 8am every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="flex flex-col items-center justify-center gap-6 overflow-hidden relative w-full max-w-[1350px] z-[2] px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch overflow-hidden relative w-full z-[2]">
          <CourseCard
            icon="https://framerusercontent.com/images/yAaF4PyoOyGOCscoBed19POZGg.svg?width=64&height=60"
            title="E-COMMERCE"
            description={
              <>
                <span className="text-white font-semibold">Sell profitable products online.</span>
                {' '}Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-ecommerce"
            videoUrl="https://player.vimeo.com/video/904502090?autopause=0&app_id=122963"
          />

          <CourseCard
            icon="https://framerusercontent.com/images/qA0uC358aXdWAfo2I4Op5FbtnoY.svg?width=62&height=60"
            title="COPYWRITING"
            description={
              <>
                <span className="text-white font-semibold">Master the art of selling with words.</span>
                {' '}We'll give you an easy to follow guide on how to master the art of copywriting and secure a list of high-paying clients.
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-copywriting"
            videoUrl="https://player.vimeo.com/video/904502310?autopause=0&app_id=122963"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch overflow-hidden relative w-full">
          <CourseCard
            icon="https://framerusercontent.com/images/p2E8ax8QS6Jo7rWAso7OPZ8nIEY.svg?width=61&height=55"
            title="STOCKS"
            description={
              <>
                <span className="text-white font-semibold">Multiply your capital through the stock market.</span>
                {' '}We'll train you to use technical analysis to find situations where there's a higher upside than the downside.
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-stocks"
            videoUrl="https://player.vimeo.com/video/904501332?autopause=0&app_id=122963"
          />

          <CourseCard
            icon="https://framerusercontent.com/images/OBKuJy9l1NmiQ8SgdOePbmP1E.svg?width=63&height=63"
            title={
              <>
                BUSINESS
                <span className="text-white">&</span>
                FINANCE
              </>
            }
            description={
              <>
                <span className="text-white font-semibold">Master the fundamental skills of business.</span>
                {' '}We'll teach you every skill the hyper successful entrepreneur of tomorrow needs to master.
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-finance"
            videoUrl="https://player.vimeo.com/video/904502723?autopause=0&app_id=122963"
          />
        </div>

        {/* Third Row - Crypto Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch overflow-hidden relative w-full max-w-[1360px]">
          <div className="w-full md:w-1/2">
            <CryptoCard
              icon="https://framerusercontent.com/images/CCd2yxjHWeQgd5CAjtT9UIlRI.svg?width=67&height=60"
              title="CRYPTO INVESTING"
              description={
                <>
                  <span className="text-white font-semibold">Profit from the world's highest-performing assets.</span>
                  {' '}We'll focus on attacking crypto markets from 3 angles: Long-term, medium-term, and short-term.
                </>
              }
              imageSrc="https://framerusercontent.com/images/FHieZXKkCnHWRUvp1AEUcdzB4cM.webp?scale-down-to=1024&width=1280&height=719"
              imageAlt=""
            />
          </div>

          <div className="w-full md:w-1/2">
            <CryptoCard
              icon="https://framerusercontent.com/images/CCd2yxjHWeQgd5CAjtT9UIlRI.svg?width=67&height=60"
              title="CRYPTO TRADING"
              description={
                <>
                  Take advantage of the bull run and{' '}
                  <span className="text-white font-semibold">master the art of crypto trading</span>
                  {' '}in the Crypto Trading campus, where we empower you to navigate the markets with precision.
                </>
              }
              imageSrc="https://framerusercontent.com/images/kAbH43lGzmleYz9esxyvYTEbonE.webp?scale-down-to=1024&width=1280&height=719"
              imageAlt=""
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch overflow-hidden relative w-full">
          <CourseCard
            icon="https://framerusercontent.com/images/2rwYTW18m5Q6MWGh0NbgGuI1B0.svg?width=61&height=59"
            title="CONTENT CREATION & AI"
            description={
              <>
                We live in a digital age. There are websites worth more than skyscrapers. Videos worth more than houses. We will teach you{' '}
                <span className="text-white font-semibold">how to create valuable digital assets</span>
                {' '}and{' '}
                <span className="text-white font-semibold">how to sell them.</span>
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-content-creation"
            videoUrl="https://player.vimeo.com/video/904502588?autopause=0&app_id=122963"
            isNew={true}
          />

          <CourseCard
            icon="https://framerusercontent.com/images/iMoSMCXp3TxaY7IKLuU1aJlf3k.svg?width=67&height=65"
            title={
              <div className="text-base leading-8">
                <span className="text-[32px] leading-8">CLIENT ACQUISITION</span>
                <br />
                <span className="font-medium">&</span>
                <span className="font-bold">SOCIAL MEDIA</span>
              </div>
            }
            description={
              <>
                <span className="text-white font-semibold">If you scroll for hours, but don't get paid for it - this is for you.</span>
                {' '}Our students follow a step-by-step process to gain attention to generate 6 figures.
              </>
            }
            learnMoreUrl="https://therealworld.net/the-real-world-freelancing"
            videoUrl="https://player.vimeo.com/video/904501949?autopause=0&app_id=122963"
            isNew={true}
          />
        </div>

        {/* Fifth Row - Fitness */}
        <div className="flex justify-center items-center w-full">
          <FitnessCard />
        </div>
      </div>
    </section>
  );
}
