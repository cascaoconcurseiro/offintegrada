
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Gift, 
  Percent, 
  Calendar, 
  Users, 
  ShoppingCart,
  Plus,
  Trash2,
  Edit,
  Copy,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdvancedCouponSystem = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: 'WELCOME10',
      type: 'percentage',
      value: 10,
      description: 'Desconto de boas-vindas',
      minValue: 100,
      maxDiscount: 50,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      usageLimit: 1000,
      used: 156,
      active: true,
      conditions: ['first_purchase']
    },
    {
      id: 2,
      code: 'FRETEGRATIS',
      type: 'free_shipping',
      value: 0,
      description: 'Frete grátis para todo Brasil',
      minValue: 150,
      maxDiscount: 0,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      usageLimit: 5000,
      used: 892,
      active: true,
      conditions: []
    },
    {
      id: 3,
      code: 'BLACK50',
      type: 'fixed',
      value: 50,
      description: 'R$ 50 OFF na Black Friday',
      minValue: 200,
      maxDiscount: 50,
      startDate: '2024-11-24',
      endDate: '2024-11-30',
      usageLimit: 500,
      used: 234,
      active: true,
      conditions: ['min_items_2']
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    type: 'percentage',
    value: 0,
    description: '',
    minValue: 0,
    maxDiscount: 0,
    startDate: '',
    endDate: '',
    usageLimit: 1000,
    conditions: []
  });

  const handleCreateCoupon = () => {
    if (!newCoupon.code || !newCoupon.description) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const coupon = {
      id: Date.now(),
      ...newCoupon,
      used: 0,
      active: true
    };

    setCoupons([...coupons, coupon]);
    setNewCoupon({
      code: '',
      type: 'percentage',
      value: 0,
      description: '',
      minValue: 0,
      maxDiscount: 0,
      startDate: '',
      endDate: '',
      usageLimit: 1000,
      conditions: []
    });
    setShowCreateForm(false);

    toast({
      title: "Cupom criado!",
      description: `Cupom ${coupon.code} foi criado com sucesso.`,
    });
  };

  const handleToggleCoupon = (id: number) => {
    setCoupons(coupons.map(coupon => 
      coupon.id === id ? { ...coupon, active: !coupon.active } : coupon
    ));
  };

  const handleDeleteCoupon = (id: number) => {
    setCoupons(coupons.filter(coupon => coupon.id !== id));
    toast({
      title: "Cupom excluído",
      description: "O cupom foi removido com sucesso.",
    });
  };

  const handleDuplicateCoupon = (coupon: any) => {
    const duplicatedCoupon = {
      ...coupon,
      id: Date.now(),
      code: `${coupon.code}_COPY`,
      used: 0
    };
    setCoupons([...coupons, duplicatedCoupon]);
    toast({
      title: "Cupom duplicado",
      description: `Cupom ${duplicatedCoupon.code} foi criado.`,
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'percentage':
        return <Percent className="w-4 h-4" />;
      case 'fixed':
        return <Gift className="w-4 h-4" />;
      case 'free_shipping':
        return <ShoppingCart className="w-4 h-4" />;
      default:
        return <Gift className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'percentage':
        return 'Percentual';
      case 'fixed':
        return 'Valor Fixo';
      case 'free_shipping':
        return 'Frete Grátis';
      default:
        return 'Outro';
    }
  };

  const formatValue = (type: string, value: number) => {
    switch (type) {
      case 'percentage':
        return `${value}%`;
      case 'fixed':
        return `R$ ${value.toFixed(2)}`;
      case 'free_shipping':
        return 'Grátis';
      default:
        return value.toString();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Sistema Avançado de Cupons
          </h2>
          <p className="text-gray-600 font-roboto">
            Gerencie cupons de desconto e promoções da sua loja
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Cupom
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cupons Ativos</p>
                <p className="text-2xl font-bold">
                  {coupons.filter(c => c.active).length}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total de Usos</p>
                <p className="text-2xl font-bold">
                  {coupons.reduce((sum, c) => sum + c.used, 0)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Mais Usado</p>
                <p className="text-lg font-bold">
                  {coupons.sort((a, b) => b.used - a.used)[0]?.code || 'N/A'}
                </p>
              </div>
              <Gift className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expirando</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
              <Clock className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Criar Novo Cupom</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Código do Cupom *</label>
                <Input
                  value={newCoupon.code}
                  onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value.toUpperCase()})}
                  placeholder="Ex: DESCONTO10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tipo de Desconto *</label>
                <select
                  value={newCoupon.type}
                  onChange={(e) => setNewCoupon({...newCoupon, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="percentage">Percentual (%)</option>
                  <option value="fixed">Valor Fixo (R$)</option>
                  <option value="free_shipping">Frete Grátis</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {newCoupon.type === 'percentage' ? 'Percentual (%)' : 
                   newCoupon.type === 'fixed' ? 'Valor (R$)' : 'Valor'}
                </label>
                <Input
                  type="number"
                  value={newCoupon.value}
                  onChange={(e) => setNewCoupon({...newCoupon, value: Number(e.target.value)})}
                  disabled={newCoupon.type === 'free_shipping'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Valor Mínimo (R$)</label>
                <Input
                  type="number"
                  value={newCoupon.minValue}
                  onChange={(e) => setNewCoupon({...newCoupon, minValue: Number(e.target.value)})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Data de Início</label>
                <Input
                  type="date"
                  value={newCoupon.startDate}
                  onChange={(e) => setNewCoupon({...newCoupon, startDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Data de Término</label>
                <Input
                  type="date"
                  value={newCoupon.endDate}
                  onChange={(e) => setNewCoupon({...newCoupon, endDate: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Descrição *</label>
              <Input
                value={newCoupon.description}
                onChange={(e) => setNewCoupon({...newCoupon, description: e.target.value})}
                placeholder="Descrição do cupom"
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleCreateCoupon}>
                Criar Cupom
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Coupons List */}
      <div className="grid gap-4">
        {coupons.map((coupon) => (
          <Card key={coupon.id} className={`${!coupon.active ? 'opacity-60' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(coupon.type)}
                    <div>
                      <h3 className="font-bold text-lg">{coupon.code}</h3>
                      <p className="text-sm text-gray-600">{coupon.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge variant={coupon.active ? 'default' : 'secondary'}>
                      {coupon.active ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <Badge variant="outline">
                      {getTypeLabel(coupon.type)}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {formatValue(coupon.type, coupon.value)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {coupon.used} / {coupon.usageLimit} usos
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDuplicateCoupon(coupon)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleCoupon(coupon.id)}
                    >
                      {coupon.active ? 'Pausar' : 'Ativar'}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteCoupon(coupon.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Período: </span>
                  <span>{new Date(coupon.startDate).toLocaleDateString()} - {new Date(coupon.endDate).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-gray-600">Valor mínimo: </span>
                  <span>R$ {coupon.minValue.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-gray-600">Progresso: </span>
                  <span>{Math.round((coupon.used / coupon.usageLimit) * 100)}%</span>
                </div>
                <div>
                  <span className="text-gray-600">Status: </span>
                  <span className={coupon.active ? 'text-green-600' : 'text-red-600'}>
                    {coupon.active ? 'Funcionando' : 'Pausado'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdvancedCouponSystem;
