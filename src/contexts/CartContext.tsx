
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(
        item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (id: number, size: string, color: string) => {
    setItems(prev => prev.filter(
      item => !(item.id === id && item.size === size && item.color === color)
    ));
  };

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, color);
      return;
    }
    
    setItems(prev => prev.map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getTotal = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getItemCount = () => items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      getTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
