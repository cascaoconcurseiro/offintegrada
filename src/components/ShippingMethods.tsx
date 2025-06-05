
import React from 'react';
import { Truck, Clock, Zap } from 'lucide-react';

interface ShippingMethodsProps {
  selectedShipping: string;
  onShippingChange: (method: string) => void;
}

const ShippingMethods = ({ selectedShipping, onShippingChange }: ShippingMethodsProps) => {
  const shippingMethods = [
    {
      id: 'standard',
      name: 'Entrega Padrão',
      description: 'Receba em até 7 dias úteis',
      price: 15.90,
      icon: Truck
    },
    {
      id: 'fast',
      name: 'Entrega Rápida',
      description: 'Receba em até 3 dias úteis',
      price: 25.90,
      icon: Clock
    },
    {
      id: 'express',
      name: 'Entrega Expressa',
      description: 'Receba em até 24 horas',
      price: 39.90,
      icon: Zap
    }
  ];

  return (
    <div className="space-y-4">
      {shippingMethods.map((method) => {
        const IconComponent = method.icon;
        return (
          <div key={method.id} className="border rounded-lg p-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value={method.id}
                checked={selectedShipping === method.id}
                onChange={(e) => onShippingChange(e.target.value)}
              />
              
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-roboto font-medium">{method.name}</p>
                    <p className="text-sm text-gray-600 font-roboto">
                      {method.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-roboto font-bold">
                    {method.price === 0 ? 'Grátis' : `R$ ${method.price.toFixed(2).replace('.', ',')}`}
                  </p>
                </div>
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ShippingMethods;
