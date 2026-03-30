import React from 'react';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Products from '@/components/Products';
// import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Calculator from '@/components/Calculator';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <Products />
      {/* <HowItWorks /> */}
      <Features />
      <Calculator />
      <CTABanner />
    </main>
  );
}
