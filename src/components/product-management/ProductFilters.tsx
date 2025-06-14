
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid, List } from 'lucide-react';
import { categories } from '@/types/product';


interface ProductFiltersProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  // TODO: Add more props for filter functionality
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  viewMode,
  onViewModeChange,
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Buscar produtos..." className="pl-10" />
            </div>
          </div>
          <select className="px-3 py-2 border rounded">
            <option value="">Todas Categorias</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select className="px-3 py-2 border rounded">
            <option value="">Todos Status</option>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <div className="flex gap-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onViewModeChange('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
