
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface AbandonedCartData {
  items: any[];
  timestamp: number;
  userId?: string;
  sessionId: string;
}

export const useAbandonedCart = () => {
  const { items, getTotal } = useCart();
  const [isTracking, setIsTracking] = useState(true);
  const [abandonedCartId, setAbandonedCartId] = useState<string | null>(null);

  // Detectar quando o usuário está prestes a sair
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (items.length > 0 && isTracking) {
        // Salvar carrinho abandonado
        const abandonedCart: AbandonedCartData = {
          items,
          timestamp: Date.now(),
          sessionId: generateSessionId(),
        };
        
        localStorage.setItem('abandonedCart', JSON.stringify(abandonedCart));
        
        // Mostrar mensagem de confirmação
        e.preventDefault();
        e.returnValue = 'Você tem itens no seu carrinho. Tem certeza que deseja sair?';
        return e.returnValue;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && items.length > 0 && isTracking) {
        // Usuário moveu o mouse para fora da tela (possível exit intent)
        showExitIntentModal();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [items, isTracking]);

  // Verificar carrinho abandonado ao carregar a página
  useEffect(() => {
    const savedCart = localStorage.getItem('abandonedCart');
    if (savedCart) {
      const cartData: AbandonedCartData = JSON.parse(savedCart);
      const hoursSinceAbandoned = (Date.now() - cartData.timestamp) / (1000 * 60 * 60);
      
      if (hoursSinceAbandoned < 24 && cartData.items.length > 0) {
        showRecoveryModal(cartData);
      }
    }
  }, []);

  // Timer para detectar inatividade
  useEffect(() => {
    if (items.length === 0) return;

    const inactivityTimer = setTimeout(() => {
      if (items.length > 0) {
        showInactivityPrompt();
      }
    }, 5 * 60 * 1000); // 5 minutos de inatividade

    return () => clearTimeout(inactivityTimer);
  }, [items]);

  const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const showExitIntentModal = () => {
    const discount = calculateExitIntentDiscount();
    toast({
      title: "🎯 Espere! Oferta Especial",
      description: `Finalize sua compra agora e ganhe ${discount}% de desconto + frete grátis!`,
      duration: 10000,
    });
  };

  const showRecoveryModal = (cartData: AbandonedCartData) => {
    const total = cartData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    toast({
      title: "🛒 Você esqueceu itens no seu carrinho!",
      description: `${cartData.items.length} itens esperando por você (R$ ${total.toFixed(2).replace('.', ',')})`,
      duration: 15000,
    });
  };

  const showInactivityPrompt = () => {
    toast({
      title: "⏰ Não perca seus itens!",
      description: "Finalize sua compra antes que os produtos saiam de estoque.",
      duration: 8000,
    });
  };

  const calculateExitIntentDiscount = () => {
    const total = getTotal();
    if (total > 200) return 15;
    if (total > 100) return 10;
    return 5;
  };

  const markAsConverted = () => {
    setIsTracking(false);
    localStorage.removeItem('abandonedCart');
  };

  const sendAbandonedCartEmail = (email: string) => {
    // Em um app real, isso enviaria um email via API
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
