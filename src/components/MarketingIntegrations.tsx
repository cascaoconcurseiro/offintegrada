
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Target, 
  Users, 
  BarChart3, 
  DollarSign,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Mail,
  MessageSquare,
  Globe,
  Search,
  Eye,
  TrendingUp,
  Calendar,
  Gift,
  Bell,
  Share2,
  Heart,
  Camera,
  Play,
  Smartphone,
  Monitor
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const MarketingIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    google_ads: { enabled: true, status: 'active', budget: 'R$ 5.000/dia' },
    facebook_ads: { enabled: true, status: 'active', budget: 'R$ 3.500/dia' },
    instagram_ads: { enabled: true, status: 'active', budget: 'R$ 2.800/dia' },
    tiktok_ads: { enabled: false, status: 'inactive', budget: 'R$ 0' },
    youtube_ads: { enabled: true, status: 'active', budget: 'R$ 1.500/dia' },
    google_analytics: { enabled: true, status: 'active', budget: 'Grátis' },
    hotjar: { enabled: true, status: 'active', budget: 'R$ 289/mês' },
    mailchimp: { enabled: true, status: 'active', budget: 'R$ 599/mês' },
    rd_station: { enabled: false, status: 'inactive', budget: 'R$ 0' },
    klaviyo: { enabled: true, status: 'active', budget: 'R$ 450/mês' }
  });

  const platforms = [
    {
      id: 'google_ads',
      name: 'Google Ads',
      description: 'Anúncios no Google Search e Display',
      icon: Search,
      color: 'bg-blue-600',
      features: ['Search Ads', 'Display', 'Shopping', 'Video', 'App Campaigns'],
      reach: '4.8B users',
      cpc: 'R$ 0.85 - R$ 3.20'
    },
    {
      id: 'facebook_ads',
      name: 'Facebook Ads',
      description: 'Publicidade na maior rede social do mundo',
      icon: Users,
      color: 'bg-blue-800',
      features: ['Feed Ads', 'Stories', 'Video', 'Carousel', 'Collection'],
      reach: '2.9B users',
      cpc: 'R$ 0.45 - R$ 2.10'
    },
    {
      id: 'instagram_ads',
      name: 'Instagram Ads',
      description: 'Anúncios visuais para engajamento',
      icon: Camera,
      color: 'bg-pink-600',
      features: ['Feed', 'Stories', 'Reels', 'IGTV', 'Shopping'],
      reach: '2B users',
      cpc: 'R$ 0.55 - R$ 2.80'
    },
    {
      id: 'tiktok_ads',
      name: 'TikTok Ads',
      description: 'Vídeos curtos para público jovem',
      icon: Play,
      color: 'bg-black',
      features: ['In-Feed', 'Brand Takeover', 'Hashtag Challenge', 'Branded Effects'],
      reach: '1B users',
      cpc: 'R$ 0.35 - R$ 1.80'
    },
    {
      id: 'youtube_ads',
      name: 'YouTube Ads',
      description: 'Vídeo marketing na maior plataforma',
      icon: Play,
      color: 'bg-red-600',
      features: ['TrueView', 'Bumper', 'Discovery', 'Shorts', 'Connected TV'],
      reach: '2.7B users',
      cpc: 'R$ 0.25 - R$ 1.50'
    },
    {
      id: 'google_analytics',
      name: 'Google Analytics',
      description: 'Análise completa de dados',
      icon: BarChart3,
      color: 'bg-orange-600',
      features: ['Real-time', 'Audiences', 'Acquisition', 'Behavior', 'Conversions'],
      reach: 'Ilimitado',
      cpc: 'Grátis'
    }
  ];

  const marketingMetrics = [
    { name: 'ROAS Geral', value: '4.7x', change: '+0.8x', icon: DollarSign, color: 'text-green-600' },
    { name: 'CPM Médio', value: 'R$ 12.50', change: '-R$ 2.30', icon: Eye, color: 'text-blue-600' },
    { name: 'CTR Médio', value: '3.2%', change: '+0.5%', icon: Target, color: 'text-purple-600' },
    { name: 'CPC Médio', value: 'R$ 1.85', change: '-R$ 0.25', icon: Search, color: 'text-orange-600' },
    { name: 'Conversões', value: '2.847', change: '+523', icon: CheckCircle, color: 'text-emerald-600' },
    { name: 'Gasto Total', value: 'R$ 28.4k', change: '+R$ 4.2k', icon: TrendingUp, color: 'text-indigo-600' }
  ];

  const campaignPerformance = [
    {
      platform: 'Google Ads',
      campaign: 'Black Friday 2024',
      budget: 'R$ 5.000',
      spent: 'R$ 4.789',
      impressions: '2.5M',
      clicks: '45.8k',
      conversions: '1.234',
      roas: '5.2x',
      status: 'active'
    },
    {
      platform: 'Facebook Ads',
      campaign: 'Lançamento Verão',
      budget: 'R$ 3.500',
      spent: 'R$ 3.456',
      impressions: '1.8M',
      clicks: '32.1k',
      conversions: '892',
      roas: '4.1x',
      status: 'active'
    },
    {
      platform: 'Instagram Ads',
      campaign: 'Influencers Collection',
      budget: 'R$ 2.800',
      spent: 'R$ 2.234',
      impressions: '1.2M',
      clicks: '28.7k',
      conversions: '567',
      roas: '3.8x',
      status: 'active'
    },
    {
      platform: 'YouTube Ads',
      campaign: 'Brand Awareness',
      budget: 'R$ 1.500',
      spent: 'R$ 1.289',
      impressions: '3.2M',
      clicks: '18.9k',
      conversions: '234',
      roas: '2.9x',
      status: 'paused'
    }
  ];

  const audienceSegments = [
    { name: 'Lookalike - Compradores VIP', size: '2.8M', reach: 'Alto', cost: 'R$ 2.10', conversion: '8.5%' },
    { name: 'Retargeting - Carrinho Abandonado', size: '45k', reach: 'Médio', cost: 'R$ 1.85', conversion: '12.3%' },
    { name: 'Interest - Fashion & Lifestyle', size: '12M', reach: 'Alto', cost: 'R$ 0.95', conversion: '3.2%' },
    { name: 'Custom - Email List', size: '89k', reach: 'Alto', cost: 'R$ 2.50', conversion: '15.7%' },
    { name: 'Behavioral - Recent Purchasers', size: '180k', reach: 'Médio', cost: 'R$ 1.65', conversion: '9.8%' }
  ];

  const toggleIntegration = (platformId: string) => {
    setIntegrations(prev => ({
      ...prev,
      [platformId]: {
        ...prev[platformId],
        enabled: !prev[platformId].enabled,
        status: !prev[platformId].enabled ? 'active' : 'inactive'
      }
    }));

    const platform = platforms.find(p => p.id === platformId);
    toast({
      title: integrations[platformId].enabled ? "Plataforma Desconectada" : "Plataforma Conectada",
      description: `${platform?.name} ${integrations[platformId].enabled ? 'desconectada' : 'conectada'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações de Marketing & Analytics
          </h2>
          <p className="text-gray-600">
            Conecte com Google, Facebook, Instagram e principais plataformas de marketing
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard Completo
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Otimizar Campanhas
          </Button>
        </div>
      </div>

      {/* Métricas de Marketing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {marketingMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant={metric.change.startsWith('+') || metric.change.startsWith('-R$') ? 'default' : 'destructive'}>
                    {metric.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-600">{metric.name}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="platforms">Plataformas</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="audiences">Audiências</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const integration = integrations[platform.id];
              const isConnected = integration?.enabled;

              return (
                <Card key={platform.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${platform.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="font-oswald text-lg">{platform.name}</CardTitle>
                          <p className="text-sm text-gray-600">{platform.description}</p>
                        </div>
                      </div>
                      <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {isConnected ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                        {isConnected ? 'Ativo' : 'Inativo'}
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

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-600">Alcance:</span>
                          <p className="font-medium">{platform.reach}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">CPC:</span>
                          <p className="font-medium">{platform.cpc}</p>
                        </div>
                      </div>

                      {isConnected && (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-blue-800">Orçamento Atual:</span>
                            <span className="font-bold text-blue-600">{integration.budget}</span>
                          </div>
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
                          <Input placeholder="Client ID" type="password" />
                          <Input placeholder="Client Secret" type="password" />
                          <Input placeholder="Account ID" />
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
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="font-oswald">Performance de Campanhas</CardTitle>
                <Button>
                  <Target className="w-4 h-4 mr-2" />
                  Nova Campanha
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-lg">{campaign.campaign}</h4>
                        <p className="text-sm text-gray-600">{campaign.platform}</p>
                      </div>
                      <Badge className={
                        campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }>
                        {campaign.status === 'active' ? 'Ativa' : 'Pausada'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Orçamento</p>
                        <p className="font-bold">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Gasto</p>
                        <p className="font-bold">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Impressões</p>
                        <p className="font-bold">{campaign.impressions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cliques</p>
                        <p className="font-bold">{campaign.clicks}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Conversões</p>
                        <p className="font-bold">{campaign.conversions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ROAS</p>
                        <p className="font-bold text-green-600">{campaign.roas}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">CTR</p>
                        <p className="font-bold">
                          {((parseInt(campaign.clicks.replace('k', '')) * 1000) / 
                            (parseFloat(campaign.impressions.replace('M', '')) * 1000000) * 100).toFixed(2)}%
                        </p>
                      </div>
                      <div>
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audiences">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="font-oswald">Segmentação de Audiência</CardTitle>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Criar Audiência
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {audienceSegments.map((audience, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{audience.name}</h4>
                        <p className="text-sm text-gray-600">Tamanho: {audience.size}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Alcance</p>
                          <Badge variant={
                            audience.reach === 'Alto' ? 'default' : 
                            audience.reach === 'Médio' ? 'secondary' : 'outline'
                          }>
                            {audience.reach}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">CPC Médio</p>
                          <p className="font-bold">{audience.cost}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Conversão</p>
                          <p className="font-bold text-green-600">{audience.conversion}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Target className="w-4 h-4 mr-1" />
                          Segmentar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Regras de Automação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Auto-pausar campanhas com ROAS < 2.0</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Aumentar orçamento se ROAS > 5.0</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Pausar palavras-chave com CTR < 1%</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Otimização automática de lances</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Relatórios automáticos semanais</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Otimização por IA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Otimização de lances inteligente</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Segmentação automática de audiência</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Criação automática de anúncios</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Teste A/B automático</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>Predição de performance</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Atribuição de Conversões</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Google Ads</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="font-bold">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Facebook/Instagram</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-800 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="font-bold">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>YouTube</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{width: '12%'}}></div>
                      </div>
                      <span className="font-bold">12%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Outros</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-600 h-2 rounded-full" style={{width: '8%'}}></div>
                      </div>
                      <span className="font-bold">8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Jornada do Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Descoberta</p>
                      <p className="text-sm text-gray-600">Google Search, YouTube</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-purple-50 rounded">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Consideração</p>
                      <p className="text-sm text-gray-600">Facebook, Instagram</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Decisão</p>
                      <p className="text-sm text-gray-600">Retargeting, Email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium">Retenção</p>
                      <p className="text-sm text-gray-600">CRM, WhatsApp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações Globais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Fuso Horário</label>
                  <Select defaultValue="america/sao_paulo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america/sao_paulo">América/São Paulo</SelectItem>
                      <SelectItem value="america/new_york">América/Nova York</SelectItem>
                      <SelectItem value="europe/london">Europa/Londres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Moeda</label>
                  <Select defaultValue="brl">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brl">Real Brasileiro (BRL)</SelectItem>
                      <SelectItem value="usd">Dólar Americano (USD)</SelectItem>
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Webhook URL</label>
                  <Input placeholder="https://seu-site.com/webhook/marketing" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Permissões e Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Backup automático de campanhas</span>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Logs detalhados de ações</span>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Notificações de segurança</span>
                  <Switch defaultChecked />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nível de acesso padrão</label>
                  <Select defaultValue="viewer">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Visualizador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingIntegrations;
