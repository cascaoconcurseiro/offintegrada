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
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCouponForm, setShowCouponForm] = useState(false);

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
    toast({
      title: "Formulário de Produto",
      description: "Abrindo formulário completo de produto!",
    });
  };

  const handleNewCoupon = () => {
    setShowCouponForm(true);
    toast({
      title: "Sistema de Cupons",
      description: "Abrindo sistema avançado de cupons!",
    });
  };

  const handleReports = () => {
    setActiveTab('reports');
    toast({
      title: "Relatórios Avançados",
      description: "Acessando central de relatórios e analytics profissional!",
    });
  };

  const handleSupport = () => {
    toast({
      title: "Central de Suporte 24/7",
      description: "Sistema de suporte profissional ativado!",
    });
    const supportEmail = 'suporte@offseason.com.br';
    const subject = encodeURIComponent('Suporte Administrativo - Urgente');
    const body = encodeURIComponent(`
Olá equipe de suporte!

Preciso de assistência com o painel administrativo.

Detalhes:
- Data/Hora: ${new Date().toLocaleString('pt-BR')}
- Usuário: Administrador
- Seção: Dashboard Administrativo
- Prioridade: Alta

Atenciosamente,
Equipe OffSeason
    `);
    
    window.open(`mailto:${supportEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleMarketing = () => {
    setActiveTab('marketing');
    toast({
      title: "Marketing Intelligence Center",
      description: "Acessando central de marketing multi-plataforma!",
    });
  };

  const handleCampaigns = () => {
    setActiveTab('marketing');
    toast({
      title: "Gerenciador de Campanhas 360°",
      description: "Sistema completo de campanhas ativado!",
    });
  };

  const handleSettings = () => {
    setActiveTab('settings');
    toast({
      title: "Configurações Avançadas",
      description: "Acessando centro de controle completo!",
    });
  };

  const handleIntegrations = () => {
    setActiveTab('integration');
    toast({
      title: "Hub de Integrações",
      description: "Central de integrações ativada!",
    });
  };

  const handleAnalytics = () => {
    setActiveTab('reports');
    toast({
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas em tempo real!",
    });
  };

  const handleOrders = () => {
    setActiveTab('orders');
    toast({
      title: "Gestão de Pedidos",
      description: "Sistema completo de gestão de pedidos!",
    });
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8">
        <AdminHeader onLogout={() => setIsAuthenticated(false)} onRefresh={() => handleTabChange('reports')} />

        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
          <AdminTabs />
          
          <TabsContent value="dashboard">
            <AdminDashboardHome />
          </TabsContent>

          <TabsContent value="reports">
            <AdminReports />
          </TabsContent>

          <TabsContent value="products">
            <ProductManagement />
          </TabsContent>

          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>

          <TabsContent value="customers">
            <CustomerManagement />
          </TabsContent>

          <TabsContent value="payments">
            <PaymentIntegrations />
          </TabsContent>

          <TabsContent value="shipping">
            <ShippingIntegrations />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingIntegrations />
          </TabsContent>

          <TabsContent value="recovery">
            <CartRecovery />
          </TabsContent>
          
          <TabsContent value="conversion">
            <ConversionOptimization />
          </TabsContent>
          
          <TabsContent value="integration">
            <EcommerceIntegration />
          </TabsContent>

          <TabsContent value="coupons">
            <AdvancedCouponSystem />
          </TabsContent>
          
          <TabsContent value="settings">
            <AdminSettingsAdvanced />
          </TabsContent>

          <TabsContent value="support">
            <AdminSupport />
          </TabsContent>
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

      <Footer />
    </div>
  );
};

export default AdminDashboard;
