
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface AbandonedCartData {
  items: any[];
  timestamp: number;
  userId?: string;
  sessionId: string;
}

export const useAbandonedCart = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [abandonedCartId, setAbandonedCartId] = useState<string | null>(null);

  // Verificar carrinho abandonado ao carregar a página
  useEffect(() => {
    const savedCart = localStorage.getItem('abandonedCart');
    if (savedCart) {
      try {
        const cartData: AbandonedCartData = JSON.parse(savedCart);
        const hoursSinceAbandoned = (Date.now() - cartData.timestamp) / (1000 * 60 * 60);
        
        if (hoursSinceAbandoned < 24 && cartData.items.length > 0) {
          showRecoveryModal(cartData);
        }
      } catch (error) {
        console.error('Erro ao verificar carrinho abandonado:', error);
      }
    }
  }, []);

  const showRecoveryModal = (cartData: AbandonedCartData) => {
    const total = cartData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    toast({
      title: "🛒 Você esqueceu itens no seu carrinho!",
      description: `${cartData.items.length} itens esperando por você (R$ ${total.toFixed(2).replace('.', ',')})`,
      duration: 15000,
    });
  };

  const calculateExitIntentDiscount = (total: number) => {
    if (total > 200) return 15;
    if (total > 100) return 10;
    return 5;
  };

  const markAsConverted = () => {
    setIsTracking(false);
    localStorage.removeItem('abandonedCart');
  };

  const sendAbandonedCartEmail = (email: string) => {
    console.log('Sending abandoned cart email to:', email);
    return Promise.resolve();
  };

  return {
    isTracking,
    abandonedCartId,
    markAsConverted,
    sendAbandonedCartEmail,
    calculateExitIntentDiscount
  };
};
