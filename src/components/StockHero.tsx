'use client';

import CourseHeroSection from './CourseHeroSection';

export default function StockHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Stock Trading -',
        highlight: 'The Real World',
      }}
      description={[
        'Learn the Fundamentals of Stock Market Investing, Whether',
        'You Are a Complete Beginner or an Aspiring Trader.',
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-stocks#video',
      }}
      videoSrc="https://player.vimeo.com/video/904501332?autopause=0&app_id=122963"
      stats={{
        number: '125,000+',
        text: 'students have mastered stocks with us',
      }}
    />
  );
}
