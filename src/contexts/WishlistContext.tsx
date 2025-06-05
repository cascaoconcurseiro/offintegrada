
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  getItemCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setItems(prev => {
      if (prev.some(existing => existing.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: number) => {
    return items.some(item => item.id === id);
  };

  const getItemCount = () => items.length;

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getItemCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
