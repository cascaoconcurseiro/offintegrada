import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import ProductQuickView from '@/components/ProductQuickView';
import ProductReviews from '@/components/ProductReviews';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [reviewsProduct, setReviewsProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: "Regata Premium Masculina",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Branco"],
      isNew: true,
      sale: true,
      category: "regata",
      gender: "masculino",
      description: "Leveza e respirabilidade para seus treinos mais intensos. Tecido Dry Fit que afasta o suor.",
      composition: "90% Poliamida, 10% Elastano",
      care: "Lavar à máquina com água fria. Não usar alvejante. Secar à sombra.",
      rating: 4.5,
      reviewsCount: 15
    },
    {
      id: 2,
      name: "Camiseta Compress Pro",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Azul"],
      isNew: false,
      sale: false,
      category: "camiseta",
      gender: "masculino",
      description: "Conforto e liberdade de movimentos. Ideal para musculação e treinos funcionais.",
      composition: "100% Algodão Orgânico",
      care: "Lavar delicadamente. Não torcer.",
      rating: 5,
      reviewsCount: 22
    },
    {
      id: 3,
      name: "Short Performance Elite",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Cinza"],
      isNew: true,
      sale: false,
      category: "shorts",
      gender: "masculino",
      description: "Shorts leve com bolsos estratégicos para corrida e treinos ao ar livre.",
      composition: "100% Poliéster Reciclado",
      care: "Lavar com cores similares.",
      rating: 4,
      reviewsCount: 8
    },
    {
      id: 4,
      name: "Legging High Tech",
      price: 149.90,
      originalPrice: 189.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Rosa"],
      isNew: false,
      sale: true,
      category: "legging",
      gender: "feminino",
      description: "Alta compressão para suporte muscular e modelagem perfeita. Cintura alta para maior conforto.",
      composition: "78% Poliamida, 22% Elastano",
      care: "Não passar o ferro sobre a estampa.",
      rating: 4.8,
      reviewsCount: 30
    },
    {
      id: 5,
      name: "Top Fitness Feminino",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Branco"],
      isNew: false,
      sale: false,
      category: "top",
      gender: "feminino",
      description: "Top com alta sustentação, ideal para atividades de impacto. Design moderno e confortável.",
      composition: "85% Poliamida, 15% Elastano",
      care: "Secar à sombra.",
      rating: 4.2,
      reviewsCount: 12
    },
    {
      id: 6,
      name: "Agasalho Elite Pro",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Cinza"],
      isNew: true,
      sale: false,
      category: "agasalho",
      gender: "unissex",
      description: "Conjunto de agasalho com tecido tecnológico, perfeito para aquecimento e pós-treino.",
      composition: "60% Algodão, 40% Poliéster",
      care: "Lavar do avesso.",
      rating: 4.6,
      reviewsCount: 18
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0]
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleWishlistToggle = (product: any) => {
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
    <>
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-oswald font-medium mb-4 uppercase tracking-wider">
              Mais Vendidos
            </h2>
            <p className="mt-1 text-gray-600 font-roboto font-light tracking-wider text-sm">
              Os favoritos da comunidade OFFSEASON.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-8 md:gap-y-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onWishlistToggle={handleWishlistToggle}
                onQuickView={setQuickViewProduct}
                onShowReviews={setReviewsProduct}
                isInWishlist={isInWishlist}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-12 font-roboto font-medium uppercase tracking-wider" asChild>
              <Link to="/loja">
                VER TODOS OS PRODUTOS
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Reviews Modal */}
      {reviewsProduct && (
        <ProductReviews
          productId={reviewsProduct.id}
          productName={reviewsProduct.name}
          isOpen={!!reviewsProduct}
          onClose={() => setReviewsProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
