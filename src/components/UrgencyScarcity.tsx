
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Flame, Users, Package } from 'lucide-react';

const UrgencyScarcity = () => {
  const [visitorCount, setVisitorCount] = useState(127);
  const [stockCount, setStockCount] = useState(8);

  useEffect(() => {
    // Simular contagem de visitantes em tempo real
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, Math.min(200, prev + change));
      });
    }, 15000);

    // Simular redução de estoque
    const stockInterval = setInterval(() => {
      setStockCount(prev => {
        if (Math.random() > 0.8) {
          return Math.max(2, prev - 1);
        }
        return prev;
      });
    }, 30000);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(stockInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 space-y-2">
      {/* Visitantes Online */}
      <div className="bg-white border shadow-lg rounded-lg p-3 max-w-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-roboto">
            <strong>{visitorCount}</strong> pessoas vendo este produto
          </span>
        </div>
      </div>

      {/* Estoque Limitado */}
      {stockCount <= 10 && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-3 max-w-xs">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <Package className="w-4 h-4" />
            <span className="text-sm font-roboto font-medium">
              Apenas <strong>{stockCount}</strong> unidades restantes!
            </span>
          </div>
        </div>
      )}

      {/* Oferta por Tempo Limitado */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-3 max-w-xs">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-roboto font-medium">
            Oferta termina em <strong>2h 35m</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyScarcity;
