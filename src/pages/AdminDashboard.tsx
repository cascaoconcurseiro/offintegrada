
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
import ProductManagement from '@/components/ProductManagement';
import AdminSettings from '@/components/AdminSettings';
import ProductFormModal from '@/components/ProductFormModal';
import CouponFormModal from '@/components/CouponFormModal';
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
  ShoppingBag,
  Megaphone,
  Headphones,
  Zap
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('reports');
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCouponForm, setShowCouponForm] = useState(false);

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

  const handleNewProduct = () => {
    setShowProductForm(true);
    console.log('Opening product form modal');
  };

  const handleNewCoupon = () => {
    setShowCouponForm(true);
    console.log('Opening coupon form modal');
  };

  const handleReports = () => {
    setActiveTab('reports');
    toast({
      title: "Relatórios",
      description: "Acessando relatórios avançados!",
    });
  };

  const handleSupport = () => {
    toast({
      title: "Central de Suporte",
      description: "Sistema de suporte ativado - tickets, chat e conhecimento!",
    });
    // Simulate opening support system
    window.open('mailto:suporte@offseason.com.br?subject=Suporte Admin&body=Olá, preciso de ajuda com:', '_blank');
  };

  const handleMarketing = () => {
    setActiveTab('marketing');
    toast({
      title: "Marketing Intelligence",
      description: "Acessando central de marketing e campanhas!",
    });
  };

  const handleCampaigns = () => {
    setActiveTab('marketing');
    toast({
      title: "Gerenciador de Campanhas",
      description: "Sistema de campanhas multi-plataforma ativado!",
    });
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
              Central Administrativa Profissional
            </h1>
            <p className="text-gray-600">
              Sistema completo de gestão empresarial nível Nike/Adidas
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

        {/* Quick Actions - Todos funcionais agora */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleNewProduct}>
            <Plus className="w-5 h-5" />
            <span className="text-xs">Novo Produto</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleNewCoupon}>
            <Gift className="w-5 h-5" />
            <span className="text-xs">Cupom</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleReports}>
            <FileText className="w-5 h-5" />
            <span className="text-xs">Relatórios</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleSupport}>
            <Headphones className="w-5 h-5" />
            <span className="text-xs">Suporte</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleMarketing}>
            <Megaphone className="w-5 h-5" />
            <span className="text-xs">Marketing</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1" onClick={handleCampaigns}>
            <Target className="w-5 h-5" />
            <span className="text-xs">Campanhas</span>
          </Button>
        </div>

        {/* Recent Orders & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Pedidos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{order.id}</h4>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{order.value}</p>
                      <Badge className={
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
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
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.sales} vendas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-10">
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Relatórios
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Produtos
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
            <TabsTrigger value="coupons" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Cupons
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Config
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports">
            <AdvancedReports />
          </TabsContent>

          <TabsContent value="products">
            <ProductManagement />
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

          <TabsContent value="coupons">
            <AdvancedCouponSystem />
          </TabsContent>
          
          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <ProductFormModal 
        open={showProductForm} 
        onOpenChange={setShowProductForm} 
      />
      
      <CouponFormModal 
        open={showCouponForm} 
        onOpenChange={setShowCouponForm} 
      />

      <Footer />
    </div>
  );
};

export default AdminDashboard;
