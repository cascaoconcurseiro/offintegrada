
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductRowListItem from './ProductRowListItem';
import type { Product } from '@/types/product';

interface ProductListViewProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
  onDuplicateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductListView: React.FC<ProductListViewProps> = ({
  products,
  onEditProduct,
  onDuplicateProduct,
  onDeleteProduct,
}) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-4">Produto</th>
                <th className="text-left p-4">SKU</th>
                <th className="text-left p-4">Preço</th>
                <th className="text-left p-4">Estoque</th>
                <th className="text-left p-4">Vendas</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductRowListItem
                  key={product.id}
                  product={product}
                  onEditProduct={onEditProduct}
                  onDuplicateProduct={onDuplicateProduct}
                  onDeleteProduct={onDeleteProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListView;
