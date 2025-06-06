
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Personal Trainer",
      content: "Os produtos da OFFSEASON transformaram completamente meus treinos. A qualidade é excepcional e o conforto é incomparável. Recomendo para todos os meus alunos!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendes",
      role: "Atleta Profissional",
      content: "Uso as roupas da OFFSEASON há mais de um ano e a durabilidade é impressionante. Mesmo com treinos intensos diários, as peças continuam como novas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mariana Costa",
      role: "Instrutora de Yoga",
      content: "A liberdade de movimento que essas roupas proporcionam é incrível. Posso fazer qualquer posição sem me preocupar com o tecido. Simplesmente perfeito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-oswald font-medium uppercase tracking-wider mb-4">
            O que falam da gente
          </h2>
          <p className="text-gray-600 font-roboto max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre a experiência com os produtos OFFSEASON
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                <p className="text-gray-700 font-roboto mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium font-oswald uppercase tracking-wider">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-roboto">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
