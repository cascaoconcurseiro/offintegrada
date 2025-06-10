
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  ShoppingCart,
  CreditCard,
  Truck,
  Target,
  TrendingDown,
  Activity,
  Eye,
  RefreshCw
} from 'lucide-react';

interface AdminDashboardHomeProps {
  onNavigateToTab?: (tab: string) => void;
}

const AdminDashboardHome = ({ onNavigateToTab }: AdminDashboardHomeProps) => {
  const dashboardStats = [
    { name: 'Vendas Hoje', value: 'R$ 12.847', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
    { name: 'Pedidos', value: '245', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-600' },
    { name: 'Clientes Ativos', value: '1.847', change: '+15.3%', icon: Users, color: 'text-purple-600' },
    { name: 'Produtos', value: '2.847', change: '+3.1%', icon: Package, color: 'text-orange-600' },
    { name: 'Taxa Conversão', value: '3.24%', change: '+0.8%', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Ticket Médio', value: 'R$ 189', change: '+5.2%', icon: CreditCard, color: 'text-blue-600' },
    { name: 'Envios Pendentes', value: '23', change: '-12%', icon: Truck, color: 'text-yellow-600' },
    { name: 'Marketing ROI', value: '4.2x', change: '+18%', icon: Target, color: 'text-green-600' }
  ];

  const quickActions = [
    { name: 'Vendas', description: 'Relatório de vendas em tempo real', icon: BarChart3, tab: 'reports' },
    { name: 'Clientes', description: 'Gestão completa de clientes', icon: Users, tab: 'customers' },
    { name: 'Produtos', description: 'Catálogo e estoque', icon: Package, tab: 'products' },
    { name: 'Marketing', description: 'Campanhas e automação', icon: Target, tab: 'marketing' },
    { name: 'Operações', description: 'Pedidos e fulfillment', icon: Activity, tab: 'orders' },
    { name: 'Financeiro', description: 'Pagamentos e relatórios', icon: DollarSign, tab: 'payments' }
  ];

  const recentActivities = [
    { action: 'Novo pedido #OSN-12847', time: '2 min', status: 'success' },
    { action: 'Cliente cadastrado: João Silva', time: '5 min', status: 'success' },
    { action: 'Produto sem estoque: Camiseta Preta M', time: '12 min', status: 'warning' },
    { action: 'Pagamento aprovado #PAY-8847', time: '15 min', status: 'success' },
    { action: 'Envio realizado #ENV-9922', time: '20 min', status: 'success' }
  ];

  const predictions = [
    { metric: 'Vendas Amanhã', prediction: 'R$ 15.200', confidence: '92%' },
    { metric: 'Pedidos Semana', prediction: '1.847', confidence: '88%' },
    { metric: 'Receita Mês', prediction: 'R$ 385.000', confidence: '85%' },
    { metric: 'Conversão Média', prediction: '3.8%', confidence: '91%' }
  ];

  const handleQuickAction = (tab: string) => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    }
  };

  return (
    <div className="space-y-6">
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

      {/* Métricas Principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dashboardStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  <span className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-green-600' : 
                    stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.name}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ações Rápidas Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="font-oswald">Acesso Rápido - Seções Principais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => handleQuickAction(action.tab)}
                >
                  <IconComponent className="w-6 h-6" />
                  <div className="text-center">
                    <p className="font-medium text-sm">{action.name}</p>
                    <p className="text-xs text-gray-500">{action.description}</p>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Atividade Recente */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-600' : 
                      activity.status === 'warning' ? 'bg-yellow-600' : 'bg-red-600'
                    }`}></div>
                    <p className="text-sm font-medium">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Predições IA */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Predições IA - Teste
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {predictions.map((pred, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">{pred.metric}</p>
                    <p className="text-2xl font-bold text-blue-600">{pred.prediction}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Confiança</p>
                    <p className="font-bold text-green-600">{pred.confidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
