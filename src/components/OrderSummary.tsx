
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useCoupons } from '@/hooks/useCoupons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tag, X, Percent } from 'lucide-react';

const OrderSummary = () => {
  const { items, getTotal } = useCart();
  const { appliedCoupon, validateCoupon, removeCoupon, calculateDiscount, isValidating } = useCoupons();
  const [couponCode, setCouponCode] = useState('');
  
  const subtotal = getTotal();
  const shipping = 15.90;
  const discount = calculateDiscount(subtotal);
  const finalTotal = subtotal + shipping - discount;

  const handleApplyCoupon = async () => {
    if (couponCode.trim()) {
      const success = await validateCoupon(couponCode.trim(), subtotal);
      if (success) {
        setCouponCode('');
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-lg backdrop-blur-sm">
      <h3 className="font-oswald text-lg font-medium mb-6 uppercase tracking-wider">
        Resumo do Pedido
      </h3>
      
      {/* Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between">
            <div className="flex-1">
              <p className="font-roboto font-medium text-sm">{item.name}</p>
              <p className="text-xs text-gray-600 font-roboto">
                {item.size} | {item.color} | Qtd: {item.quantity}
              </p>
            </div>
            <p className="font-roboto font-bold text-sm">
              R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
            </p>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="mb-6 space-y-3">
        <h4 className="font-oswald font-medium text-sm uppercase tracking-wider">
          Cupom de Desconto
        </h4>
        
        {!appliedCoupon ? (
          <div className="flex gap-2">
            <Input
              placeholder="Digite seu cupom"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
            />
            <Button 
              onClick={handleApplyCoupon} 
              disabled={!couponCode.trim() || isValidating}
              size="sm"
              className="bg-black hover:bg-gray-800"
            >
              <Tag className="w-4 h-4 mr-1" />
              {isValidating ? 'Validando...' : 'Aplicar'}
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">{appliedCoupon.code}</p>
                <p className="text-xs text-green-600">{appliedCoupon.description}</p>
              </div>
            </div>
            <Button size="sm" variant="ghost" onClick={removeCoupon}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>Cupons disponíveis:</p>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">PRIMEIRA10</Badge>
            <Badge variant="outline" className="text-xs">FRETE20</Badge>
            <Badge variant="outline" className="text-xs">TREINO15</Badge>
          </div>
        </div>
      </div>

      {/* Totals */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between font-roboto text-sm">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between font-roboto text-sm">
          <span>Frete:</span>
          <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between font-roboto text-sm text-green-600">
            <span>Desconto ({appliedCoupon?.code}):</span>
            <span>-R$ {discount.toFixed(2).replace('.', ',')}</span>
          </div>
        )}
        <div className="border-t pt-2 flex justify-between font-oswald font-medium text-lg">
          <span>Total:</span>
          <span className="text-green-600">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      {/* Savings Display */}
      {discount > 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800 font-medium text-center">
            🎉 Você está economizando R$ {discount.toFixed(2).replace('.', ',')}!
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
