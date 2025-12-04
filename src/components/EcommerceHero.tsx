'use client';

import CourseHeroSection from './CourseHeroSection';

export default function EcommerceHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Ecommerce Campus -',
        highlight: 'The Real World',
      }}
      description={[
        'Access the strategies and talent that power the biggest',
        'ecommerce success stories and achieve your Goals faster',
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-ecommerce#video',
      }}
      videoSrc="https://player.vimeo.com/video/904502090?autopause=0&app_id=122963"
      stats={{
        number: '60,821+',
        text: 'have already changed their Lives with Ecommerce',
      }}
    />
  );
}
