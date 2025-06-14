
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Package, 
  DollarSign, 
  Target, 
  Activity 
} from 'lucide-react';

interface AdminDashboardQuickNavProps {
  onNavigateToTab?: (tab: string) => void;
}

const quickActions = [
  { name: 'Vendas', description: 'Relatório de vendas em tempo real', icon: BarChart3, tab: 'reports' },
  { name: 'Clientes', description: 'Gestão completa de clientes', icon: Users, tab: 'customers' },
  { name: 'Produtos', description: 'Catálogo e estoque', icon: Package, tab: 'products' },
  { name: 'Marketing', description: 'Campanhas e automação', icon: Target, tab: 'marketing' },
  { name: 'Operações', description: 'Pedidos e fulfillment', icon: Activity, tab: 'orders' },
  { name: 'Financeiro', description: 'Pagamentos e relatórios', icon: DollarSign, tab: 'payments' }
];

const AdminDashboardQuickNav = ({ onNavigateToTab }: AdminDashboardQuickNavProps) => {
  const handleQuickAction = (tab: string) => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-oswald">Acesso Rápido - Seções Principais</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button 
                key={index} 
                variant="outline" 
                className="h-20 flex flex-col gap-2 items-center justify-center" // Added items-center justify-center
                onClick={() => handleQuickAction(action.tab)}
              >
                <IconComponent className="w-6 h-6" />
                <div className="text-center">
                  <p className="font-medium text-sm">{action.name}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardQuickNav;
