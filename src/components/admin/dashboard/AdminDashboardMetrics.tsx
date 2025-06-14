
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  TrendingUp, 
  CreditCard, 
  Truck, 
  Target 
} from 'lucide-react';

const dashboardStats = [
  { name: 'Vendas Hoje', value: 'R$ 12.847', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
  { name: 'Pedidos', value: '245', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-600' },
  { name: 'Clientes Ativos', value: '1.847', change: '+15.3%', icon: Users, color: 'text-purple-600' },
  { name: 'Produtos', value: '2.847', change: '+3.1%', icon: Package, color: 'text-orange-600' },
  { name: 'Taxa Conversão', value: '3.24%', change: '+0.8%', icon: TrendingUp, color: 'text-green-600' },
  { name: 'Ticket Médio', value: 'R$ 189', change: '+5.2%', icon: CreditCard, color: 'text-blue-600' },
  { name: 'Envios Pendentes', value: '23', change: '-12%', icon: Truck, color: 'text-yellow-600' },
  { name: 'Marketing ROI', value: '4.2x', change: '+18%', icon: Target, color: 'text-green-600' }
];

const AdminDashboardMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {dashboardStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <IconComponent className={`w-5 h-5 ${stat.color}`} />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 
                  stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AdminDashboardMetrics;
