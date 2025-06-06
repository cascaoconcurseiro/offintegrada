
import React, { useState, useEffect } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isPopular?: boolean;
}

interface IntelligentSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntelligentSearch = ({ isOpen, onClose }: IntelligentSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock de produtos populares e resultados de busca
  const allProducts: SearchResult[] = [
    { id: 1, name: "Regata Premium Masculina", category: "regata", price: 89.90, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop", isPopular: true },
    { id: 2, name: "Camiseta Compress Pro", category: "camiseta", price: 129.90, image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop", isPopular: true },
    { id: 3, name: "Short Performance Elite", category: "shorts", price: 79.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop" },
    { id: 4, name: "Legging High Tech", category: "legging", price: 149.90, image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop", isPopular: true },
    { id: 5, name: "Top Fitness Feminino", category: "top", price: 69.90, image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=500&fit=crop" },
    { id: 6, name: "Agasalho Elite Pro", category: "agasalho", price: 249.90, image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop" }
  ];

  const popularSearches = ["regata", "camiseta", "shorts", "legging", "agasalho"];

  useEffect(() => {
    if (searchQuery.length === 0) {
      setResults(allProducts.filter(p => p.isPopular).slice(0, 4));
    } else {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    }
  }, [searchQuery]);

  const handleSearchSelect = (productId: number) => {
    onClose();
    setSearchQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <Command className="rounded-lg border-none">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Busque por produtos, categorias..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <CommandList className="max-h-80">
            <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
            
            {searchQuery.length === 0 && (
              <>
                <CommandGroup heading="Buscas Populares">
                  {popularSearches.map((search) => (
                    <CommandItem
                      key={search}
                      onSelect={() => setSearchQuery(search)}
                      className="flex items-center gap-2"
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span className="capitalize">{search}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandGroup heading="Produtos Populares">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/produto/${product.id}`}
                      onClick={() => handleSearchSelect(product.id)}
                    >
                      <CommandItem className="flex items-center gap-3 p-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                        {product.isPopular && (
                          <Badge variant="secondary" className="text-xs">Popular</Badge>
                        )}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
              </>
            )}
            
            {searchQuery.length > 0 && (
              <CommandGroup heading="Resultados">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/produto/${product.id}`}
                    onClick={() => handleSearchSelect(product.id)}
                  >
                    <CommandItem className="flex items-center gap-3 p-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                      </div>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default IntelligentSearch;
