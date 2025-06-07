
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  Plus, 
  X, 
  Save, 
  Image as ImageIcon, 
  Video, 
  Tag, 
  Package,
  DollarSign,
  Truck,
  Star,
  Eye,
  Globe
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProductFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductFormModal = ({ open, onOpenChange }: ProductFormModalProps) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    comparePrice: '',
    cost: '',
    sku: '',
    category: '',
    brand: '',
    weight: '',
    dimensions: '',
    stock: '',
    lowStockThreshold: '',
    isActive: true,
    isFeatured: false,
    allowBackorder: false,
    trackStock: true,
    seoTitle: '',
    seoDescription: '',
    tags: [] as string[],
    images: [] as string[],
    videos: [] as string[]
  });

  const [newTag, setNewTag] = useState('');
  const [activeTab, setActiveTab] = useState('basic');

  const handleSave = () => {
    console.log('Saving product:', productData);
    toast({
      title: "Produto Salvo",
      description: `${productData.name || 'Novo produto'} foi salvo com sucesso!`,
    });
    onOpenChange(false);
  };

  const addTag = () => {
    if (newTag && !productData.tags.includes(newTag)) {
      setProductData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setProductData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleImageUpload = () => {
    // Simular upload de imagem
    const mockImage = `https://picsum.photos/400/400?random=${Date.now()}`;
    setProductData(prev => ({
      ...prev,
      images: [...prev.images, mockImage]
    }));
    toast({
      title: "Imagem Adicionada",
      description: "Imagem foi carregada com sucesso!",
    });
  };

  const handleVideoUpload = () => {
    // Simular upload de vídeo
    const mockVideo = `https://sample-videos.com/zip/10/mp4/SampleVideo_${Date.now()}.mp4`;
    setProductData(prev => ({
      ...prev,
      videos: [...prev.videos, mockVideo]
    }));
    toast({
      title: "Vídeo Adicionado",
      description: "Vídeo foi carregado com sucesso!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald text-2xl uppercase">
            Novo Produto
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="pricing">Preços</TabsTrigger>
            <TabsTrigger value="inventory">Estoque</TabsTrigger>
            <TabsTrigger value="media">Mídia</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="settings">Config</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome do Produto *</Label>
                <Input
                  id="name"
                  value={productData.name}
                  onChange={(e) => setProductData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Camiseta Premium Masculina"
                />
              </div>
              <div>
                <Label htmlFor="sku">SKU</Label>
                <Input
                  id="sku"
                  value={productData.sku}
                  onChange={(e) => setProductData(prev => ({ ...prev, sku: e.target.value }))}
                  placeholder="Ex: TSH-001-M-BLK"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={productData.description}
                onChange={(e) => setProductData(prev => ({ ...prev, description: e.target.value }))}
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
                  onChange={(e) => setProductData(prev => ({ ...prev, category: e.target.value }))}
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
                  onChange={(e) => setProductData(prev => ({ ...prev, brand: e.target.value }))}
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
                {productData.tags.map((tag, index) => (
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
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price">Preço de Venda *</Label>
                <Input
                  id="price"
                  type="number"
                  value={productData.price}
                  onChange={(e) => setProductData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="comparePrice">Preço Comparativo</Label>
                <Input
                  id="comparePrice"
                  type="number"
                  value={productData.comparePrice}
                  onChange={(e) => setProductData(prev => ({ ...prev, comparePrice: e.target.value }))}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="cost">Custo</Label>
                <Input
                  id="cost"
                  type="number"
                  value={productData.cost}
                  onChange={(e) => setProductData(prev => ({ ...prev, cost: e.target.value }))}
                  placeholder="0.00"
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Resumo de Margem</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Preço de Venda:</span>
                    <span>R$ {productData.price || '0,00'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custo:</span>
                    <span>R$ {productData.cost || '0,00'}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Margem:</span>
                    <span className="text-green-600">
                      {productData.price && productData.cost 
                        ? `${(((parseFloat(productData.price) - parseFloat(productData.cost)) / parseFloat(productData.price)) * 100).toFixed(1)}%`
                        : '0%'
                      }
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="stock">Quantidade em Estoque</Label>
                <Input
                  id="stock"
                  type="number"
                  value={productData.stock}
                  onChange={(e) => setProductData(prev => ({ ...prev, stock: e.target.value }))}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="lowStockThreshold">Alerta de Estoque Baixo</Label>
                <Input
                  id="lowStockThreshold"
                  type="number"
                  value={productData.lowStockThreshold}
                  onChange={(e) => setProductData(prev => ({ ...prev, lowStockThreshold: e.target.value }))}
                  placeholder="5"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Rastrear Estoque</Label>
                <Switch
                  checked={productData.trackStock}
                  onCheckedChange={(checked) => setProductData(prev => ({ ...prev, trackStock: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Permitir Backorder</Label>
                <Switch
                  checked={productData.allowBackorder}
                  onCheckedChange={(checked) => setProductData(prev => ({ ...prev, allowBackorder: checked }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={productData.weight}
                  onChange={(e) => setProductData(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="0.5"
                />
              </div>
              <div>
                <Label htmlFor="dimensions">Dimensões (cm)</Label>
                <Input
                  id="dimensions"
                  value={productData.dimensions}
                  onChange={(e) => setProductData(prev => ({ ...prev, dimensions: e.target.value }))}
                  placeholder="20x30x5"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-4">
            <div>
              <Label>Imagens do Produto</Label>
              <div className="grid grid-cols-4 gap-4 mt-2">
                {productData.images.map((image, index) => (
                  <div key={index} className="relative border rounded-lg p-2">
                    <img src={image} alt={`Produto ${index + 1}`} className="w-full h-24 object-cover rounded" />
                    <Button
                      size="sm"
                      variant="destructive"
                      className="absolute -top-2 -right-2 w-6 h-6 p-0"
                      onClick={() => setProductData(prev => ({
                        ...prev,
                        images: prev.images.filter((_, i) => i !== index)
                      }))}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="h-24 flex flex-col gap-2"
                  onClick={handleImageUpload}
                >
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-xs">Adicionar</span>
                </Button>
              </div>
            </div>

            <div>
              <Label>Vídeos do Produto</Label>
              <div className="space-y-2 mt-2">
                {productData.videos.map((video, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Vídeo {index + 1}</span>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setProductData(prev => ({
                        ...prev,
                        videos: prev.videos.filter((_, i) => i !== index)
                      }))}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={handleVideoUpload}
                  className="w-full"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Adicionar Vídeo
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="seo" className="space-y-4">
            <div>
              <Label htmlFor="seoTitle">Título SEO</Label>
              <Input
                id="seoTitle"
                value={productData.seoTitle}
                onChange={(e) => setProductData(prev => ({ ...prev, seoTitle: e.target.value }))}
                placeholder="Título para mecanismos de busca"
              />
              <p className="text-xs text-gray-600 mt-1">
                {productData.seoTitle.length}/60 caracteres
              </p>
            </div>

            <div>
              <Label htmlFor="seoDescription">Descrição SEO</Label>
              <Textarea
                id="seoDescription"
                value={productData.seoDescription}
                onChange={(e) => setProductData(prev => ({ ...prev, seoDescription: e.target.value }))}
                placeholder="Descrição para mecanismos de busca"
                rows={3}
              />
              <p className="text-xs text-gray-600 mt-1">
                {productData.seoDescription.length}/160 caracteres
              </p>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview nos Resultados de Busca
                </h3>
                <div className="space-y-1">
                  <div className="text-blue-600 text-sm font-medium">
                    {productData.seoTitle || productData.name || 'Título do Produto'}
                  </div>
                  <div className="text-green-600 text-xs">
                    www.offseason.com.br/produto/{productData.name.toLowerCase().replace(/\s+/g, '-')}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {productData.seoDescription || productData.description || 'Descrição do produto...'}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Produto Ativo</Label>
                  <p className="text-sm text-gray-600">Produto visível na loja</p>
                </div>
                <Switch
                  checked={productData.isActive}
                  onCheckedChange={(checked) => setProductData(prev => ({ ...prev, isActive: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Produto em Destaque</Label>
                  <p className="text-sm text-gray-600">Aparece na página inicial</p>
                </div>
                <Switch
                  checked={productData.isFeatured}
                  onCheckedChange={(checked) => setProductData(prev => ({ ...prev, isFeatured: checked }))}
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Status do Produto</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge className={productData.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {productData.isActive ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Visibilidade:</span>
                    <span>{productData.isActive ? 'Público' : 'Privado'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Destaque:</span>
                    <span>{productData.isFeatured ? 'Sim' : 'Não'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Produto
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormModal;
