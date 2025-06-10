
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
import AdminNavigationTabs from '@/components/admin/AdminNavigationTabs';
import OrderManagement from '@/components/admin/OrderManagement';
import CustomerManagement from '@/components/admin/CustomerManagement';
import AdminDashboardHome from '@/components/admin/AdminDashboardHome';
import AdminSupport from '@/components/admin/AdminSupport';
import AdminReports from '@/components/admin/AdminReports';
import CampaignFormModal from '@/components/admin/CampaignFormModal';
import AdminAuditReport from '@/components/admin/AdminAuditReport';
import NotificationSystem from '@/components/admin/NotificationSystem';
import AdvancedAnalytics from '@/components/admin/AdvancedAnalytics';
import AuditLogSystem from '@/components/admin/AuditLogSystem';
import DataBackupSystem from '@/components/admin/DataBackupSystem';
import UserPermissionSystem from '@/components/admin/UserPermissionSystem';
import MarketingAutomation from '@/components/admin/MarketingAutomation';
import CustomReports from '@/components/admin/CustomReports';
import { Button } from '@/components/ui/button';
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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <AdminDashboardHome 
            onNavigateToTab={handleTabChange}
            onNewProduct={handleNewProduct}
            onNewCoupon={handleNewCoupon}
          />
        );
      
      case 'audit':
        return <AdminAuditReport />;
      
      case 'analytics':
        return <AdvancedAnalytics />;
      
      case 'notifications':
        return <NotificationSystem />;
      
      case 'logs':
        return <AuditLogSystem />;
      
      case 'backup':
        return <DataBackupSystem />;
      
      case 'permissions':
        return <UserPermissionSystem />;
      
      case 'reports':
        return <AdminReports onBackToDashboard={() => setActiveTab('dashboard')} />;
      
      case 'products':
        return <ProductManagement />;
      
      case 'orders':
        return <OrderManagement onBackToDashboard={() => setActiveTab('dashboard')} />;
      
      case 'customers':
        return <CustomerManagement onBackToDashboard={() => setActiveTab('dashboard')} />;
      
      case 'payments':
        return <PaymentIntegrations />;
      
      case 'shipping':
        return <ShippingIntegrations />;
      
      case 'marketing':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Integrações de Marketing</h3>
                <MarketingIntegrations />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Automação de Marketing</h3>
                <MarketingAutomation />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Relatórios Personalizados</h3>
              <CustomReports />
            </div>
          </div>
        );
      
      case 'recovery':
        return <CartRecovery />;
      
      case 'conversion':
        return <ConversionOptimization />;
      
      case 'integration':
        return <EcommerceIntegration />;
      
      case 'coupons':
        return <AdvancedCouponSystem />;
      
      case 'settings':
        return <AdminSettingsAdvanced />;
      
      case 'support':
        return <AdminSupport onBackToDashboard={() => setActiveTab('dashboard')} />;
      
      default:
        return <AdminDashboardHome onNavigateToTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header com Sistema de Notificações */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-oswald font-bold uppercase tracking-wider">
              Painel Administrativo
            </h1>
            <p className="text-gray-600">Sistema completo de gestão e-commerce</p>
          </div>
          <div className="flex items-center gap-4">
            <NotificationSystem />
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Sair
            </Button>
          </div>
        </div>

        {/* Navegação responsiva */}
        <div className="mb-6">
          <AdminNavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Conteúdo principal */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>

      {/* Modais */}
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
