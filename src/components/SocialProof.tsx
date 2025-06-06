
import React from 'react';
import { Star, Users, Truck, Award, Shield, Timer } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "50.000+",
      label: "Clientes Satisfeitos",
      color: "text-blue-600"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avaliação Média",
      color: "text-yellow-500"
    },
    {
      icon: Truck,
      value: "100.000+",
      label: "Entregas Realizadas",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: "5 Anos",
      label: "No Mercado",
      color: "text-purple-600"
    }
  ];

  const recentPurchases = [
    {
      name: "Carlos M.",
      location: "São Paulo, SP",
      product: "Regata Premium",
      time: "há 2 minutos",
      verified: true
    },
    {
      name: "Ana S.",
      location: "Rio de Janeiro, RJ", 
      product: "Legging High Performance",
      time: "há 5 minutos",
      verified: true
    },
    {
      name: "João P.",
      location: "Belo Horizonte, MG",
      product: "Camiseta Tech-Solid",
      time: "há 8 minutos",
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
            Mais de 50.000 clientes já confiam na OFFSEASON para transformar seus treinos
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-oswald font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-roboto text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-roboto font-medium text-gray-600">
                Atividade em tempo real
              </span>
            </div>
            
            <div className="space-y-4">
              {recentPurchases.map((purchase, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-roboto font-bold text-sm">
                      {purchase.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-roboto font-medium text-sm">
                        <strong>{purchase.name}</strong> de {purchase.location}
                      </p>
                      <p className="text-xs text-gray-600">
                        Comprou: {purchase.product}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      {purchase.verified && (
                        <Shield className="w-4 h-4 text-green-600" />
                      )}
                      <Timer className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-500">{purchase.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 font-roboto">
                Mais de <strong>147 pessoas</strong> compraram nas últimas 24 horas
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-xs font-roboto font-medium">Compra Segura</p>
            <p className="text-xs text-gray-500">SSL 256 bits</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-xs font-roboto font-medium">Frete Grátis</p>
            <p className="text-xs text-gray-500">Acima de R$ 299</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-xs font-roboto font-medium">Garantia</p>
            <p className="text-xs text-gray-500">30 dias</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-xs font-roboto font-medium">Nota 4.9</p>
            <p className="text-xs text-gray-500">+5000 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
