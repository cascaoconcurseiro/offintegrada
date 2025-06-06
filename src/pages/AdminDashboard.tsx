
import React, { useState } from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import Footer from '@/components/Footer';
import ConversionOptimization from '@/components/ConversionOptimization';
import EcommerceIntegration from '@/components/EcommerceIntegration';
import AdvancedCouponSystem from '@/components/AdvancedCouponSystem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  BarChart3, 
  Settings, 
  Store, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  Package,
  Gift,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Star,
  Eye,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const stats = [
    {
      title: 'Vendas Hoje',
      value: 'R$ 12.847',
      change: '+23%',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Pedidos',
      value: '47',
      change: '+12%',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Visitantes',
      value: '1.247',
      change: '+8%',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Produtos',
      value: '156',
      change: '+3',
      icon: <Package className="w-5 h-5" />,
      color: 'text-orange-600'
    },
    {
      title: 'Taxa Conversão',
      value: '3.2%',
      change: '+0.5%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-indigo-600'
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 189',
      change: '+15%',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-emerald-600'
    },
    {
      title: 'Reviews',
      value: '4.8',
      change: '+0.2',
      icon: <Star className="w-5 h-5" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Carrinho Abandonado',
      value: '67%',
      change: '-5%',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'text-red-600'
    }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'João Silva', value: 'R$ 189,90', status: 'pending', items: 2 },
    { id: '#1235', customer: 'Maria Santos', value: 'R$ 299,90', status: 'completed', items: 3 },
    { id: '#1236', customer: 'Pedro Costa', value: 'R$ 159,90', status: 'processing', items: 1 },
    { id: '#1237', customer: 'Ana Oliveira', value: 'R$ 249,90', status: 'completed', items: 2 },
    { id: '#1238', customer: 'Carlos Lima', value: 'R$ 89,90', status: 'pending', items: 1 }
  ];

  const topProducts = [
    { name: 'Regata Premium Masculina', sales: 89, revenue: 'R$ 7.921,00' },
    { name: 'Camiseta Feminina Básica', sales: 67, revenue: 'R$ 4.689,00' },
    { name: 'Short Moletom Unissex', sales: 45, revenue: 'R$ 6.750,00' },
    { name: 'Jaqueta Jeans Feminina', sales: 34, revenue: 'R$ 8.160,00' }
  ];

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Acesso autorizado",
        description: "Bem-vindo ao painel administrativo!",
      });
    } else {
      toast({
        title: "Acesso negado",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-oswald text-2xl uppercase tracking-wider">
              Acesso Administrativo
            </CardTitle>
            <p className="text-gray-600">Digite a senha para continuar</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Entrar
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Demo: use a senha "admin123"
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderEnhanced />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-oswald font-bold uppercase tracking-wider mb-2">
              Dashboard Administrativo
            </h1>
            <p className="text-gray-600">
              Gerencie sua loja OFFSEASON e monitore performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
            >
              Sair
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-black text-white p-2 rounded-lg mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Package className="w-5 h-5" />
            <span className="text-xs">Novo Produto</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Gift className="w-5 h-5" />
            <span className="text-xs">Novo Cupom</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <FileText className="w-5 h-5" />
            <span className="text-xs">Relatórios</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Suporte</span>
          </Button>
        </div>

        {/* Recent Orders and Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald flex items-center justify-between">
                Pedidos Recentes
                <Badge>{recentOrders.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">{order.id}</span>
                      <div>
                        <p className="font-medium text-sm">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.items} item(s)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm">{order.value}</span>
                      <Badge 
                        className={
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {order.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {order.status === 'pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'completed' ? 'Concluído' :
                         order.status === 'processing' ? 'Processando' : 'Pendente'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Produtos Mais Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="conversion" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="conversion" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Conversão
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Store className="w-4 h-4" />
              Integrações
            </TabsTrigger>
            <TabsTrigger value="coupons" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Cupons
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Produtos
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Config
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="conversion">
            <ConversionOptimization />
          </TabsContent>
          
          <TabsContent value="integration">
            <EcommerceIntegration />
          </TabsContent>
          
          <TabsContent value="coupons">
            <AdvancedCouponSystem />
          </TabsContent>
          
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Gerenciamento de Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Novo Produto
                      </Button>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Importar
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Buscar produtos..." className="w-64" />
                      <Button variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center py-12 text-gray-500">
                    <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Sistema de gerenciamento de produtos será implementado aqui</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Analytics Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <h3 className="font-medium">Relatórios de Vendas</h3>
                        <p className="text-sm text-gray-600">Análises detalhadas</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <h3 className="font-medium">Comportamento</h3>
                        <p className="text-sm text-gray-600">Análise de usuários</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <h3 className="font-medium">Performance</h3>
                        <p className="text-sm text-gray-600">Métricas de conversão</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center py-12 text-gray-500">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Dashboard de analytics será implementado aqui</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Configurações da Loja</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nome da Loja</label>
                        <input 
                          type="text" 
                          defaultValue="OFFSEASON" 
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">E-mail de Contato</label>
                        <input 
                          type="email" 
                          defaultValue="contato@offseason.com.br" 
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Configurações de Pagamento</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Cartão de Crédito</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">PIX</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span className="text-sm">Boleto Bancário</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Acesso Administrativo</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nova Senha</label>
                      <input 
                        type="password" 
                        placeholder="Digite uma nova senha" 
                        className="w-full p-2 border rounded"
                      />
                      <Button className="mt-2">Alterar Senha</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
