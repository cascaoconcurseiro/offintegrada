
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Percent, Tag, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minValue?: number;
  description: string;
}

interface CouponSystemProps {
  onApplyCoupon: (coupon: Coupon) => void;
  appliedCoupon?: Coupon;
  onRemoveCoupon: () => void;
}

const CouponSystem = ({ onApplyCoupon, appliedCoupon, onRemoveCoupon }: CouponSystemProps) => {
  const [couponCode, setCouponCode] = useState('');

  // Mock cupons válidos
  const validCoupons: Coupon[] = [
    { code: 'PRIMEIRA10', discount: 10, type: 'percentage', description: '10% de desconto na primeira compra' },
    { code: 'FRETE20', discount: 20, type: 'fixed', minValue: 100, description: 'R$ 20 de desconto no frete' },
    { code: 'TREINO15', discount: 15, type: 'percentage', minValue: 150, description: '15% de desconto em compras acima de R$ 150' }
  ];

  const handleApplyCoupon = () => {
    const foundCoupon = validCoupons.find(
      coupon => coupon.code.toLowerCase() === couponCode.toLowerCase()
    );

    if (foundCoupon) {
      onApplyCoupon(foundCoupon);
      setCouponCode('');
      toast({
        title: "Cupom aplicado!",
        description: foundCoupon.description,
      });
    } else {
      toast({
        title: "Cupom inválido",
        description: "O código inserido não é válido ou expirou.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Digite seu cupom"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleApplyCoupon} variant="outline">
          <Tag className="w-4 h-4 mr-2" />
          Aplicar
        </Button>
      </div>

      {appliedCoupon && (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
          <div className="flex items-center gap-2">
            <Percent className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              {appliedCoupon.code} - {appliedCoupon.description}
            </span>
          </div>
          <Button size="sm" variant="ghost" onClick={onRemoveCoupon}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      <div className="text-xs text-gray-500">
        <p>Cupons disponíveis: PRIMEIRA10, FRETE20, TREINO15</p>
      </div>
    </div>
  );
};

export default CouponSystem;
