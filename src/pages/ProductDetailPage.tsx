
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import ProductReviews from '@/components/ProductReviews';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductSelection from '@/components/ProductSelection';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <ProductBreadcrumb gender={product.gender} productName={product.name} />

        <Button variant="ghost" className="mb-6 font-roboto" asChild>
          <Link to="/loja">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a loja
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
            isNew={product.isNew}
            sale={product.sale}
          />

          <div className="space-y-8">
            <ProductInfo
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              description={product.description}
              composition={product.composition}
              care={product.care}
              onShowReviews={() => setShowReviews(true)}
            />

            <ProductSelection
              sizes={product.sizes}
              colors={product.colors}
              availableSizes={product.availableSizes}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              isInWishlist={isInWishlist(product.id)}
              onSizeSelect={setSelectedSize}
              onColorSelect={setSelectedColor}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
            />
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
