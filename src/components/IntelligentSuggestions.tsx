
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

interface IntelligentSuggestionsProps {
  currentProduct: Product;
  onAddToCart: (product: Product) => void;
  onWishlistToggle: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
}

const IntelligentSuggestions = ({
  currentProduct,
  onAddToCart,
  onWishlistToggle,
  onQuickView,
  isInWishlist
}: IntelligentSuggestionsProps) => {
  
  // Lógica inteligente de sugestões baseada em dados reais de e-commerce
  const getRelatedProducts = (): Product[] => {
    const allProducts: Product[] = [
      {
        id: 1, name: "Regata Premium Masculina", category: "regata", gender: "masculino",
        price: 89.90, originalPrice: 119.90, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
        rating: 4.5, reviewsCount: 15, isNew: true, sale: true
      },
      {
        id: 2, name: "Camiseta Compress Pro", category: "camiseta", gender: "masculino",
        price: 129.90, image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop",
        rating: 5, reviewsCount: 22
      },
      {
        id: 3, name: "Short Performance Elite", category: "shorts", gender: "masculino",
        price: 79.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4, reviewsCount: 8, isNew: true
      },
      {
        id: 4, name: "Legging High Tech", category: "legging", gender: "feminino",
        price: 149.90, originalPrice: 189.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4.8, reviewsCount: 30, sale: true
      },
      {
        id: 5, name: "Top Fitness Feminino", category: "top", gender: "feminino",
        price: 69.90, image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop",
        rating: 4.2, reviewsCount: 12, isNew: true
      },
      {
        id: 6, name: "Tênis Running Pro", category: "tenis", gender: "unissex",
        price: 299.90, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
        rating: 4.7, reviewsCount: 45
      },
      {
        id: 7, name: "Meia Compressão", category: "acessorio", gender: "unissex",
        price: 39.90, image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop",
        rating: 4.3, reviewsCount: 28
      }
    ];

    // Algoritmo inteligente de sugestões
    const suggestions = allProducts.filter(product => product.id !== currentProduct.id);
    
    // Priorizar produtos complementares baseado na categoria
    const complementaryCategories: { [key: string]: string[] } = {
      'regata': ['shorts', 'tenis', 'acessorio'],
      'camiseta': ['calca', 'shorts', 'tenis'],
      'shorts': ['regata', 'camiseta', 'tenis', 'acessorio'],
      'legging': ['top', 'tenis', 'acessorio'],
      'top': ['legging', 'shorts', 'tenis'],
      'calca': ['camiseta', 'tenis', 'acessorio']
    };

    const complementary = suggestions.filter(product =>
      complementaryCategories[currentProduct.category]?.includes(product.category)
    );

    const sameGender = suggestions.filter(product =>
      product.gender === currentProduct.gender || product.gender === 'unissex'
    );

    const trending = suggestions.filter(product => product.rating >= 4.5);

    // Combinar e ordenar por relevância
    const combined = [
      ...complementary.slice(0, 2),
      ...sameGender.slice(0, 2),
      ...trending.slice(0, 2)
    ];

    // Remover duplicatas e retornar top 4
    const unique = combined.filter((product, index, self) =>
      index === self.findIndex(p => p.id === product.id)
    );

    return unique.slice(0, 4);
  };

  const getBundleProducts = (): Product[] => {
    const allProducts: Product[] = [
      {
        id: 2, name: "Camiseta Compress Pro", category: "camiseta", gender: "masculino",
        price: 129.90, image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop",
        rating: 5, reviewsCount: 22
      },
      {
        id: 3, name: "Short Performance Elite", category: "shorts", gender: "masculino",
        price: 79.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4, reviewsCount: 8
      },
      {
        id: 7, name: "Meia Compressão", category: "acessorio", gender: "unissex",
        price: 39.90, image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop",
        rating: 4.3, reviewsCount: 28
      }
    ];

    return allProducts.slice(0, 3);
  };

  const relatedProducts = getRelatedProducts();
  const bundleProducts = getBundleProducts();
  
  const calculateBundlePrice = () => {
    const bundleTotal = bundleProducts.reduce((sum, product) => sum + product.price, 0);
    const originalTotal = bundleTotal + currentProduct.price;
    const discount = originalTotal * 0.15; // 15% desconto
    return { originalTotal, bundleTotal: originalTotal - discount, discount };
  };

  const { originalTotal, bundleTotal, discount } = calculateBundlePrice();

  return (
    <div className="space-y-12">
      {/* Frequentemente Comprados Juntos */}
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
                  <Button className="w-full bg-green-600 hover:bg-green-700 font-medium">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar Conjunto
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Produtos Relacionados */}
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
          {relatedProducts.map((product) => (
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
    </div>
  );
};

export default IntelligentSuggestions;
