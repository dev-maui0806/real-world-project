'use client';

import React from 'react';
import RoadmapSection, { RoadmapStep } from './RoadmapSection';

const roadmapSteps: RoadmapStep[] = [
  {
    number: '01',
    label: 'Niche',
    title: 'Market and Niche Research',
    description: 'Start by pinpointing the industries or types of businesses you\'re most interested in selling to. This could be influenced by your personal interests, market trends, or areas where there\'s high demand. By specializing in a specific niche, you can become an expert in that field and increase your value to potential customers.'
  },
  {
    number: '02',
    label: 'Million $$ Product',
    title: 'Find a Winning Product',
    description: 'Finding the right product is crucial for ecommerce success. This includes understanding market demand, product quality, and profit margins. Research trending products, study your competition, and consider factors like shipping costs and supplier reliability. Invest time in validating your product idea before scaling.'
  },
  {
    number: '03',
    label: 'Branding',
    title: 'Branding',
    description: 'A strong brand is crucial to stand out in the competitive ecommerce landscape. Develop your brand identity, including logo, color scheme, and messaging. Ensure your branding reflects the type of products you want to be known for and demonstrates your ability to deliver quality and value to customers.'
  },
  {
    number: '04',
    label: 'Shopify',
    title: 'Store Setup',
    description: 'Once you\'ve validated your product and built your brand, it\'s time to set up your ecommerce store. Choose a platform like Shopify, configure your product listings, set up payment processing, and optimize your checkout experience. Make sure your store reflects your brand identity and provides an excellent customer experience.'
  },
  {
    number: '05',
    label: 'Traffic',
    title: 'Paid & Organic Traffic',
    description: 'After launching your store, focus on driving traffic through both paid and organic channels. Paid traffic includes Google Ads, Facebook Ads, and influencer partnerships. Organic traffic comes from SEO, content marketing, and social media. Track your metrics and continuously optimize to maximize return on investment.'
  }
];

export default function EcommerceRoadmap() {
  return (
    <RoadmapSection
      title="Personalized Ecommerce Roadmap:"
      subtitle="A Step-by-Step Guide to Success"
      description="Unleash Ecommerce Excellence: Learn How to Attract High-Value Customers, Streamline Project Management, and Flourish in the Competitive Realm of Ecommerce."
      ctaText="JOIN The real world"
      ctaHref="https://jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
      steps={roadmapSteps}
    />
  );
}
