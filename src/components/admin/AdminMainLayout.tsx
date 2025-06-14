
import React from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import Footer from '@/components/Footer';
import AdminNavigationTabs from '@/components/admin/AdminNavigationTabs';
import NotificationSystem from '@/components/admin/NotificationSystem'; // Import corrigido, era NotificationSystem from '@/components/admin/NotificationSystem';
import { Button } from '@/components/ui/button';

interface AdminMainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const AdminMainLayout = ({
  children,
  activeTab,
  onTabChange,
  onLogout,
}: AdminMainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-oswald font-bold uppercase tracking-wider">
              Painel Administrativo
            </h1>
            <p className="text-gray-600">Sistema completo de gestão e-commerce</p>
          </div>
          <div className="flex items-center gap-4">
            <NotificationSystem />
            <Button variant="outline" onClick={onLogout}>
              Sair
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <AdminNavigationTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminMainLayout;
