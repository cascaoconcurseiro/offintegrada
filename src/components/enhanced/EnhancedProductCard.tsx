import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Star, ShoppingBag, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[];
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
  isInWishlist: (id: number) => boolean;
  className?: string;
}

const EnhancedProductCard = ({ 
  product, 
  onAddToCart, 
  onWishlistToggle, 
  onQuickView, 
  isInWishlist,
  className 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const isWishlisted = isInWishlist(product.id);
  
  const handleImageHover = (index: number) => {
    if (product.images && product.images.length > 1) {
      setImageIndex(index);
    }
  };

  const currentImage = product.images?.[imageIndex] || product.image;
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-accent-red/30",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-subtle">
        {/* Product Image */}
        <img
          src={currentImage}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Image Dots Navigation */}
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === imageIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"
                )}
                onMouseEnter={() => handleImageHover(index)}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <Badge className="bg-accent-red text-accent-red-foreground font-bold animate-pulse-glow">
              <Zap className="w-3 h-3 mr-1" />
              NOVO
            </Badge>
          )}
          {product.sale && discountPercentage > 0 && (
            <Badge className="bg-gradient-accent text-accent-red-foreground font-bold">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className={cn(
          "absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}>
          <Button
            size="icon-sm"
            variant={isWishlisted ? "glow" : "glass"}
            onClick={() => onWishlistToggle(product)}
            className={cn(
              "transition-all duration-300",
              isWishlisted && "animate-pulse-glow"
            )}
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
          </Button>
          
          {onQuickView && (
            <Button
              size="icon-sm"
              variant="glass"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Quick Add Button */}
        <div className={cn(
          "absolute bottom-4 left-4 right-4 transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button
            variant="premium"
            size="sm"
            onClick={() => onAddToCart(product)}
            className="w-full"
            leftIcon={<ShoppingBag className="w-4 h-4" />}
          >
            ADICIONAR
          </Button>
        </div>

        {/* Gradient Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.floor(product.rating!) 
                      ? "text-accent-red fill-current" 
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewsCount || 0})
            </span>
          </div>
        )}

        {/* Product Name */}
        <Link 
          to={`/product/${product.id}`}
          className="block group/link"
        >
          <h3 className="font-semibold text-base text-foreground group-hover/link:text-accent-red transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Cores:</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-accent-red">
            R$ {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Sizes */}
        {product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map((size) => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}
            {product.sizes.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{product.sizes.length - 4}
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedProductCard;