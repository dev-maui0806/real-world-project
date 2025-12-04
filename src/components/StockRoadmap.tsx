'use client';

import React from 'react';
import RoadmapSection, { RoadmapStep } from './RoadmapSection';

const roadmapSteps: RoadmapStep[] = [
  {
    number: '01',
    label: 'Fundamentals',
    title: 'Stock Market Fundamentals',
    description: 'Gain a foundational understanding of stock market basics and terminology. Explore the significance of stock markets in the financial world and how they function. Start your journey by choosing a trusted online brokerage platform to open and fund your stock trading account with ease.'
  },
  {
    number: '02',
    label: 'Basics',
    title: 'Basic Trading Strategies',
    description: 'Delve into fundamental trading strategies suitable for beginners. Learn about essential risk management principles to protect your investments. Master the art of making your first trades while comprehending the importance of minimizing risks.'
  },
  {
    number: '03',
    label: 'Advanced',
    title: 'Advanced Trading Techniques',
    description: 'Elevate your skills with advanced technical analysis methods and trading patterns. Craft a personalized trading plan rooted in technical indicators to enhance decision-making. Simultaneously, gain insights into options trading fundamentals and advanced risk management strategies for trading discipline.'
  },
  {
    number: '04',
    label: 'Mastery',
    title: 'Trading Strategies Mastery',
    description: 'Refine your expertise by mastering advanced options trading strategies, including spreads. Develop a comprehensive understanding of income generation and effective risk mitigation through options. Explore advanced trading techniques, such as swing trading, day trading, and quantitative trading, while delving into the realm of algorithmic trading to expand your trading toolkit.'
  },
  {
    number: '05',
    label: 'Portfolio',
    title: 'Portfolio Management and Ongoing Learning',
    description: 'Learn to construct and optimize a diversified stock portfolio using advanced portfolio optimization techniques. As you progress, embrace continuous learning through webinars, seminars, and networking with seasoned traders. Stay updated with evolving market trends and strategies to maintain your edge in the dynamic world of stock trading.'
  }
];

export default function StockRoadmap() {
  return (
    <RoadmapSection
      title="Personalized Stock Trading Roadmap:"
      subtitle="Your Step-by-Step Path to Success"
      description="Master the Art of Stock Trading: Learn How to Build Profitable Strategies, Manage Risk Effectively, and Excel in the Dynamic World of Financial Markets"
      ctaText="JOIN The real world"
      ctaHref="https://jointherealworld.com/checkout?a=zwqn9rf9&subid=official"
      steps={roadmapSteps}
    />
  );
}
