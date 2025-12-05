'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    label: 'Step-by-Step Learning:',
    title: 'Unlock the Art of Copywriting with Our Comprehensive Course',
    description: 'Our course takes you on a guided journey through the intricate world of copywriting. Divided into 11 comprehensive categories, it\'s designed as a step-by-step guide, ensuring that you not only learn but also master the art of persuasive writing.\n\nWhether you\'re a complete novice or an experienced wordsmith, our course offers valuable insights and techniques that can transform your writing skills.',
    image: 'https://framerusercontent.com/images/kz3DBAyqY7XxYOU3YUCgjEvoU.png?width=827&height=516',
    imageAlt: 'Picture of the App',
    imageWidth: 827,
    imageHeight: 516,
    layout: 'textFirst'
  },
  {
    id: 2,
    label: 'Millionaire Professor:',
    title: 'Learn from a Copywriting Maestro with a Seven-Figure Track Record',
    description: 'Imagine having a mentor who not only knows the ins and outs of copywriting but has also amassed millions through it.\n\nMeet Professor Andrew Bass, your guide on this extraordinary journey.\n\nWith a seven-figure track record, he\'s not just an instructor; he\'s a proven expert. He brings to the table the wealth of knowledge and experience that can empower you to reach your financial goals through the art of persuasive copy.',
    image: 'https://framerusercontent.com/images/Gu63UzaMZS6jEFcBGn5hpqFK0.png?width=898&height=620',
    imageAlt: 'Picture of the Professors',
    imageWidth: 898,
    imageHeight: 620,
    layout: 'imageFirst'
  },
  {
    id: 3,
    label: 'Daily Support and Coaching:',
    title: 'Stay on Course with Our Daily Support and Expert Coaching',
    description: 'Success in copywriting demands consistent effort and motivation. That\'s why we provide daily support and expert coaching to keep you on track.\n\nOur dedicated team is here to answer your questions, provide feedback, and offer valuable insights. With our guidance, you\'ll stay motivated, refine your skills, and conquer the world of copywriting one day at a time.',
    image: 'https://framerusercontent.com/images/5xuWoau4eLTwTgMZavalNN8rotM.png?scale-down-to=1024&width=1080&height=648',
    imageAlt: 'Picture of the real world app support',
    imageWidth: 1080,
    imageHeight: 648,
    layout: 'textFirst'
  },
  {
    id: 4,
    label: 'Community',
    title: 'Dive Deeper into Copywriting with Daily Nuggets of Wisdom',
    description: 'In the ever-evolving world of copywriting, knowledge is power. Our course goes beyond the basics by offering daily industry insights and thought-provoking questions.\n\nThese bite-sized nuggets of wisdom will expand your understanding of the copywriting field, helping you stay at the forefront of industry trends and strategies. It\'s the edge you need to thrive in this competitive landscape.',
    image: 'https://framerusercontent.com/images/R9URTahWADbdVp4MaIxTK1Fi2Tk.webp?width=1024&height=1024',
    imageAlt: 'Picture of a Community',
    imageWidth: 1024,
    imageHeight: 1024,
    layout: 'imageFirst'
  }
];

export default function CopywritingWhyChooseSection() {
  return (
    <section className="w-full bg-[#060e15] flex flex-col items-center py-8 sm:py-16 lg:py-24 px-4 sm:px-5 gap-8 sm:gap-12 lg:gap-16" aria-label="features section">
      <style>{`
        @media (max-width: 640px) {
          .why-title { font-size: 1.75rem; line-height: 2.1rem; }
          .why-label { font-size: 1.25rem; line-height: 1.5rem; }
          .why-subtitle { font-size: 1rem; line-height: 1.4rem; }
          .why-description { font-size: 0.9375rem; line-height: 1.35rem; }
          .why-image-height { height: 250px; }
          .why-card { gap: 1.5rem; padding: 1.5rem; border-radius: 1.5rem; }
          .why-cta { padding: 0.75rem 1rem; gap: 0.5rem; font-size: 0.875rem; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .why-title { font-size: 2rem; line-height: 2.4rem; }
          .why-label { font-size: 1.5rem; line-height: 1.75rem; }
          .why-subtitle { font-size: 1.125rem; line-height: 1.6rem; }
          .why-description { font-size: 1rem; line-height: 1.5rem; }
          .why-image-height { height: 300px; }
          .why-card { gap: 1.5rem; padding: 2rem; border-radius: 2rem; }
          .why-cta { padding: 0.875rem 1.5rem; gap: 0.75rem; font-size: 1rem; }
        }
        @media (min-width: 1025px) {
          .why-title { font-size: 2.5rem; line-height: 3rem; }
          .why-label { font-size: 1.875rem; line-height: 2.25rem; }
          .why-subtitle { font-size: 1.3125rem; line-height: 1.5rem; }
          .why-description { font-size: 1.125rem; line-height: 1.7rem; }
          .why-image-height { height: 24rem; }
          .why-card { gap: 1.5rem; padding: 2rem; border-radius: 1.875rem; }
          .why-cta { padding: 0; gap: 0.5rem; font-size: 1.3rem; height: 4.25rem; }
        }
      `}</style>

      <div className="w-full flex flex-col items-center gap-4 sm:gap-8">
        {/* Section Title */}
        <h2 className="why-title font-black text-center text-white tracking-tight leading-tight">
          Why Choose Our Course
        </h2>

        {/* Feature Cards */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-16 max-w-7xl">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`why-card w-full rounded-3xl bg-[#0a1c29] border-[#ffa545] border-2 shadow-lg flex flex-col ${
                feature.layout === 'imageFirst' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-3 sm:gap-6 justify-center">
                <div className="flex flex-col gap-3 sm:gap-6">
                  <div className="flex flex-col gap-3 sm:gap-6">
                    <h3 className="why-label text-white leading-[55px] tracking-[-0.48px]">
                      {feature.label}
                    </h3>
                    <p className="why-subtitle font-bold text-[#ffa545]">
                      {feature.title}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {feature.description.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="why-description text-white/70"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`flex-1 relative why-image-height overflow-hidden rounded-2xl ${feature.layout === 'imageFirst' ? '' : ''}`}>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center pt-4 sm:pt-8">
        <a
          href="/checkout"
          rel="noopener"
          className="why-cta inline-flex items-center justify-center rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgb(255, 165, 69) 0%, rgb(255, 188, 71) 100%)',
            boxShadow: 'rgba(201, 108, 8, 0.3) 0px 4px 50px 0px'
          }}
        >
          {/* Left Arrow Icon */}
          <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-full h-full" style={{
              fill: 'rgb(19, 19, 19)',
              color: 'rgb(19, 19, 19)'
            }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </div>

          {/* Text */}
          <p className="font-semibold leading-[20.8px] uppercase whitespace-nowrap select-none" style={{
            color: 'rgb(19, 19, 19)'
          }}>
            JOIN The real world
          </p>

          {/* Right Arrow Icon */}
          <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-full h-full" style={{
              fill: 'rgb(19, 19, 19)',
              color: 'rgb(19, 19, 19)'
            }}>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
