
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter,
  Plus,
  Edit,
  Trash2,
  Play,
  Settings,
  FileText,
  TrendingUp,
  Users,
  ShoppingCart
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CustomReport {
  id: string;
  name: string;
  description: string;
  type: 'sales' | 'customers' | 'products' | 'marketing';
  schedule: 'manual' | 'daily' | 'weekly' | 'monthly';
  format: 'pdf' | 'excel' | 'csv';
  lastGenerated: Date;
  status: 'active' | 'inactive';
}

const CustomReports = () => {
  const [reports, setReports] = useState<CustomReport[]>([
    {
      id: '1',
      name: 'Relatório de Vendas Mensal',
      description: 'Vendas detalhadas por produto e categoria',
      type: 'sales',
      schedule: 'monthly',
      format: 'pdf',
      lastGenerated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      status: 'active'
    },
    {
      id: '2',
      name: 'Top Clientes Semanal',
      description: 'Clientes com maior volume de compras',
      type: 'customers',
      schedule: 'weekly',
      format: 'excel',
      lastGenerated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      status: 'active'
    },
    {
      id: '3',
      name: 'Performance de Marketing',
      description: 'ROI e conversões de campanhas',
      type: 'marketing',
      schedule: 'daily',
      format: 'csv',
      lastGenerated: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: 'inactive'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newReport, setNewReport] = useState({
    name: '',
    description: '',
    type: 'sales' as const,
    schedule: 'manual' as const,
    format: 'pdf' as const
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'sales': return <TrendingUp className="w-4 h-4" />;
      case 'customers': return <Users className="w-4 h-4" />;
      case 'products': return <ShoppingCart className="w-4 h-4" />;
      case 'marketing': return <BarChart3 className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const getScheduleLabel = (schedule: string) => {
    const labels = {
      manual: 'Manual',
      daily: 'Diário',
      weekly: 'Semanal',
      monthly: 'Mensal'
    };
    return labels[schedule as keyof typeof labels] || schedule;
  };

  const handleGenerateReport = (reportId: string) => {
    // Simular geração do relatório
    const report = reports.find(r => r.id === reportId);
    if (report) {
      setReports(prev => prev.map(r => 
        r.id === reportId 
          ? { ...r, lastGenerated: new Date() }
          : r
      ));
      
      toast({
        title: "Relatório Gerado",
        description: `${report.name} foi gerado com sucesso`,
      });

      // Simular download
      setTimeout(() => {
        const element = document.createElement('a');
        const file = new Blob(['Dados do relatório...'], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${report.name}.${report.format}`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }, 1000);
    }
  };

  const handleCreateReport = () => {
    if (!newReport.name || !newReport.description) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const report: CustomReport = {
      id: Date.now().toString(),
      name: newReport.name,
      description: newReport.description,
      type: newReport.type,
      schedule: newReport.schedule,
      format: newReport.format,
      lastGenerated: new Date(),
      status: 'active'
    };

    setReports(prev => [...prev, report]);
    setNewReport({ name: '', description: '', type: 'sales', schedule: 'manual', format: 'pdf' });
    setShowCreateForm(false);
    
    toast({
      title: "Relatório Criado",
      description: "Novo relatório personalizado foi criado",
    });
  };

  const toggleReportStatus = (reportId: string) => {
    setReports(prev => prev.map(report => 
      report.id === reportId 
        ? { ...report, status: report.status === 'active' ? 'inactive' : 'active' }
        : report
    ));
    toast({
      title: "Status Alterado",
      description: "Status do relatório foi atualizado",
    });
  };

  const deleteReport = (reportId: string) => {
    setReports(prev => prev.filter(r => r.id !== reportId));
    toast({
      title: "Relatório Excluído",
      description: "Relatório foi removido com sucesso",
    });
  };

  const useTemplate = (templateName: string, templateType: string) => {
    setNewReport({
      name: templateName,
      description: `Relatório baseado no template ${templateName}`,
      type: templateType as any,
      schedule: 'manual',
      format: 'pdf'
    });
    setShowCreateForm(true);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Relatórios Personalizados</h3>
          <p className="text-gray-600">Crie e gerencie relatórios automatizados</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Relatório
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{reports.length}</p>
            <p className="text-sm text-gray-600">Relatórios</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Play className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {reports.filter(r => r.status === 'active').length}
            </p>
            <p className="text-sm text-gray-600">Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">
              {reports.filter(r => r.schedule !== 'manual').length}
            </p>
            <p className="text-sm text-gray-600">Automatizados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Download className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-gray-600">Gerados (30d)</p>
          </CardContent>
        </Card>
      </div>

      {/* Formulário de Criação */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Relatório</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome do Relatório</label>
                <Input
                  value={newReport.name}
                  onChange={(e) => setNewReport(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Vendas por Categoria"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <select 
                  className="w-full border rounded px-3 py-2"
                  value={newReport.type}
                  onChange={(e) => setNewReport(prev => ({ ...prev, type: e.target.value as any }))}
                >
                  <option value="sales">Vendas</option>
                  <option value="customers">Clientes</option>
                  <option value="products">Produtos</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <Input
                value={newReport.description}
                onChange={(e) => setNewReport(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descrição do relatório"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Frequência</label>
                <select 
                  className="w-full border rounded px-3 py-2"
                  value={newReport.schedule}
                  onChange={(e) => setNewReport(prev => ({ ...prev, schedule: e.target.value as any }))}
                >
                  <option value="manual">Manual</option>
                  <option value="daily">Diário</option>
                  <option value="weekly">Semanal</option>
                  <option value="monthly">Mensal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Formato</label>
                <select 
                  className="w-full border rounded px-3 py-2"
                  value={newReport.format}
                  onChange={(e) => setNewReport(prev => ({ ...prev, format: e.target.value as any }))}
                >
                  <option value="pdf">PDF</option>
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreateReport}>Criar Relatório</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle>Seus Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(report.type)}
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-600">{report.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">
                      {getScheduleLabel(report.schedule)}
                    </Badge>
                    <Badge variant="outline">
                      {report.format.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-right">
                    <p className="font-medium">Último gerado:</p>
                    <p className="text-gray-600">{formatDate(report.lastGenerated)}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleGenerateReport(report.id)}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Gerar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleReportStatus(report.id)}
                  >
                    {report.status === 'active' ? (
                      <Settings className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => deleteReport(report.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates de Relatório */}
      <Card>
        <CardHeader>
          <CardTitle>Templates Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Vendas por Período',
                description: 'Receita, pedidos e ticket médio',
                type: 'sales'
              },
              {
                name: 'Top Produtos',
                description: 'Produtos mais vendidos',
                type: 'products'
              },
              {
                name: 'Clientes VIP',
                description: 'Clientes de alto valor',
                type: 'customers'
              },
              {
                name: 'Performance de Cupons',
                description: 'ROI de cupons e promoções',
                type: 'marketing'
              },
              {
                name: 'Análise de Abandono',
                description: 'Carrinhos abandonados',
                type: 'sales'
              },
              {
                name: 'Segmentação de Clientes',
                description: 'Grupos de clientes por comportamento',
                type: 'customers'
              }
            ].map((template, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  {getTypeIcon(template.type)}
                  <div className="flex-1">
                    <p className="font-medium">{template.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-3" 
                      onClick={() => useTemplate(template.name, template.type)}
                    >
                      Usar Template
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomReports;
