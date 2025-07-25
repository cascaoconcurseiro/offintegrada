import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderEnhanced from '@/components/HeaderEnhanced';
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
import ProductRecommendationBar from '@/components/ProductRecommendationBar';
import IntelligentSuggestions from '@/components/IntelligentSuggestions';
import ProductQuickView from '@/components/ProductQuickView';
import ProductReviewsInline from '@/components/ProductReviewsInline';
import ProductTechnicalInfo from '@/components/ProductTechnicalInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [showReviews, setShowReviews] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [reviewsProduct, setReviewsProduct] = useState<any>(null);
  
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
      "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=600&h=700&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=600&h=700&fit=crop&crop=center"
    ],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco", "Cinza"],
    availableSizes: { "P": 5, "M": 10, "G": 3, "GG": 1 },
    isNew: true,
    sale: true,
    description: "Leveza e respirabilidade para seus treinos mais intensos. Tecido Dry Fit que afasta o suor do corpo, mantendo você seco durante toda a atividade física. Design moderno com corte anatômico que acompanha os movimentos do corpo.",
    composition: "90% Poliamida, 10% Elastano",
    care: "Lavar à máquina com água fria. Não usar alvejante. Secar à sombra. Não passar ferro quente sobre estampas.",
    rating: 4.5,
    reviewsCount: 60,
    videoId: "product_video_123"
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

    if (product.availableSizes[selectedSize] === 0) {
      toast({
        title: "Produto indisponível",
        description: "Este tamanho está esgotado no momento.",
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

  const handleSuggestionAddToCart = (suggestionProduct: any) => {
    addItem({
      id: suggestionProduct.id,
      name: suggestionProduct.name,
      price: suggestionProduct.price,
      image: suggestionProduct.image,
      size: suggestionProduct.sizes?.[0] || 'M',
      color: suggestionProduct.colors?.[0] || 'Preto'
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${suggestionProduct.name} foi adicionado ao carrinho.`,
    });
  };

  const handleSuggestionWishlistToggle = (suggestionProduct: any) => {
    if (isInWishlist(suggestionProduct.id)) {
      removeFromWishlist(suggestionProduct.id);
      toast({
        title: "Removido da lista de desejos",
        description: `${suggestionProduct.name} foi removido da sua lista de desejos.`,
      });
    } else {
      addToWishlist({
        id: suggestionProduct.id,
        name: suggestionProduct.name,
        price: suggestionProduct.price,
        image: suggestionProduct.image,
        category: suggestionProduct.category,
        gender: suggestionProduct.gender
      });
      toast({
        title: "Adicionado à lista de desejos",
        description: `${suggestionProduct.name} foi adicionado à sua lista de desejos.`,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8">
        <ProductBreadcrumb gender={product.gender} productName={product.name} />

        <Button variant="ghost" className="mb-6 font-roboto" asChild>
          <Link to="/loja">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a loja
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
            isNew={product.isNew}
            sale={product.sale}
            videoId={product.videoId}
          />

          <div className="space-y-8">
            <ProductRecommendationBar />
            
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
              category={product.category}
              onSizeSelect={setSelectedSize}
              onColorSelect={setSelectedColor}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
            />
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="technical" className="font-oswald uppercase tracking-wider">
                Informações Técnicas
              </TabsTrigger>
              <TabsTrigger value="reviews" className="font-oswald uppercase tracking-wider">
                Avaliações ({product.reviewsCount})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="mt-8">
              <ProductTechnicalInfo
                composition={product.composition}
                care={product.care}
                description={product.description}
              />
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <ProductReviewsInline
                productId={product.id}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Intelligent Suggestions */}
        <IntelligentSuggestions
          currentProduct={product}
          onAddToCart={handleSuggestionAddToCart}
          onWishlistToggle={handleSuggestionWishlistToggle}
          onQuickView={setQuickViewProduct}
          isInWishlist={isInWishlist}
        />
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

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Reviews Modal for Suggestions */}
      {reviewsProduct && (
        <ProductReviews
          productId={reviewsProduct.id}
          productName={reviewsProduct.name}
          isOpen={!!reviewsProduct}
          onClose={() => setReviewsProduct(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
