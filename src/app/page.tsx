'use client';

import Header from '@/components/Header';
import WhatYouLearnSection from '@/components/WhatYouLearnSection';
import NewSkillsSection from '@/components/NewSkillsSection';
import AISection from '@/components/AISection';
import StudentsWinningSection from '@/components/StudentsWinningSection';
import StudentInterviewsSection from '@/components/StudentInterviewsSection';
import WhatYouWillGetSection from '@/components/WhatYouWillGetSection';
import AchieveGoalsSection from '@/components/AchieveGoalsSection';
import ChoiceIsYoursSection from '@/components/ChoiceIsYoursSection';
import LockInPriceSection from '@/components/LockInPriceSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-[#060e15] pt-24 md:pt-32 pb-16 md:pb-32 min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/rNSObuTEDJtTgkiazhgBwsqaymQ.png?width=1728&height=981)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(
                rgb(6, 14, 21) 0%,
                rgba(6, 14, 21, 0.14) 45%,
                rgb(6, 14, 21) 100%
              )`,
            }}
          />

          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center gap-10 w-full max-w-6xl px-4 mx-auto">
            {/* Headings Container */}
            <div className="flex flex-col items-center space-y-6">
              {/* Main Heading */}
              <h1
                className="font-sans text-white text-center overflow-wrap break-word w-full"
                style={{
                  fontSize: '60px',
                  lineHeight: '60px',
                  fontWeight: 400,
                  fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                MONEY MAKING IS
                <span style={{ fontWeight: 700 }}> A SKILL</span>
              </h1>

              {/* Subheading */}
              <h2
                className="font-sans text-white text-center user-select-none"
                style={{
                  fontSize: '35px',
                  fontWeight: 500,
                  lineHeight: '35px',
                  fontFamily: '"General Sans", "General Sans Placeholder", sans-serif',
                  textWrap: 'nowrap',
                  whiteSpace: 'pre',
                  userSelect: 'none',
                }}
              >
                We will teach you how to
                <span style={{ fontWeight: 700 }}> master it</span>
              </h2>
            </div>

            {/* Video Container */}
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: '1.77239' }}>
              {/* Video Background */}
              <div className="absolute inset-0 rounded-2xl bg-black/80 z-10" />

              {/* Video Placeholder Image */}
              <img
                src="https://framerusercontent.com/images/rNSObuTEDJtTgkiazhgBwsqaymQ.png?width=1728&height=981"
                alt="TRW Video"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

              {/* Vimeo Embed */}
              <iframe
                src="https://player.vimeo.com/video/902932460?autopause=0&app_id=122963"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="TRW (OFFICIAL TRAILER)"
                className="absolute inset-0 w-full h-full rounded-2xl z-20"
              />
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center w-full gap-4">
              {/* Main Button */}
              <a
                href="https://checkout.jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#ffa930] to-[#d5aa12] rounded-lg font-bold text-black text-xl md:text-2xl tracking-wider hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 uppercase"
              >
                Join The Real World
              </a>

              {/* User Avatars and Text */}
              <div className="flex items-center justify-center gap-2 h-8 md:h-10 mt-2">
                <img
                  src="https://framerusercontent.com/images/VTr2kDuZjyrrr32wNrJaUIadk.webp"
                  alt="User avatars"
                  className="h-full w-auto object-cover"
                />
                <p className="text-gray-400 text-sm md:text-base whitespace-nowrap">
                  Join 113,000+ like-minded students
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - A Massive Upgrade */}
        <section className="w-full bg-[#060e15] py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            {/* Comparison Container */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
              {/* Old Platform - Hustlers University */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <div className="w-32 md:w-40">
                  <img
                    src="https://framerusercontent.com/images/1zQW3KBZwqIsfYD5xBY9dHllE.webp?width=240&height=242"
                    alt="Hustlers University"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-sans font-medium text-gray-500 tracking-wider line-through">
                  Hustlers University
                </h4>
              </div>

              {/* Arrow Icon */}
              <div className="w-12 h-auto">
                <img
                  src="https://framerusercontent.com/images/F8J3HT6I2SDyaxpCADyq7gq2anQ.svg?width=47&height=30"
                  alt="Arrow"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* New Platform - The Real World */}
              <div className="flex flex-col gap-3 items-center justify-center relative pt-8">
                {/* Overlapping small image */}
                <div className="w-28 md:w-32 absolute -top-10 z-10">
                  <img
                    src="https://framerusercontent.com/images/3duNFte5ly16u1dbX6K6Jg9SJo.webp?width=225&height=198"
                    alt="The Real World Badge"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Main product image */}
                <div className="w-40 md:w-48">
                  <img
                    src="https://framerusercontent.com/images/dWvt3pF38parfg9W3GCM7q8wAIM.webp?width=340&height=204"
                    alt="The Real World"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Label */}
                <h4 className="text-xl md:text-2xl font-sans font-medium text-white tracking-wider">
                  THE REAL WORLD
                </h4>
              </div>
            </div>

            {/* Text Content Container */}
            <div className="flex flex-col gap-3 items-center w-full">
              {/* Label: INTRODUCING */}
              <p className="text-base md:text-lg tracking-widest text-gray-500 text-center uppercase">
                INTRODUCING
              </p>

              {/* Heading: A MASSIVE UPGRADE */}
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-white text-center leading-tight">
                A MASSIVE UPGRADE
              </h2>
            </div>

            {/* Description Content */}
            <div className="flex flex-col gap-6 items-center max-w-3xl w-full mx-auto px-4">
              {/* First paragraph */}
              <p className="text-lg md:text-xl text-gray-400 text-center leading-relaxed">
                The modern education system is designed to make you poor.
              </p>

              {/* Second paragraph with emphasis */}
              <div className="w-full text-center space-y-2">
                <p className="text-lg md:text-xl text-white font-semibold">
                  Imagine you could get access to multi-millionaire mentors{' '}
                  <span className="text-gray-300 font-normal">
                    who will give you a
                  </span>
                </p>
                <p className="text-lg md:text-xl text-gray-300">
                  step-by-step path to reach your goals as fast as possible…
                </p>
              </div>

              {/* Third paragraph with emphasis */}
              <p className="text-lg md:text-xl text-white font-semibold text-center">
                <span className="text-gray-300">
                  That's
                </span>
                {' exactly '}
                <span className="text-gray-300">
                  what you can find
                </span>
                {' inside THE REAL WORLD.'}
              </p>
            </div>
          </div>
        </section>

        {/* Third Section - Features Timeline */}
        <section id="features-timeline" className="bg-gradient-to-b from-[#0a111c] to-[#0f1620] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            {/* Feature 1: Learn Vital Life Lessons */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-24">
              {/* Image Column */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/otyk25kIzbKLXobzGMMDOJ6iEA.webp?width=384&height=439"
                  alt="Learn vital life lessons"
                  className="w-full max-w-sm h-auto object-contain rounded-lg"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 space-y-8">
                {/* Section Title with Icon */}
                <div className="flex items-start gap-4 md:gap-6">
                  <img
                    src="https://framerusercontent.com/images/28lyG9zKvlqnnnjhWdR1kYlzCa8.webp?width=172&height=172"
                    alt="Learn icon"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-sans leading-tight">
                      Learn Vital
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb338] to-[#ffd966]">
                        Life Lessons
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      title: 'World-class',
                      description: 'custom built learning application',
                      icon: '✓',
                    },
                    {
                      title: 'Zero to $10k/month',
                      description: 'Scale your income as fast as possible',
                      icon: '✓',
                    },
                    {
                      title: 'Maximize your income',
                      description: 'Master the skills you need for financial success',
                      icon: '✓',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="text-[#ffb338] text-2xl font-bold flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg md:text-xl">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-base md:text-lg mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 2: Join a Private Network */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-24">
              {/* Image Column */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/IC9w6NygQgQanNdpVGtzTEHWY.webp?width=640&height=600"
                  alt="Network showcase"
                  className="w-full max-w-sm h-auto object-contain rounded-lg"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 space-y-8">
                {/* Section Title with Icon */}
                <div className="flex items-start gap-4 md:gap-6">
                  <img
                    src="https://framerusercontent.com/images/zHHvisNxjHrac28SKr7Xj1XQzw.webp?width=172&height=172"
                    alt="Network icon"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-sans leading-tight">
                      Join a Private
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb338] to-[#ffd966]">
                        Network
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      title: 'Celebrate your wins',
                      description: 'with people who understand your journey',
                      icon: '✓',
                    },
                    {
                      title: 'Like-minded friends',
                      description: 'Connect and grow together with 113,000+ students',
                      icon: '✓',
                    },
                    {
                      title: 'Community support',
                      description: 'Access exclusive network events and mastermind groups',
                      icon: '✓',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="text-2xl text-[#ffb338] flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <p className="text-white font-semibold text-lg md:text-xl">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-base md:text-lg mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3: Access to Multimillionaires */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image Column */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/RLP5teIikt4diKjBtNy5rV4nls.webp?width=750&height=519"
                  alt="Expert mentors"
                  className="w-full max-w-sm h-auto object-contain rounded-lg"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 space-y-8">
                {/* Section Title with Icon */}
                <div className="flex items-start gap-4 md:gap-6">
                  <img
                    src="https://framerusercontent.com/images/l0WCb47Ob94HsTUQCXOOMjUTQws.png?width=172&height=172"
                    alt="Mentorship icon"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-sans leading-tight">
                      Access to
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb338] to-[#ffd966]">
                        Multimillionaires
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      title: 'Expert mentors',
                      description: 'Learn from hyper-successful experts in their fields',
                      icon: '✓',
                    },
                    {
                      title: 'Personalized guidance',
                      description: 'Get mentored every step of your entrepreneurial journey',
                      icon: '✓',
                    },
                    {
                      title: '1-on-1 advice',
                      description: 'Direct guidance from industry leaders and multimillionaire entrepreneurs',
                      icon: '✓',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="text-2xl text-[#ffb338] flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <p className="text-white font-semibold text-lg md:text-xl">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-base md:text-lg mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="mt-24 text-center">
              <a
                href="https://checkout.jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#ffa930] to-[#d5aa12] rounded-lg font-bold text-black text-xl md:text-2xl tracking-wide hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Join The Real World
              </a>

              {/* Social Proof */}
              <div className="mt-6 flex flex-row justify-center items-center gap-3">
                <img
                  src="https://framerusercontent.com/images/VTr2kDuZjyrrr32wNrJaUIadk.webp"
                  alt="Student avatars"
                  className="h-8 md:h-10 w-auto"
                />
                <p className="text-gray-4 00 text-sm md:text-base">
                  Join 113,000+ like-minded students
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section - What You'll Learn */}
        <WhatYouLearnSection />

        {/* Fifth Section - AI Feature */}
        {/* <AISection /> */}

        {/* Sixth Section - New Skills */}
        <NewSkillsSection />

        {/* Seventh Section - Students Winning */}
        <div id="student-wins">
          <StudentsWinningSection />
        </div>

        {/* Eighth Section - Student Interviews */}
        <div id="interviews">
          <StudentInterviewsSection />
        </div>

        {/* Ninth Section - What You Will Get */}
        <WhatYouWillGetSection />

        {/* Tenth Section - Achieve Your Goals */}
        <AchieveGoalsSection />

        {/* Eleventh Section - Choice Is Yours */}
        <ChoiceIsYoursSection />

        {/* Twelfth Section - Lock-In Price */}
        <LockInPriceSection />

        {/* Thirteenth Section - FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
