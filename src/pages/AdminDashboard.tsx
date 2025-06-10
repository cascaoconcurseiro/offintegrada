import React, { useState } from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import Footer from '@/components/Footer';
import ConversionOptimization from '@/components/ConversionOptimization';
import EcommerceIntegration from '@/components/EcommerceIntegration';
import AdvancedCouponSystem from '@/components/AdvancedCouponSystem';
import PaymentIntegrations from '@/components/PaymentIntegrations';
import ShippingIntegrations from '@/components/ShippingIntegrations';
import MarketingIntegrations from '@/components/MarketingIntegrations';
import CartRecovery from '@/components/CartRecovery';
import ProductManagement from '@/components/ProductManagement';
import AdminSettingsAdvanced from '@/components/AdminSettingsAdvanced';
import ProductFormModal from '@/components/ProductFormModal';
import CouponFormModal from '@/components/CouponFormModal';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminNavigationTabs from '@/components/admin/AdminNavigationTabs';
import OrderManagement from '@/components/admin/OrderManagement';
import CustomerManagement from '@/components/admin/CustomerManagement';
import AdminDashboardHome from '@/components/admin/AdminDashboardHome';
import AdminSupport from '@/components/admin/AdminSupport';
import AdminReports from '@/components/admin/AdminReports';
import CampaignFormModal from '@/components/admin/CampaignFormModal';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

import AdminAuditReport from '@/components/admin/AdminAuditReport';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);

  const handleLogin = (password: string) => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Acesso autorizado",
        description: "Bem-vindo ao painel administrativo profissional!",
      });
      return true;
    } else {
      toast({
        title: "Acesso negado",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive"
      });
      return false;
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Navegando para aba: ${tab}`);
  };

  const handleBackToDashboard = () => {
    setActiveTab('dashboard');
  };

  const handleNewProduct = () => {
    setShowProductForm(true);
  };

  const handleNewCoupon = () => {
    setShowCouponForm(true);
  };

  const handleNewCampaign = () => {
    setShowCampaignForm(true);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <AdminHeader onLogout={() => setIsAuthenticated(false)} onRefresh={() => handleTabChange('reports')} />

        <div className="mb-6">
          <AdminNavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <div className="mt-6">
            <TabsContent value="dashboard" className="space-y-0">
              <AdminDashboardHome 
                onNavigateToTab={handleTabChange}
                onNewProduct={handleNewProduct}
                onNewCoupon={handleNewCoupon}
              />
            </TabsContent>

            <TabsContent value="audit" className="space-y-0">
              <AdminAuditReport />
            </TabsContent>

            <TabsContent value="reports" className="space-y-0">
              <AdminReports onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="products" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Gestão de Produtos
                    </h2>
                    <p className="text-gray-600">
                      Catálogo completo e controle de estoque
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleBackToDashboard}>
                      Voltar ao Dashboard
                    </Button>
                    <Button onClick={handleNewProduct}>
                      Novo Produto
                    </Button>
                  </div>
                </div>
                <ProductManagement />
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-0">
              <OrderManagement onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="customers" className="space-y-0">
              <CustomerManagement onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="payments" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Integrações de Pagamento
                    </h2>
                    <p className="text-gray-600">
                      Configure métodos de pagamento e gateways
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <PaymentIntegrations />
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Integrações de Envio
                    </h2>
                    <p className="text-gray-600">
                      Configure transportadoras e métodos de envio
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <ShippingIntegrations />
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Marketing 360°
                    </h2>
                    <p className="text-gray-600">
                      Automação, campanhas e integrações de marketing
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <MarketingIntegrations />
              </div>
            </TabsContent>

            <TabsContent value="recovery" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Recuperação de Carrinho
                    </h2>
                    <p className="text-gray-600">
                      Sistema inteligente de recuperação multi-canal
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleBackToDashboard}>
                      Voltar ao Dashboard
                    </Button>
                    <Button onClick={handleNewCampaign}>
                      Nova Campanha
                    </Button>
                  </div>
                </div>
                <CartRecovery />
              </div>
            </TabsContent>
            
            <TabsContent value="conversion" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Otimização de Conversão
                    </h2>
                    <p className="text-gray-600">
                      Ferramentas avançadas para aumentar conversões
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <ConversionOptimization />
              </div>
            </TabsContent>
            
            <TabsContent value="integration" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Integrações E-commerce
                    </h2>
                    <p className="text-gray-600">
                      Conecte com marketplaces e plataformas
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <EcommerceIntegration />
              </div>
            </TabsContent>

            <TabsContent value="coupons" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Sistema de Cupons Avançado
                    </h2>
                    <p className="text-gray-600">
                      Crie e gerencie cupons inteligentes
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleBackToDashboard}>
                      Voltar ao Dashboard
                    </Button>
                    <Button onClick={handleNewCoupon}>
                      Novo Cupom
                    </Button>
                  </div>
                </div>
                <AdvancedCouponSystem />
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
                      Configurações Avançadas
                    </h2>
                    <p className="text-gray-600">
                      Configurações gerais da plataforma
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleBackToDashboard}>
                    Voltar ao Dashboard
                  </Button>
                </div>
                <AdminSettingsAdvanced />
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-0">
              <AdminSupport onBackToDashboard={handleBackToDashboard} />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <ProductFormModal 
        open={showProductForm} 
        onOpenChange={setShowProductForm} 
      />
      
      <CouponFormModal 
        open={showCouponForm} 
        onOpenChange={setShowCouponForm} 
      />

      <CampaignFormModal 
        open={showCampaignForm} 
        onOpenChange={setShowCampaignForm} 
      />

      <Footer />
    </div>
  );
};

export default AdminDashboard;
