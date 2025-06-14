
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, RefreshCw } from 'lucide-react';

interface AdminDashboardHeaderProps {
  onNavigateToTab?: (tab: string) => void;
}

const AdminDashboardHeader = ({ onNavigateToTab }: AdminDashboardHeaderProps) => {
  const handleQuickAction = (tab: string) => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
          Dashboard Executivo
        </h2>
        <p className="text-gray-600">
          Visão geral completa do negócio em tempo real
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => handleQuickAction('reports')}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Atualizar Dashboard
        </Button>
        <Button onClick={() => handleQuickAction('reports')}>
          <BarChart3 className="w-4 h-4 mr-2" />
          Analytics Avançado
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
