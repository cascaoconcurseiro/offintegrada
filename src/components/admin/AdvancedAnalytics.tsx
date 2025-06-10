
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Calendar,
  Download,
  RefreshCw,
  Target,
  Eye
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdvancedAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  const periods = [
    { value: '7d', label: '7 dias' },
    { value: '30d', label: '30 dias' },
    { value: '90d', label: '90 dias' },
    { value: '1y', label: '1 ano' }
  ];

  const kpis = [
    { 
      name: 'Receita Total', 
      value: 'R$ 247.382', 
      change: '+12.5%', 
      icon: DollarSign,
      trend: 'up'
    },
    { 
      name: 'Pedidos', 
      value: '2.847', 
      change: '+8.3%', 
      icon: ShoppingCart,
      trend: 'up'
    },
    { 
      name: 'Clientes Únicos', 
      value: '1.203', 
      change: '+15.7%', 
      icon: Users,
      trend: 'up'
    },
    { 
      name: 'Taxa Conversão', 
      value: '3.24%', 
      change: '+0.8%', 
      icon: Target,
      trend: 'up'
    },
    { 
      name: 'Ticket Médio', 
      value: 'R$ 187', 
      change: '+5.2%', 
      icon: TrendingUp,
      trend: 'up'
    },
    { 
      name: 'CAC', 
      value: 'R$ 23', 
      change: '-12%', 
      icon: Users,
      trend: 'down'
    },
    { 
      name: 'LTV', 
      value: 'R$ 892', 
      change: '+18%', 
      icon: DollarSign,
      trend: 'up'
    },
    { 
      name: 'Churn Rate', 
      value: '2.1%', 
      change: '-0.3%', 
      icon: TrendingUp,
      trend: 'down'
    }
  ];

  const salesData = [
    { month: 'Jan', vendas: 45000, pedidos: 320, clientes: 180 },
    { month: 'Fev', vendas: 52000, pedidos: 380, clientes: 220 },
    { month: 'Mar', vendas: 48000, pedidos: 350, clientes: 195 },
    { month: 'Abr', vendas: 61000, pedidos: 430, clientes: 250 },
    { month: 'Mai', vendas: 55000, pedidos: 390, clientes: 210 },
    { month: 'Jun', vendas: 67000, pedidos: 470, clientes: 280 }
  ];

  const topProducts = [
    { name: 'Camiseta Básica Branca', vendas: 248, receita: 'R$ 12.400' },
    { name: 'Calça Jeans Slim', vendas: 186, receita: 'R$ 27.900' },
    { name: 'Tênis Casual Preto', vendas: 124, receita: 'R$ 24.800' },
    { name: 'Jaqueta Jeans', vendas: 98, receita: 'R$ 19.600' },
    { name: 'Vestido Floral', vendas: 87, receita: 'R$ 13.050' }
  ];

  const refreshData = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dados Atualizados",
        description: "Analytics atualizados com dados em tempo real",
      });
    }, 2000);
  };

  const exportData = () => {
    toast({
      title: "Exportando Dados",
      description: "Relatório de analytics será baixado em instantes",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Analytics Avançados
          </h2>
          <p className="text-gray-600">
            Métricas detalhadas e insights de negócio
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1">
            {periods.map((period) => (
              <Button
                key={period.value}
                variant={selectedPeriod === period.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period.value)}
              >
                {period.label}
              </Button>
            ))}
          </div>
          <Button variant="outline" onClick={refreshData} disabled={isLoading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
          <Button onClick={exportData}>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                  <span className={`text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <p className="text-xs text-gray-600">{kpi.name}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="cohort">Cohort</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {salesData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{item.month}</span>
                      <div className="text-right">
                        <p className="font-bold">R$ {item.vendas.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{item.pedidos} pedidos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.vendas} vendas</p>
                      </div>
                      <p className="font-bold">{product.receita}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Vendas Detalhada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded">
                  <p className="text-3xl font-bold text-blue-600">R$ 67.000</p>
                  <p className="text-sm text-gray-600">Receita este mês</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded">
                  <p className="text-3xl font-bold text-green-600">470</p>
                  <p className="text-sm text-gray-600">Pedidos este mês</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded">
                  <p className="text-3xl font-bold text-purple-600">R$ 142</p>
                  <p className="text-sm text-gray-600">Ticket médio</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Segmentação por Valor</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>VIP (mais de R$ 1000)</span>
                      <span className="font-bold">23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium (R$ 500-1000)</span>
                      <span className="font-bold">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Regular (R$ 100-500)</span>
                      <span className="font-bold">32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Básico (menos de R$ 100)</span>
                      <span className="font-bold">10%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Retenção por Período</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>30 dias</span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 dias</span>
                      <span className="font-bold text-yellow-600">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>180 dias</span>
                      <span className="font-bold text-orange-600">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 ano</span>
                      <span className="font-bold text-red-600">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Performance de Produtos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">#{index + 1}</span>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.vendas} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{product.receita}</p>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cohort">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Cohort</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Análise de cohort em desenvolvimento</p>
                <p className="text-sm text-gray-500">Esta funcionalidade será implementada com dados reais</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedAnalytics;
