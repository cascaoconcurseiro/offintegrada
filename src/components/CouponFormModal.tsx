
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
  Gift, 
  Percent, 
  DollarSign, 
  Calendar, 
  Users, 
  Package,
  Save,
  Copy,
  Eye,
  Settings,
  Target,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CouponFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CouponFormModal = ({ open, onOpenChange }: CouponFormModalProps) => {
  const [couponData, setCouponData] = useState({
    code: '',
    name: '',
    description: '',
    type: 'percentage', // percentage, fixed, shipping
    value: '',
    minOrderValue: '',
    maxDiscount: '',
    usageLimit: '',
    userLimit: '',
    startDate: '',
    endDate: '',
    isActive: true,
    isPublic: true,
    categories: [] as string[],
    products: [] as string[],
    excludedCategories: [] as string[],
    excludedProducts: [] as string[],
    firstTimeCustomer: false,
    stackable: false,
    autoApply: false
  });

  const [activeTab, setActiveTab] = useState('basic');

  const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponData(prev => ({ ...prev, code: result }));
    toast({
      title: "Código Gerado",
      description: `Código ${result} foi gerado automaticamente!`,
    });
  };

  const handleSave = () => {
    console.log('Saving coupon:', couponData);
    toast({
      title: "Cupom Salvo",
      description: `Cupom ${couponData.name || couponData.code} foi criado com sucesso!`,
    });
    onOpenChange(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponData.code);
    toast({
      title: "Código Copiado",
      description: "Código do cupom copiado para a área de transferência!",
    });
  };

  const calculateDiscount = () => {
    const orderValue = 199.90; // Exemplo
    if (couponData.type === 'percentage') {
      const discount = (orderValue * parseFloat(couponData.value || '0')) / 100;
      const maxDiscount = parseFloat(couponData.maxDiscount || '0');
      return maxDiscount > 0 ? Math.min(discount, maxDiscount) : discount;
    } else if (couponData.type === 'fixed') {
      return parseFloat(couponData.value || '0');
    }
    return 0;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald text-2xl uppercase flex items-center gap-2">
            <Gift className="w-6 h-6" />
            Sistema Avançado de Cupons
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="conditions">Condições</TabsTrigger>
            <TabsTrigger value="restrictions">Restrições</TabsTrigger>
            <TabsTrigger value="advanced">Avançado</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="code">Código do Cupom *</Label>
                <div className="flex gap-2">
                  <Input
                    id="code"
                    value={couponData.code}
                    onChange={(e) => setCouponData(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
                    placeholder="Ex: BLACKFRIDAY50"
                    className="uppercase"
                  />
                  <Button onClick={generateCode} variant="outline" size="sm">
                    Gerar
                  </Button>
                  {couponData.code && (
                    <Button onClick={handleCopyCode} variant="outline" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="name">Nome do Cupom</Label>
                <Input
                  id="name"
                  value={couponData.name}
                  onChange={(e) => setCouponData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Black Friday 2024"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={couponData.description}
                onChange={(e) => setCouponData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descrição do cupom para uso interno..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="type">Tipo de Desconto</Label>
                <select 
                  className="w-full p-2 border rounded"
                  value={couponData.type}
                  onChange={(e) => setCouponData(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="percentage">Porcentagem (%)</option>
                  <option value="fixed">Valor Fixo (R$)</option>
                  <option value="shipping">Frete Grátis</option>
                </select>
              </div>
              <div>
                <Label htmlFor="value">
                  Valor {couponData.type === 'percentage' ? '(%)' : couponData.type === 'fixed' ? '(R$)' : ''}
                </Label>
                <Input
                  id="value"
                  type="number"
                  value={couponData.value}
                  onChange={(e) => setCouponData(prev => ({ ...prev, value: e.target.value }))}
                  placeholder={couponData.type === 'percentage' ? '10' : '50.00'}
                  disabled={couponData.type === 'shipping'}
                />
              </div>
              {couponData.type === 'percentage' && (
                <div>
                  <Label htmlFor="maxDiscount">Desconto Máximo (R$)</Label>
                  <Input
                    id="maxDiscount"
                    type="number"
                    value={couponData.maxDiscount}
                    onChange={(e) => setCouponData(prev => ({ ...prev, maxDiscount: e.target.value }))}
                    placeholder="100.00"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Data de Início</Label>
                <Input
                  id="startDate"
                  type="datetime-local"
                  value={couponData.startDate}
                  onChange={(e) => setCouponData(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="endDate">Data de Fim</Label>
                <Input
                  id="endDate"
                  type="datetime-local"
                  value={couponData.endDate}
                  onChange={(e) => setCouponData(prev => ({ ...prev, endDate: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center justify-between">
                <Label>Cupom Ativo</Label>
                <Switch
                  checked={couponData.isActive}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, isActive: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Público</Label>
                <Switch
                  checked={couponData.isPublic}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, isPublic: checked }))}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="conditions" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minOrderValue">Valor Mínimo do Pedido (R$)</Label>
                <Input
                  id="minOrderValue"
                  type="number"
                  value={couponData.minOrderValue}
                  onChange={(e) => setCouponData(prev => ({ ...prev, minOrderValue: e.target.value }))}
                  placeholder="99.00"
                />
              </div>
              <div>
                <Label htmlFor="usageLimit">Limite de Uso Total</Label>
                <Input
                  id="usageLimit"
                  type="number"
                  value={couponData.usageLimit}
                  onChange={(e) => setCouponData(prev => ({ ...prev, usageLimit: e.target.value }))}
                  placeholder="100"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="userLimit">Limite por Cliente</Label>
                <Input
                  id="userLimit"
                  type="number"
                  value={couponData.userLimit}
                  onChange={(e) => setCouponData(prev => ({ ...prev, userLimit: e.target.value }))}
                  placeholder="1"
                />
              </div>
              <div className="flex items-center justify-between pt-6">
                <Label>Apenas Primeiro Pedido</Label>
                <Switch
                  checked={couponData.firstTimeCustomer}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, firstTimeCustomer: checked }))}
                />
              </div>
            </div>

            <div>
              <Label>Categorias Incluídas</Label>
              <div className="mt-2 space-y-2">
                {['Camisetas', 'Calças', 'Shorts', 'Jaquetas', 'Acessórios'].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={couponData.categories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCouponData(prev => ({ ...prev, categories: [...prev.categories, category] }));
                        } else {
                          setCouponData(prev => ({ ...prev, categories: prev.categories.filter(c => c !== category) }));
                        }
                      }}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="restrictions" className="space-y-4">
            <div>
              <Label>Categorias Excluídas</Label>
              <div className="mt-2 space-y-2">
                {['Sale', 'Outlet', 'Liquidação'].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={couponData.excludedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCouponData(prev => ({ ...prev, excludedCategories: [...prev.excludedCategories, category] }));
                        } else {
                          setCouponData(prev => ({ ...prev, excludedCategories: prev.excludedCategories.filter(c => c !== category) }));
                        }
                      }}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-3">Produtos Específicos</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Produtos Incluídos</Label>
                  <textarea 
                    className="w-full p-2 border rounded h-20 text-sm"
                    placeholder="SKU001, SKU002, SKU003..."
                    value={couponData.products.join(', ')}
                    onChange={(e) => setCouponData(prev => ({ 
                      ...prev, 
                      products: e.target.value.split(',').map(p => p.trim()).filter(p => p) 
                    }))}
                  />
                </div>
                <div>
                  <Label>Produtos Excluídos</Label>
                  <textarea 
                    className="w-full p-2 border rounded h-20 text-sm"
                    placeholder="SKU004, SKU005, SKU006..."
                    value={couponData.excludedProducts.join(', ')}
                    onChange={(e) => setCouponData(prev => ({ 
                      ...prev, 
                      excludedProducts: e.target.value.split(',').map(p => p.trim()).filter(p => p) 
                    }))}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label>Empilhável com Outros Cupons</Label>
                  <p className="text-sm text-gray-600">Permite uso junto com outros cupons</p>
                </div>
                <Switch
                  checked={couponData.stackable}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, stackable: checked }))}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <Label>Aplicação Automática</Label>
                  <p className="text-sm text-gray-600">Aplica automaticamente quando condições são atendidas</p>
                </div>
                <Switch
                  checked={couponData.autoApply}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, autoApply: checked }))}
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">Configurações de Marketing</h3>
                <div className="space-y-3">
                  <div>
                    <Label>Mensagem de Sucesso Personalizada</Label>
                    <Input placeholder="Parabéns! Você economizou {valor} neste pedido!" />
                  </div>
                  <div>
                    <Label>URL de Redirecionamento</Label>
                    <Input placeholder="https://..." />
                  </div>
                  <div>
                    <Label>Pixel de Conversão</Label>
                    <Input placeholder="FB.q('track', 'AddToCart');" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Gift className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl font-bold">
                      {couponData.name || 'Novo Cupom'}
                    </h2>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-3xl font-bold font-mono tracking-wider">
                      {couponData.code || 'CÓDIGO'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Tipo de Desconto</p>
                      <p className="font-medium">
                        {couponData.type === 'percentage' ? 'Porcentagem' : 
                         couponData.type === 'fixed' ? 'Valor Fixo' : 'Frete Grátis'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Valor</p>
                      <p className="font-medium">
                        {couponData.type === 'percentage' ? `${couponData.value}%` :
                         couponData.type === 'fixed' ? `R$ ${couponData.value}` : 'Grátis'}
                      </p>
                    </div>
                  </div>

                  {couponData.minOrderValue && (
                    <p className="text-sm text-gray-600">
                      Válido para pedidos acima de R$ {couponData.minOrderValue}
                    </p>
                  )}

                  <div className="flex justify-center gap-4">
                    <Badge className={couponData.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {couponData.isActive ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <Badge variant="outline">
                      {couponData.isPublic ? 'Público' : 'Privado'}
                    </Badge>
                  </div>

                  {/* Simulação de Desconto */}
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Simulação de Uso</h3>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm">Pedido de R$ 199,90</p>
                      <p className="text-lg font-bold text-green-600">
                        Desconto: R$ {calculateDiscount().toFixed(2)}
                      </p>
                      <p className="text-sm">
                        Total: R$ {(199.90 - calculateDiscount()).toFixed(2)}
                      </p>
                    </div>
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
            Criar Cupom
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CouponFormModal;
