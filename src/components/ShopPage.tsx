
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingBag } from 'lucide-react';

const ShopPage = () => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(500);

  const products = [
    {
      id: 1,
      name: "Regata Premium Masculina",
      category: "regata",
      gender: "masculino",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      isNew: true,
      sale: true
    },
    {
      id: 2,
      name: "Camiseta Compress Pro",
      category: "camiseta",
      gender: "masculino",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      isNew: false,
      sale: false
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
      isNew: false,
      sale: true
    },
    {
      id: 4,
      name: "Top Fitness Feminino",
      category: "top",
      gender: "feminino",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G"],
      isNew: true,
      sale: false
    }
  ];

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

  const filteredProducts = products.filter(product => {
    const genderMatch = selectedGender === 'all' || product.gender === selectedGender;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    
    return genderMatch && categoryMatch && priceMatch && sizeMatch;
  });

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
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Ordenar por</SelectItem>
                <SelectItem value="price-asc">Preço: Menor para Maior</SelectItem>
                <SelectItem value="price-desc">Preço: Maior para Menor</SelectItem>
                <SelectItem value="name-asc">Nome: A-Z</SelectItem>
                <SelectItem value="name-desc">Nome: Z-A</SelectItem>
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
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white mb-2">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Quick add to cart */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        ADICIONAR AO CARRINHO
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-0 pt-4">
                    <h3 className="font-roboto font-medium text-base mb-2 uppercase tracking-wider">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-roboto font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through font-roboto">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                      )}
                    </div>
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
    </div>
  );
};

export default ShopPage;
