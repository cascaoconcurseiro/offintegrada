
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductSelectionProps {
  sizes: string[];
  colors: string[];
  availableSizes: Record<string, number>;
  selectedSize: string;
  selectedColor: string;
  isInWishlist: boolean;
  onSizeSelect: (size: string) => void;
  onColorSelect: (color: string) => void;
  onAddToCart: () => void;
  onWishlistToggle: () => void;
}

const ProductSelection = ({
  sizes,
  colors,
  availableSizes,
  selectedSize,
  selectedColor,
  isInWishlist,
  onSizeSelect,
  onColorSelect,
  onAddToCart,
  onWishlistToggle
}: ProductSelectionProps) => {
  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="font-oswald font-medium mb-3 uppercase tracking-wider">Tamanho</h3>
        <div className="grid grid-cols-4 gap-3">
          {sizes.map((size) => {
            const isAvailable = availableSizes[size] > 0;
            return (
              <button
                key={size}
                onClick={() => isAvailable && onSizeSelect(size)}
                disabled={!isAvailable}
                className={`p-4 border text-sm font-roboto font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-black text-white border-black'
                    : isAvailable
                    ? 'bg-white text-black border-gray-300 hover:border-black'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
              >
                {size}
                {!isAvailable && <span className="block text-xs">Indisponível</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-oswald font-medium mb-3 uppercase tracking-wider">Cor</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorSelect(color)}
              className={`px-6 py-3 border text-sm font-roboto transition-colors ${
                selectedColor === color
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button
          onClick={onAddToCart}
          className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
          size="lg"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          ADICIONAR AO CARRINHO
        </Button>
        
        <Button
          onClick={onWishlistToggle}
          variant="outline"
          className="w-full font-roboto font-medium uppercase tracking-wider"
          size="lg"
        >
          <Heart className={`w-5 h-5 mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
          {isInWishlist ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
        </Button>
      </div>
    </div>
  );
};

export default ProductSelection;
