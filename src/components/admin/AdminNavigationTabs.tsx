import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
    { value: "notifications", label: "Notificações", icon: Bell },
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

  const activeTabData = tabs.find(tab => tab.value === activeTab);

  const handleTabClick = (tabValue: string) => {
    onTabChange(tabValue);
    setIsOpen(false);
  };

  return (
    <>
      {/* Unified Navigation for all screen sizes using Sheet */}
      <div className="block"> {/* Changed from lg:hidden to block to be always visible */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between md:w-auto md:min-w-[200px]"> {/* Added md styles for better desktop trigger appearance */}
              <div className="flex items-center gap-2">
                {activeTabData ? <activeTabData.icon className="w-4 h-4" /> : <Menu className="w-4 h-4" /> } {/* Fallback to Menu icon if no active tab */}
                <span>{activeTabData?.label || "Navegação"}</span> {/* Fallback label */}
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 md:w-80 p-0"> {/* Adjusted width and removed padding for full control */}
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Navegação Admin</h3>
              </div>
              {/* Use ScrollArea within the SheetContent if the list of tabs is long */}
              <ScrollArea className="flex-grow"> 
                <div className="p-4 space-y-1">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <Button
                        key={tab.value}
                        variant={activeTab === tab.value ? "secondary" : "ghost"} // Using secondary for active for better contrast in sheet
                        onClick={() => handleTabClick(tab.value)}
                        className="w-full justify-start gap-3 text-sm h-10" // Standardized height and text size
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
