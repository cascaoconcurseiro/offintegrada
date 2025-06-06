
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const TechBanner = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
          alt="Technology Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rotate-45 transform"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-12 transform"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/5 -rotate-45 transform"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-6 tracking-wider">
            A tecnologia que veste sua melhor versão.
          </h2>
          
          <p className="text-lg md:text-xl font-roboto font-light mb-8 text-gray-200 leading-relaxed">
            Descubra nossa linha premium de roupas fitness com tecnologia de ponta 
            para máxima performance e conforto.
          </p>

          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 font-roboto font-medium uppercase tracking-wider px-8 py-4"
          >
            <Play className="w-5 h-5 mr-2" />
            Entre no movimento
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-3 h-3 bg-white rounded-full opacity-80 animate-pulse delay-700"></div>
    </section>
  );
};

export default TechBanner;
