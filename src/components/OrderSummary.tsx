
import React from 'react';
import { useCart } from '@/contexts/CartContext';

const OrderSummary = () => {
  const { items, getTotal } = useCart();
  
  const shipping = 15.90;
  const discount = 0;
  const finalTotal = getTotal() + shipping - discount;

  return (
    <div className="bg-gray-50 p-6 rounded-lg border">
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

      {/* Totals */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between font-roboto text-sm">
          <span>Subtotal:</span>
          <span>R$ {getTotal().toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between font-roboto text-sm">
          <span>Frete:</span>
          <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between font-roboto text-sm text-green-600">
            <span>Desconto:</span>
            <span>-R$ {discount.toFixed(2).replace('.', ',')}</span>
          </div>
        )}
        <div className="border-t pt-2 flex justify-between font-oswald font-medium text-lg">
          <span>Total:</span>
          <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      {/* Coupon */}
      <div className="mt-6">
        <label className="block font-roboto text-sm font-medium mb-2">
          Cupom de Desconto
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite seu cupom"
            className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm font-roboto"
          />
          <button className="px-4 py-2 bg-black text-white rounded font-roboto text-sm uppercase tracking-wider hover:bg-gray-800">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
