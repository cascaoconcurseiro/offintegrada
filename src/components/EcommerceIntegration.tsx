
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Store, 
  ShoppingCart, 
  Package, 
  RefreshCw, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Plus,
  Edit,
  Trash2,
  Upload,
  Download,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  Zap,
  Target,
  Eye,
  Clock,
  Filter,
  Search,
  ArrowUpDown,
  ExternalLink,
  Key,
  Shield,
  Database,
  Webhook,
  Code,
  Link,
  Activity
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EcommerceIntegration = () => {
  const [integrations, setIntegrations] = useState({
    nuvemshop: { connected: true, status: 'active', lastSync: '2 min atrás' },
    shopify: { connected: false, status: 'inactive', lastSync: 'Nunca' },
    woocommerce: { connected: true, status: 'active', lastSync: '5 min atrás' },
    magento: { connected: false, status: 'inactive', lastSync: 'Nunca' },
    lojaintegrada: { connected: true, status: 'active', lastSync: '1 min atrás' },
    mercadolivre: { connected: true, status: 'active', lastSync: '3 min atrás' },
    americanas: { connected: false, status: 'inactive', lastSync: 'Nunca' },
    amazon: { connected: false, status: 'inactive', lastSync: 'Nunca' }
  });

  const [automations, setAutomations] = useState({
    productSync: true,
    priceSync: true,
    stockSync: true,
    orderSync: true,
    customerSync: false,
    reviewSync: true,
    categorySync: true,
    imageSync: true
  });

  const platforms = [
    {
      id: 'nuvemshop',
      name: 'Nuvemshop',
      description: 'Plataforma de e-commerce brasileira',
      icon: Store,
      color: 'bg-blue-600',
      features: ['Produtos', 'Pedidos', 'Estoque', 'Clientes', 'Relatórios'],
      marketShare: '35%'
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'Plataforma global de e-commerce',
      icon: ShoppingBag,
      color: 'bg-green-600',
      features: ['Produtos', 'Pedidos', 'Apps', 'Temas', 'Analytics'],
      marketShare: '28%'
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      description: 'Plugin WordPress para e-commerce',
      icon: Package,
      color: 'bg-purple-600',
      features: ['Produtos', 'Pedidos', 'Plugins', 'Customização'],
      marketShare: '20%'
    },
    {
      id: 'lojaintegrada',
      name: 'Loja Integrada',
      description: 'E-commerce brasileiro completo',
      icon: Truck,
      color: 'bg-orange-600',
      features: ['Produtos', 'Marketplace', 'ERP', 'Marketing'],
      marketShare: '12%'
    },
    {
      id: 'mercadolivre',
      name: 'Mercado Livre',
      description: 'Marketplace líder na América Latina',
      icon: DollarSign,
      color: 'bg-yellow-600',
      features: ['Marketplace', 'Vendas', 'Logística', 'Pagamentos'],
      marketShare: '45%'
    },
    {
      id: 'magento',
      name: 'Magento',
      description: 'Plataforma enterprise de e-commerce',
      icon: Database,
      color: 'bg-red-600',
      features: ['B2B', 'Enterprise', 'Customização', 'Multi-store'],
      marketShare: '8%'
    }
  ];

  const syncStats = [
    { name: 'Produtos Sincronizados', value: '2.847', change: '+127 hoje', icon: Package },
    { name: 'Pedidos Processados', value: '1.234', change: '+89 hoje', icon: ShoppingBag },
    { name: 'Estoque Atualizado', value: '98.7%', change: 'Tempo real', icon: BarChart3 },
    { name: 'Clientes Integrados', value: '15.629', change: '+234 hoje', icon: Users }
  ];

  const recentActivity = [
    { action: 'Produto sincronizado', platform: 'Nuvemshop', time: '2 min', status: 'success' },
    { action: 'Pedido importado', platform: 'Mercado Livre', time: '5 min', status: 'success' },
    { action: 'Estoque atualizado', platform: 'Loja Integrada', time: '8 min', status: 'success' },
    { action: 'Erro na sincronização', platform: 'Shopify', time: '12 min', status: 'error' },
    { action: 'Cliente sincronizado', platform: 'WooCommerce', time: '15 min', status: 'success' }
  ];

  const toggleIntegration = (platformId: string) => {
    setIntegrations(prev => ({
      ...prev,
      [platformId]: {
        ...prev[platformId],
        connected: !prev[platformId].connected,
        status: !prev[platformId].connected ? 'active' : 'inactive',
        lastSync: !prev[platformId].connected ? 'Agora' : 'Nunca'
      }
    }));

    const platform = platforms.find(p => p.id === platformId);
    toast({
      title: integrations[platformId].connected ? "Integração Desconectada" : "Integração Conectada",
      description: `${platform?.name} ${integrations[platformId].connected ? 'desconectado' : 'conectado'} com sucesso!`,
    });
  };

  const toggleAutomation = (key: string) => {
    setAutomations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));

    toast({
      title: "Automação Atualizada",
      description: `${key} foi ${automations[key] ? 'desabilitado' : 'habilitado'}!`,
    });
  };

  const syncNow = () => {
    toast({
      title: "Sincronização Iniciada",
      description: "Sincronizando dados de todas as plataformas...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações E-commerce
          </h2>
          <p className="text-gray-600">
            Conecte e sincronize com principais plataformas e marketplaces
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={syncNow}>
            <Sync className="w-4 h-4 mr-2" />
            Sincronizar Agora
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Configuração Rápida
          </Button>
        </div>
      </div>

      {/* Stats de Sincronização */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {syncStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                  <Badge variant="outline">{stat.change}</Badge>
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

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="platforms">Plataformas</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="activity">Atividade</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const integration = integrations[platform.id];
              const isConnected = integration?.connected;

              return (
                <Card key={platform.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${platform.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="font-oswald text-lg">{platform.name}</CardTitle>
                          <p className="text-sm text-gray-600">{platform.description}</p>
                        </div>
                      </div>
                      <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {isConnected ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                        {isConnected ? 'Conectado' : 'Desconectado'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Recursos Disponíveis:</p>
                        <div className="flex flex-wrap gap-1">
                          {platform.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Market Share:</span>
                        <span className="font-medium">{platform.marketShare}</span>
                      </div>

                      {isConnected && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Última Sincronização:</span>
                          <span className="font-medium text-green-600">{integration.lastSync}</span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button 
                          onClick={() => toggleIntegration(platform.id)}
                          className={`flex-1 ${isConnected ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                        >
                          {isConnected ? 'Desconectar' : 'Conectar'}
                        </Button>
                        {isConnected && (
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {!isConnected && (
                        <div className="space-y-2 pt-2 border-t">
                          <Input placeholder="API Key" type="password" />
                          <Input placeholder="Secret Key" type="password" />
                          <Input placeholder="Store URL" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="automation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Sincronização Automática</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(automations).map(([key, enabled]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <Switch 
                      checked={enabled}
                      onCheckedChange={() => toggleAutomation(key)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações de Sincronização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Intervalo de Sincronização</label>
                  <select className="w-full p-2 border rounded">
                    <option value="real-time">Tempo Real</option>
                    <option value="5min">A cada 5 minutos</option>
                    <option value="15min">A cada 15 minutos</option>
                    <option value="1hour">A cada hora</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Conflitos de Dados</label>
                  <select className="w-full p-2 border rounded">
                    <option value="master-wins">Master sempre ganha</option>
                    <option value="newest-wins">Mais recente ganha</option>
                    <option value="manual-review">Revisão manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Backup Automático</label>
                  <select className="w-full p-2 border rounded">
                    <option value="daily">Diário</option>
                    <option value="weekly">Semanal</option>
                    <option value="monthly">Mensal</option>
                    <option value="disabled">Desabilitado</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-600' : 'bg-red-600'
                      }`}></div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.platform}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{activity.time}</p>
                      <Badge className={
                        activity.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }>
                        {activity.status === 'success' ? 'Sucesso' : 'Erro'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Webhook URL</label>
                  <Input placeholder="https://seu-site.com/webhook" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">API Rate Limit</label>
                  <Input type="number" placeholder="1000" />
                  <p className="text-xs text-gray-600 mt-1">Requisições por minuto</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeout (segundos)</label>
                  <Input type="number" placeholder="30" />
                </div>

                <div className="flex items-center justify-between">
                  <span>Debug Mode</span>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <span>Logs Detalhados</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Criptografia</label>
                  <select className="w-full p-2 border rounded">
                    <option value="aes-256">AES-256</option>
                    <option value="rsa-2048">RSA-2048</option>
                    <option value="none">Nenhuma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">IP Whitelist</label>
                  <textarea 
                    className="w-full p-2 border rounded h-20"
                    placeholder="192.168.1.1&#10;10.0.0.1"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <span>2FA para API</span>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <span>Audit Log</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EcommerceIntegration;
