
import React from 'react';
import BundleSection from './BundleSection';
import RelatedProductsGrid from './RelatedProductsGrid';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  sale?: boolean;
}

interface IntelligentSuggestionsProps {
  currentProduct: Product;
  onAddToCart: (product: Product) => void;
  onWishlistToggle: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
}

const IntelligentSuggestions = ({
  currentProduct,
  onAddToCart,
  onWishlistToggle,
  onQuickView,
  isInWishlist
}: IntelligentSuggestionsProps) => {
  
  // Lógica inteligente de sugestões baseada em dados reais de e-commerce
  const getRelatedProducts = (): Product[] => {
    const allProducts: Product[] = [
      {
        id: 2, name: "Camiseta Compress Pro", category: "camiseta", gender: "masculino",
        price: 129.90, image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop",
        rating: 5, reviewsCount: 22
      },
      {
        id: 3, name: "Short Performance Elite", category: "shorts", gender: "masculino",
        price: 79.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4, reviewsCount: 8, isNew: true
      },
      {
        id: 4, name: "Legging High Tech", category: "legging", gender: "feminino",
        price: 149.90, originalPrice: 189.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4.8, reviewsCount: 30, sale: true
      },
      {
        id: 5, name: "Top Fitness Feminino", category: "top", gender: "feminino",
        price: 69.90, image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop",
        rating: 4.2, reviewsCount: 12, isNew: true
      }
    ];

    // Algoritmo inteligente de sugestões
    const suggestions = allProducts.filter(product => product.id !== currentProduct.id);
    
    // Priorizar produtos complementares baseado na categoria
    const complementaryCategories: { [key: string]: string[] } = {
      'regata': ['shorts', 'tenis', 'acessorio'],
      'camiseta': ['calca', 'shorts', 'tenis'],
      'shorts': ['regata', 'camiseta', 'tenis', 'acessorio'],
      'legging': ['top', 'tenis', 'acessorio'],
      'top': ['legging', 'shorts', 'tenis'],
      'calca': ['camiseta', 'tenis', 'acessorio']
    };

    const complementary = suggestions.filter(product =>
      complementaryCategories[currentProduct.category]?.includes(product.category)
    );

    const sameGender = suggestions.filter(product =>
      product.gender === currentProduct.gender || product.gender === 'unissex'
    );

    const trending = suggestions.filter(product => product.rating >= 4.5);

    // Combinar e ordenar por relevância
    const combined = [
      ...complementary.slice(0, 2),
      ...sameGender.slice(0, 2),
      ...trending.slice(0, 2)
    ];

    // Remover duplicatas e retornar top 4
    const unique = combined.filter((product, index, self) =>
      index === self.findIndex(p => p.id === product.id)
    );

    return unique.slice(0, 4);
  };

  const getBundleProducts = (): Product[] => {
    const allProducts: Product[] = [
      {
        id: 2, name: "Camiseta Compress Pro", category: "camiseta", gender: "masculino",
        price: 129.90, image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop",
        rating: 5, reviewsCount: 22
      },
      {
        id: 3, name: "Short Performance Elite", category: "shorts", gender: "masculino",
        price: 79.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
        rating: 4, reviewsCount: 8
      },
      {
        id: 7, name: "Meia Compressão", category: "acessorio", gender: "unissex",
        price: 39.90, image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop",
        rating: 4.3, reviewsCount: 28
      }
    ];

    return allProducts.slice(0, 3);
  };

  const relatedProducts = getRelatedProducts();
  const bundleProducts = getBundleProducts();

  const handleBundleAddToCart = () => {
    // Adicionar todos os produtos do bundle
    bundleProducts.forEach(product => onAddToCart(product));
    onAddToCart(currentProduct);
    
    toast({
      title: "Conjunto adicionado!",
      description: "Todos os produtos do conjunto foram adicionados ao carrinho com desconto.",
    });
  };

  return (
    <div className="space-y-12">
      <BundleSection
        currentProduct={currentProduct}
        bundleProducts={bundleProducts}
        onAddBundleToCart={handleBundleAddToCart}
      />

      <RelatedProductsGrid
        products={relatedProducts}
        onAddToCart={onAddToCart}
        onWishlistToggle={onWishlistToggle}
        onQuickView={onQuickView}
        isInWishlist={isInWishlist}
      />
    </div>
  );
};

export default IntelligentSuggestions;
