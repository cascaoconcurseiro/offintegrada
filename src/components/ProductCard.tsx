
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    sizes: string[];
    colors: string[];
    isNew?: boolean;
    sale?: boolean;
    category: string;
    gender: string;
    rating?: number;
    reviewsCount?: number;
  };
  onAddToCart: (product: any) => void;
  onWishlistToggle: (product: any) => void;
  onQuickView?: (product: any) => void;
  onShowReviews?: (product: any) => void;
  isInWishlist: (id: number) => boolean;
}

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onWishlistToggle, 
  onQuickView, 
  onShowReviews,
  isInWishlist 
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Link to={`/produto/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
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
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 bg-white/90 hover:bg-white"
            onClick={() => onWishlistToggle(product)}
          >
            <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          {onQuickView && (
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 bg-white/90 hover:bg-white"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-roboto font-medium text-sm md:text-base uppercase tracking-wider mb-2 line-clamp-2 hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= product.rating!
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            {product.reviewsCount && (
              <button
                onClick={() => onShowReviews?.(product)}
                className="text-xs text-gray-600 font-roboto hover:text-gray-800 transition-colors"
              >
                ({product.reviewsCount})
              </button>
            )}
          </div>
        )}

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
          onClick={() => onAddToCart(product)}
          className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
          size="sm"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
