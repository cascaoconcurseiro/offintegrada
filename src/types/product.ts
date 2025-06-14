
import type { LucideIcon } from 'lucide-react';

export interface ProductVariant {
  size: string;
  color: string;
  stock: number;
  sku: string;
}

export interface ProductSeo {
  title: string;
  description: string;
  keywords: string;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  cost: number;
  stock: number;
  category: string;
  brand: string;
  status: 'active' | 'inactive';
  featured: boolean;
  sales: number;
  revenue: string; // Consider making this number for calculations
  rating: number;
  reviews: number;
  images: string[];
  variants: ProductVariant[];
  seo: ProductSeo;
  created: string;
  updated: string;
}

export interface ProductMetricData {
  name: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export const categories = ['Regatas', 'Camisetas', 'Shorts', 'Jaquetas', 'Acessórios'];
export const brands = ['OFFSEASON', 'Nike', 'Adidas', 'Puma'];
export const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG'];
export const colors = ['Preto', 'Branco', 'Cinza', 'Azul', 'Verde', 'Vermelho', 'Rosa', 'Amarelo'];

