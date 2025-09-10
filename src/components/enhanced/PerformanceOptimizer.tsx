import React, { lazy, Suspense } from 'react';

// Lazy load components for better performance
const LazyProductGrid = lazy(() => import('@/components/ProductGrid'));
const LazySmartRecommendations = lazy(() => import('@/components/SmartRecommendations'));
const LazyCustomerTestimonials = lazy(() => import('@/components/CustomerTestimonials'));
const LazyLookbookSection = lazy(() => import('@/components/LookbookSection'));

// Loading skeleton components
const GridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="space-y-4 animate-pulse">
        <div className="aspect-[3/4] bg-muted rounded-xl loading-shimmer" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded loading-shimmer" />
          <div className="h-4 bg-muted rounded w-2/3 loading-shimmer" />
          <div className="h-6 bg-muted rounded w-1/3 loading-shimmer" />
        </div>
      </div>
    ))}
  </div>
);

const SectionSkeleton = () => (
  <div className="py-16 px-8 animate-pulse">
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="h-8 bg-muted rounded w-1/3 mx-auto loading-shimmer" />
        <div className="h-4 bg-muted rounded w-2/3 mx-auto loading-shimmer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-video bg-muted rounded-xl loading-shimmer" />
            <div className="h-4 bg-muted rounded loading-shimmer" />
            <div className="h-4 bg-muted rounded w-2/3 loading-shimmer" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface OptimizedSectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const OptimizedSection = ({ children, fallback = <SectionSkeleton /> }: OptimizedSectionProps) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

export {
  LazyProductGrid,
  LazySmartRecommendations,
  LazyCustomerTestimonials,
  LazyLookbookSection,
  OptimizedSection,
  GridSkeleton,
  SectionSkeleton
};