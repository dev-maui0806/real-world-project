'use client';

import CourseHeroSection from './CourseHeroSection';

export default function CopywritingHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Copywriting Campus -',
        highlight: 'The Real World',
      }}
      description={[
        'Learn the Secrets of Writing Profitable Copy, Whether',
        "You're a Beginner or an Experienced Copywriter.",
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-copywriting#video',
      }}
      videoSrc="https://player.vimeo.com/video/904502310?autopause=0&app_id=122963"
      stats={{
        number: '56,282+',
        text: 'have already changed their Lives with Copywriting',
      }}
    />
  );
}
