
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetDescription, 
  SheetHeader, // Adicionado SheetHeader
  SheetTitle    // Adicionado SheetTitle
} from '@/components/ui/sheet'; 
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
  Headphones,
  Menu,
  ChevronDown,
  Shield,
  Bell,
  Database,
  Activity,
  Lock
} from 'lucide-react';

interface AdminNavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminNavigationTabs = ({ activeTab, onTabChange }: AdminNavigationTabsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { value: "dashboard", label: "Dashboard", icon: Home },
    { value: "audit", label: "Auditoria", icon: Shield },
    { value: "analytics", label: "Analytics", icon: Activity },
    { value: "logs", label: "Logs", icon: Database },
    { value: "backup", label: "Backup", icon: Database },
    { value: "permissions", label: "Permissões", icon: Lock },
    { value: "reports", label: "Relatórios", icon: BarChart3 },
    { value: "products", label: "Produtos", icon: Package },
    { value: "orders", label: "Pedidos", icon: ShoppingCart },
    { value: "customers", label: "Clientes", icon: Users },
    { value: "payments", label: "Pagamentos", icon: CreditCard },
    { value: "shipping", label: "Envios", icon: Truck },
    { value: "marketing", label: "Marketing", icon: Target },
    { value: "recovery", label: "Recuperação", icon: ShoppingBag },
    { value: "conversion", label: "Conversão", icon: TrendingUp },
    { value: "integration", label: "Integrações", icon: Store },
    { value: "coupons", label: "Cupons", icon: Gift },
    { value: "settings", label: "Config", icon: Settings },
    { value: "support", label: "Suporte", icon: Headphones }
  ];

  // Removido activeTabData daqui, pois o label do botão será fixo.
  // const activeTabData = tabs.find(tab => tab.value === activeTab);

  const handleTabClick = (tabValue: string) => {
    onTabChange(tabValue);
    setIsOpen(false); // Fecha o Sheet ao selecionar uma aba
  };

  return (
    <>
      <div className="block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between md:w-auto md:min-w-[220px] px-4 py-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-5 h-5" /> 
                {/* Texto do botão alterado para ser fixo */}
                <span>Navegação Principal</span>
              </div>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 md:w-80 p-0">
            {/* Adicionando SheetDescription para acessibilidade */}
            <SheetDescription className="sr-only">Menu de navegação principal do painel administrativo.</SheetDescription>
            <div className="flex flex-col h-full">
              {/* Título do menu agora usa SheetHeader e SheetTitle */}
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="text-lg font-semibold text-left">Navegação Admin</SheetTitle>
              </SheetHeader>
              <ScrollArea className="flex-grow"> 
                <div className="p-4 space-y-1">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <Button
                        key={tab.value}
                        variant={activeTab === tab.value ? "secondary" : "ghost"}
                        onClick={() => handleTabClick(tab.value)}
                        className="w-full justify-start gap-3 text-sm h-10"
                      >
                        <IconComponent className="w-4 h-4" />
                        {tab.label}
                      </Button>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default AdminNavigationTabs;
