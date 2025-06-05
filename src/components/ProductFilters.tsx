
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductFiltersProps {
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  priceRange: number;
  setPriceRange: (price: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onClearFilters: () => void;
  totalProducts: number;
  filteredCount: number;
}

const ProductFilters = ({
  selectedGender,
  setSelectedGender,
  selectedCategory,
  setSelectedCategory,
  selectedSizes,
  setSelectedSizes,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  onClearFilters,
  totalProducts,
  filteredCount
}: ProductFiltersProps) => {
  const toggleSize = (size: string) => {
    setSelectedSizes(
      selectedSizes.includes(size) 
        ? selectedSizes.filter(s => s !== size)
        : [...selectedSizes, size]
    );
  };

  const hasActiveFilters = selectedGender !== 'all' || selectedCategory !== 'all' || 
    selectedSizes.length > 0 || priceRange < 500;

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-md h-fit">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-oswald text-lg font-medium uppercase tracking-wider">Filtrar Produtos</h3>
        <Badge variant="outline" className="font-roboto">
          {filteredCount} de {totalProducts}
        </Badge>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <h4 className="font-oswald text-md font-medium mb-3 uppercase tracking-wider">Ordenar por</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded font-roboto text-sm"
        >
          <option value="">Padrão</option>
          <option value="price-asc">Menor Preço</option>
          <option value="price-desc">Maior Preço</option>
          <option value="name-asc">Nome A-Z</option>
          <option value="rating-desc">Melhor Avaliação</option>
          <option value="newest">Mais Novos</option>
        </select>
      </div>
      
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
        {selectedSizes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {selectedSizes.map(size => (
              <Badge key={size} variant="secondary" className="text-xs">
                {size}
              </Badge>
            ))}
          </div>
        )}
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
        <div className="flex justify-between text-xs text-gray-600 mt-2 font-roboto">
          <span>R$ 0</span>
          <span>R$ {priceRange}</span>
          <span>R$ 500+</span>
        </div>
      </div>
      
      <Button 
        onClick={onClearFilters}
        variant="outline" 
        className="w-full mt-4 font-roboto font-medium uppercase tracking-wider"
        disabled={!hasActiveFilters}
      >
        Limpar Filtros {hasActiveFilters && `(${filteredCount})`}
      </Button>
    </div>
  );
};

export default ProductFilters;
