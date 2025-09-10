
import React from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import EnhancedHeroSection from '@/components/enhanced/EnhancedHeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import CategorySectionEnhanced from '@/components/CategorySectionEnhanced';
import ProductShowcase from '@/components/ProductShowcase';
import TechBanner from '@/components/TechBanner';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ErrorBoundary from '@/components/ErrorBoundary';
import UrgencyBanner from '@/components/UrgencyBanner';
import FreeShippingBar from '@/components/FreeShippingBar';
import SocialProof from '@/components/SocialProof';
import UrgencyScarcity from '@/components/UrgencyScarcity';
import { 
  LazyProductGrid, 
  LazySmartRecommendations, 
  LazyCustomerTestimonials, 
  LazyLookbookSection,
  OptimizedSection,
  GridSkeleton,
  SectionSkeleton
} from '@/components/enhanced/PerformanceOptimizer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title="OFFSEASON - Roupas Fitness Premium | Supere Seus Limites"
        description="Descubra a coleção premium OFFSEASON. Roupas fitness que combinam performance excepcional e estilo incomparável para quem busca a excelência."
        keywords="roupas fitness, academia, musculação, performance, premium, offseason, regatas, camisetas, shorts"
      />
      
      <UrgencyBanner />
      <FreeShippingBar />
      <HeaderEnhanced />
      
      <ErrorBoundary fallback={<div className="h-96 bg-muted flex items-center justify-center animate-fade-in">Erro ao carregar seção</div>}>
        <EnhancedHeroSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TrustIndicators />
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CategorySectionEnhanced />
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <ProductShowcase />
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <TechBanner />
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <OptimizedSection fallback={<GridSkeleton />}>
            <LazyProductGrid />
          </OptimizedSection>
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <OptimizedSection fallback={<SectionSkeleton />}>
            <LazySmartRecommendations type="trending" />
          </OptimizedSection>
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <SocialProof />
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <OptimizedSection fallback={<SectionSkeleton />}>
            <LazyCustomerTestimonials />
          </OptimizedSection>
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <OptimizedSection fallback={<SectionSkeleton />}>
            <LazySmartRecommendations type="personalized" />
          </OptimizedSection>
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <OptimizedSection fallback={<SectionSkeleton />}>
            <LazyLookbookSection />
          </OptimizedSection>
        </div>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <NewsletterSection />
        </div>
      </ErrorBoundary>
      
      <Footer />
      
      <UrgencyScarcity />
    </div>
  );
};

export default Index;
