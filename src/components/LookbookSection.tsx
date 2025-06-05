
import React from 'react';
import { Button } from '@/components/ui/button';

const LookbookSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-oswald font-medium mb-4 uppercase tracking-wider">
            Lookbook OFFSEASON
          </h2>
          <p className="mt-1 text-gray-600 font-roboto font-light tracking-wider text-sm">
            Inspire-se para o seu próximo treino.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="relative rounded-md overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=700&fit=crop&crop=center" 
              alt="Homem usando regata e shorts de treino" 
              className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          <div className="relative rounded-md overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=700&fit=crop&crop=center" 
              alt="Mulher usando top e legging de treino" 
              className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          <div className="relative rounded-md overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=500&h=700&fit=crop&crop=center" 
              alt="Atleta em pose de crossfit com roupa de treino" 
              className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          <div className="relative rounded-md overflow-hidden shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=500&h=700&fit=crop&crop=center" 
              alt="Mulher fazendo yoga com roupa de yoga" 
              className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white font-roboto font-medium uppercase tracking-wider px-12"
          >
            Comprar Looks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
