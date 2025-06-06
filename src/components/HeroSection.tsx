
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, Clock } from 'lucide-react';
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
      type: "main"
    },
    {
      title: "NOVA LINHA COMPRESS PRO",
      subtitle: "Máxima Performance, Conforto Inigualável.",
      description: "Tecnologia de ponta para atletas que não se contentam com menos.",
      buttonText: "Descubra Agora",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&crop=center",
      type: "main"
    },
    {
      type: "mystery-box",
      title: "MYSTERY BOX",
      subtitle: "DIA DOS NAMORADOS",
      description: "Nas compras acima de R$499,90, você ganha um presente misterioso*",
      buttonText: "O mistério começa aqui",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=1200&h=800&fit=crop&crop=center"
    },
    {
      title: "REGATAS A PARTIR DE R$89,90",
      subtitle: "Leveza e Estilo Para Seus Treinos.",
      description: "Performance e design em cada peça da nossa coleção exclusiva.",
      buttonText: "Comprar Regatas",
      image: "https://images.unsplash.com/photo-1583500178690-2b8c41c3244b?w=1200&h=800&fit=crop&crop=center",
      type: "main"
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
              
              {slide.type === "mystery-box" ? (
                <div className="relative z-10 container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-white">
                      <div className="space-y-2">
                        <Badge className="bg-white text-black font-roboto text-xs uppercase tracking-wider">
                          {slide.subtitle}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold tracking-wider uppercase">
                          MYSTERY B<span className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-full mx-2">
                            <Gift className="w-6 h-6" />
                          </span>X
                        </h1>
                      </div>

                      <div className="space-y-4">
                        <p className="text-lg font-roboto">
                          {slide.description}
                        </p>
                      </div>

                      <Button 
                        size="lg" 
                        className="bg-white hover:bg-gray-100 text-black font-roboto font-medium uppercase tracking-wider px-8"
                      >
                        {slide.buttonText}
                      </Button>

                      <div className="flex items-center gap-2 text-sm font-roboto">
                        <Clock className="w-4 h-4" />
                        <span>Atenção - Adicione a Mystery Box no checkout.</span>
                      </div>

                      <p className="text-xs font-roboto italic opacity-80">
                        *Produto sujeito disponibilidade, ou presente surpresa 
                        e não acúmula com outras promoções da categoria.
                      </p>
                    </div>

                    {/* Right Content - Mystery Boxes */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
                          <div className="bg-white text-black p-8 rounded-lg shadow-xl">
                            <div className="text-center space-y-4">
                              <div className="text-2xl font-oswald font-bold tracking-wider">
                                Trust<br />us
                              </div>
                              <div className="flex justify-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300 mt-8">
                          <div className="bg-white text-black p-8 rounded-lg shadow-xl">
                            <div className="text-center space-y-4">
                              <div className="text-2xl font-oswald font-bold tracking-wider">
                                Trust<br />us
                              </div>
                              <div className="flex justify-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
                      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )}
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
