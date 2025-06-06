
import React, { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface ProductSearchProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
  onFilterClick?: () => void;
  showFilters?: boolean;
}

const ProductSearch = ({ onSearch, searchTerm, onFilterClick, showFilters = false }: ProductSearchProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const popularSearches = [
    "regata masculina",
    "legging feminina", 
    "camiseta preta",
    "shorts treino",
    "agasalho"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearch('');
  };

  const handlePopularSearch = (term: string) => {
    setLocalSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Buscar produtos, marcas, categorias..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="pl-10 pr-10 font-roboto h-12 text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {localSearchTerm && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {showFilters && (
            <Button 
              type="button"
              variant="outline"
              onClick={onFilterClick}
              className="px-6 h-12"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          )}
        </div>
      </form>

      {/* Popular Searches */}
      {!localSearchTerm && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-roboto">Buscas populares:</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <Badge
                key={term}
                variant="outline"
                className="cursor-pointer hover:bg-gray-100 font-roboto"
                onClick={() => handlePopularSearch(term)}
              >
                {term}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
