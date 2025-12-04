'use client';

import React from 'react';
import RoadmapSection, { RoadmapStep } from './RoadmapSection';

const roadmapSteps: RoadmapStep[] = [
  {
    number: '01',
    label: 'Specialty',
    title: 'Find Your Copywriting Focus',
    description: 'Embark on a comprehensive exploration into the core principles of copywriting. Gain a thorough understanding of the art and science behind crafting compelling content, discover the various writing styles, and learn why effective copy is pivotal in today\'s digital marketing landscape.'
  },
  {
    number: '02',
    label: 'Develop your Skills',
    title: 'Hone Your Skills',
    description: 'Copywriting is an art that requires practice and continuous learning. This includes understanding the principles of persuasive writing, mastering SEO techniques, and staying up-to-date with the latest marketing trends. Consider taking courses, reading books, or learning from successful copywriters to improve your skills.'
  },
  {
    number: '03',
    label: 'Portfolio',
    title: 'Build a Portfolio',
    description: 'A strong portfolio is crucial to showcase your skills and attract potential clients. This could include blog posts, sales pages, email campaigns, and more. Make sure your portfolio reflects the type of work you want to be hired for and demonstrates your ability to deliver results.'
  },
  {
    number: '04',
    label: 'Marketing',
    title: 'Promote Your Services',
    description: 'Once you\'ve honed your skills and built a portfolio, it\'s time to market your services. This could include creating a professional website, leveraging social media platforms, attending networking events, or using freelance platforms. Remember to highlight your unique selling proposition and why clients should choose you over others.'
  },
  {
    number: '05',
    label: 'Overdeliver',
    title: 'Deliver Quality Work',
    description: 'After landing a client, it\'s essential to deliver high-quality work. This means meeting deadlines, communicating effectively with the client, and always striving to exceed client expectations. By delivering quality work consistently, you can build long-term relationships with clients and get repeat business.'
  }
];

export default function CopywritingRoadmap() {
  return (
    <RoadmapSection
      title="Personalized Copywriting Roadmap:"
      subtitle="A Step-by-Step Guide to Success"
      description="Unlock the Power of Copywriting: Discover How to Attract High-Value Clients, Manage Copywriting Projects Efficiently, and Thrive in the Competitive World of SEO Copywriting"
      ctaText="JOIN The real world"
      ctaHref="/checkout"
      steps={roadmapSteps}
    />
  );
}
