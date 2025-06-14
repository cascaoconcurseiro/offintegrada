
import React from 'react';
import ConversionOptimization from '@/components/ConversionOptimization';
import EcommerceIntegration from '@/components/EcommerceIntegration';
import AdvancedCouponSystem from '@/components/AdvancedCouponSystem';
import PaymentIntegrations from '@/components/PaymentIntegrations';
import ShippingIntegrations from '@/components/ShippingIntegrations';
import MarketingIntegrations from '@/components/MarketingIntegrations';
import CartRecovery from '@/components/CartRecovery';
import ProductManagement from '@/components/ProductManagement';
import AdminSettingsAdvanced from '@/components/AdminSettingsAdvanced';
import AdminDashboardHome from '@/components/admin/AdminDashboardHome';
import AdminSupport from '@/components/admin/AdminSupport';
import AdminReports from '@/components/admin/AdminReports';
import AdminAuditReport from '@/components/admin/AdminAuditReport';
import NotificationSystem from '@/components/admin/NotificationSystem'; // Embora já exista no layout, pode ser usado em algum componente específico se necessário, mantendo por precaução se alguma aba o usa diretamente.
import AdvancedAnalytics from '@/components/admin/AdvancedAnalytics';
import AuditLogSystem from '@/components/admin/AuditLogSystem';
import DataBackupSystem from '@/components/admin/DataBackupSystem';
import UserPermissionSystem from '@/components/admin/UserPermissionSystem';
import MarketingAutomation from '@/components/admin/MarketingAutomation';
import CustomReports from '@/components/admin/CustomReports';
import OrderManagement from '@/components/admin/OrderManagement';
import CustomerManagement from '@/components/admin/CustomerManagement';

interface AdminPageContentProps {
  activeTab: string;
  onNavigateToTab: (tab: string) => void;
  onNewProduct: () => void;
  onNewCoupon: () => void;
  // onNewCampaign é usado em AdminDashboardHome, mas AdminDashboardHome não é mais chamado com onNewCampaign aqui diretamente
}

const AdminPageContent = ({
  activeTab,
  onNavigateToTab,
  onNewProduct,
  onNewCoupon,
}: AdminPageContentProps) => {
  switch (activeTab) {
    case 'dashboard':
      return (
        <AdminDashboardHome 
          onNavigateToTab={onNavigateToTab}
          onNewProduct={onNewProduct}
          onNewCoupon={onNewCoupon}
          // onNewCampaign will be handled by AdminDashboardHome internally or passed if needed
        />
      );
    case 'audit':
      return <AdminAuditReport />;
    case 'analytics':
      return <AdvancedAnalytics />;
    // case 'notifications': // NotificationSystem is part of the main layout now. If a tab specifically shows more notifications, this can be added back.
    //   return <NotificationSystem />; 
    case 'logs':
      return <AuditLogSystem />;
    case 'backup':
      return <DataBackupSystem />;
    case 'permissions':
      return <UserPermissionSystem />;
    case 'reports':
      return <AdminReports onBackToDashboard={() => onNavigateToTab('dashboard')} />;
    case 'products':
      return <ProductManagement />;
    case 'orders':
      return <OrderManagement onBackToDashboard={() => onNavigateToTab('dashboard')} />;
    case 'customers':
      return <CustomerManagement onBackToDashboard={() => onNavigateToTab('dashboard')} />;
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
      return <AdminSupport onBackToDashboard={() => onNavigateToTab('dashboard')} />;
    default:
      return <AdminDashboardHome onNavigateToTab={onNavigateToTab} onNewProduct={onNewProduct} onNewCoupon={onNewCoupon} />;
  }
};

export default AdminPageContent;
