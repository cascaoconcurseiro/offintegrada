
import React from 'react';
import type { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Eye, ShoppingCart, TrendingUp } from 'lucide-react';

interface ProductFormAnalyticsTabProps {
  selectedProduct: Product | null;
  // Add specific form field states and handlers as props
}

const ProductFormAnalyticsTab: React.FC<ProductFormAnalyticsTabProps> = ({ selectedProduct }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{selectedProduct?.reviews || 'N/A'}</p>
            <p className="text-sm text-gray-600">Visualizações</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{selectedProduct?.sales || 'N/A'}</p>
            <p className="text-sm text-gray-600">Vendas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">N/A</p> {/* Needs calculation */}
            <p className="text-sm text-gray-600">Conversão</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="font-medium mb-4">Tracking Personalizado</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-2">Google Analytics Event</label>
            <Input placeholder="product_view_custom" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Facebook Pixel Event</label>
            <Input placeholder="ViewContent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormAnalyticsTab;
