
import React from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import HeroSection from '@/components/HeroSection';
import CategorySectionEnhanced from '@/components/CategorySectionEnhanced';
import ProductGrid from '@/components/ProductGrid';
import SmartRecommendations from '@/components/SmartRecommendations';
import TestimonialsSection from '@/components/TestimonialsSection';
import LookbookSection from '@/components/LookbookSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <HeaderEnhanced />
      <HeroSection />
      <CategorySectionEnhanced />
      <ProductGrid />
      <SmartRecommendations type="trending" />
      <SmartRecommendations type="personalized" />
      <TestimonialsSection />
      <LookbookSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
