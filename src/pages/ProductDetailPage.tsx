
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import ProductReviews from '@/components/ProductReviews';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showReviews, setShowReviews] = useState(false);
  
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Mock product data - in real app would fetch from API
  const product = {
    id: parseInt(id || '1'),
    name: "Regata Premium Masculina",
    category: "regata",
    gender: "masculino",
    price: 89.90,
    originalPrice: 119.90,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=600&h=700&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=600&h=700&fit=crop&crop=center"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco", "Cinza"],
    availableSizes: { "P": 5, "M": 10, "G": 8, "GG": 3 },
    isNew: true,
    sale: true,
    description: "Leveza e respirabilidade para seus treinos mais intensos. Tecido Dry Fit que afasta o suor do corpo, mantendo você seco durante toda a atividade física.",
    composition: "90% Poliamida, 10% Elastano",
    care: "Lavar à máquina com água fria. Não usar alvejante. Secar à sombra.",
    rating: 4.5,
    reviewsCount: 15,
    videoId: null
  };

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
    return Math.floor(price / maxInstallments);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 font-roboto">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/loja" className="hover:text-black">Loja</Link>
          <span>/</span>
          <span className="capitalize">{product.gender}</span>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <Button variant="ghost" className="mb-6 font-roboto" asChild>
          <Link to="/loja">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a loja
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover rounded-lg"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-green-600">NOVO</Badge>
              )}
              {product.sale && (
                <Badge className="absolute top-4 right-4 bg-red-600">OFERTA</Badge>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full h-32 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-oswald font-medium uppercase tracking-wider mb-4">
                {product.name}
              </h1>
              
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating!) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setShowReviews(true)}
                    className="text-sm text-gray-600 font-roboto hover:underline"
                  >
                    {product.rating} ({product.reviewsCount} avaliações)
                  </button>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-roboto font-bold">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through font-roboto">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 font-roboto mb-6">
                ou 10x de R$ {calculateInstallments(product.price).toFixed(2).replace('.', ',')} sem juros
              </p>

              <p className="text-gray-700 font-roboto mb-6">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-oswald font-medium mb-3 uppercase tracking-wider">Tamanho</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => {
                  const isAvailable = product.availableSizes[size] > 0;
                  return (
                    <button
                      key={size}
                      onClick={() => isAvailable && setSelectedSize(size)}
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
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
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
                onClick={handleAddToCart}
                className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
                size="lg"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                ADICIONAR AO CARRINHO
              </Button>
              
              <Button
                onClick={handleWishlistToggle}
                variant="outline"
                className="w-full font-roboto font-medium uppercase tracking-wider"
                size="lg"
              >
                <Heart className={`w-5 h-5 mr-2 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                {isInWishlist(product.id) ? 'REMOVER DOS FAVORITOS' : 'ADICIONAR AOS FAVORITOS'}
              </Button>
            </div>

            {/* Product Info */}
            <div className="space-y-4 pt-6 border-t">
              <div>
                <h4 className="font-oswald font-medium mb-2 uppercase tracking-wider text-sm">Composição</h4>
                <p className="text-sm text-gray-600 font-roboto">{product.composition}</p>
              </div>
              <div>
                <h4 className="font-oswald font-medium mb-2 uppercase tracking-wider text-sm">Cuidados</h4>
                <p className="text-sm text-gray-600 font-roboto">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Modal */}
      {showReviews && (
        <ProductReviews
          productId={product.id}
          productName={product.name}
          isOpen={showReviews}
          onClose={() => setShowReviews(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
