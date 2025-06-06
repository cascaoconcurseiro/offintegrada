
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Search, 
  TrendingUp, 
  Target,
  CheckCircle,
  AlertTriangle,
  Settings,
  BarChart3,
  Eye,
  MessageCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const MarketingIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    google_ads: { enabled: true, status: 'connected' },
    google_analytics: { enabled: true, status: 'connected' },
    facebook_ads: { enabled: false, status: 'disconnected' },
    instagram_business: { enabled: false, status: 'disconnected' },
    mailchimp: { enabled: false, status: 'disconnected' },
    rdstation: { enabled: false, status: 'disconnected' },
    hotmart: { enabled: false, status: 'disconnected' },
    tiktok_ads: { enabled: false, status: 'disconnected' }
  });

  const marketingPlatforms = [
    {
      id: 'google_ads',
      name: 'Google Ads',
      description: 'Anúncios na rede de pesquisa e display do Google',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads'],
      category: 'Publicidade Paga'
    },
    {
      id: 'google_analytics',
      name: 'Google Analytics',
      description: 'Análise completa de tráfego e conversões',
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      features: ['Rastreamento', 'Funis', 'E-commerce', 'Audiências'],
      category: 'Analytics'
    },
    {
      id: 'facebook_ads',
      name: 'Facebook Ads',
      description: 'Publicidade no Facebook e Instagram',
      icon: <Facebook className="w-8 h-8 text-blue-800" />,
      features: ['Feed Ads', 'Stories', 'Reels', 'Retargeting'],
      category: 'Social Media'
    },
    {
      id: 'instagram_business',
      name: 'Instagram Business',
      description: 'Ferramentas comerciais do Instagram',
      icon: <Instagram className="w-8 h-8 text-pink-600" />,
      features: ['Shopping Tags', 'Stories', 'IGTV', 'Insights'],
      category: 'Social Media'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Email marketing e automação',
      icon: <Mail className="w-8 h-8 text-yellow-600" />,
      features: ['Email Campaigns', 'Automação', 'Segmentação', 'A/B Test'],
      category: 'Email Marketing'
    },
    {
      id: 'rdstation',
      name: 'RD Station',
      description: 'Marketing digital e automação brasileira',
      icon: <Target className="w-8 h-8 text-green-600" />,
      features: ['Lead Scoring', 'Nutrição', 'Landing Pages', 'CRM'],
      category: 'Marketing Automation'
    },
    {
      id: 'hotmart',
      name: 'Hotmart',
      description: 'Plataforma de afiliados e produtos digitais',
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      features: ['Programa de Afiliados', 'Checkout', 'Analytics', 'Comissões'],
      category: 'Afiliados'
    },
    {
      id: 'tiktok_ads',
      name: 'TikTok Ads',
      description: 'Publicidade na plataforma TikTok',
      icon: <MessageCircle className="w-8 h-8 text-black" />,
      features: ['In-Feed Ads', 'Branded Effects', 'TopView', 'Spark Ads'],
      category: 'Social Media'
    }
  ];

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        enabled: !prev[id].enabled,
        status: !prev[id].enabled ? 'connected' : 'disconnected'
      }
    }));
    
    const platform = marketingPlatforms.find(p => p.id === id);
    toast({
      title: integrations[id].enabled ? "Integração Desconectada" : "Integração Conectada",
      description: `${platform?.name} ${integrations[id].enabled ? 'desabilitado' : 'habilitado'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações de Marketing
          </h2>
          <p className="text-gray-600">
            Configure ferramentas de marketing e análise
          </p>
        </div>
        <Button>
          <Eye className="w-4 h-4 mr-2" />
          Relatório Geral
        </Button>
      </div>

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList>
          <TabsTrigger value="platforms">Plataformas</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="analytics">Métricas</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingPlatforms.map((platform) => {
              const integration = integrations[platform.id];
              const isConnected = integration.enabled && integration.status === 'connected';
              
              return (
                <Card key={platform.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {platform.icon}
                        <div>
                          <CardTitle className="font-oswald">{platform.name}</CardTitle>
                          <p className="text-sm text-gray-600">{platform.description}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {platform.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {isConnected ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                          {isConnected ? 'Conectado' : 'Desconectado'}
                        </Badge>
                        <Switch
                          checked={integration.enabled}
                          onCheckedChange={() => toggleIntegration(platform.id)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Recursos:</h4>
                        <div className="flex flex-wrap gap-1">
                          {platform.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {integration.enabled && (
                        <div className="space-y-3 pt-3 border-t">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">API Key / Client ID</label>
                            <Input type="password" placeholder="Chave de acesso da API" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Secret / Token</label>
                            <Input type="password" placeholder="Token de acesso" />
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <Settings className="w-4 h-4 mr-2" />
                              Configurar
                            </Button>
                            <Button size="sm" variant="outline">
                              Testar
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="campaigns">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Campanhas Ativas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Black Friday 2024</h4>
                        <p className="text-sm text-gray-600">Google Ads + Facebook</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 12.847</p>
                      <p className="text-sm text-green-600">+34% CTR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Retargeting Carrinho</h4>
                        <p className="text-sm text-gray-600">Facebook + Instagram</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 3.291</p>
                      <p className="text-sm text-green-600">+12% Conv</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Email Recuperação</h4>
                        <p className="text-sm text-gray-600">Mailchimp</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 1.847</p>
                      <p className="text-sm text-green-600">+28% Open</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="automation">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Automações de Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Fluxos Automatizados</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span>Email de Boas-vindas</span>
                      <Switch defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Carrinho Abandonado</span>
                      <Switch defaultChecked />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Pós-compra (Upsell)</span>
                      <Switch />
                    </label>
                    <label className="flex items-center justify-between">
                      <span>Recuperação de Clientes</span>
                      <Switch />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Retargeting Automático</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pixel Facebook</label>
                      <Input placeholder="ID do Pixel" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Google Ads Tag</label>
                      <Input placeholder="Tag de Conversão" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">ROI Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">347%</div>
                <p className="text-sm text-gray-600">+23% vs mês anterior</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Custo por Aquisição</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">R$ 28</div>
                <p className="text-sm text-gray-600">-15% vs mês anterior</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Taxa de Abertura</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">24.7%</div>
                <p className="text-sm text-gray-600">+3.2% vs mês anterior</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">CTR Médio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">3.8%</div>
                <p className="text-sm text-gray-600">+0.5% vs mês anterior</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingIntegrations;
