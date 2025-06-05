import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import ProductQuickView from '@/components/ProductQuickView';
import ProductReviews from '@/components/ProductReviews';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProductCard';
import ProductSearch from '@/components/ProductSearch';

const ShopPageRefactored = () => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(500);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [reviewsProduct, setReviewsProduct] = useState<any>(null);

  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      name: "Regata Premium Masculina",
      category: "regata",
      gender: "masculino",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop&crop=center"
      ],
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Branco", "Cinza"],
      isNew: true,
      sale: true,
      description: "Leveza e respirabilidade para seus treinos mais intensos. Tecido Dry Fit que afasta o suor.",
      composition: "90% Poliamida, 10% Elastano",
      care: "Lavar à máquina com água fria. Não usar alvejante. Secar à sombra.",
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
      description: "Conforto e liberdade de movimentos. Ideal para musculação e treinos funcionais.",
      composition: "100% Algodão Orgânico",
      care: "Lavar delicadamente. Não torcer.",
      rating: 5,
      reviewsCount: 22
    },
    {
      id: 3,
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
      description: "Alta compressão para suporte muscular e modelagem perfeita. Cintura alta para maior conforto.",
      composition: "78% Poliamida, 22% Elastano",
      care: "Não passar o ferro sobre a estampa.",
      rating: 4.8,
      reviewsCount: 30
    },
    {
      id: 4,
      name: "Top Fitness Feminino",
      category: "top",
      gender: "feminino",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      colors: ["Preto", "Branco"],
      isNew: true,
      sale: false,
      description: "Top com alta sustentação, ideal para atividades de impacto. Design moderno e confortável.",
      composition: "85% Poliamida, 15% Elastano",
      care: "Secar à sombra.",
      rating: 4.2,
      reviewsCount: 12
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

  const clearFilters = () => {
    setSelectedGender('all');
    setSelectedCategory('all');
    setSelectedSizes([]);
    setPriceRange(500);
    setSearchTerm('');
  };

  const sortProducts = (products: any[]) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating':
        return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return products;
    }
  };

  const filteredProducts = sortProducts(products.filter(product => {
    const genderMatch = selectedGender === 'all' || product.gender === selectedGender;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    const searchMatch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return genderMatch && categoryMatch && priceMatch && sizeMatch && searchMatch;
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <ProductFilters
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            onClearFilters={clearFilters}
          />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          {/* Search Bar */}
          <div className="mb-6">
            <ProductSearch onSearch={setSearchTerm} searchTerm={searchTerm} />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-oswald font-medium uppercase tracking-wider">
              Todos os Produtos ({filteredProducts.length})
            </h2>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Ordenar por</SelectItem>
                <SelectItem value="price-asc">Preço: Menor para Maior</SelectItem>
                <SelectItem value="price-desc">Preço: Maior para Menor</SelectItem>
                <SelectItem value="name-asc">Nome: A-Z</SelectItem>
                <SelectItem value="name-desc">Nome: Z-A</SelectItem>
                <SelectItem value="rating">Melhor Avaliados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-8 md:gap-y-12">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-10 text-gray-600">
              <p className="text-xl font-oswald font-medium mb-4">Nenhum produto encontrado com os filtros selecionados.</p>
              <Button onClick={clearFilters} className="bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider">
                Redefinir Filtros
              </Button>
            </div>
          )}
        </main>
      </div>

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
    </div>
  );
};

export default ShopPageRefactored;
