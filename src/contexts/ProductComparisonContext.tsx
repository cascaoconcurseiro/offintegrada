
import React, { createContext, useContext, useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  composition: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  sale?: boolean;
  category: string;
  gender: string;
}

interface ProductComparisonContextType {
  comparisonProducts: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: number) => void;
  clearComparison: () => void;
  isInComparison: (productId: number) => boolean;
  isComparisonOpen: boolean;
  setIsComparisonOpen: (open: boolean) => void;
}

const ProductComparisonContext = createContext<ProductComparisonContextType | undefined>(undefined);

export const ProductComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const addToComparison = (product: Product) => {
    if (comparisonProducts.length >= 3) {
      toast({
        title: "Limite atingido",
        description: "Você pode comparar até 3 produtos. Remova um produto para adicionar outro.",
        variant: "destructive"
      });
      return;
    }

    if (isInComparison(product.id)) {
      toast({
        title: "Produto já adicionado",
        description: "Este produto já está na comparação.",
        variant: "destructive"
      });
      return;
    }

    setComparisonProducts(prev => [...prev, product]);
    toast({
      title: "Produto adicionado à comparação",
      description: `${product.name} foi adicionado à comparação.`,
    });
  };

  const removeFromComparison = (productId: number) => {
    setComparisonProducts(prev => prev.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setComparisonProducts([]);
    setIsComparisonOpen(false);
  };

  const isInComparison = (productId: number) => {
    return comparisonProducts.some(p => p.id === productId);
  };

  return (
    <ProductComparisonContext.Provider value={{
      comparisonProducts,
      addToComparison,
      removeFromComparison,
      clearComparison,
      isInComparison,
      isComparisonOpen,
      setIsComparisonOpen
    }}>
      {children}
    </ProductComparisonContext.Provider>
  );
};

export const useProductComparison = () => {
  const context = useContext(ProductComparisonContext);
  if (context === undefined) {
    throw new Error('useProductComparison must be used within a ProductComparisonProvider');
  }
  return context;
};
