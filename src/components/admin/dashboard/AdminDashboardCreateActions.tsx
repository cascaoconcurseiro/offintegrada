
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Gift, ShoppingCart, BarChart3 } from 'lucide-react';

interface AdminDashboardCreateActionsProps {
  onNavigateToTab?: (tab: string) => void;
  onNewProduct?: () => void;
  onNewCoupon?: () => void;
}

const AdminDashboardCreateActions = ({ 
  onNavigateToTab, 
  onNewProduct, 
  onNewCoupon 
}: AdminDashboardCreateActionsProps) => {
  const handleQuickAction = (tab: string) => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-oswald">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-16 flex flex-col gap-2"
            onClick={onNewProduct}
          >
            <Plus className="w-5 h-5" />
            <span className="text-sm">Novo Produto</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col gap-2"
            onClick={onNewCoupon}
          >
            <Gift className="w-5 h-5" />
            <span className="text-sm">Novo Cupom</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col gap-2"
            onClick={() => handleQuickAction('orders')}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">Ver Pedidos</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-16 flex flex-col gap-2"
            onClick={() => handleQuickAction('reports')}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm">Relatórios</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardCreateActions;
