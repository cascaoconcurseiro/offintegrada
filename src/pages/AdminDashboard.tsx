
import React, { useState } from 'react';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminMainLayout from '@/components/admin/AdminMainLayout';
import AdminPageContent from '@/components/admin/AdminPageContent';
import ProductFormModal from '@/components/ProductFormModal';
import CouponFormModal from '@/components/CouponFormModal';
import CampaignFormModal from '@/components/admin/CampaignFormModal';
import { toast } from '@/hooks/use-toast';
// Importações desnecessárias como HeaderEnhanced, Footer, AdminNavigationTabs, etc., foram removidas
// pois agora são gerenciadas por AdminMainLayout.
// Componentes de conteúdo específico (ConversionOptimization, etc.) são gerenciados por AdminPageContent.

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);

  const handleLogin = (password: string) => {
    // Senha para demonstração. Em um ambiente real, use autenticação segura.
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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard'); // Reset tab on logout
    toast({
      title: "Logout realizado",
      description: "Você saiu do painel administrativo.",
    });
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

  return (
    <>
      <AdminMainLayout
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onLogout={handleLogout}
      >
        <AdminPageContent
          activeTab={activeTab}
          onNavigateToTab={handleTabChange}
          onNewProduct={handleNewProduct}
          onNewCoupon={handleNewCoupon}
          // onNewCampaign é gerenciado por AdminDashboardHome, que é chamado dentro de AdminPageContent
        />
      </AdminMainLayout>

      {/* Modais permanecem aqui, pois são sobreposições globais */}
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
        // Passar onNewCampaign aqui se CampaignFormModal precisar dele diretamente
      />
    </>
  );
};

export default AdminDashboard;
