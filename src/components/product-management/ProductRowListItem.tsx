
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Edit, Copy, Trash2, Star } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductRowListItemProps {
  product: Product;
  onEditProduct: (product: Product) => void;
  onDuplicateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductRowListItem: React.FC<ProductRowListItemProps> = ({
  product,
  onEditProduct,
  onDuplicateProduct,
  onDeleteProduct,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
            {/* TODO: Display actual product image */}
            <Package className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
        </div>
      </td>
      <td className="p-4 font-mono text-sm">{product.sku}</td>
      <td className="p-4">
        <p className="font-bold text-green-600">R$ {product.price.toFixed(2)}</p>
        <p className="text-xs text-gray-600">Custo: R$ {product.cost.toFixed(2)}</p>
      </td>
      <td className="p-4">
        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${
          product.stock < 10 ? 'bg-red-100 text-red-800' : 
          product.stock < 20 ? 'bg-yellow-100 text-yellow-800' : 
          'bg-green-100 text-green-800'
        }`}>
          {product.stock}
        </div>
      </td>
      <td className="p-4">
        <p className="font-medium">{product.sales}</p>
        <p className="text-xs text-gray-600">{product.revenue}</p>
      </td>
      <td className="p-4">
        <div className="flex gap-1">
          <Badge className={product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
            {product.status === 'active' ? 'Ativo' : 'Inativo'}
          </Badge>
          {product.featured && (
            <Badge className="bg-yellow-100 text-yellow-800">
              <Star className="w-3 h-3" />
            </Badge>
          )}
        </div>
      </td>
      <td className="p-4">
        <div className="flex gap-1">
          <Button size="sm" variant="outline" onClick={() => onEditProduct(product)}>
            <Edit className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={() => onDuplicateProduct(product)}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="destructive" onClick={() => onDeleteProduct(product.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRowListItem;
