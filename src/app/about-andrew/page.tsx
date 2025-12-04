'use client';

import Header from '@/components/Header';
import AboutAndrewHero from '@/components/AboutAndrewHero';
import AboutAndrewBio from '@/components/AboutAndrewBio';
import Footer from '@/components/Footer';

export default function AboutAndrew() {
  return (
    <>
      <Header />
      <main>
        <AboutAndrewHero />
        <AboutAndrewBio />
      </main>
      <Footer />
    </>
  );
}
