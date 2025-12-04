'use client';

import CourseHeroSection from './CourseHeroSection';

export default function FreelancingHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Freelancing Campus -',
        highlight: 'The Real World',
      }}
      description={[
        'Learn the Secrets of successful Freelancing, Whether',
        "You're a Beginner or an Experienced Freelancer.",
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-freelancing#video',
      }}
      videoSrc="https://player.vimeo.com/video/904501949?autopause=0&app_id=122963"
      stats={{
        number: '90,254+',
        text: 'have already changed their Lives with Freelancing',
      }}
    />
  );
}
