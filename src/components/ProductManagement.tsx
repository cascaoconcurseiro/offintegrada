
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Image, 
  Video, 
  Tag, 
  BarChart3,
  Eye,
  Copy,
  Star,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
  Download,
  Grid,
  List,
  Zap,
  Target,
  Globe,
  Palette,
  Ruler,
  Weight,
  Box,
  Calendar,
  Clock,
  Users,
  Heart,
  Share2,
  MessageSquare
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductManagement = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Regata Premium Masculina',
      sku: 'REG-001-M',
      price: 89.90,
      cost: 35.50,
      stock: 45,
      category: 'Regatas',
      brand: 'OFFSEASON',
      status: 'active',
      featured: true,
      sales: 127,
      revenue: 'R$ 11.428',
      rating: 4.8,
      reviews: 23,
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      variants: [
        { size: 'P', color: 'Preto', stock: 12, sku: 'REG-001-P-PR' },
        { size: 'M', color: 'Preto', stock: 15, sku: 'REG-001-M-PR' },
        { size: 'G', color: 'Preto', stock: 18, sku: 'REG-001-G-PR' }
      ],
      seo: {
        title: 'Regata Premium Masculina - OFFSEASON',
        description: 'Regata premium de alta qualidade...',
        keywords: 'regata, masculina, premium, fitness'
      },
      created: '2024-01-15',
      updated: '2024-06-01'
    },
    {
      id: 2,
      name: 'Camiseta Feminina Básica',
      sku: 'CAM-002-F',
      price: 69.90,
      cost: 28.50,
      stock: 32,
      category: 'Camisetas',
      brand: 'OFFSEASON',
      status: 'active',
      featured: false,
      sales: 89,
      revenue: 'R$ 6.221',
      rating: 4.6,
      reviews: 18,
      images: ['img4.jpg', 'img5.jpg'],
      variants: [
        { size: 'P', color: 'Branco', stock: 10, sku: 'CAM-002-P-BR' },
        { size: 'M', color: 'Branco', stock: 12, sku: 'CAM-002-M-BR' },
        { size: 'G', color: 'Rosa', stock: 10, sku: 'CAM-002-G-RS' }
      ],
      seo: {
        title: 'Camiseta Feminina Básica - OFFSEASON',
        description: 'Camiseta feminina básica e confortável...',
        keywords: 'camiseta, feminina, básica, confort'
      },
      created: '2024-02-10',
      updated: '2024-05-28'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['Regatas', 'Camisetas', 'Shorts', 'Jaquetas', 'Acessórios'];
  const brands = ['OFFSEASON', 'Nike', 'Adidas', 'Puma'];
  const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG'];
  const colors = ['Preto', 'Branco', 'Cinza', 'Azul', 'Verde', 'Vermelho', 'Rosa', 'Amarelo'];

  const handleCreateProduct = () => {
    setShowCreateForm(true);
    setSelectedProduct(null);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowCreateForm(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Produto excluído",
      description: "O produto foi removido com sucesso.",
    });
  };

  const handleDuplicateProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      name: `${product.name} (Cópia)`,
      sku: `${product.sku}-COPY`
    };
    setProducts([...products, newProduct]);
    toast({
      title: "Produto duplicado",
      description: "Uma cópia do produto foi criada.",
    });
  };

  const toggleProductStatus = (productId) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' }
        : p
    ));
  };

  const toggleFeatured = (productId) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, featured: !p.featured }
        : p
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Gestão Avançada de Produtos
          </h2>
          <p className="text-gray-600">
            Sistema completo para gerenciar catálogo, variações, estoque e performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Importar CSV
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={handleCreateProduct}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </Button>
        </div>
      </div>

      {/* Métricas de Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { name: 'Total Produtos', value: products.length.toString(), change: '+12', icon: Package },
          { name: 'Produtos Ativos', value: products.filter(p => p.status === 'active').length.toString(), change: '+8', icon: CheckCircle },
          { name: 'Estoque Baixo', value: products.filter(p => p.stock < 10).length.toString(), change: '-3', icon: AlertTriangle },
          { name: 'Mais Vendidos', value: products.filter(p => p.sales > 100).length.toString(), change: '+5', icon: TrendingUp },
          { name: 'Receita Total', value: `R$ ${products.reduce((sum, p) => sum + parseFloat(p.revenue.replace('R$ ', '').replace('.', '').replace(',', '.')), 0).toLocaleString()}`, change: '+23%', icon: DollarSign }
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                  <Badge variant="outline">{metric.change}</Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-600">{metric.name}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filtros e Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Buscar produtos..." className="pl-10" />
              </div>
            </div>
            <select className="px-3 py-2 border rounded">
              <option value="">Todas Categorias</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select className="px-3 py-2 border rounded">
              <option value="">Todos Status</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <div className="flex gap-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista/Grid de Produtos */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
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
                    <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDuplicateProduct(product)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toggleFeatured(product.id)}>
                      <Star className={`w-4 h-4 ${product.featured ? 'fill-current text-yellow-500' : ''}`} />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => toggleProductStatus(product.id)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left p-4">Produto</th>
                    <th className="text-left p-4">SKU</th>
                    <th className="text-left p-4">Preço</th>
                    <th className="text-left p-4">Estoque</th>
                    <th className="text-left p-4">Vendas</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
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
                          <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDuplicateProduct(product)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Formulário de Criação/Edição */}
      {showCreateForm && (
        <Card className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="font-oswald">
                {selectedProduct ? 'Editar Produto' : 'Novo Produto'}
              </CardTitle>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="basic">Básico</TabsTrigger>
                <TabsTrigger value="media">Mídia</TabsTrigger>
                <TabsTrigger value="variants">Variações</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="shipping">Envio</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome do Produto *</label>
                      <Input placeholder="Ex: Regata Premium Masculina" />
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
                        <select className="w-full p-2 border rounded">
                          <option value="">Selecione...</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Marca</label>
                        <select className="w-full p-2 border rounded">
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
                        <Input type="number" step="0.01" placeholder="89.90" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Preço de Custo</label>
                        <Input type="number" step="0.01" placeholder="35.50" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Preço Promocional</label>
                        <Input type="number" step="0.01" placeholder="79.90" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">SKU *</label>
                        <Input placeholder="REG-001" />
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
                        <Switch />
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
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="media">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Imagens do Produto</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Clique para upload</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Vídeos do Produto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Video className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload de Vídeo</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">URL do Vídeo (YouTube/Vimeo)</label>
                        <Input placeholder="https://youtube.com/watch?v=..." />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Galeria 360°</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Globe className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload para visualização 360°</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="variants">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Variações do Produto</h3>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Nova Variação
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {[1,2,3].map((i) => (
                      <Card key={i}>
                        <CardContent className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Tamanho</label>
                              <select className="w-full p-2 border rounded text-sm">
                                <option value="">Selecione</option>
                                {sizes.map(size => (
                                  <option key={size} value={size}>{size}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Cor</label>
                              <select className="w-full p-2 border rounded text-sm">
                                <option value="">Selecione</option>
                                {colors.map(color => (
                                  <option key={color} value={color}>{color}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">SKU</label>
                              <Input placeholder="REG-001-M-PR" className="text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Preço</label>
                              <Input type="number" step="0.01" placeholder="89.90" className="text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Estoque</label>
                              <Input type="number" placeholder="10" className="text-sm" />
                            </div>
                            <div className="flex gap-1">
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
              </TabsContent>

              <TabsContent value="seo">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Título SEO</label>
                    <Input placeholder="Regata Premium Masculina - OFFSEASON" />
                    <p className="text-xs text-gray-600 mt-1">Máximo 60 caracteres</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Meta Descrição</label>
                    <textarea 
                      className="w-full p-3 border rounded h-20"
                      placeholder="Descrição que aparece nos resultados de busca..."
                    ></textarea>
                    <p className="text-xs text-gray-600 mt-1">Máximo 160 caracteres</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Palavras-chave</label>
                    <Input placeholder="regata, masculina, premium, fitness" />
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
              </TabsContent>

              <TabsContent value="shipping">
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
              </TabsContent>

              <TabsContent value="analytics">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">2.847</p>
                        <p className="text-sm text-gray-600">Visualizações</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <ShoppingCart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">127</p>
                        <p className="text-sm text-gray-600">Vendas</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">4.5%</p>
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
              </TabsContent>
            </Tabs>

            <div className="flex gap-3 mt-8">
              <Button className="flex-1">
                {selectedProduct ? 'Atualizar Produto' : 'Criar Produto'}
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductManagement;
