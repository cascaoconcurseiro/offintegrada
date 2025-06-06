
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  sale?: boolean;
}

interface RelatedProductsGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onWishlistToggle: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
}

const RelatedProductsGrid = ({
  products,
  onAddToCart,
  onWishlistToggle,
  onQuickView,
  isInWishlist
}: RelatedProductsGridProps) => {
  return (
    <section>
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-oswald font-medium mb-4 uppercase tracking-wider">
          Você Também Pode Gostar
        </h3>
        <p className="text-gray-600 font-roboto">
          Produtos selecionados especialmente para você:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-green-600">NOVO</Badge>
                )}
                {product.sale && (
                  <Badge className="absolute top-2 right-2 bg-red-600">OFERTA</Badge>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onQuickView(product)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onWishlistToggle(product)}
                      className={isInWishlist(product.id) ? 'bg-red-100 text-red-600' : ''}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviewsCount})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full mt-3 bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
                  onClick={() => onAddToCart(product)}
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Adicionar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedProductsGrid;
