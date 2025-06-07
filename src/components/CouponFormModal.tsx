
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Gift, 
  Save, 
  CalendarIcon, 
  Percent, 
  DollarSign,
  Users,
  Package,
  Target,
  Clock,
  Copy
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CouponFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CouponFormModal = ({ open, onOpenChange }: CouponFormModalProps) => {
  const [couponData, setCouponData] = useState({
    code: '',
    type: 'percentage', // percentage, fixed, free_shipping
    value: '',
    description: '',
    minOrderValue: '',
    maxDiscount: '',
    usageLimit: '',
    usagePerCustomer: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    isActive: true,
    allowFirstTimeOnly: false,
    allowCombineWithOther: false,
    categories: [] as string[],
    excludedCategories: [] as string[],
    products: [] as string[],
    excludedProducts: [] as string[]
  });

  const generateCode = () => {
    const codes = ['WELCOME10', 'SAVE20', 'BLACKFRIDAY', 'NEWUSER', 'FRETE25', 'DESCONTO15'];
    const randomCode = codes[Math.floor(Math.random() * codes.length)] + Math.floor(Math.random() * 100);
    setCouponData(prev => ({ ...prev, code: randomCode }));
  };

  const handleSave = () => {
    console.log('Saving coupon:', couponData);
    toast({
      title: "Cupom Criado",
      description: `Cupom ${couponData.code} foi criado com sucesso!`,
    });
    onOpenChange(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponData.code);
    toast({
      title: "Código Copiado",
      description: "Código do cupom copiado para a área de transferência!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald text-2xl uppercase flex items-center gap-2">
            <Gift className="w-6 h-6" />
            Novo Cupom de Desconto
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="conditions">Condições</TabsTrigger>
            <TabsTrigger value="usage">Uso</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
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
                    placeholder="DESCONTO20"
                  />
                  <Button variant="outline" onClick={generateCode}>
                    <Gift className="w-4 h-4" />
                  </Button>
                  {couponData.code && (
                    <Button variant="outline" onClick={copyCode}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <Label>Tipo de Desconto</Label>
                <select 
                  className="w-full p-2 border rounded"
                  value={couponData.type}
                  onChange={(e) => setCouponData(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="percentage">Porcentagem (%)</option>
                  <option value="fixed">Valor Fixo (R$)</option>
                  <option value="free_shipping">Frete Grátis</option>
                </select>
              </div>
            </div>

            {couponData.type !== 'free_shipping' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="value">
                    Valor do Desconto {couponData.type === 'percentage' ? '(%)' : '(R$)'}
                  </Label>
                  <Input
                    id="value"
                    type="number"
                    value={couponData.value}
                    onChange={(e) => setCouponData(prev => ({ ...prev, value: e.target.value }))}
                    placeholder={couponData.type === 'percentage' ? '10' : '25.00'}
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
            )}

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                value={couponData.description}
                onChange={(e) => setCouponData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descrição do cupom para o cliente"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Data de Início</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {couponData.startDate ? format(couponData.startDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={couponData.startDate}
                      onSelect={(date) => setCouponData(prev => ({ ...prev, startDate: date }))}
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Data de Fim</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {couponData.endDate ? format(couponData.endDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={couponData.endDate}
                      onSelect={(date) => setCouponData(prev => ({ ...prev, endDate: date }))}
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Preview do Cupom</h3>
                <div className="border-2 border-dashed border-blue-300 p-4 rounded-lg bg-blue-50">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-blue-600">
                      {couponData.code || 'CODIGO'}
                    </div>
                    <div className="text-lg text-blue-800 mt-1">
                      {couponData.type === 'percentage' && `${couponData.value || '0'}% OFF`}
                      {couponData.type === 'fixed' && `R$ ${couponData.value || '0'} OFF`}
                      {couponData.type === 'free_shipping' && 'FRETE GRÁTIS'}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {couponData.description || 'Descrição do cupom'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conditions" className="space-y-4">
            <div>
              <Label htmlFor="minOrderValue">Valor Mínimo do Pedido (R$)</Label>
              <Input
                id="minOrderValue"
                type="number"
                value={couponData.minOrderValue}
                onChange={(e) => setCouponData(prev => ({ ...prev, minOrderValue: e.target.value }))}
                placeholder="100.00"
              />
              <p className="text-xs text-gray-600 mt-1">
                Deixe vazio para não ter valor mínimo
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Apenas Primeira Compra</Label>
                  <p className="text-sm text-gray-600">Válido apenas para novos clientes</p>
                </div>
                <Switch
                  checked={couponData.allowFirstTimeOnly}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, allowFirstTimeOnly: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Combinar com Outros Cupons</Label>
                  <p className="text-sm text-gray-600">Permite usar junto com outros cupons</p>
                </div>
                <Switch
                  checked={couponData.allowCombineWithOther}
                  onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, allowCombineWithOther: checked }))}
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Resumo das Condições</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Valor Mínimo:</span>
                    <span>{couponData.minOrderValue ? `R$ ${couponData.minOrderValue}` : 'Sem limite'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Primeira Compra:</span>
                    <span>{couponData.allowFirstTimeOnly ? 'Sim' : 'Não'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Combinar Cupons:</span>
                    <span>{couponData.allowCombineWithOther ? 'Sim' : 'Não'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="usageLimit">Limite Total de Uso</Label>
                <Input
                  id="usageLimit"
                  type="number"
                  value={couponData.usageLimit}
                  onChange={(e) => setCouponData(prev => ({ ...prev, usageLimit: e.target.value }))}
                  placeholder="100"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Deixe vazio para uso ilimitado
                </p>
              </div>

              <div>
                <Label htmlFor="usagePerCustomer">Limite por Cliente</Label>
                <Input
                  id="usagePerCustomer"
                  type="number"
                  value={couponData.usagePerCustomer}
                  onChange={(e) => setCouponData(prev => ({ ...prev, usagePerCustomer: e.target.value }))}
                  placeholder="1"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Quantas vezes cada cliente pode usar
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Cupom Ativo</Label>
                <p className="text-sm text-gray-600">Cupom disponível para uso</p>
              </div>
              <Switch
                checked={couponData.isActive}
                onCheckedChange={(checked) => setCouponData(prev => ({ ...prev, isActive: checked }))}
              />
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-4">Estatísticas de Uso</h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">0</div>
                    <div className="text-xs text-gray-600">Usos Totais</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">R$ 0</div>
                    <div className="text-xs text-gray-600">Desconto Aplicado</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">0</div>
                    <div className="text-xs text-gray-600">Clientes Únicos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">0%</div>
                    <div className="text-xs text-gray-600">Taxa de Conversão</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <div>
              <Label>Categorias Incluídas</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {['Camisetas', 'Calças', 'Shorts', 'Jaquetas', 'Acessórios', 'Tênis'].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={couponData.categories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCouponData(prev => ({
                            ...prev,
                            categories: [...prev.categories, category]
                          }));
                        } else {
                          setCouponData(prev => ({
                            ...prev,
                            categories: prev.categories.filter(c => c !== category)
                          }));
                        }
                      }}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Categorias Excluídas</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {['Sale', 'Outlet', 'Liquidação'].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={couponData.excludedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCouponData(prev => ({
                            ...prev,
                            excludedCategories: [...prev.excludedCategories, category]
                          }));
                        } else {
                          setCouponData(prev => ({
                            ...prev,
                            excludedCategories: prev.excludedCategories.filter(c => c !== category)
                          }));
                        }
                      }}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Resumo de Aplicação</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Aplicável em:</span>
                    <div className="ml-4">
                      {couponData.categories.length > 0 ? (
                        <ul className="list-disc list-inside">
                          {couponData.categories.map((cat, index) => (
                            <li key={index}>{cat}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-gray-600">Todas as categorias</span>
                      )}
                    </div>
                  </div>
                  
                  {couponData.excludedCategories.length > 0 && (
                    <div>
                      <span className="font-medium">Exceto:</span>
                      <div className="ml-4">
                        <ul className="list-disc list-inside">
                          {couponData.excludedCategories.map((cat, index) => (
                            <li key={index}>{cat}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
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
