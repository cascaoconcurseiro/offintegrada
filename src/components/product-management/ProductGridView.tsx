
import React from 'react';
import ProductCardGridItem from './ProductCardGridItem';
import type { Product } from '@/types/product';

interface ProductGridViewProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
  onDuplicateProduct: (product: Product) => void;
  onToggleFeatured: (productId: number) => void;
  onToggleStatus: (productId: number) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductGridView: React.FC<ProductGridViewProps> = ({
  products,
  onEditProduct,
  onDuplicateProduct,
  onToggleFeatured,
  onToggleStatus,
  onDeleteProduct,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCardGridItem
          key={product.id}
          product={product}
          onEditProduct={onEditProduct}
          onDuplicateProduct={onDuplicateProduct}
          onToggleFeatured={onToggleFeatured}
          onToggleStatus={onToggleStatus}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductGridView;
