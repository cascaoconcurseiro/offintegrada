
import React from 'react';

export const ProductCardSkeleton = () => (
  <div className="animate-pulse bg-white rounded-xl shadow-lg overflow-hidden border">
    <div className="bg-gray-200 h-48 md:h-64"></div>
    <div className="p-4 space-y-3">
      <div className="bg-gray-200 h-4 rounded"></div>
      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
      <div className="bg-gray-200 h-6 rounded w-1/2"></div>
      <div className="bg-gray-200 h-8 rounded"></div>
    </div>
  </div>
);

export const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

export const PageLoadingSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header Skeleton */}
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="animate-pulse py-4">
          <div className="flex items-center justify-between">
            <div className="bg-gray-200 h-8 w-32 rounded"></div>
            <div className="flex space-x-4">
              <div className="bg-gray-200 h-8 w-20 rounded"></div>
              <div className="bg-gray-200 h-8 w-20 rounded"></div>
              <div className="bg-gray-200 h-8 w-20 rounded"></div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
              <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
              <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Content Skeleton */}
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse space-y-8">
        {/* Hero Section */}
        <div className="bg-gray-200 h-64 rounded-xl"></div>
        
        {/* Products Grid */}
        <ProductGridSkeleton />
      </div>
    </div>
  </div>
);

export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-black rounded-full animate-spin`}></div>
    </div>
  );
};

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=Carregando...' 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  placeholder?: string; 
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt="Carregando..."
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};
