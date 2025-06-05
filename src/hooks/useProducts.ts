
import { useState, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  sale?: boolean;
  category: string;
  gender: string;
  rating?: number;
  reviewsCount?: number;
  availableSizes?: Record<string, number>;
}

export const useProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Regata Premium Masculina",
      category: "regata",
      gender: "masculino",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Branco", "Cinza"],
      availableSizes: { "P": 5, "M": 10, "G": 8, "GG": 3 },
      isNew: true,
      sale: true,
      rating: 4.5,
      reviewsCount: 15
    },
    {
      id: 2,
      name: "Camiseta Básica Feminina",
      category: "camiseta",
      gender: "feminino",
      price: 59.90,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Branco", "Preto", "Rosa"],
      availableSizes: { "P": 8, "M": 12, "G": 6, "GG": 4 },
      isNew: false,
      sale: false,
      rating: 4.2,
      reviewsCount: 23
    },
    {
      id: 3,
      name: "Shorts Esportivo Masculino",
      category: "shorts",
      gender: "masculino",
      price: 79.90,
      originalPrice: 99.90,
      image: "https://images.unsplash.com/photo-1506629905607-d405d7d2c0c4?w=400&h=500&fit=crop&crop=center",
      sizes: ["P", "M", "G", "GG"],
      colors: ["Preto", "Azul", "Cinza"],
      availableSizes: { "P": 0, "M": 0, "G": 0, "GG": 0 },
      isNew: false,
      sale: true,
      rating: 4.7,
      reviewsCount: 18
    }
  ]);

  const filterProducts = useMemo(() => {
    return (
      searchTerm: string,
      selectedGender: string,
      selectedCategory: string,
      selectedSizes: string[],
      priceRange: number
    ) => {
      return products.filter(product => {
        const matchesSearch = !searchTerm || 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesGender = selectedGender === 'all' || product.gender === selectedGender;
        
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        const matchesSize = selectedSizes.length === 0 || 
          selectedSizes.some(size => product.sizes.includes(size));
        
        const matchesPrice = product.price <= priceRange;

        return matchesSearch && matchesGender && matchesCategory && matchesSize && matchesPrice;
      });
    };
  }, [products]);

  const sortProducts = useMemo(() => {
    return (products: Product[], sortBy: string) => {
      const sorted = [...products];
      
      switch (sortBy) {
        case 'price-asc':
          return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
          return sorted.sort((a, b) => b.price - a.price);
        case 'name-asc':
          return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating-desc':
          return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'newest':
          return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        default:
          return sorted;
      }
    };
  }, []);

  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  return {
    products,
    filterProducts,
    sortProducts,
    getProductById
  };
};
