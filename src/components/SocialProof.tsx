
import React from 'react';
import { Star, Users, Truck, Award } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "50.000+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avaliação Média"
    },
    {
      icon: Truck,
      value: "100.000+",
      label: "Entregas Realizadas"
    },
    {
      icon: Award,
      value: "5 Anos",
      label: "No Mercado"
    }
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      location: "São Paulo, SP",
      text: "Melhor qualidade que já comprei! Super recomendo",
      rating: 5,
      verified: true
    },
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ", 
      text: "Entrega rápida e produto exatamente como esperado",
      rating: 5,
      verified: true
    },
    {
      name: "Ana Costa",
      location: "Brasília, DF",
      text: "Atendimento excepcional, já sou cliente há 2 anos",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Social Proof Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold mb-4 uppercase tracking-wider">
            Confiança que Você Pode Ver
          </h2>
          <p className="text-gray-600 font-roboto mb-12 max-w-2xl mx-auto">
            Mais de 50.000 clientes já confiam na OFFSEASON para seus treinos
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-oswald font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-roboto text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Testimonials Ticker */}
        <div className="relative overflow-hidden bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-roboto font-medium text-gray-600">
              Avaliações recentes de clientes verificados
            </span>
          </div>
          
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center font-roboto font-bold text-white">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-roboto font-medium text-sm">{testimonial.name}</span>
                    <span className="text-xs text-gray-500">• {testimonial.location}</span>
                    {testimonial.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Verificado
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-roboto text-gray-700">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
