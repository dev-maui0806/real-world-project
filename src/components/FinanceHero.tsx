'use client';

import CourseHeroSection from './CourseHeroSection';

export default function FinanceHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Finance & Business Campus -',
        highlight: 'The Real World',
      }}
      description={[
        "Join Millionaire Professor Arno's Guided Journey to",
        'Financial Mastery and Business Success',
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-finance',
      }}
      videoSrc="https://player.vimeo.com/video/904502723?autopause=0&app_id=122963"
      stats={{
        number: '78,925+',
        text: 'have already gained control over their Finances',
      }}
    />
  );
}
