import React, { useState } from 'react';
import HeaderEnhanced from '@/components/HeaderEnhanced';
import Footer from '@/components/Footer';
import ConversionOptimization from '@/components/ConversionOptimization';
import EcommerceIntegration from '@/components/EcommerceIntegration';
import AdvancedCouponSystem from '@/components/AdvancedCouponSystem';
import PaymentIntegrations from '@/components/PaymentIntegrations';
import ShippingIntegrations from '@/components/ShippingIntegrations';
import MarketingIntegrations from '@/components/MarketingIntegrations';
import AdvancedReports from '@/components/AdvancedReports';
import CartRecovery from '@/components/CartRecovery';
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
  RefreshCw,
  Plus,
  CreditCard,
  Truck,
  Mail,
  Target,
  ShoppingBag
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const stats = [
    {
      title: 'Vendas Hoje',
      value: 'R$ 47.891',
      change: '+34%',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Pedidos',
      value: '127',
      change: '+28%',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Visitantes',
      value: '5.247',
      change: '+18%',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Taxa Conversão',
      value: '4.7%',
      change: '+1.2%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-indigo-600'
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 276',
      change: '+22%',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-emerald-600'
    },
    {
      title: 'Reviews',
      value: '4.9',
      change: '+0.3',
      icon: <Star className="w-5 h-5" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Carrinho Abandonado',
      value: '58%',
      change: '-12%',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'text-red-600'
    },
    {
      title: 'ROI Marketing',
      value: '367%',
      change: '+45%',
      icon: <Target className="w-5 h-5" />,
      color: 'text-pink-600'
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
              Central Administrativa
            </h1>
            <p className="text-gray-600">
              Painel completo para gestão profissional da OFFSEASON
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Plus className="w-5 h-5" />
            <span className="text-xs">Novo Produto</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Gift className="w-5 h-5" />
            <span className="text-xs">Cupom</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <FileText className="w-5 h-5" />
            <span className="text-xs">Relatórios</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Suporte</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Mail className="w-5 h-5" />
            <span className="text-xs">Marketing</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1">
            <Target className="w-5 h-5" />
            <span className="text-xs">Campanhas</span>
          </Button>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="reports" className="space-y-8">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Relatórios
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Pagamentos
            </TabsTrigger>
            <TabsTrigger value="shipping" className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Envios
            </TabsTrigger>
            <TabsTrigger value="marketing" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Marketing
            </TabsTrigger>
            <TabsTrigger value="recovery" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Recuperação
            </TabsTrigger>
            <TabsTrigger value="conversion" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Conversão
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Store className="w-4 h-4" />
              Integrações
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Config
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports">
            <AdvancedReports />
          </TabsContent>

          <TabsContent value="payments">
            <PaymentIntegrations />
          </TabsContent>

          <TabsContent value="shipping">
            <ShippingIntegrations />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingIntegrations />
          </TabsContent>

          <TabsContent value="recovery">
            <CartRecovery />
          </TabsContent>
          
          <TabsContent value="conversion">
            <ConversionOptimization />
          </TabsContent>
          
          <TabsContent value="integration">
            <EcommerceIntegration />
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
