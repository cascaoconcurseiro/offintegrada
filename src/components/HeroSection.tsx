
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          NOVA
          <span className="block text-yellow-400">COLEÇÃO</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Lifestyle premium para o público brasileiro
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Descubra nossa coleção exclusiva de roupas e acessórios que combinam elegância, 
          qualidade e o melhor do estilo urbano brasileiro.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
            EXPLORAR COLEÇÃO
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            VER LANÇAMENTOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
