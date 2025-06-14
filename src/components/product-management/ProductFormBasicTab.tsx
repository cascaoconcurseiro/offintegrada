
import React from 'react';
import type { Product } from '@/types/product';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { categories, brands } from '@/types/product';

interface ProductFormBasicTabProps {
  selectedProduct: Product | null;
  // Add specific form field states and handlers as props if managed outside
}

const ProductFormBasicTab: React.FC<ProductFormBasicTabProps> = ({ selectedProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nome do Produto *</label>
          <Input placeholder="Ex: Regata Premium Masculina" defaultValue={selectedProduct?.name} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Descrição Curta</label>
          <Input placeholder="Descrição que aparece na listagem" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Descrição Completa</label>
          <textarea 
            className="w-full p-3 border rounded h-32"
            placeholder="Descrição detalhada do produto..."
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Categoria *</label>
            <select className="w-full p-2 border rounded" defaultValue={selectedProduct?.category}>
              <option value="">Selecione...</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Marca</label>
            <select className="w-full p-2 border rounded" defaultValue={selectedProduct?.brand}>
              <option value="">Selecione...</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <Input placeholder="fitness, masculino, premium (separado por vírgula)" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Preço de Venda *</label>
            <Input type="number" step="0.01" placeholder="89.90" defaultValue={selectedProduct?.price} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preço de Custo</label>
            <Input type="number" step="0.01" placeholder="35.50" defaultValue={selectedProduct?.cost} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Preço Promocional</label>
            <Input type="number" step="0.01" placeholder="79.90" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">SKU *</label>
            <Input placeholder="REG-001" defaultValue={selectedProduct?.sku} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Código de Barras</label>
          <Input placeholder="7891234567890" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Peso (g)</label>
            <Input type="number" placeholder="200" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Largura (cm)</label>
            <Input type="number" placeholder="30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Altura (cm)</label>
            <Input type="number" placeholder="5" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Produto em Destaque</span>
            <Switch defaultChecked={selectedProduct?.featured} />
          </div>
          <div className="flex items-center justify-between">
            <span>Controlar Estoque</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span>Produto Digital</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span>Produto Ativo</span>
            <Switch defaultChecked={selectedProduct?.status === 'active'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormBasicTab;
