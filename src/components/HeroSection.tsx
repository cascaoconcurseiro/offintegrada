
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const slides = [
    {
      title: "OFFSEASON",
      subtitle: "Supere Seus Limites. Com Estilo.",
      description: "Leveza e Estilo Para Seus Treinos.",
      buttonText: "Ver Coleção Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center",
      filter: "hero-bg-academia-1"
    },
    {
      title: "NOVA LINHA COMPRESS PRO",
      subtitle: "Máxima Performance, Conforto Inigualável.",
      description: "Tecnologia de ponta para atletas que não se contentam com menos.",
      buttonText: "Descubra Agora",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&crop=center",
      filter: "hero-bg-academia-2"
    },
    {
      title: "REGATAS A PARTIR DE R$89,90",
      subtitle: "Leveza e Estilo Para Seus Treinos.",
      description: "Performance e design em cada peça da nossa coleção exclusiva.",
      buttonText: "Comprar Regatas",
      image: "https://images.unsplash.com/photo-1583500178690-2b8c41c3244b?w=1200&h=800&fit=crop&crop=center",
      filter: "hero-bg-academia-3"
    }
  ];

  return (
    <section className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="relative z-10 text-center text-white p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-bold mb-4 tracking-wider uppercase">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl mx-auto font-roboto font-light tracking-wider">
                  {slide.subtitle}
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl mx-auto font-roboto font-light tracking-wider">
                  {slide.description}
                </p>
                <div className="mt-8">
                  <Button className="bg-white text-black hover:bg-gray-100 font-roboto font-medium uppercase tracking-wider px-8 py-3 text-sm">
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
