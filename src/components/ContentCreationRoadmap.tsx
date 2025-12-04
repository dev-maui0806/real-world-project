'use client';

import React from 'react';
import RoadmapSection, { RoadmapStep } from './RoadmapSection';

const roadmapSteps: RoadmapStep[] = [
  {
    number: '01',
    label: 'Strategy',
    title: 'Define Your Content Strategy',
    description: 'Start by identifying your target audience and their preferences to understand what type of content they engage with. Set clear content goals, whether it\'s increasing brand awareness, driving conversions, or providing value to your audience. Utilize AI-powered tools to conduct market research and analyze trends to inform your content strategy.'
  },
  {
    number: '02',
    label: 'Ideation',
    title: 'Content Ideation with AI',
    description: 'Leverage AI-driven idea generation tools to brainstorm content ideas. These tools can analyze data, trends, and user behavior to suggest relevant topics. Use AI to identify gaps in existing content within your niche and find opportunities for unique, valuable content creation.'
  },
  {
    number: '03',
    label: 'Enhancement',
    title: 'Content Creation and Enhancement',
    description: 'AI can assist in content creation by generating text, suggesting headlines, or even creating entire articles or videos. Enhance your content with AI-driven editing tools that can improve grammar, readability, and SEO optimization. Incorporate multimedia elements, such as AI-generated images or videos, to make your content more engaging.'
  },
  {
    number: '04',
    label: 'Following',
    title: 'Building a Loyal Following',
    description: 'AI can optimize your content distribution strategy. Use AI-powered social media schedulers and email marketing platforms to reach your audience at the right times. Implement personalization using AI algorithms to tailor content recommendations to individual users, improving user engagement.'
  },
  {
    number: '05',
    label: 'Analyzing',
    title: 'Data Analysis and Iteration',
    description: 'After content is published, AI analytics tools can track performance metrics, such as page views, click-through rates, and conversion rates. Analyze this data to understand what\'s working and what isn\'t, and use AI-driven insights to make data-backed decisions for future content creation. Continuously iterate and refine your content strategy based on the insights gained from AI analysis.'
  }
];

export default function ContentCreationRoadmap() {
  return (
    <RoadmapSection
      title="AI-Enhanced Content Creation:"
      subtitle="Blueprint for Success"
      description="Discover the Secrets to Harnessing AI-Powered Content Creation, Boosting Your Online Presence, and Dominating the Dynamic Landscape of Digital Influence"
      ctaText="JOIN The real world"
      ctaHref="https://jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
      steps={roadmapSteps}
    />
  );
}
