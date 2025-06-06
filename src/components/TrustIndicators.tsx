
import React from 'react';
import { Shield, Truck, RotateCcw, CreditCard, Phone, Star } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Compra 100% Segura",
      description: "Certificado SSL e pagamento protegido"
    },
    {
      icon: Truck,
      title: "Frete Grátis",
      description: "Para compras acima de R$ 299"
    },
    {
      icon: RotateCcw,
      title: "Troca Garantida",
      description: "30 dias para trocar ou devolver"
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Em até 12x sem juros"
    },
    {
      icon: Phone,
      title: "Atendimento",
      description: "Suporte especializado 24/7"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Produtos testados e aprovados"
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="font-oswald font-medium text-sm uppercase tracking-wider mb-1">
                  {indicator.title}
                </h4>
                <p className="text-xs text-gray-600 font-roboto">
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
