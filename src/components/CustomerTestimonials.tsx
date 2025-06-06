
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
  product: string;
}

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "GUSTAVO FROST MADRÁS",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Qualidade excepcional! O tecido é incrível e o ajuste perfeito. Já comprei várias peças e sempre fico satisfeito.",
      product: "Camiseta Tech-Solid"
    },
    {
      id: 2,
      name: "Ana dos Reis Pereira de Silva",
      location: "Rio de Janeiro, RJ", 
      rating: 5,
      comment: "Desde que conheci a OFFSEASON, não compro roupas fitness em outro lugar. A qualidade é superior e o atendimento excelente.",
      product: "Legging High Performance"
    },
    {
      id: 3,
      name: "Carlos Mendonça de Oliveira",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Uso diariamente nas minhas corridas. O tecido é respirável e não marca suor. Recomendo para todos os atletas!",
      product: "Regata Premium"
    },
    {
      id: 4,
      name: "Júlia Almeida Araújo",
      location: "Brasília, DF",
      rating: 5,
      comment: "A experiência de compra foi incrível desde o primeiro acesso ao site até a entrega. Produtos de alta qualidade!",
      product: "Conjunto Fitness"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold mb-4 uppercase tracking-wider">
            O QUE FALAM DA GENTE
          </h2>
          <p className="text-gray-600 font-roboto max-w-2xl mx-auto">
            Histórias reais de clientes que transformaram seus treinos com nossas peças
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Avatar className="w-20 h-20 md:w-24 md:h-24">
                    <AvatarImage src={testimonials[currentIndex].avatar} />
                    <AvatarFallback className="text-xl font-oswald bg-black text-white">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-gray-300 mb-4 mx-auto md:mx-0" />
                  
                  <blockquote className="text-lg md:text-xl font-roboto text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].comment}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= testimonials[currentIndex].rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <h4 className="font-oswald font-bold text-lg uppercase tracking-wider">
                      {testimonials[currentIndex].name}
                    </h4>
                    
                    <p className="text-gray-600 font-roboto text-sm">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].product}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-black hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-black hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
