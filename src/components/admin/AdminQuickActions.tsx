
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Plus,
  Gift,
  FileText,
  Headphones,
  Megaphone,
  Target,
  Store,
  ShoppingCart,
  Settings
} from 'lucide-react';

interface AdminQuickActionsProps {
  onNewProduct: () => void;
  onNewCoupon: () => void;
  onReports: () => void;
  onSupport: () => void;
  onMarketing: () => void;
  onCampaigns: () => void;
  onIntegrations: () => void;
  onOrders: () => void;
  onSettings: () => void;
}

const AdminQuickActions = ({
  onNewProduct,
  onNewCoupon,
  onReports,
  onSupport,
  onMarketing,
  onCampaigns,
  onIntegrations,
  onOrders,
  onSettings
}: AdminQuickActionsProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 mb-8">
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onNewProduct}>
        <Plus className="w-5 h-5" />
        <span className="text-xs">Novo Produto</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onNewCoupon}>
        <Gift className="w-5 h-5" />
        <span className="text-xs">Cupom Avançado</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onReports}>
        <FileText className="w-5 h-5" />
        <span className="text-xs">Relatórios</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onSupport}>
        <Headphones className="w-5 h-5" />
        <span className="text-xs">Suporte 24/7</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onMarketing}>
        <Megaphone className="w-5 h-5" />
        <span className="text-xs">Marketing 360°</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onCampaigns}>
        <Target className="w-5 h-5" />
        <span className="text-xs">Campanhas</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onIntegrations}>
        <Store className="w-5 h-5" />
        <span className="text-xs">Integrações</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onOrders}>
        <ShoppingCart className="w-5 h-5" />
        <span className="text-xs">Pedidos</span>
      </Button>
      <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={onSettings}>
        <Settings className="w-5 h-5" />
        <span className="text-xs">Config Avançada</span>
      </Button>
    </div>
  );
};

export default AdminQuickActions;
