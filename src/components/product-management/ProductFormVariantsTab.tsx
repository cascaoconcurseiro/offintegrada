
import React from 'react';
import type { Product, ProductVariant } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { sizes, colors } from '@/types/product';

interface ProductFormVariantsTabProps {
  selectedProduct: Product | null;
  // Add specific form field states and handlers as props
}

const ProductFormVariantsTab: React.FC<ProductFormVariantsTabProps> = ({ selectedProduct }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Variações do Produto</h3>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Nova Variação
        </Button>
      </div>
      <div className="space-y-4">
        {(selectedProduct?.variants?.length ? selectedProduct.variants : [ { size: '', color: '', stock: 0, sku: '' } as ProductVariant ]).map((variant, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Tamanho</label>
                  <select className="w-full p-2 border rounded text-sm" defaultValue={variant.size}>
                    <option value="">Selecione</option>
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Cor</label>
                  <select className="w-full p-2 border rounded text-sm" defaultValue={variant.color}>
                    <option value="">Selecione</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">SKU</label>
                  <Input placeholder="REG-001-M-PR" className="text-sm" defaultValue={variant.sku} />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Preço</label>
                  <Input type="number" step="0.01" placeholder="89.90" className="text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Estoque</label>
                  <Input type="number" placeholder="10" className="text-sm" defaultValue={variant.stock} />
                </div>
                <div className="flex gap-1 self-end">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductFormVariantsTab;
