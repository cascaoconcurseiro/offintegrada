
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import type { Product } from '@/types/product';

import ProductManagementHeader from './product-management/ProductManagementHeader';
import ProductMetrics from './product-management/ProductMetrics';
import ProductFilters from './product-management/ProductFilters';
import ProductGridView from './product-management/ProductGridView';
import ProductListView from './product-management/ProductListView';
import ProductFormWrapper from './product-management/ProductFormWrapper';


const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Regata Premium Masculina',
    sku: 'REG-001-M',
    price: 89.90,
    cost: 35.50,
    stock: 45,
    category: 'Regatas',
    brand: 'OFFSEASON',
    status: 'active',
    featured: true,
    sales: 127,
    revenue: 'R$ 11.428',
    rating: 4.8,
    reviews: 23,
    images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
    variants: [
      { size: 'P', color: 'Preto', stock: 12, sku: 'REG-001-P-PR' },
      { size: 'M', color: 'Preto', stock: 15, sku: 'REG-001-M-PR' },
      { size: 'G', color: 'Preto', stock: 18, sku: 'REG-001-G-PR' }
    ],
    seo: {
      title: 'Regata Premium Masculina - OFFSEASON',
      description: 'Regata premium de alta qualidade...',
      keywords: 'regata, masculina, premium, fitness'
    },
    created: '2024-01-15',
    updated: '2024-06-01'
  },
  {
    id: 2,
    name: 'Camiseta Feminina Básica',
    sku: 'CAM-002-F',
    price: 69.90,
    cost: 28.50,
    stock: 32,
    category: 'Camisetas',
    brand: 'OFFSEASON',
    status: 'active',
    featured: false,
    sales: 89,
    revenue: 'R$ 6.221',
    rating: 4.6,
    reviews: 18,
    images: ['img4.jpg', 'img5.jpg'],
    variants: [
      { size: 'P', color: 'Branco', stock: 10, sku: 'CAM-002-P-BR' },
      { size: 'M', color: 'Branco', stock: 12, sku: 'CAM-002-M-BR' },
      { size: 'G', color: 'Rosa', stock: 10, sku: 'CAM-002-G-RS' }
    ],
    seo: {
      title: 'Camiseta Feminina Básica - OFFSEASON',
      description: 'Camiseta feminina básica e confortável...',
      keywords: 'camiseta, feminina, básica, confort'
    },
    created: '2024-02-10',
    updated: '2024-05-28'
  }
];

const ProductManagement = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setShowCreateForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowCreateForm(true);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Produto excluído",
      description: "O produto foi removido com sucesso.",
    });
  };

  const handleDuplicateProduct = (product: Product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation for example
      name: `${product.name} (Cópia)`,
      sku: `${product.sku}-COPY`
    };
    setProducts([...products, newProduct]);
    toast({
      title: "Produto duplicado",
      description: "Uma cópia do produto foi criada.",
    });
  };

  const toggleProductStatus = (productId: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' }
        : p
    ));
    toast({
      title: "Status do produto atualizado",
      description: "O status do produto foi alterado.",
    });
  };

  const toggleFeatured = (productId: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, featured: !p.featured }
        : p
    ));
    toast({
      title: "Destaque do produto atualizado",
      description: "O produto foi marcado/desmarcado como destaque.",
    });
  };

  const handleImportCSV = () => {
    toast({
      title: "Importar CSV (Simulação)",
      description: "Funcionalidade de importação de CSV ainda não implementada.",
    });
  };

  const handleExportProducts = () => {
    toast({
      title: "Exportar Produtos (Simulação)",
      description: "Funcionalidade de exportação de produtos ainda não implementada.",
    });
  };

  const handleProductFormSubmit = () => {
    // Here you would handle the actual form submission logic
    // For now, it's a simulation
    setShowCreateForm(false);
    toast({
      title: selectedProduct ? "Produto Atualizado (Simulação)" : "Produto Criado (Simulação)",
      description: `O produto foi ${selectedProduct ? 'atualizado' : 'criado'} com sucesso.`,
    });
    setSelectedProduct(null); // Reset selected product
  };

  return (
    <div className="space-y-6">
      <ProductManagementHeader
        onImportCSV={handleImportCSV}
        onExportProducts={handleExportProducts}
        onCreateProduct={handleCreateProduct}
      />

      <ProductMetrics products={products} />

      <ProductFilters
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        // Pass other filter handlers here
      />

      {viewMode === 'grid' ? (
        <ProductGridView
          products={products}
          onEditProduct={handleEditProduct}
          onDuplicateProduct={handleDuplicateProduct}
          onToggleFeatured={toggleFeatured}
          onToggleStatus={toggleProductStatus}
          onDeleteProduct={handleDeleteProduct}
        />
      ) : (
        <ProductListView
          products={products}
          onEditProduct={handleEditProduct}
          onDuplicateProduct={handleDuplicateProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}

      <ProductFormWrapper
        open={showCreateForm}
        onOpenChange={setShowCreateForm}
        selectedProduct={selectedProduct}
        onSubmit={handleProductFormSubmit}
      />
    </div>
  );
};

export default ProductManagement;
