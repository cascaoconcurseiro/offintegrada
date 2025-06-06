
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Zap } from 'lucide-react';
import ProductSizeChart from './ProductSizeChart';
import ProductStockIndicator from './ProductStockIndicator';

interface ProductSelectionProps {
  sizes: string[];
  colors: string[];
  availableSizes: Record<string, number>;
  selectedSize: string;
  selectedColor: string;
  isInWishlist: boolean;
  category: string;
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
  category,
  onSizeSelect,
  onColorSelect,
  onAddToCart,
  onWishlistToggle
}: ProductSelectionProps) => {
  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-oswald font-medium uppercase tracking-wider">Tamanho</h3>
          <ProductSizeChart category={category} />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {sizes.map((size) => {
            const isAvailable = availableSizes[size] > 0;
            const isLowStock = availableSizes[size] <= 3 && availableSizes[size] > 0;
            return (
              <button
                key={size}
                onClick={() => isAvailable && onSizeSelect(size)}
                disabled={!isAvailable}
                className={`relative p-4 border text-sm font-roboto font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-black text-white border-black scale-105'
                    : isAvailable
                    ? 'bg-white text-black border-gray-300 hover:border-black hover:scale-105'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
              >
                {size}
                {isLowStock && isAvailable && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
                {!isAvailable && <span className="block text-xs">Esgotado</span>}
              </button>
            );
          })}
        </div>
        
        {/* Stock Indicator */}
        <div className="mt-3">
          <ProductStockIndicator 
            availableSizes={availableSizes} 
            selectedSize={selectedSize} 
          />
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
              className={`px-6 py-3 border text-sm font-roboto transition-all duration-200 ${
                selectedColor === color
                  ? 'bg-black text-white border-black scale-105'
                  : 'bg-white text-black border-gray-300 hover:border-black hover:scale-105'
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
          disabled={!selectedSize || availableSizes[selectedSize] === 0}
          className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          size="lg"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          {!selectedSize ? 'SELECIONE UM TAMANHO' : 'ADICIONAR AO CARRINHO'}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onWishlistToggle}
            variant="outline"
            className="font-roboto font-medium uppercase tracking-wider transition-all duration-200 hover:scale-105"
            size="lg"
          >
            <Heart className={`w-5 h-5 mr-2 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
            FAVORITOS
          </Button>
          
          <Button
            variant="outline"
            className="font-roboto font-medium uppercase tracking-wider bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300 text-yellow-800 hover:bg-yellow-100 transition-all duration-200 hover:scale-105"
            size="lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            COMPRA RÁPIDA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
