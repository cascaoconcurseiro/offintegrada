
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
  Users,
  Home,
  Headphones
} from 'lucide-react';

const AdminTabs = () => {
  return (
    <div className="w-full overflow-x-auto">
      <TabsList className="grid grid-cols-7 lg:grid-cols-14 min-w-max">
        <TabsTrigger value="dashboard" className="flex items-center gap-2 text-xs px-2">
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </TabsTrigger>
        <TabsTrigger value="reports" className="flex items-center gap-2 text-xs px-2">
          <BarChart3 className="w-4 h-4" />
          <span className="hidden sm:inline">Relatórios</span>
        </TabsTrigger>
        <TabsTrigger value="products" className="flex items-center gap-2 text-xs px-2">
          <Package className="w-4 h-4" />
          <span className="hidden sm:inline">Produtos</span>
        </TabsTrigger>
        <TabsTrigger value="orders" className="flex items-center gap-2 text-xs px-2">
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Pedidos</span>
        </TabsTrigger>
        <TabsTrigger value="customers" className="flex items-center gap-2 text-xs px-2">
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Clientes</span>
        </TabsTrigger>
        <TabsTrigger value="payments" className="flex items-center gap-2 text-xs px-2">
          <CreditCard className="w-4 h-4" />
          <span className="hidden sm:inline">Pagamentos</span>
        </TabsTrigger>
        <TabsTrigger value="shipping" className="flex items-center gap-2 text-xs px-2">
          <Truck className="w-4 h-4" />
          <span className="hidden sm:inline">Envios</span>
        </TabsTrigger>
        <TabsTrigger value="marketing" className="flex items-center gap-2 text-xs px-2">
          <Target className="w-4 h-4" />
          <span className="hidden sm:inline">Marketing</span>
        </TabsTrigger>
        <TabsTrigger value="recovery" className="flex items-center gap-2 text-xs px-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Recuperação</span>
        </TabsTrigger>
        <TabsTrigger value="conversion" className="flex items-center gap-2 text-xs px-2">
          <TrendingUp className="w-4 h-4" />
          <span className="hidden sm:inline">Conversão</span>
        </TabsTrigger>
        <TabsTrigger value="integration" className="flex items-center gap-2 text-xs px-2">
          <Store className="w-4 h-4" />
          <span className="hidden sm:inline">Integrações</span>
        </TabsTrigger>
        <TabsTrigger value="coupons" className="flex items-center gap-2 text-xs px-2">
          <Gift className="w-4 h-4" />
          <span className="hidden sm:inline">Cupons</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2 text-xs px-2">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Config</span>
        </TabsTrigger>
        <TabsTrigger value="support" className="flex items-center gap-2 text-xs px-2">
          <Headphones className="w-4 h-4" />
          <span className="hidden sm:inline">Suporte</span>
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default AdminTabs;
