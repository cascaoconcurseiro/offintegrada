
import React from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import HeroSection from '@/components/HeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import CategorySectionEnhanced from '@/components/CategorySectionEnhanced';
import ProductShowcase from '@/components/ProductShowcase';
import TechBanner from '@/components/TechBanner';
import ProductGrid from '@/components/ProductGrid';
import SmartRecommendations from '@/components/SmartRecommendations';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import TestimonialsSection from '@/components/TestimonialsSection';
import LookbookSection from '@/components/LookbookSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ErrorBoundary from '@/components/ErrorBoundary';
import UrgencyBanner from '@/components/UrgencyBanner';
import FreeShippingBar from '@/components/FreeShippingBar';
import SocialProof from '@/components/SocialProof';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <SEOHead 
        title="OFFSEASON - Roupas Fitness Premium | Supere Seus Limites"
        description="Descubra a coleção premium OFFSEASON. Roupas fitness que combinam performance e estilo para quem busca excelência em cada movimento."
        keywords="roupas fitness, academia, musculação, performance, premium, offseason, regatas, camisetas, shorts"
      />
      
      <UrgencyBanner />
      <FreeShippingBar />
      <HeaderEnhanced />
      
      <ErrorBoundary fallback={<div className="h-96 bg-gray-100 flex items-center justify-center">Erro ao carregar seção</div>}>
        <HeroSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <TrustIndicators />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <CategorySectionEnhanced />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ProductShowcase />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <TechBanner />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ProductGrid />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SmartRecommendations type="trending" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SocialProof />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <CustomerTestimonials />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SmartRecommendations type="personalized" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <TestimonialsSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <LookbookSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <NewsletterSection />
      </ErrorBoundary>
      
      <Footer />
    </div>
  );
};

export default Index;
