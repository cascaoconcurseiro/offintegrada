
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Target, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Mail, 
  MessageSquare,
  Smartphone,
  Globe,
  Eye,
  MousePointer,
  Heart,
  Share2,
  Star,
  Zap,
  Settings,
  Plus,
  Edit,
  Trash2,
  Play,
  Pause,
  RefreshCw,
  Download,
  Upload,
  Filter,
  Search,
  Calendar,
  Clock,
  DollarSign,
  Package,
  ShoppingCart,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Key,
  Database,
  Code,
  Link,
  Activity,
  ArrowUpDown,
  Camera as InstagramIcon,
  Video as VideoIcon
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { toast } from '@/hooks/use-toast';

const MarketingIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    google_ads: { connected: true, status: 'active', spend: 'R$ 12.450', roas: '4.2x' },
    facebook_ads: { connected: true, status: 'active', spend: 'R$ 8.960', roas: '3.8x' },
    instagram_ads: { connected: true, status: 'active', spend: 'R$ 5.230', roas: '5.1x' },
    youtube_ads: { connected: false, status: 'inactive', spend: 'R$ 0', roas: '0x' },
    tiktok_ads: { connected: false, status: 'inactive', spend: 'R$ 0', roas: '0x' },
    linkedin_ads: { connected: false, status: 'inactive', spend: 'R$ 0', roas: '0x' },
    twitter_ads: { connected: false, status: 'inactive', spend: 'R$ 0', roas: '0x' },
    google_analytics: { connected: true, status: 'active', sessions: '45.2k', conversion: '3.2%' },
    facebook_pixel: { connected: true, status: 'active', events: '89.4k', audience: '12.3k' },
    hotjar: { connected: true, status: 'active', recordings: '2.8k', heatmaps: '156' },
    mailchimp: { connected: true, status: 'active', subscribers: '15.6k', open_rate: '24.8%' },
    rdstation: { connected: true, status: 'active', leads: '3.4k', qualified: '892' },
    hubspot: { connected: false, status: 'inactive', contacts: '0', deals: '0' }
  });

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Black Friday 2024',
      platform: 'Google Ads',
      status: 'active',
      budget: 'R$ 5.000',
      spent: 'R$ 3.240',
      impressions: '125.4k',
      clicks: '3.2k',
      conversions: 89,
      roas: '4.2x',
      cpa: 'R$ 36.40'
    },
    {
      id: 2,
      name: 'Verão Collection',
      platform: 'Facebook Ads',
      status: 'active',
      budget: 'R$ 3.000',
      spent: 'R$ 2.890',
      impressions: '89.2k',
      clicks: '2.1k',
      conversions: 67,
      roas: '3.8x',
      cpa: 'R$ 43.10'
    }
  ]);

  const platforms = [
    {
      id: 'google_ads',
      name: 'Google Ads',
      description: 'Campanhas de pesquisa e display',
      icon: Globe,
      color: 'bg-blue-600',
      category: 'ads',
      features: ['Search Ads', 'Display', 'Shopping', 'YouTube', 'Performance Max']
    },
    {
      id: 'facebook_ads',
      name: 'Facebook Ads',
      description: 'Campanhas no Facebook e Instagram',
      icon: Target,
      color: 'bg-blue-800',
      category: 'ads',
      features: ['Feed Ads', 'Stories', 'Reels', 'Lookalike', 'Retargeting']
    },
    {
      id: 'instagram_ads',
      name: 'Instagram Ads',
      description: 'Campanhas nativas do Instagram',
      icon: InstagramIcon,
      color: 'bg-pink-600',
      category: 'ads',
      features: ['Feed', 'Stories', 'Reels', 'Shopping', 'IGTV']
    },
    {
      id: 'tiktok_ads',
      name: 'TikTok Ads',
      description: 'Campanhas no TikTok',
      icon: VideoIcon,
      color: 'bg-black',
      category: 'ads',
      features: ['In-Feed', 'Branded Hashtag', 'TopView', 'Branded Effects']
    },
    {
      id: 'google_analytics',
      name: 'Google Analytics',
      description: 'Análise de comportamento e conversões',
      icon: BarChart3,
      color: 'bg-orange-600',
      category: 'analytics',
      features: ['GA4', 'E-commerce', 'Funil', 'Audiências', 'Atribuição']
    },
    {
      id: 'facebook_pixel',
      name: 'Facebook Pixel',
      description: 'Tracking e otimização de campanhas',
      icon: Eye,
      color: 'bg-blue-700',
      category: 'analytics',
      features: ['Conversions API', 'Eventos', 'Audiências', 'Otimização']
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Email marketing e automação',
      icon: Mail,
      color: 'bg-yellow-600',
      category: 'automation',
      features: ['Campaigns', 'Automations', 'Landing Pages', 'A/B Testing']
    },
    {
      id: 'rdstation',
      name: 'RD Station',
      description: 'Marketing automation brasileiro',
      icon: Zap,
      color: 'bg-green-600',
      category: 'automation',
      features: ['Lead Scoring', 'Nurturing', 'Landing Pages', 'CRM']
    }
  ];

  const adSpendData = [
    { name: 'Jan', google: 8500, facebook: 5200, instagram: 3100, tiktok: 0 },
    { name: 'Fev', google: 9200, facebook: 6100, instagram: 3800, tiktok: 1200 },
    { name: 'Mar', google: 10100, facebook: 7300, instagram: 4200, tiktok: 1800 },
    { name: 'Abr', google: 11500, facebook: 8100, instagram: 4800, tiktok: 2400 },
    { name: 'Mai', google: 12100, facebook: 8600, instagram: 5100, tiktok: 2900 },
    { name: 'Jun', google: 12450, facebook: 8960, instagram: 5230, tiktok: 3100 }
  ];

  const roasData = [
    { platform: 'Instagram', roas: 5.1, color: '#E1306C' },
    { platform: 'Google', roas: 4.2, color: '#4285F4' },
    { platform: 'Facebook', roas: 3.8, color: '#1877F2' },
    { platform: 'TikTok', roas: 2.9, color: '#000000' }
  ];

  const toggleIntegration = (platformId: string) => {
    setIntegrations(prev => ({
      ...prev,
      [platformId]: {
        ...prev[platformId],
        connected: !prev[platformId].connected,
        status: !prev[platformId].connected ? 'active' : 'inactive'
      }
    }));

    const platform = platforms.find(p => p.id === platformId);
    toast({
      title: integrations[platformId].connected ? "Desconectado" : "Conectado",
      description: `${platform?.name} ${integrations[platformId].connected ? 'desconectado' : 'conectado'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Marketing Intelligence Center
          </h2>
          <p className="text-gray-600">
            Gestão unificada de campanhas, analytics e automação de marketing
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sincronizar Dados
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Dashboard de Performance */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { name: 'ROAS Total', value: '4.2x', change: '+12%', icon: TrendingUp, color: 'text-green-600' },
          { name: 'Gasto Total', value: 'R$ 26.6k', change: '+8%', icon: DollarSign, color: 'text-blue-600' },
          { name: 'Conversões', value: '892', change: '+23%', icon: ShoppingCart, color: 'text-purple-600' },
          { name: 'CPA Médio', value: 'R$ 29.80', change: '-15%', icon: Target, color: 'text-orange-600' },
          { name: 'CTR Médio', value: '2.8%', change: '+0.3%', icon: MousePointer, color: 'text-pink-600' },
          { name: 'Leads Gerados', value: '3.4k', change: '+34%', icon: Users, color: 'text-indigo-600' }
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant="outline">{metric.change}</Badge>
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
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="platforms">Plataformas</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms">
          <div className="space-y-6">
            {['ads', 'analytics', 'automation'].map(category => (
              <div key={category}>
                <h3 className="text-lg font-oswald font-bold mb-4 uppercase">
                  {category === 'ads' ? 'Plataformas de Anúncios' : 
                   category === 'analytics' ? 'Ferramentas de Analytics' : 
                   'Automação de Marketing'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platforms.filter(p => p.category === category).map((platform) => {
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
                              <p className="text-sm text-gray-600 mb-2">Recursos:</p>
                              <div className="flex flex-wrap gap-1">
                                {platform.features.map((feature, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {isConnected && (
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                {integration.spend && (
                                  <div>
                                    <span className="text-gray-600">Gasto:</span>
                                    <span className="font-medium ml-1">{integration.spend}</span>
                                  </div>
                                )}
                                {integration.roas && (
                                  <div>
                                    <span className="text-gray-600">ROAS:</span>
                                    <span className="font-medium ml-1 text-green-600">{integration.roas}</span>
                                  </div>
                                )}
                                {integration.sessions && (
                                  <div>
                                    <span className="text-gray-600">Sessões:</span>
                                    <span className="font-medium ml-1">{integration.sessions}</span>
                                  </div>
                                )}
                                {integration.subscribers && (
                                  <div>
                                    <span className="text-gray-600">Inscritos:</span>
                                    <span className="font-medium ml-1">{integration.subscribers}</span>
                                  </div>
                                )}
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
                                <Input placeholder="API Key / Token" type="password" />
                                <Input placeholder="Account ID" />
                                {platform.category === 'ads' && (
                                  <Input placeholder="Pixel ID" />
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Investimento por Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={adSpendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`R$ ${value}`, '']} />
                    <Bar dataKey="google" fill="#4285F4" name="Google" />
                    <Bar dataKey="facebook" fill="#1877F2" name="Facebook" />
                    <Bar dataKey="instagram" fill="#E1306C" name="Instagram" />
                    <Bar dataKey="tiktok" fill="#000000" name="TikTok" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  ROAS por Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roasData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-medium">{item.platform}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-green-600">{item.roas}x</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns">
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{campaign.name}</h3>
                      <p className="text-sm text-gray-600">{campaign.platform}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {campaign.status === 'active' ? 'Ativa' : 'Pausada'}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.budget}</p>
                      <p className="text-xs text-gray-600">Orçamento</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.spent}</p>
                      <p className="text-xs text-gray-600">Gasto</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.impressions}</p>
                      <p className="text-xs text-gray-600">Impressões</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.clicks}</p>
                      <p className="text-xs text-gray-600">Cliques</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.conversions}</p>
                      <p className="text-xs text-gray-600">Conversões</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{campaign.roas}</p>
                      <p className="text-xs text-gray-600">ROAS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.cpa}</p>
                      <p className="text-xs text-gray-600">CPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{Math.round((parseInt(campaign.clicks.replace('k', '')) * 1000 / parseInt(campaign.impressions.replace('k', '')) * 1000) * 100)}%</p>
                      <p className="text-xs text-gray-600">CTR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="automation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Automações Ativas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Welcome Series', status: true, trigger: 'Nova inscrição', sent: '2.3k' },
                  { name: 'Cart Abandonment', status: true, trigger: 'Carrinho abandonado', sent: '892' },
                  { name: 'Post-Purchase', status: true, trigger: 'Compra finalizada', sent: '445' },
                  { name: 'Win-Back Campaign', status: false, trigger: '30 dias sem compra', sent: '0' },
                  { name: 'Birthday Campaign', status: true, trigger: 'Aniversário', sent: '156' }
                ].map((automation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Switch checked={automation.status} />
                      <div>
                        <h4 className="font-medium">{automation.name}</h4>
                        <p className="text-sm text-gray-600">{automation.trigger}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{automation.sent}</p>
                      <p className="text-xs text-gray-600">Enviados</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Segmentação Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'VIP Customers', count: '234', criteria: '10+ compras', color: 'bg-purple-600' },
                  { name: 'High Intent', count: '567', criteria: 'Visitou 5+ páginas', color: 'bg-blue-600' },
                  { name: 'Price Sensitive', count: '1.2k', criteria: 'Clicou em promoções', color: 'bg-green-600' },
                  { name: 'New Visitors', count: '3.4k', criteria: 'Primeira visita', color: 'bg-gray-600' },
                  { name: 'Mobile Users', count: '2.8k', criteria: 'Acesso mobile', color: 'bg-orange-600' }
                ].map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                      <div>
                        <h4 className="font-medium">{segment.name}</h4>
                        <p className="text-sm text-gray-600">{segment.criteria}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{segment.count}</p>
                      <p className="text-xs text-gray-600">Usuários</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Relatórios Personalizados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button variant="outline" className="h-20 flex flex-col gap-2">
                  <Download className="w-6 h-6" />
                  <span>Performance Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>ROI Analysis</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-2">
                  <Users className="w-6 h-6" />
                  <span>Audience Insights</span>
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Relatórios Agendados</h4>
                {[
                  { name: 'Weekly Performance', frequency: 'Semanal', recipients: 'equipe@offseason.com', next: 'Segunda 9h' },
                  { name: 'Monthly ROI Report', frequency: 'Mensal', recipients: 'diretoria@offseason.com', next: '1º dia útil' },
                  { name: 'Campaign Analysis', frequency: 'Quinzenal', recipients: 'marketing@offseason.com', next: 'Terça 14h' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{report.name}</h5>
                      <p className="text-sm text-gray-600">{report.frequency} - {report.recipients}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{report.next}</p>
                      <p className="text-xs text-gray-600">Próximo envio</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingIntegrations;
