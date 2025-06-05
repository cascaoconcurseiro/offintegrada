
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const CartModal = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={closeCart} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-oswald font-medium uppercase tracking-wider">
              Carrinho ({items.length})
            </h2>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 font-roboto">Seu carrinho está vazio</p>
                <Button 
                  onClick={closeCart}
                  className="mt-4 bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
                >
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded filter grayscale"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-roboto font-medium text-sm uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-roboto">
                        Tamanho: {item.size} | Cor: {item.color}
                      </p>
                      <p className="font-roboto font-bold text-sm mt-1">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-roboto">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-red-600 hover:text-red-800 font-roboto text-xs uppercase"
                        >
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-oswald font-medium uppercase tracking-wider">Total:</span>
                <span className="font-roboto font-bold text-lg">
                  R$ {getTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              <Link to="/checkout" onClick={closeCart}>
                <Button className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider">
                  Finalizar Compra
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
