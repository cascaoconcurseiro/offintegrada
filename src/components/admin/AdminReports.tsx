import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AdminSectionHeader from './AdminSectionHeader';
import { 
  BarChart3, 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp,
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  Eye
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AdminReportsProps {
  onBackToDashboard: () => void;
}

const AdminReports = ({ onBackToDashboard }: AdminReportsProps) => {
  const [dateRange, setDateRange] = useState({
    start: '2024-01-01',
    end: '2024-12-31'
  });

  const reportTypes = [
    { 
      name: 'Relatório de Vendas', 
      description: 'Vendas detalhadas por período',
      icon: DollarSign,
      type: 'sales'
    },
    { 
      name: 'Relatório de Produtos', 
      description: 'Performance de produtos e estoque',
      icon: Package,
      type: 'products'
    },
    { 
      name: 'Relatório de Clientes', 
      description: 'Comportamento e dados dos clientes',
      icon: Users,
      type: 'customers'
    },
    { 
      name: 'Relatório de Pedidos', 
      description: 'Análise completa de pedidos',
      icon: ShoppingCart,
      type: 'orders'
    }
  ];

  const quickStats = [
    { label: 'Vendas Hoje', value: 'R$ 12.847', change: '+12.5%', color: 'text-green-600' },
    { label: 'Pedidos Mês', value: '2.847', change: '+18.2%', color: 'text-blue-600' },
    { label: 'Ticket Médio', value: 'R$ 189', change: '+5.2%', color: 'text-purple-600' },
    { label: 'Taxa Conversão', value: '3.24%', change: '+0.8%', color: 'text-green-600' }
  ];


  const handleGenerateReport = (type: string) => {
    toast({
      title: "Gerando relatório...",
      description: `Relatório de ${type} será gerado em até 3 minutos. (Simulação)`,
    });
  };

  const handleQuickExport = () => {
    toast({
      title: "Exportação rápida",
      description: "Dados exportados para Excel com sucesso! (Simulação)",
    });
  };

  const handleApplyDateFilter = () => {
    toast({
      title: "Filtro Aplicado",
      description: `Filtro de data de ${dateRange.start} a ${dateRange.end} aplicado. (Simulação)`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <AdminSectionHeader
        title="Central de Relatórios Avançados"
        description="Analytics e relatórios executivos em tempo real"
        onBackToDashboard={onBackToDashboard}
        onRefresh={() => toast({ title: "Dados atualizados! (Simulação)" })}
      >
        <Button variant="outline" onClick={handleQuickExport}>
          <Download className="w-4 h-4 mr-2" />
          Exportar Dados
        </Button>
      </AdminSectionHeader>

      <div className="space-y-6">
        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className={`w-5 h-5 ${stat.color}`} />
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filtros de Data */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Período dos Relatórios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Data Início</label>
                <Input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Data Fim</label>
                <Input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                />
              </div>
              <Button className="px-8" onClick={handleApplyDateFilter}>
                <Eye className="w-4 h-4 mr-2" />
                Aplicar Filtro
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Relatórios */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Gerar Relatórios Personalizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {reportTypes.map((report, index) => {
                const IconComponent = report.icon;
                return (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-medium">{report.name}</h3>
                        <p className="text-xs text-gray-500">{report.description}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleGenerateReport(report.type)}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Gerar Relatório
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReports;
