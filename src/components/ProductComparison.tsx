
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Star, ShoppingCart } from 'lucide-react';
import { useProductComparison } from '@/contexts/ProductComparisonContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductComparison = () => {
  const { 
    comparisonProducts, 
    removeFromComparison, 
    clearComparison, 
    isComparisonOpen, 
    setIsComparisonOpen 
  } = useProductComparison();
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0] || 'M',
      color: product.colors[0] || 'Preto'
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  if (comparisonProducts.length === 0) return null;

  const features = [
    { key: 'price', label: 'Preço' },
    { key: 'rating', label: 'Avaliação' },
    { key: 'composition', label: 'Composição' },
    { key: 'sizes', label: 'Tamanhos' },
    { key: 'colors', label: 'Cores' },
  ];

  return (
    <Dialog open={isComparisonOpen} onOpenChange={setIsComparisonOpen}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-oswald uppercase tracking-wider">
              Comparar Produtos ({comparisonProducts.length})
            </DialogTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearComparison}
            >
              Limpar Tudo
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisonProducts.map((product) => (
            <div key={product.id} className="space-y-4 border rounded-lg p-4 relative">
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 h-8 w-8 p-0"
                onClick={() => removeFromComparison(product.id)}
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-green-600">NOVO</Badge>
                )}
                {product.sale && (
                  <Badge 
                    className="absolute top-2 left-2 bg-red-600" 
                    style={{ marginTop: product.isNew ? '28px' : '0' }}
                  >
                    OFERTA
                  </Badge>
                )}
              </div>

              <div>
                <h3 className="font-medium mb-4 font-oswald uppercase tracking-wider text-sm">
                  {product.name}
                </h3>
                
                {features.map((feature) => (
                  <div key={feature.key} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                    <span className="font-medium text-gray-600">{feature.label}:</span>
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

                <Button 
                  className="w-full mt-4 bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs" 
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Adicionar ao Carrinho
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
