
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductSuggestionsProps {
  currentProductId: number;
  category: string;
  gender: string;
  onAddToCart: (product: any) => void;
  onWishlistToggle: (product: any) => void;
  onQuickView: (product: any) => void;
  onShowReviews: (product: any) => void;
  isInWishlist: (id: number) => boolean;
}

const ProductSuggestions = ({
  currentProductId,
  category,
  gender,
  onAddToCart,
  onWishlistToggle,
  onQuickView,
  onShowReviews,
  isInWishlist
}: ProductSuggestionsProps) => {
  // Mock products - in real app would fetch from API based on category/gender
  const allProducts = [
    {
      id: 1,
      name: "Regata Premium Masculina",
      category: "regata",
      gender: "masculino",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Branco", "Cinza"],
      isNew: true,
      sale: true,
      description: "Leveza e respirabilidade para seus treinos mais intensos.",
      composition: "90% Poliamida, 10% Elastano",
      care: "Lavar à máquina com água fria.",
      rating: 4.5,
      reviewsCount: 15
    },
    {
      id: 2,
      name: "Camiseta Compress Pro",
      category: "camiseta",
      gender: "masculino",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Azul"],
      isNew: false,
      sale: false,
      description: "Conforto e liberdade de movimentos.",
      composition: "100% Algodão Orgânico",
      care: "Lavar delicadamente.",
      rating: 5,
      reviewsCount: 22
    },
    {
      id: 3,
      name: "Short Performance Elite",
      category: "shorts",
      gender: "masculino",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Cinza"],
      isNew: true,
      sale: false,
      description: "Shorts leve com bolsos estratégicos.",
      composition: "100% Poliéster Reciclado",
      care: "Lavar com cores similares.",
      rating: 4,
      reviewsCount: 8
    },
    {
      id: 4,
      name: "Legging High Tech",
      category: "legging",
      gender: "feminino",
      price: 149.90,
      originalPrice: 189.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Rosa"],
      isNew: false,
      sale: true,
      description: "Alta compressão para suporte muscular.",
      composition: "78% Poliamida, 22% Elastano",
      care: "Não passar o ferro sobre a estampa.",
      rating: 4.8,
      reviewsCount: 30
    },
    {
      id: 5,
      name: "Top Fitness Feminino",
      category: "top",
      gender: "feminino",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Branco"],
      isNew: true,
      sale: false,
      description: "Top com alta sustentação.",
      composition: "85% Poliamida, 15% Elastano",
      care: "Secar à sombra.",
      rating: 4.2,
      reviewsCount: 12
    },
    {
      id: 6,
      name: "Agasalho Elite Pro",
      category: "agasalho",
      gender: "unissex",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Cinza"],
      isNew: true,
      sale: false,
      description: "Conjunto de agasalho com tecido tecnológico.",
      composition: "60% Algodão, 40% Poliéster",
      care: "Lavar do avesso.",
      rating: 4.6,
      reviewsCount: 18
    }
  ];

  // Filter related products (same category or gender, excluding current product)
  const relatedProducts = allProducts
    .filter(product => 
      product.id !== currentProductId && 
      (product.category === category || product.gender === gender || product.gender === 'unissex')
    )
    .slice(0, 4);

  const frequentlyBoughtTogether = allProducts
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Frequentemente Comprados Juntos */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-oswald font-medium mb-4 uppercase tracking-wider">
            Frequentemente Comprados Juntos
          </h3>
          <p className="text-gray-600 font-roboto">
            Clientes que compraram este produto também levaram:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frequentlyBoughtTogether.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
              onShowReviews={onShowReviews}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>
      </section>

      {/* Produtos Relacionados */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-oswald font-medium mb-4 uppercase tracking-wider">
            Você Também Pode Gostar
          </h3>
          <p className="text-gray-600 font-roboto">
            Produtos similares que podem interessar você:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
              onShowReviews={onShowReviews}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="font-roboto font-medium uppercase tracking-wider" asChild>
            <Link to="/loja">
              Ver Mais Produtos
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductSuggestions;
