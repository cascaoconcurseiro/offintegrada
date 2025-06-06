
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { useCoupons } from '@/hooks/useCoupons';
import { Truck, Shield, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { items, getTotal, getItemCount } = useCart();
  const { appliedCoupon, calculateDiscount } = useCoupons();
  
  const subtotal = getTotal();
  const discount = calculateDiscount(subtotal);
  const shipping = subtotal >= 299 ? 0 : 19.90;
  const total = subtotal - discount + shipping;

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 font-roboto mb-4">Seu carrinho está vazio</p>
        <Button asChild className="bg-black hover:bg-gray-800 font-roboto">
          <Link to="/loja">Continuar Comprando</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cart Items Summary */}
      <div className="space-y-4">
        <h3 className="font-oswald font-medium text-lg uppercase tracking-wider">
          Resumo do Pedido
        </h3>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="font-roboto text-sm font-medium truncate">{item.name}</p>
                <p className="text-xs text-gray-500">{item.size} • {item.color}</p>
                <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-roboto font-medium text-sm">
                  R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Order Summary */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-roboto text-sm">Subtotal ({getItemCount()} itens)</span>
          <span className="font-roboto font-medium">
            R$ {subtotal.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {appliedCoupon && (
          <div className="flex justify-between items-center text-green-600">
            <span className="font-roboto text-sm flex items-center gap-1">
              <Tag className="w-4 h-4" />
              Desconto ({appliedCoupon.code})
            </span>
            <span className="font-roboto font-medium">
              -R$ {discount.toFixed(2).replace('.', ',')}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="font-roboto text-sm flex items-center gap-1">
            <Truck className="w-4 h-4" />
            Frete
          </span>
          <span className="font-roboto font-medium">
            {shipping === 0 ? (
              <Badge className="bg-green-500 text-white">GRÁTIS</Badge>
            ) : (
              `R$ ${shipping.toFixed(2).replace('.', ',')}`
            )}
          </span>
        </div>

        {subtotal < 299 && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-600 font-roboto">
              Faltam R$ {(299 - subtotal).toFixed(2).replace('.', ',')} para frete grátis!
            </p>
          </div>
        )}

        <Separator />

        <div className="flex justify-between items-center">
          <span className="font-oswald font-medium text-lg uppercase tracking-wider">
            Total
          </span>
          <span className="font-oswald font-bold text-xl">
            R$ {total.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      {/* Security Badge */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <Shield className="w-5 h-5" />
          <span className="font-roboto font-medium text-sm">Compra 100% Segura</span>
        </div>
        <p className="text-xs text-gray-600 font-roboto">
          Seus dados estão protegidos com certificado SSL
        </p>
      </div>

      {/* Checkout Button */}
      <Button 
        asChild
        size="lg" 
        className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
      >
        <Link to="/checkout">
          Finalizar Compra
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </Button>

      {/* Continue Shopping */}
      <Button 
        asChild
        variant="outline" 
        size="lg" 
        className="w-full font-roboto font-medium uppercase tracking-wider"
      >
        <Link to="/loja">
          Continuar Comprando
        </Link>
      </Button>
    </div>
  );
};

export default CartSummary;
