
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Package, AlertTriangle } from 'lucide-react';

interface ProductStockIndicatorProps {
  availableSizes: Record<string, number>;
  selectedSize: string;
}

const ProductStockIndicator = ({ availableSizes, selectedSize }: ProductStockIndicatorProps) => {
  const [currentStock, setCurrentStock] = useState(0);

  useEffect(() => {
    if (selectedSize && availableSizes[selectedSize]) {
      setCurrentStock(availableSizes[selectedSize]);
    }
  }, [selectedSize, availableSizes]);

  if (!selectedSize) return null;

  const getStockStatus = () => {
    if (currentStock === 0) {
      return {
        color: 'bg-red-100 text-red-800',
        icon: <AlertTriangle className="w-3 h-3" />,
        text: 'Indisponível'
      };
    } else if (currentStock <= 3) {
      return {
        color: 'bg-orange-100 text-orange-800',
        icon: <Package className="w-3 h-3" />,
        text: `Últimas ${currentStock} unidades!`
      };
    } else if (currentStock <= 10) {
      return {
        color: 'bg-yellow-100 text-yellow-800',
        icon: <Package className="w-3 h-3" />,
        text: `${currentStock} unidades disponíveis`
      };
    } else {
      return {
        color: 'bg-green-100 text-green-800',
        icon: <Package className="w-3 h-3" />,
        text: 'Em estoque'
      };
    }
  };

  const status = getStockStatus();

  return (
    <Badge className={`${status.color} flex items-center gap-1 w-fit`}>
      {status.icon}
      <span className="text-xs font-medium">{status.text}</span>
    </Badge>
  );
};

export default ProductStockIndicator;
