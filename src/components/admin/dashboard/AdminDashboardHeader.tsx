
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast'; // Importar o hook de toast

interface AdminDashboardHeaderProps {
  onNavigateToTab?: (tab: string) => void;
}

const AdminDashboardHeader = ({ onNavigateToTab }: AdminDashboardHeaderProps) => {
  const handleNavigateToReports = () => {
    if (onNavigateToTab) {
      onNavigateToTab('reports');
    }
  };

  const handleRefreshDashboard = () => {
    // Em uma aplicação real, aqui você chamaria a função para buscar/atualizar os dados do dashboard.
    // Por enquanto, vamos apenas simular com um toast.
    console.log('Simulando atualização do dashboard...');
    toast({
      title: "Dashboard Atualizado",
      description: "Os dados do dashboard foram atualizados (simulação).",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
          Dashboard Executivo
        </h2>
        <p className="text-gray-600">
          Visão geral completa do negócio em tempo real
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={handleRefreshDashboard}> {/* Alterado o onClick */}
          <RefreshCw className="w-4 h-4 mr-2" />
          Atualizar Dashboard
        </Button>
        <Button onClick={handleNavigateToReports}> {/* Mantido o onClick original para este botão */}
          <BarChart3 className="w-4 h-4 mr-2" />
          Analytics Avançado
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
