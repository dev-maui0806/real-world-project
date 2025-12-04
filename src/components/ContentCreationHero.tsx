'use client';

import CourseHeroSection from './CourseHeroSection';

export default function ContentCreationHero() {
  return (
    <CourseHeroSection
      title={{
        main: 'Content Creation & AI Campus',
        highlight: 'The Real World',
      }}
      description={[
        'Welcome to the Content Creation Course with Professor Pope. Whether',
        "you're a beginner, an intermediate content creator, or an advanced professional, this course is designed to elevate your skills and empower you with the knowledge and tools to excel in the world of content creation.",
      ]}
      primaryCTA={{
        text: 'Get Started',
        href: '/checkout',
      }}
      secondaryCTA={{
        text: 'Watch Video',
        href: 'https://therealworld.net/the-real-world-content-creation',
      }}
      videoSrc="https://player.vimeo.com/video/904502588?autopause=0&app_id=122963"
      badge="New Course!"
      stats={{
        number: '20,122+',
        text: 'have already changed their Lives with UGC',
      }}
    />
  );
}
