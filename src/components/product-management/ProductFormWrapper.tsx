
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Product } from '@/types/product'; // Removed ProductVariant as it's used within ProductFormVariantsTab
import ProductFormBasicTab from './ProductFormBasicTab';
import ProductFormMediaTab from './ProductFormMediaTab';
import ProductFormVariantsTab from './ProductFormVariantsTab';
import ProductFormSeoTab from './ProductFormSeoTab';
import ProductFormShippingTab from './ProductFormShippingTab';
import ProductFormAnalyticsTab from './ProductFormAnalyticsTab';

interface ProductFormWrapperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: Product | null;
  onSubmit: () => void;
}

const ProductFormWrapper: React.FC<ProductFormWrapperProps> = ({
  open,
  onOpenChange,
  selectedProduct,
  onSubmit,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Card className="fixed inset-0 z-50 bg-white overflow-y-auto p-4 md:p-6 lg:p-8">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="font-oswald">
            {selectedProduct ? 'Editar Produto' : 'Novo Produto'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="media">Mídia</TabsTrigger>
            <TabsTrigger value="variants">Variações</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="shipping">Envio</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <ProductFormBasicTab selectedProduct={selectedProduct} />
          </TabsContent>

          <TabsContent value="media">
            {/* Assuming selectedProduct might be needed here eventually or passed down if forms are connected */}
            <ProductFormMediaTab /* selectedProduct={selectedProduct} */ />
          </TabsContent>
          
          <TabsContent value="variants">
            <ProductFormVariantsTab selectedProduct={selectedProduct} />
          </TabsContent>

          <TabsContent value="seo">
            <ProductFormSeoTab selectedProduct={selectedProduct} />
          </TabsContent>

          <TabsContent value="shipping">
            {/* Assuming selectedProduct might be needed here eventually or passed down if forms are connected */}
            <ProductFormShippingTab /* selectedProduct={selectedProduct} */ />
          </TabsContent>

          <TabsContent value="analytics">
            <ProductFormAnalyticsTab selectedProduct={selectedProduct} />
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 mt-8">
          <Button className="flex-1" onClick={onSubmit}>
            {selectedProduct ? 'Atualizar Produto' : 'Criar Produto'}
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFormWrapper;
