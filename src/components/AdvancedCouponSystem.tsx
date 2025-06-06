
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Percent, 
  DollarSign, 
  Calendar, 
  Users,
  Target,
  Gift
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minValue?: number;
  maxUses?: number;
  currentUses: number;
  expiryDate?: string;
  isActive: boolean;
  description: string;
  target?: 'all' | 'new_customers' | 'returning_customers';
}

const AdvancedCouponSystem = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: '1',
      code: 'PRIMEIRA10',
      type: 'percentage',
      value: 10,
      minValue: 50,
      maxUses: 100,
      currentUses: 23,
      expiryDate: '2024-12-31',
      isActive: true,
      description: '10% de desconto para novos clientes',
      target: 'new_customers'
    },
    {
      id: '2',
      code: 'FRETE20',
      type: 'fixed',
      value: 20,
      minValue: 100,
      maxUses: 50,
      currentUses: 8,
      expiryDate: '2024-11-30',
      isActive: true,
      description: 'R$ 20 de desconto no frete',
      target: 'all'
    },
    {
      id: '3',
      code: 'BLACKFRIDAY30',
      type: 'percentage',
      value: 30,
      minValue: 200,
      maxUses: 1000,
      currentUses: 456,
      expiryDate: '2024-11-29',
      isActive: false,
      description: '30% de desconto na Black Friday',
      target: 'all'
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [newCoupon, setNewCoupon] = useState<Partial<Coupon>>({
    code: '',
    type: 'percentage',
    value: 0,
    description: '',
    target: 'all',
    isActive: true
  });

  const handleCreateCoupon = () => {
    if (!newCoupon.code || !newCoupon.value) {
      toast({
        title: "Dados incompletos",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const coupon: Coupon = {
      id: Date.now().toString(),
      code: newCoupon.code.toUpperCase(),
      type: newCoupon.type || 'percentage',
      value: newCoupon.value || 0,
      minValue: newCoupon.minValue,
      maxUses: newCoupon.maxUses,
      currentUses: 0,
      expiryDate: newCoupon.expiryDate,
      isActive: newCoupon.isActive || true,
      description: newCoupon.description || '',
      target: newCoupon.target || 'all'
    };

    setCoupons(prev => [...prev, coupon]);
    setNewCoupon({
      code: '',
      type: 'percentage',
      value: 0,
      description: '',
      target: 'all',
      isActive: true
    });
    setIsCreating(false);

    toast({
      title: "Cupom criado!",
      description: `Cupom ${coupon.code} foi criado com sucesso.`,
    });
  };

  const handleToggleCoupon = (id: string) => {
    setCoupons(prev => prev.map(coupon => 
      coupon.id === id ? { ...coupon, isActive: !coupon.isActive } : coupon
    ));
  };

  const handleDeleteCoupon = (id: string) => {
    setCoupons(prev => prev.filter(coupon => coupon.id !== id));
    toast({
      title: "Cupom excluído",
      description: "O cupom foi removido com sucesso.",
    });
  };

  const generateRandomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewCoupon(prev => ({ ...prev, code }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider mb-2">
            Sistema de Cupons Avançado
          </h2>
          <p className="text-gray-600">
            Gerencie cupons de desconto e promoções da sua loja
          </p>
        </div>
        
        <Dialog open={isCreating} onOpenChange={setIsCreating}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Novo Cupom
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="font-oswald">Criar Novo Cupom</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Código do Cupom</label>
                <div className="flex gap-2">
                  <Input
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
                    placeholder="DESCONTO10"
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={generateRandomCode}>
                    <Gift className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Desconto</label>
                <select
                  value={newCoupon.type}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, type: e.target.value as 'percentage' | 'fixed' }))}
                  className="w-full p-2 border rounded"
                >
                  <option value="percentage">Porcentagem (%)</option>
                  <option value="fixed">Valor Fixo (R$)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Valor do Desconto {newCoupon.type === 'percentage' ? '(%)' : '(R$)'}
                </label>
                <Input
                  type="number"
                  value={newCoupon.value}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, value: Number(e.target.value) }))}
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Valor Mínimo da Compra (R$)</label>
                <Input
                  type="number"
                  value={newCoupon.minValue || ''}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, minValue: Number(e.target.value) }))}
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Máximo de Usos</label>
                <Input
                  type="number"
                  value={newCoupon.maxUses || ''}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, maxUses: Number(e.target.value) }))}
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Data de Expiração</label>
                <Input
                  type="date"
                  value={newCoupon.expiryDate || ''}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, expiryDate: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Público Alvo</label>
                <select
                  value={newCoupon.target}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, target: e.target.value as any }))}
                  className="w-full p-2 border rounded"
                >
                  <option value="all">Todos os clientes</option>
                  <option value="new_customers">Novos clientes</option>
                  <option value="returning_customers">Clientes recorrentes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <Input
                  value={newCoupon.description}
                  onChange={(e) => setNewCoupon(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descrição do cupom"
                />
              </div>

              <Button onClick={handleCreateCoupon} className="w-full">
                Criar Cupom
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <Card key={coupon.id} className={`${!coupon.isActive ? 'opacity-60' : ''} hover:shadow-lg transition-shadow`}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-oswald text-lg">{coupon.code}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{coupon.description}</p>
                </div>
                <Badge className={coupon.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                  {coupon.isActive ? 'Ativo' : 'Inativo'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                {coupon.type === 'percentage' ? (
                  <Percent className="w-4 h-4 text-blue-600" />
                ) : (
                  <DollarSign className="w-4 h-4 text-green-600" />
                )}
                <span className="font-bold text-lg">
                  {coupon.type === 'percentage' ? `${coupon.value}%` : `R$ ${coupon.value}`}
                </span>
                <span className="text-sm text-gray-600">de desconto</span>
              </div>

              {coupon.minValue && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Target className="w-4 h-4" />
                  Compra mínima: R$ {coupon.minValue}
                </div>
              )}

              {coupon.maxUses && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  Usos: {coupon.currentUses}/{coupon.maxUses}
                </div>
              )}

              {coupon.expiryDate && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  Expira: {new Date(coupon.expiryDate).toLocaleDateString('pt-BR')}
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleToggleCoupon(coupon.id)}
                  className="flex-1"
                >
                  {coupon.isActive ? 'Desativar' : 'Ativar'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingCoupon(coupon)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteCoupon(coupon.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {coupons.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Ticket className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Nenhum cupom criado</h3>
            <p className="text-gray-600 mb-4">Crie seu primeiro cupom de desconto para aumentar as vendas</p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Cupom
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdvancedCouponSystem;
