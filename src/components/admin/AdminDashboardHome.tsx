
import React from 'react';
import AdminDashboardHeader from '@/components/admin/dashboard/AdminDashboardHeader';
import AdminDashboardCreateActions from '@/components/admin/dashboard/AdminDashboardCreateActions';
import AdminDashboardMetrics from '@/components/admin/dashboard/AdminDashboardMetrics';
import AdminDashboardQuickNav from '@/components/admin/dashboard/AdminDashboardQuickNav';
import AdminDashboardActivity from '@/components/admin/dashboard/AdminDashboardActivity';
import AdminDashboardPredictions from '@/components/admin/dashboard/AdminDashboardPredictions';

interface AdminDashboardHomeProps {
  onNavigateToTab?: (tab: string) => void;
  onNewProduct?: () => void;
  onNewCoupon?: () => void;
}

const AdminDashboardHome = ({ 
  onNavigateToTab, 
  onNewProduct, 
  onNewCoupon 
}: AdminDashboardHomeProps) => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader onNavigateToTab={onNavigateToTab} />
      <AdminDashboardCreateActions 
        onNewProduct={onNewProduct} 
        onNewCoupon={onNewCoupon} 
        onNavigateToTab={onNavigateToTab} 
      />
      <AdminDashboardMetrics />
      <AdminDashboardQuickNav onNavigateToTab={onNavigateToTab} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminDashboardActivity />
        <AdminDashboardPredictions />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
