'use client';

import Header from '@/components/Header';
import EcommerceHero from '@/components/EcommerceHero';
import BenefitsSection, {
  SearchIcon,
  ShoppingBagIcon,
  MoneyBagIcon,
  TrafficConeIcon,
  ChartBarIcon,
} from '@/components/BenefitsSection';
import EcommerceRoadmap from '@/components/EcommerceRoadmap';
import Footer from '@/components/Footer';
import CopywritingTestimonialsSection from '@/components/CopywritingTestimonialsSection';
import CopywritingActionSection from '@/components/CopywritingActionSection';
import CopywritingFomoSection from '@/components/CopywritingFomoSection';
import FAQAccordion from '@/components/FAQAccordion';

const ecommerceFaqItems = [
  {
    question: 'How soon can I expect to see returns on my investment?',
    answer: 'It all boils down to how much skin you\'re willing to put in the game with The Real World. Yet, it\'s worth noting that a hefty number of our students have successfully recouped their investment in just a matter of weeks.',
  },
  {
    question: 'Will I require additional funds after joining The Real World?',
    answer: 'No, once you join The Real World, you won\'t need additional funds beyond your initial investment. Our community and resources are designed to help you succeed with what you already have.',
  },
  {
    question: 'Is it possible to terminate my membership at any given time?',
    answer: 'Yes, you have the flexibility to manage your membership according to your needs. Please check our membership terms for specific details about cancellation policies.',
  },
  {
    question: 'Is there any age restriction for joining?',
    answer: 'The Real World welcomes students of all ages. What matters most is your dedication and willingness to learn and grow. Age is just a number when it comes to acquiring new skills.',
  },
  {
    question: 'I have no prior knowledge of the skills you provide instruction on. Will this hinder my progress?',
    answer: 'Not at all! Our courses are designed for beginners with no prior experience. We start from the fundamentals and guide you through each step of your learning journey.',
  },
  {
    question: 'I\'m quite pressed for time; is it still feasible for me to participate?',
    answer: 'Absolutely! Our flexible learning structure allows you to progress at your own pace. Whether you have an hour a week or several hours, you can find a schedule that works for you.',
  },
  {
    question: 'I reside in X country; will that pose any issues?',
    answer: 'The Real World is accessible to students worldwide. Location should not be a barrier to your success. We serve a global community of learners.',
  },
  {
    question: 'Is there a difference between Hustler\'s University and The Real World?',
    answer: 'The Real World is our evolved platform with improved features, updated curriculum, and enhanced community support. It\'s the next generation of our educational offerings.',
  },
];

export default function EcommercePage() {
  const benefits = [
    { icon: <SearchIcon />, label: 'Research' },
    {
      image: 'https://framerusercontent.com/images/IfUHGfOi1mSxGAMuwLBjnOimpqA.png?width=512&height=512',
      label: 'Branding',
    },
    { icon: <ShoppingBagIcon />, label: 'Store Setup' },
    { icon: <MoneyBagIcon />, label: 'Paid Traffic' },
    { icon: <TrafficConeIcon />, label: 'Organic Traffic' },
    { icon: <ChartBarIcon />, label: 'Conversion Rate Optimization' },
  ];

  return (
    <>
      <Header />
      <div className="w-full bg-[#060e15] flex flex-col">
        <div className="flex justify-center w-full">
          <EcommerceHero />
        </div>
        <BenefitsSection
          title="We know that growing an ecommerce business is a daunting task."
          subtitle="No more worrying about"
          benefits={benefits}
        />
        <EcommerceRoadmap />
        <CopywritingTestimonialsSection />
        <CopywritingActionSection />
        <CopywritingFomoSection />
        <FAQAccordion items={ecommerceFaqItems} />
      </div>
      <Footer />
    </>
  );
}
