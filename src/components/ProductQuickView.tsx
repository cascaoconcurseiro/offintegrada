
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { toast } from '@/hooks/use-toast';
import ImageZoom from '@/components/ImageZoom';
import StarRating from '@/components/StarRating';

interface Product {
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
  description?: string;
  composition?: string;
  care?: string;
  rating?: number;
  reviewsCount?: number;
  category: string;
  gender: string;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const images = product.images || [product.image];

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useKeyboardNavigation({
    isOpen,
    onClose,
    onNext: images.length > 1 ? handleNextImage : undefined,
    onPrevious: images.length > 1 ? handlePrevImage : undefined
  });

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive"
      });
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor || product.colors[0]
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
    
    onClose();
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removido da lista de desejos",
        description: `${product.name} foi removido da sua lista de desejos.`,
      });
    } else {
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

  const calculateInstallments = (price: number) => {
    const maxInstallments = 10;
    const minInstallmentValue = 20;
    const installments = [];
    
    for (let i = 1; i <= maxInstallments; i++) {
      const installmentValue = price / i;
      if (installmentValue >= minInstallmentValue) {
        installments.push({
          number: i,
          value: installmentValue,
          total: price
        });
      }
    }
    
    return installments;
  };

  const installments = calculateInstallments(product.price);
  const bestInstallment = installments[installments.length - 1];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-0 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <ImageZoom
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 rounded-lg overflow-hidden"
              />
              
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  NOVO
                </Badge>
              )}
              {product.sale && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  OFERTA
                </Badge>
              )}

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${
                      selectedImage === index ? 'border-black shadow-lg' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-oswald font-medium uppercase tracking-wider mb-2">
                {product.name}
              </h2>
              
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={product.rating} readonly />
                  <span className="text-sm text-gray-600 font-roboto">
                    {product.rating} ({product.reviewsCount} avaliações)
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-roboto font-bold">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through font-roboto">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              {bestInstallment && (
                <p className="text-sm text-gray-600 font-roboto mb-4">
                  ou {bestInstallment.number}x de R$ {bestInstallment.value.toFixed(2).replace('.', ',')} sem juros
                </p>
              )}

              {product.description && (
                <p className="text-gray-700 font-roboto mb-4">{product.description}</p>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-oswald font-medium mb-3 uppercase tracking-wider">Tamanho</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 border text-sm font-roboto font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-black text-white border-black shadow-lg'
                        : 'bg-white text-black border-gray-300 hover:border-black hover:shadow-md'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-oswald font-medium mb-3 uppercase tracking-wider">Cor</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm font-roboto transition-all duration-200 ${
                      selectedColor === color
                        ? 'bg-black text-white border-black shadow-lg'
                        : 'bg-white text-black border-gray-300 hover:border-black hover:shadow-md'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider backdrop-blur-sm"
                size="lg"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                ADICIONAR AO CARRINHO
              </Button>
              
              <Button
                onClick={handleWishlistToggle}
                variant="outline"
                className="w-full font-roboto font-medium uppercase tracking-wider backdrop-blur-sm border-black/20"
                size="lg"
              >
                <Heart className={`w-4 h-4 mr-2 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                {isInWishlist(product.id) ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
              </Button>
            </div>

            {/* Product Info */}
            {(product.composition || product.care) && (
              <div className="space-y-3 pt-4 border-t">
                {product.composition && (
                  <div>
                    <h4 className="font-oswald font-medium mb-1 uppercase tracking-wider text-sm">Composição</h4>
                    <p className="text-sm text-gray-600 font-roboto">{product.composition}</p>
                  </div>
                )}
                {product.care && (
                  <div>
                    <h4 className="font-oswald font-medium mb-1 uppercase tracking-wider text-sm">Cuidados</h4>
                    <p className="text-sm text-gray-600 font-roboto">{product.care}</p>
                  </div>
                )}
              </div>
            )}

            {/* Keyboard shortcuts hint */}
            <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
              <p>💡 Use as setas ← → para navegar pelas imagens | ESC para fechar</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
