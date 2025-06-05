
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from '@/hooks/use-toast';
import ProductQuickView from '@/components/ProductQuickView';
import ProductReviews from '@/components/ProductReviews';

const ShopPage = () => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(500);
  const [sortBy, setSortBy] = useState('default');
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

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedGender('all');
    setSelectedCategory('all');
    setSelectedSizes([]);
    setPriceRange(500);
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
    
    return genderMatch && categoryMatch && priceMatch && sizeMatch;
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-6 border border-gray-200 rounded-md h-fit">
          <h3 className="font-oswald text-lg font-medium mb-5 uppercase tracking-wider">Filtrar Produtos</h3>
          
          {/* Gender Filter */}
          <div className="mb-6">
            <h4 className="font-oswald text-md font-medium mb-3 uppercase tracking-wider">Gênero</h4>
            <div className="flex flex-col space-y-2">
              {[
                { value: 'all', label: 'Todos' },
                { value: 'masculino', label: 'Masculino' },
                { value: 'feminino', label: 'Feminino' }
              ].map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="gender-filter" 
                    value={option.value}
                    checked={selectedGender === option.value}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="form-radio text-black" 
                  />
                  <span className="ml-2 text-gray-700 font-roboto">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-oswald text-md font-medium mb-3 uppercase tracking-wider">Categorias</h4>
            <div className="flex flex-col space-y-2">
              {[
                { value: 'all', label: 'Todas' },
                { value: 'regata', label: 'Regatas' },
                { value: 'camiseta', label: 'Camisetas' },
                { value: 'shorts', label: 'Shorts' },
                { value: 'legging', label: 'Leggings' },
                { value: 'top', label: 'Tops' },
                { value: 'agasalho', label: 'Agasalhos' }
              ].map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="category-filter" 
                    value={option.value}
                    checked={selectedCategory === option.value}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-radio text-black" 
                  />
                  <span className="ml-2 text-gray-700 font-roboto">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <h4 className="font-oswald text-md font-medium mb-3 uppercase tracking-wider">Tamanhos</h4>
            <div className="grid grid-cols-3 gap-2">
              {['P', 'M', 'G', 'GG'].map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`p-2 border text-sm font-roboto font-medium transition-colors ${
                    selectedSizes.includes(size)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="font-oswald text-md font-medium mb-3 uppercase tracking-wider">Preço</h4>
            <input 
              type="range" 
              min="0" 
              max="500" 
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-600 mt-2 font-roboto">Max: R${priceRange}</p>
          </div>
          
          <Button 
            onClick={clearFilters}
            variant="outline" 
            className="w-full mt-4 font-roboto font-medium uppercase tracking-wider"
          >
            Limpar Filtros
          </Button>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
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
                <Card key={product.id} className="group cursor-pointer border-0 shadow-none bg-transparent overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {product.isNew && (
                        <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">NOVO</span>
                      )}
                      {product.sale && (
                        <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">OFERTA</span>
                      )}
                    </div>

                    {/* Hover actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWishlistToggle(product);
                        }}
                      >
                        <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(product);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Quick add to cart */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        ADICIONAR AO CARRINHO
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-0 pt-4">
                    <h3 className="font-roboto font-medium text-base mb-2 uppercase tracking-wider">{product.name}</h3>
                    
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating!) 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => setReviewsProduct(product)}
                          className="text-xs text-gray-600 font-roboto hover:underline"
                        >
                          ({product.reviewsCount})
                        </button>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-roboto font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through font-roboto">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                      )}
                    </div>
                    
                    {/* Installments */}
                    <p className="text-xs text-gray-600 font-roboto mt-1">
                      ou 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')} sem juros
                    </p>
                  </CardContent>
                </Card>
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

export default ShopPage;
