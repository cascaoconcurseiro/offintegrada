
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface BundleSectionProps {
  currentProduct: Product;
  bundleProducts: Product[];
  onAddBundleToCart: () => void;
}

const BundleSection = ({ currentProduct, bundleProducts, onAddBundleToCart }: BundleSectionProps) => {
  const calculateBundlePrice = () => {
    const bundleTotal = bundleProducts.reduce((sum, product) => sum + product.price, 0);
    const originalTotal = bundleTotal + currentProduct.price;
    const discount = originalTotal * 0.15; // 15% desconto
    return { originalTotal, bundleTotal: originalTotal - discount, discount };
  };

  const { originalTotal, bundleTotal, discount } = calculateBundlePrice();

  return (
    <section>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-oswald font-medium mb-4 uppercase tracking-wider">
          Complete Seu Look
        </h3>
        <p className="text-gray-600 font-roboto">
          Clientes que compraram este produto também levaram:
        </p>
      </div>

      <Card className="p-6 mb-8">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            {/* Produto atual */}
            <div className="text-center">
              <div className="relative mb-3">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">Este</Badge>
              </div>
              <h4 className="font-medium text-xs mb-1">{currentProduct.name}</h4>
              <p className="font-bold text-sm">R$ {currentProduct.price.toFixed(2).replace('.', ',')}</p>
            </div>

            {/* Produtos do bundle */}
            {bundleProducts.map((product, index) => (
              <div key={product.id} className="text-center">
                <div className="relative mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
                <h4 className="font-medium text-xs mb-1">{product.name}</h4>
                <p className="font-bold text-sm">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              </div>
            ))}
            
            {/* Preço total */}
            <div className="text-center lg:border-l lg:pl-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 line-through">
                    De: R$ {originalTotal.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    Por: R$ {bundleTotal.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    Economize: R$ {discount.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 font-medium"
                  onClick={onAddBundleToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar Conjunto
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BundleSection;
