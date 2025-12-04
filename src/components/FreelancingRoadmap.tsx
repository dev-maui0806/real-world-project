'use client';

import React from 'react';
import RoadmapSection, { RoadmapStep } from './RoadmapSection';

const roadmapSteps: RoadmapStep[] = [
  {
    number: '01',
    label: 'Niche',
    title: 'Choose the right freelance niche',
    description: 'Research different freelance niches to understand what is popular and profitable. Talk to other freelancers in your areas of interest to get their advice. Analyze the competition to identify opportunities where you can stand out. Choose a niche that you are passionate about and have expertise in, as this is the most important factor for success.'
  },
  {
    number: '02',
    label: 'Research',
    title: 'Identify your target audience',
    description: 'Consider your freelance niche and identify who most likely needs your services. Research your target audience demographics, interests, and pain points using market research tools and social media. Create a buyer persona to represent your ideal customer, including details like their name, age, job title, goals, and challenges.'
  },
  {
    number: '03',
    label: 'Hone your Skills',
    title: 'Develop your skills and expertise',
    description: 'Take courses and workshops to learn new skills and improve existing ones. Read books and articles on various freelance topics to gain knowledge and strategies. Practice your skills regularly by finding opportunities to apply them, even before becoming a paid freelancer.'
  },
  {
    number: '04',
    label: 'Portfolio',
    title: 'Build a strong portfolio',
    description: 'Include only your best work in your portfolio that you are proud of and that accurately represents your skills. Tailor your portfolio to your target audience by choosing pieces relevant to the types of clients you want to work with. Get feedback on your portfolio from friends, family, or other freelancers.'
  },
  {
    number: '05',
    label: 'Client Acquisition',
    title: 'Market your services and find clients',
    description: 'Create a website or blog to showcase your portfolio and market your services. Be active on social media to connect with potential clients and promote your work. Network with other freelancers and attend industry events. Consider cold DMing potential clients in a professional and respectful way.'
  }
];

export default function FreelancingRoadmap() {
  return (
    <RoadmapSection
      title="Personalized Freelancer Roadmap:"
      subtitle="A Step-by-Step Guide to Success"
      description="Master the Art of Freelancing: Learn How to Find High-Paying Clients, Manage Projects Effectively, and Succeed in This Competitive Industry"
      ctaText="JOIN The real world"
      ctaHref="https://jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
      steps={roadmapSteps}
    />
  );
}
