
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ProductGrid from '@/components/ProductGrid';
import LookbookSection from '@/components/LookbookSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <LookbookSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
