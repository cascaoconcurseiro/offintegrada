
import React from 'react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
// import type { Product } from '@/types/product'; // If needed for props

interface ProductFormShippingTabProps {
  // selectedProduct: Product | null;
  // Add specific form field states and handlers as props
}

const ProductFormShippingTab: React.FC<ProductFormShippingTabProps> = (/*{ selectedProduct }*/) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Peso (kg)</label>
          <Input type="number" step="0.01" placeholder="0.2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Comprimento (cm)</label>
          <Input type="number" placeholder="30" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Largura (cm)</label>
          <Input type="number" placeholder="20" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Altura (cm)</label>
          <Input type="number" placeholder="5" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Classe de Envio</label>
          <select className="w-full p-2 border rounded">
            <option value="standard">Padrão</option>
            <option value="express">Expresso</option>
            <option value="fragile">Frágil</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>Produto Frágil</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>Frete Grátis</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>Entrega Expressa Disponível</span>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default ProductFormShippingTab;
