
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  composition: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  sale?: boolean;
}

interface ProductComparisonProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: number) => void;
}

const ProductComparison = ({ products, isOpen, onClose, onRemoveProduct }: ProductComparisonProps) => {
  if (products.length === 0) return null;

  const features = [
    { key: 'price', label: 'Preço' },
    { key: 'rating', label: 'Avaliação' },
    { key: 'composition', label: 'Composição' },
    { key: 'sizes', label: 'Tamanhos' },
    { key: 'colors', label: 'Cores' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald uppercase tracking-wider">
            Comparar Produtos ({products.length})
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="space-y-4 border rounded-lg p-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                  onClick={() => onRemoveProduct(product.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-green-600">NOVO</Badge>
                )}
                {product.sale && (
                  <Badge className="absolute top-2 left-2 bg-red-600" style={{ marginTop: product.isNew ? '28px' : '0' }}>
                    OFERTA
                  </Badge>
                )}
              </div>

              <div>
                <h3 className="font-medium mb-2">{product.name}</h3>
                
                {features.map((feature) => (
                  <div key={feature.key} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                    <span className="font-medium">{feature.label}:</span>
                    <span className="text-right max-w-[50%]">
                      {feature.key === 'price' && (
                        <div className="space-x-2">
                          <span className="font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                          {product.originalPrice && (
                            <span className="line-through text-gray-500 text-xs">
                              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                        </div>
                      )}
                      {feature.key === 'rating' && (
                        <div className="flex items-center gap-1">
                          {product.rating ? (
                            <>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < Math.floor(product.rating!) 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs">{product.rating}</span>
                            </>
                          ) : (
                            <span className="text-gray-400">Sem avaliações</span>
                          )}
                        </div>
                      )}
                      {feature.key === 'composition' && (
                        <span className="text-xs">{product.composition}</span>
                      )}
                      {feature.key === 'sizes' && (
                        <span className="text-xs">{product.sizes.join(', ')}</span>
                      )}
                      {feature.key === 'colors' && (
                        <span className="text-xs">{product.colors.join(', ')}</span>
                      )}
                    </span>
                  </div>
                ))}

                <Button className="w-full mt-4" size="sm">
                  Ver Produto
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductComparison;
