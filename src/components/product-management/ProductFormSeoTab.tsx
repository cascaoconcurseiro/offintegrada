
import React from 'react';
import type { Product } from '@/types/product';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface ProductFormSeoTabProps {
  selectedProduct: Product | null;
  // Add specific form field states and handlers as props
}

const ProductFormSeoTab: React.FC<ProductFormSeoTabProps> = ({ selectedProduct }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Título SEO</label>
        <Input placeholder="Regata Premium Masculina - OFFSEASON" defaultValue={selectedProduct?.seo?.title} />
        <p className="text-xs text-gray-600 mt-1">Máximo 60 caracteres</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Meta Descrição</label>
        <textarea 
          className="w-full p-3 border rounded h-20"
          placeholder="Descrição que aparece nos resultados de busca..."
          defaultValue={selectedProduct?.seo?.description}
        ></textarea>
        <p className="text-xs text-gray-600 mt-1">Máximo 160 caracteres</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Palavras-chave</label>
        <Input placeholder="regata, masculina, premium, fitness" defaultValue={selectedProduct?.seo?.keywords} />
        <p className="text-xs text-gray-600 mt-1">Separado por vírgulas</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">URL Personalizada</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
            /produto/
          </span>
          <Input placeholder="regata-premium-masculina" className="rounded-l-none" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>Indexar no Google</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span>Incluir no Sitemap</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default ProductFormSeoTab;
