
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minValue?: number;
  maxDiscount?: number;
  description: string;
  expiryDate?: string;
  usageLimit?: number;
  usedCount?: number;
  isActive: boolean;
}

export const useCoupons = () => {
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  // Mock cupons válidos
  const availableCoupons: Coupon[] = [
    {
      code: 'PRIMEIRA10',
      discount: 10,
      type: 'percentage',
      description: '10% de desconto na primeira compra',
      isActive: true,
      usageLimit: 1
    },
    {
      code: 'FRETE20',
      discount: 20,
      type: 'fixed',
      minValue: 100,
      description: 'R$ 20 de desconto no frete',
      isActive: true
    },
    {
      code: 'TREINO15',
      discount: 15,
      type: 'percentage',
      minValue: 150,
      maxDiscount: 50,
      description: '15% de desconto em compras acima de R$ 150',
      isActive: true
    },
    {
      code: 'VIP25',
      discount: 25,
      type: 'percentage',
      minValue: 300,
      maxDiscount: 100,
      description: '25% de desconto para clientes VIP',
      isActive: true
    }
  ];

  const validateCoupon = async (couponCode: string, cartTotal: number): Promise<boolean> => {
    setIsValidating(true);
    
    try {
      const coupon = availableCoupons.find(
        c => c.code.toLowerCase() === couponCode.toLowerCase() && c.isActive
      );

      if (!coupon) {
        toast({
          title: "Cupom inválido",
          description: "O código inserido não é válido ou expirou.",
          variant: "destructive"
        });
        return false;
      }

      if (coupon.minValue && cartTotal < coupon.minValue) {
        toast({
          title: "Valor mínimo não atingido",
          description: `Este cupom requer um pedido mínimo de R$ ${coupon.minValue.toFixed(2).replace('.', ',')}.`,
          variant: "destructive"
        });
        return false;
      }

      if (coupon.usageLimit && (coupon.usedCount || 0) >= coupon.usageLimit) {
        toast({
          title: "Cupom esgotado",
          description: "Este cupom atingiu o limite de uso.",
          variant: "destructive"
        });
        return false;
      }

      setAppliedCoupon(coupon);
      toast({
        title: "Cupom aplicado!",
        description: coupon.description,
      });
      return true;
    } catch (error) {
      toast({
        title: "Erro ao validar cupom",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    toast({
      title: "Cupom removido",
      description: "O desconto foi removido do seu pedido.",
    });
  };

  const calculateDiscount = (cartTotal: number): number => {
    if (!appliedCoupon) return 0;

    if (appliedCoupon.type === 'fixed') {
      return Math.min(appliedCoupon.discount, cartTotal);
    } else {
      const discountAmount = (cartTotal * appliedCoupon.discount) / 100;
      return appliedCoupon.maxDiscount 
        ? Math.min(discountAmount, appliedCoupon.maxDiscount)
        : discountAmount;
    }
  };

  return {
    appliedCoupon,
    availableCoupons: availableCoupons.filter(c => c.isActive),
    validateCoupon,
    removeCoupon,
    calculateDiscount,
    isValidating
  };
};
