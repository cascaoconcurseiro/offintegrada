
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
import AdminTabs from '@/components/admin/AdminTabs';
import OrderManagement from '@/components/admin/OrderManagement';
import CustomerManagement from '@/components/admin/CustomerManagement';
import AdminDashboardHome from '@/components/admin/AdminDashboardHome';
import AdminSupport from '@/components/admin/AdminSupport';
import AdminReports from '@/components/admin/AdminReports';
import CampaignFormModal from '@/components/admin/CampaignFormModal';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

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

        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <AdminTabs />
          
          <div className="mt-6">
            <TabsContent value="dashboard" className="space-y-0">
              <AdminDashboardHome onNavigateToTab={handleTabChange} />
            </TabsContent>

            <TabsContent value="reports" className="space-y-0">
              <AdminReports onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="products" className="space-y-0">
              <ProductManagement />
            </TabsContent>

            <TabsContent value="orders" className="space-y-0">
              <OrderManagement onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="customers" className="space-y-0">
              <CustomerManagement onBackToDashboard={handleBackToDashboard} />
            </TabsContent>

            <TabsContent value="payments" className="space-y-0">
              <PaymentIntegrations />
            </TabsContent>

            <TabsContent value="shipping" className="space-y-0">
              <ShippingIntegrations />
            </TabsContent>

            <TabsContent value="marketing" className="space-y-0">
              <MarketingIntegrations />
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
                  <button 
                    onClick={handleNewCampaign}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Nova Campanha
                  </button>
                </div>
                <CartRecovery />
              </div>
            </TabsContent>
            
            <TabsContent value="conversion" className="space-y-0">
              <ConversionOptimization />
            </TabsContent>
            
            <TabsContent value="integration" className="space-y-0">
              <EcommerceIntegration />
            </TabsContent>

            <TabsContent value="coupons" className="space-y-0">
              <AdvancedCouponSystem />
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-0">
              <AdminSettingsAdvanced />
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
