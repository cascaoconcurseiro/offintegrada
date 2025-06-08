
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Package, 
  CreditCard, 
  Truck, 
  Target, 
  ShoppingBag, 
  TrendingUp, 
  Store, 
  Gift, 
  Settings,
  ShoppingCart,
  Users
} from 'lucide-react';

const AdminTabs = () => {
  return (
    <TabsList className="grid w-full grid-cols-12">
      <TabsTrigger value="reports" className="flex items-center gap-2">
        <BarChart3 className="w-4 h-4" />
        Relatórios
      </TabsTrigger>
      <TabsTrigger value="products" className="flex items-center gap-2">
        <Package className="w-4 h-4" />
        Produtos
      </TabsTrigger>
      <TabsTrigger value="orders" className="flex items-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Pedidos
      </TabsTrigger>
      <TabsTrigger value="customers" className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        Clientes
      </TabsTrigger>
      <TabsTrigger value="payments" className="flex items-center gap-2">
        <CreditCard className="w-4 h-4" />
        Pagamentos
      </TabsTrigger>
      <TabsTrigger value="shipping" className="flex items-center gap-2">
        <Truck className="w-4 h-4" />
        Envios
      </TabsTrigger>
      <TabsTrigger value="marketing" className="flex items-center gap-2">
        <Target className="w-4 h-4" />
        Marketing
      </TabsTrigger>
      <TabsTrigger value="recovery" className="flex items-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        Recuperação
      </TabsTrigger>
      <TabsTrigger value="conversion" className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4" />
        Conversão
      </TabsTrigger>
      <TabsTrigger value="integration" className="flex items-center gap-2">
        <Store className="w-4 h-4" />
        Integrações
      </TabsTrigger>
      <TabsTrigger value="coupons" className="flex items-center gap-2">
        <Gift className="w-4 h-4" />
        Cupons
      </TabsTrigger>
      <TabsTrigger value="settings" className="flex items-center gap-2">
        <Settings className="w-4 h-4" />
        Config
      </TabsTrigger>
    </TabsList>
  );
};

export default AdminTabs;
