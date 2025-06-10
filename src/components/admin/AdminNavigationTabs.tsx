
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
  Shield
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
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ScrollArea className="w-full">
          <div className="flex gap-2 p-2 bg-white border rounded-lg shadow-sm overflow-x-auto min-w-max">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.value}
                  variant={activeTab === tab.value ? "default" : "ghost"}
                  onClick={() => handleTabClick(tab.value)}
                  className="flex items-center gap-2 whitespace-nowrap px-4 py-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                {activeTabData && <activeTabData.icon className="w-4 h-4" />}
                <span>{activeTabData?.label || "Selecionar"}</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-4">Navegação Admin</h3>
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <Button
                      key={tab.value}
                      variant={activeTab === tab.value ? "default" : "ghost"}
                      onClick={() => handleTabClick(tab.value)}
                      className="w-full justify-start gap-3"
                    >
                      <IconComponent className="w-4 h-4" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Tablet Navigation */}
      <div className="hidden md:block lg:hidden">
        <ScrollArea className="w-full">
          <div className="flex gap-1 p-2 bg-white border rounded-lg shadow-sm overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.value}
                  variant={activeTab === tab.value ? "default" : "ghost"}
                  onClick={() => handleTabClick(tab.value)}
                  className="flex flex-col items-center gap-1 px-3 py-2 min-w-[80px]"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-xs">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default AdminNavigationTabs;
