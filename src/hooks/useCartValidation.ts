
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface SizeAvailability {
  [productId: number]: {
    [size: string]: number;
  };
}

export const useCartValidation = () => {
  const { items, updateQuantity, removeItem } = useCart();
  const [isValidating, setIsValidating] = useState(false);

  // Mock data - em um app real viria da API
  const sizeAvailability: SizeAvailability = {
    1: { "P": 5, "M": 10, "G": 8, "GG": 3 },
    2: { "P": 2, "M": 5, "G": 12, "GG": 0 },
    3: { "P": 8, "M": 15, "G": 6, "GG": 4 },
    4: { "P": 10, "M": 8, "G": 5, "GG": 2 }
  };

  const validateCartItems = async () => {
    setIsValidating(true);
    
    try {
      for (const item of items) {
        const availableStock = sizeAvailability[item.id]?.[item.size] || 0;
        
        if (availableStock === 0) {
          toast({
            title: "Produto indisponível",
            description: `${item.name} (${item.size}) está fora de estoque e foi removido do carrinho.`,
            variant: "destructive"
          });
          removeItem(item.id, item.size, item.color);
        } else if (item.quantity > availableStock) {
          toast({
            title: "Quantidade ajustada",
            description: `${item.name} (${item.size}) teve a quantidade reduzida para ${availableStock} (estoque disponível).`,
          });
          updateQuantity(item.id, item.size, item.color, availableStock);
        }
      }
    } catch (error) {
      toast({
        title: "Erro na validação",
        description: "Não foi possível validar o carrinho. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsValidating(false);
    }
  };

  const getAvailableStock = (productId: number, size: string): number => {
    return sizeAvailability[productId]?.[size] || 0;
  };

  const isItemInStock = (productId: number, size: string, quantity: number = 1): boolean => {
    const available = getAvailableStock(productId, size);
    return available >= quantity;
  };

  return {
    validateCartItems,
    getAvailableStock,
    isItemInStock,
    isValidating
  };
};
