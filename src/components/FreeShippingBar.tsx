
import React, { useState } from 'react';
import { Truck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FreeShippingBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-green-600 text-white py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span className="font-roboto text-sm font-medium">
              <strong>FRETE GRÁTIS</strong> para todo Brasil em compras acima de R$ 299
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 h-6 w-6"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingBar;
