
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star, TrendingUp, Users, Sparkles } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  gender: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  sale?: boolean;
  popularity: number;
  sizes: string[];
  colors: string[];
}

interface SmartRecommendationsProps {
  currentProduct?: Product;
  userBehavior?: 'viewed' | 'cart' | 'wishlist';
  type: 'similar' | 'trending' | 'personalized' | 'frequently-bought';
}

const SmartRecommendations = ({ currentProduct, userBehavior, type }: SmartRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  // Mock products database
  const mockProducts: Product[] = [
    {
      id: 5,
      name: "Shorts Treino Pro",
      price: 79.90,
      originalPrice: 99.90,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center",
      category: "shorts",
      gender: "masculino",
      rating: 4.7,
      reviewsCount: 28,
      sale: true,
      popularity: 85,
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Azul", "Cinza"]
    },
    {
      id: 6,
      name: "Calça Jogger Premium",
      price: 159.90,
      image: "https://images.unsplash.com/photo-1555274175-6cbdfc6c8fb8?w=400&h=500&fit=crop&crop=center",
      category: "calca",
      gender: "masculino",
      rating: 4.9,
      reviewsCount: 45,
      isNew: true,
      popularity: 92,
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Marinho", "Chumbo"]
    },
    {
      id: 7,
      name: "Top Cropped Fitness",
      price: 59.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      category: "top",
      gender: "feminino",
      rating: 4.6,
      reviewsCount: 33,
      popularity: 78,
      sizes: ["P", "M", "G"],
      colors: ["Rosa", "Preto", "Branco"]
    },
    {
      id: 8,
      name: "Short Ciclista",
      price: 69.90,
      originalPrice: 89.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      category: "shorts",
      gender: "feminino",
      rating: 4.8,
      reviewsCount: 52,
      sale: true,
      popularity: 88,
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Rosa", "Roxo"]
    }
  ];

  useEffect(() => {
    // Simular carregamento de recomendações
    const timer = setTimeout(() => {
      let filtered: Product[] = [];

      switch (type) {
        case 'similar':
          filtered = mockProducts.filter(p => 
            currentProduct && 
            (p.category === currentProduct.category || p.gender === currentProduct.gender) &&
            p.id !== currentProduct.id
          ).slice(0, 4);
          break;

        case 'trending':
          filtered = mockProducts
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 4);
          break;

        case 'personalized':
          // Baseado no histórico do usuário (simulado)
          filtered = user 
            ? mockProducts.filter(p => p.rating >= 4.5).slice(0, 4)
            : mockProducts.slice(0, 4);
          break;

        case 'frequently-bought':
          filtered = mockProducts
            .filter(p => currentProduct && p.category !== currentProduct.category)
            .slice(0, 4);
          break;

        default:
          filtered = mockProducts.slice(0, 4);
      }

      setRecommendations(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentProduct, type, user]);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0]
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleWishlistToggle = (product: Product) => {
    if (!isInWishlist(product.id)) {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        gender: product.gender
      });
      toast({
        title: "Adicionado à lista de desejos",
        description: `${product.name} foi adicionado à sua lista de desejos.`,
      });
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'similar': return 'Produtos Similares';
      case 'trending': return 'Em Alta';
      case 'personalized': return 'Recomendado para Você';
      case 'frequently-bought': return 'Frequentemente Comprados Juntos';
      default: return 'Recomendações';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'similar': return <Sparkles className="w-5 h-5" />;
      case 'trending': return <TrendingUp className="w-5 h-5" />;
      case 'personalized': return <Users className="w-5 h-5" />;
      case 'frequently-bought': return <ShoppingBag className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-3"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            {getIcon()}
            <h2 className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-wider">
              {getTitle()}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {recommendations.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white font-roboto text-xs">
                      NOVO
                    </Badge>
                  )}
                  {product.sale && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white font-roboto text-xs">
                      OFERTA
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="w-8 h-8 bg-white/90 hover:bg-white"
                    onClick={() => handleWishlistToggle(product)}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-roboto font-medium text-sm md:text-base uppercase tracking-wider mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= product.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-roboto">
                    ({product.reviewsCount})
                  </span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  {product.originalPrice ? (
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 line-through font-roboto">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-lg font-roboto font-bold text-green-600">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg font-roboto font-bold">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
                  size="sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartRecommendations;
