
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  Eye,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminReports = () => {
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
    },
    { 
      name: 'Relatório Financeiro', 
      description: 'Fluxo de caixa e resultados',
      icon: TrendingUp,
      type: 'financial'
    },
    { 
      name: 'Relatório de Marketing', 
      description: 'ROI e performance das campanhas',
      icon: BarChart3,
      type: 'marketing'
    }
  ];

  const quickStats = [
    { label: 'Vendas Hoje', value: 'R$ 12.847', change: '+12.5%', color: 'text-green-600' },
    { label: 'Pedidos Mês', value: '2.847', change: '+18.2%', color: 'text-blue-600' },
    { label: 'Ticket Médio', value: 'R$ 189', change: '+5.2%', color: 'text-purple-600' },
    { label: 'Taxa Conversão', value: '3.24%', change: '+0.8%', color: 'text-green-600' }
  ];

  const recentReports = [
    { name: 'Vendas Dezembro 2024', date: '2024-12-01', size: '2.4 MB', status: 'ready' },
    { name: 'Produtos Top Vendas', date: '2024-11-30', size: '1.8 MB', status: 'ready' },
    { name: 'Clientes Premium', date: '2024-11-29', size: '956 KB', status: 'processing' },
    { name: 'ROI Marketing Nov', date: '2024-11-28', size: '1.2 MB', status: 'ready' }
  ];

  const handleGenerateReport = (type: string) => {
    toast({
      title: "Gerando relatório...",
      description: `Relatório de ${type} será gerado em até 3 minutos.`,
    });

    // Simular geração de relatório
    setTimeout(() => {
      toast({
        title: "Relatório pronto!",
        description: "Relatório gerado com sucesso. Clique para fazer download.",
      });
    }, 3000);
  };

  const handleDownloadReport = (reportName: string) => {
    toast({
      title: "Download iniciado",
      description: `Fazendo download de ${reportName}`,
    });
  };

  const handleQuickExport = () => {
    toast({
      title: "Exportação rápida",
      description: "Dados exportados para Excel com sucesso!",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Central de Relatórios Avançados
          </h2>
          <p className="text-gray-600">
            Analytics e relatórios executivos em tempo real
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleQuickExport}>
            <Download className="w-4 h-4 mr-2" />
            Exportar Dados
          </Button>
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar Dados
          </Button>
        </div>
      </div>

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
            <Button className="px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Relatórios Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="font-oswald">Relatórios Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-500">
                      {report.date} • {report.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded ${
                    report.status === 'ready' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status === 'ready' ? 'Pronto' : 'Processando'}
                  </span>
                  {report.status === 'ready' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDownloadReport(report.name)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;
