
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ProductTechnicalInfoProps {
  composition: string;
  care: string;
  description: string;
}

const ProductTechnicalInfo = ({ composition, care, description }: ProductTechnicalInfoProps) => {
  const features = [
    {
      icon: "🛡️",
      title: "Resistente ao Odor",
      description: "Tecnologia anti-bacteriana"
    },
    {
      icon: "💧",
      title: "Anti Bacteriano",
      description: "Proteção contra bactérias"
    },
    {
      icon: "🌟",
      title: "Ultra Macio",
      description: "Toque suave na pele"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Product Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="font-medium mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Information */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="description">
          <AccordionTrigger className="font-oswald uppercase tracking-wider">
            Descrição Detalhada
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">{description}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="composition">
          <AccordionTrigger className="font-oswald uppercase tracking-wider">
            Composição
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">{composition}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="care">
          <AccordionTrigger className="font-oswald uppercase tracking-wider">
            Cuidados e Lavagem
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">{care}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping">
          <AccordionTrigger className="font-oswald uppercase tracking-wider">
            Entrega e Devolução
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium mb-1">Entrega</h5>
                <p className="text-sm text-gray-600">
                  • Frete grátis para compras acima de R$ 199<br/>
                  • Entrega em até 5 dias úteis<br/>
                  • Retirada gratuita em loja
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-1">Trocas e Devoluções</h5>
                <p className="text-sm text-gray-600">
                  • 30 dias para trocas e devoluções<br/>
                  • Produto deve estar sem uso<br/>
                  • Etiquetas preservadas
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductTechnicalInfo;
