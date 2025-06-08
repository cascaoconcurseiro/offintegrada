
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface ProductBasicInfoProps {
  productData: any;
  setProductData: (data: any) => void;
  newTag: string;
  setNewTag: (tag: string) => void;
}

const ProductBasicInfo = ({ productData, setProductData, newTag, setNewTag }: ProductBasicInfoProps) => {
  const addTag = () => {
    if (newTag && !productData.tags.includes(newTag)) {
      setProductData((prev: any) => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setProductData((prev: any) => ({
      ...prev,
      tags: prev.tags.filter((t: string) => t !== tag)
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nome do Produto *</Label>
          <Input
            id="name"
            value={productData.name}
            onChange={(e) => setProductData((prev: any) => ({ ...prev, name: e.target.value }))}
            placeholder="Ex: Camiseta Premium Masculina"
          />
        </div>
        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input
            id="sku"
            value={productData.sku}
            onChange={(e) => setProductData((prev: any) => ({ ...prev, sku: e.target.value }))}
            placeholder="Ex: TSH-001-M-BLK"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          value={productData.description}
          onChange={(e) => setProductData((prev: any) => ({ ...prev, description: e.target.value }))}
          placeholder="Descrição detalhada do produto..."
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Categoria</Label>
          <select 
            className="w-full p-2 border rounded"
            value={productData.category}
            onChange={(e) => setProductData((prev: any) => ({ ...prev, category: e.target.value }))}
          >
            <option value="">Selecione uma categoria</option>
            <option value="camisetas">Camisetas</option>
            <option value="calcas">Calças</option>
            <option value="shorts">Shorts</option>
            <option value="jaquetas">Jaquetas</option>
            <option value="acessorios">Acessórios</option>
          </select>
        </div>
        <div>
          <Label htmlFor="brand">Marca</Label>
          <Input
            id="brand"
            value={productData.brand}
            onChange={(e) => setProductData((prev: any) => ({ ...prev, brand: e.target.value }))}
            placeholder="Ex: OffSeason"
          />
        </div>
      </div>

      <div>
        <Label>Tags</Label>
        <div className="flex gap-2 mb-2">
          <Input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Adicionar tag..."
            onKeyPress={(e) => e.key === 'Enter' && addTag()}
          />
          <Button onClick={addTag} size="sm">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {productData.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="cursor-pointer">
              {tag}
              <X 
                className="w-3 h-3 ml-1" 
                onClick={() => removeTag(tag)}
              />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBasicInfo;
