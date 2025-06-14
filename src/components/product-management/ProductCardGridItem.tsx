
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Edit, Copy, Star, Eye, Trash2 } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCardGridItemProps {
  product: Product;
  onEditProduct: (product: Product) => void;
  onDuplicateProduct: (product: Product) => void;
  onToggleFeatured: (productId: number) => void;
  onToggleStatus: (productId: number) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductCardGridItem: React.FC<ProductCardGridItemProps> = ({
  product,
  onEditProduct,
  onDuplicateProduct,
  onToggleFeatured,
  onToggleStatus,
  onDeleteProduct,
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          {/* TODO: Display actual product image */}
          <Package className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          {product.featured && (
            <Badge className="bg-yellow-100 text-yellow-800">
              <Star className="w-3 h-3 mr-1" />
              Destaque
            </Badge>
          )}
          <Badge className={product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
            {product.status === 'active' ? 'Ativo' : 'Inativo'}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.sku}</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold text-green-600">R$ {product.price.toFixed(2)}</p>
              <p className="text-xs text-gray-600">Custo: R$ {product.cost.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Estoque: {product.stock}</p>
              <p className="text-xs text-gray-600">{product.variants.length} variações</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{product.rating}</span>
              <span className="text-gray-600">({product.reviews})</span>
            </div>
            <div>
              <span className="font-medium">{product.sales} vendas</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEditProduct(product)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => onDuplicateProduct(product)}>
              <Copy className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => onToggleFeatured(product.id)}>
              <Star className={`w-4 h-4 ${product.featured ? 'fill-current text-yellow-500' : ''}`} />
            </Button>
            <Button size="sm" variant="outline" onClick={() => onToggleStatus(product.id)}>
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="destructive" onClick={() => onDeleteProduct(product.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardGridItem;
