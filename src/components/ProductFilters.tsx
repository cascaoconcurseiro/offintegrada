
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  priceRange: number;
  setPriceRange: (price: number) => void;
  onClearFilters: () => void;
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
  onClearFilters
}: ProductFiltersProps) => {
  const toggleSize = (size: string) => {
    setSelectedSizes(
      selectedSizes.includes(size) 
        ? selectedSizes.filter(s => s !== size)
        : [...selectedSizes, size]
    );
  };

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-md h-fit">
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
        onClick={onClearFilters}
        variant="outline" 
        className="w-full mt-4 font-roboto font-medium uppercase tracking-wider"
      >
        Limpar Filtros
      </Button>
    </div>
  );
};

export default ProductFilters;
