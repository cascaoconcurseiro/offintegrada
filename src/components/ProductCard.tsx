
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
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
  availableSizes?: Record<string, number>;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onWishlistToggle: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onShowReviews: (product: Product) => void;
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
  const isOutOfStock = product.availableSizes && 
    Object.values(product.availableSizes).every(stock => stock === 0);

  return (
    <Card className="group cursor-pointer border-0 shadow-none bg-transparent overflow-hidden">
      <div className="relative overflow-hidden">
        <Link to={`/produto/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-80 md:h-96 object-cover transition-all duration-300 ${
              isOutOfStock 
                ? 'filter grayscale opacity-50' 
                : 'filter grayscale group-hover:grayscale-0'
            }`}
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.isNew && (
            <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">NOVO</span>
          )}
          {product.sale && (
            <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">OFERTA</span>
          )}
          {isOutOfStock && (
            <span className="bg-gray-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">ESGOTADO</span>
          )}
        </div>

        {/* Hover actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onWishlistToggle(product);
            }}
          >
            <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick add to cart */}
        {!isOutOfStock && (
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              ADICIONAR AO CARRINHO
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-0 pt-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-roboto font-medium text-base mb-2 uppercase tracking-wider hover:underline">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-2">
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
            <button
              onClick={() => onShowReviews(product)}
              className="text-xs text-gray-600 font-roboto hover:underline"
            >
              ({product.reviewsCount})
            </button>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <span className={`text-lg font-roboto font-bold ${isOutOfStock ? 'text-gray-500' : ''}`}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through font-roboto">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        
        {/* Installments */}
        {!isOutOfStock && (
          <p className="text-xs text-gray-600 font-roboto mt-1">
            ou 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')} sem juros
          </p>
        )}

        {/* Stock status */}
        {isOutOfStock && (
          <p className="text-xs text-red-600 font-roboto mt-1 font-medium">
            Produto indisponível
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
