
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Users, 
  TrendingUp,
  Target,
  Clock,
  Eye,
  Send,
  Settings,
  BarChart3,
  Zap,
  RefreshCw,
  Plus,
  Edit,
  Trash2,
  Play,
  Pause
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CartRecovery = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Recuperação Email 24h',
      type: 'email',
      trigger: '24h',
      status: 'active',
      sent: 2847,
      opened: 1203,
      clicked: 342,
      recovered: 89,
      revenue: 'R$ 23.450'
    },
    {
      id: 2,
      name: 'SMS Urgência 1h',
      type: 'sms',
      trigger: '1h',
      status: 'active',
      sent: 156,
      opened: 142,
      clicked: 67,
      recovered: 23,
      revenue: 'R$ 6.780'
    }
  ]);

  const abandonedCarts = [
    { 
      id: 1, 
      customer: 'João Silva', 
      email: 'joao@email.com', 
      value: 'R$ 289,90', 
      items: 2, 
      time: '2h atrás',
      score: 85,
      phone: '+55 11 99999-9999'
    },
    { 
      id: 2, 
      customer: 'Maria Santos', 
      email: 'maria@email.com', 
      value: 'R$ 159,90', 
      items: 1, 
      time: '4h atrás',
      score: 72,
      phone: '+55 11 88888-8888'
    }
  ];

  const handleCreateCampaign = () => {
    toast({
      title: "Campanha Criada",
      description: "Nova campanha de recuperação foi configurada!",
    });
  };

  const handleSendManual = (cartId: number) => {
    toast({
      title: "Mensagem Enviada",
      description: "Mensagem de recuperação enviada com sucesso!",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Recuperação de Carrinho com IA
          </h2>
          <p className="text-gray-600">
            Sistema inteligente de recuperação multi-canal com predições de conversão
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sincronizar
          </Button>
          <Button onClick={handleCreateCampaign}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Métricas de Performance */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { name: 'Carrinhos Abandonados', value: '127', change: '+12%', icon: ShoppingCart },
          { name: 'Taxa Recuperação', value: '18.7%', change: '+2.3%', icon: TrendingUp },
          { name: 'Receita Recuperada', value: 'R$ 89.2k', change: '+34%', icon: Target },
          { name: 'Emails Enviados', value: '2.847', change: '+156', icon: Mail },
          { name: 'ROI Campanhas', value: '320%', change: '+45%', icon: BarChart3 }
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-5 h-5 text-blue-600" />
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

      <Tabs defaultValue="abandoned" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="abandoned">Carrinhos Abandonados</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas Ativas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Avançado</TabsTrigger>
          <TabsTrigger value="settings">Configurações IA</TabsTrigger>
        </TabsList>

        <TabsContent value="abandoned">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Carrinhos Abandonados - Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {abandonedCarts.map((cart) => (
                  <div key={cart.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">{cart.customer}</h4>
                        <p className="text-sm text-gray-600">{cart.email}</p>
                        <p className="text-xs text-gray-500">{cart.phone}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-bold text-lg">{cart.value}</p>
                      <p className="text-sm text-gray-600">{cart.items} itens</p>
                      <p className="text-xs text-gray-500">{cart.time}</p>
                    </div>

                    <div className="text-center">
                      <Badge className={`mb-2 ${cart.score >= 80 ? 'bg-green-100 text-green-800' : 
                        cart.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        Score IA: {cart.score}%
                      </Badge>
                      <p className="text-xs text-gray-600">Prob. Conversão</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleSendManual(cart.id)}>
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleSendManual(cart.id)}>
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleSendManual(cart.id)}>
                        <Smartphone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns">
          <div className="grid gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${campaign.type === 'email' ? 'bg-blue-100' : 'bg-green-100'}`}>
                        {campaign.type === 'email' ? <Mail className="w-5 h-5 text-blue-600" /> : <Smartphone className="w-5 h-5 text-green-600" />}
                      </div>
                      <div>
                        <h3 className="font-bold">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">Trigger: {campaign.trigger} após abandono</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {campaign.status === 'active' ? 'Ativo' : 'Pausado'}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.sent}</p>
                      <p className="text-xs text-gray-600">Enviados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.opened}</p>
                      <p className="text-xs text-gray-600">Abertos</p>
                      <p className="text-xs text-green-600">{Math.round((campaign.opened / campaign.sent) * 100)}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{campaign.clicked}</p>
                      <p className="text-xs text-gray-600">Cliques</p>
                      <p className="text-xs text-blue-600">{Math.round((campaign.clicked / campaign.opened) * 100)}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{campaign.recovered}</p>
                      <p className="text-xs text-gray-600">Recuperados</p>
                      <p className="text-xs text-green-600">{Math.round((campaign.recovered / campaign.sent) * 100)}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{campaign.revenue}</p>
                      <p className="text-xs text-gray-600">Receita</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Funil de Recuperação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { stage: 'Carrinhos Abandonados', value: 2847, percentage: 100 },
                    { stage: 'Email 1h Enviado', value: 2847, percentage: 100 },
                    { stage: 'Email Aberto', value: 1203, percentage: 42.3 },
                    { stage: 'Link Clicado', value: 342, percentage: 12.0 },
                    { stage: 'Compra Finalizada', value: 89, percentage: 3.1 }
                  ].map((stage, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{stage.stage}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${stage.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-16">{stage.value}</span>
                        <span className="text-xs text-gray-600 w-12">{stage.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Predições IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800">Oportunidade Detectada</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Clientes que abandonaram carrinhos com produtos da categoria "Regatas" têm 23% mais chance de conversão com desconto de 15%.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Segmento Alto Valor</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      89 carrinhos abandonados com valor acima de R$ 200. Recomendado: campanha VIP com frete grátis.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Timing Otimizado</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Melhor horário para envio: 19h-21h (taxa de abertura 67% maior).
                    </p>
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
                <CardTitle className="font-oswald">Configurações de IA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Score Mínimo para Envio</label>
                  <Input type="number" placeholder="60" />
                  <p className="text-xs text-gray-600 mt-1">Apenas carrinhos com score acima deste valor receberão campanhas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Limite Diário de Envios</label>
                  <Input type="number" placeholder="1000" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Horário Otimizado</label>
                  <select className="w-full p-2 border rounded">
                    <option value="auto">Automático (IA escolhe)</option>
                    <option value="morning">Manhã (8h-12h)</option>
                    <option value="afternoon">Tarde (12h-18h)</option>
                    <option value="evening">Noite (18h-22h)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Jornada Multi-Canal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">1. Email 1h após abandono</span>
                    <Badge variant="outline">Ativo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">2. SMS 24h (se não abriu email)</span>
                    <Badge variant="outline">Ativo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">3. Email desconto 3 dias</span>
                    <Badge variant="outline">Ativo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">4. Retargeting Facebook 7 dias</span>
                    <Badge variant="outline">Ativo</Badge>
                  </div>
                </div>

                <Button className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar Jornada
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CartRecovery;
