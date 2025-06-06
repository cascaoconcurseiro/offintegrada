
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ShoppingCart, 
  Mail, 
  MessageSquare, 
  Clock, 
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Settings,
  Play,
  Pause,
  Edit,
  Eye,
  Zap,
  Bell,
  Gift,
  Percent,
  Calendar,
  BarChart3,
  Phone,
  Send,
  Heart
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CartRecovery = () => {
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const [aiOptimization, setAiOptimization] = useState(true);

  const abandonedCarts = [
    {
      id: 1,
      customer: 'Ana Silva',
      email: 'ana@email.com',
      phone: '+55 11 99999-9999',
      items: 3,
      value: 'R$ 189,90',
      abandoned: '2 horas',
      status: 'pendente',
      stage: 'intent',
      device: 'mobile',
      location: 'São Paulo, SP'
    },
    {
      id: 2,
      customer: 'João Santos',
      email: 'joao@email.com',
      phone: '+55 21 88888-8888',
      items: 1,
      value: 'R$ 89,90',
      abandoned: '1 dia',
      status: 'email_enviado',
      stage: 'checkout',
      device: 'desktop',
      location: 'Rio de Janeiro, RJ'
    },
    {
      id: 3,
      customer: 'Maria Costa',
      email: 'maria@email.com',
      phone: '+55 31 77777-7777',
      items: 2,
      value: 'R$ 299,90',
      abandoned: '3 dias',
      status: 'recuperado',
      stage: 'payment',
      device: 'mobile',
      location: 'Belo Horizonte, MG'
    }
  ];

  const recoverySequences = [
    {
      id: 1,
      name: 'Sequência VIP Premium',
      trigger: '15 min após abandono',
      channels: ['Email', 'SMS', 'WhatsApp', 'Push'],
      emails: 4,
      conversionRate: '28.5%',
      status: 'ativo',
      revenue: 'R$ 45.8k',
      discount: '15%'
    },
    {
      id: 2,
      name: 'Primeira Compra',
      trigger: '1 hora após abandono',
      channels: ['Email', 'WhatsApp'],
      emails: 3,
      conversionRate: '18.3%',
      status: 'ativo',
      revenue: 'R$ 32.1k',
      discount: '10%'
    },
    {
      id: 3,
      name: 'Recuperação Expressa',
      trigger: '30 min após abandono',
      channels: ['Email', 'SMS'],
      emails: 2,
      conversionRate: '15.7%',
      status: 'pausado',
      revenue: 'R$ 18.9k',
      discount: '5%'
    },
    {
      id: 4,
      name: 'High-Value Recovery',
      trigger: '10 min após abandono',
      channels: ['Email', 'SMS', 'WhatsApp', 'Call'],
      emails: 5,
      conversionRate: '34.2%',
      status: 'ativo',
      revenue: 'R$ 89.7k',
      discount: '20%'
    }
  ];

  const recoveryMetrics = [
    { name: 'Carrinhos Abandonados', value: '2.847', change: '+187 hoje', icon: ShoppingCart, color: 'text-orange-600' },
    { name: 'Taxa de Recuperação', value: '24.8%', change: '+4.2%', icon: Target, color: 'text-green-600' },
    { name: 'Receita Recuperada', value: 'R$ 187k', change: '+34% mês', icon: DollarSign, color: 'text-blue-600' },
    { name: 'Emails Enviados', value: '8.947', change: '+1.2k hoje', icon: Mail, color: 'text-purple-600' },
    { name: 'SMS Enviados', value: '2.134', change: '+234 hoje', icon: MessageSquare, color: 'text-emerald-600' },
    { name: 'Tempo Médio Resposta', value: '47 min', change: '-12 min', icon: Clock, color: 'text-indigo-600' }
  ];

  const channelPerformance = [
    { channel: 'Email', sent: 8947, opened: 4289, clicked: 1205, converted: 287, roi: '430%' },
    { channel: 'SMS', sent: 2134, opened: 1897, clicked: 456, converted: 89, roi: '280%' },
    { channel: 'WhatsApp', sent: 1456, opened: 1398, clicked: 567, converted: 134, roi: '520%' },
    { channel: 'Push Notification', sent: 5678, opened: 2456, clicked: 789, converted: 156, roi: '310%' },
    { channel: 'Ligação', sent: 234, opened: 187, clicked: 0, converted: 67, roi: '890%' }
  ];

  const segmentedTriggers = [
    { segment: 'Primeiro Abandono', trigger: '2 horas', discount: '15%', channels: 4 },
    { segment: 'Abandono Recorrente', trigger: '30 min', discount: '10%', channels: 3 },
    { segment: 'VIP Customer', trigger: '15 min', discount: '20%', channels: 5 },
    { segment: 'High Value Cart', trigger: '10 min', discount: '25%', channels: 5 },
    { segment: 'Mobile User', trigger: '45 min', discount: '12%', channels: 3 },
    { segment: 'International', trigger: '4 horas', discount: '18%', channels: 2 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Sistema Avançado de Recuperação
          </h2>
          <p className="text-gray-600">
            Recuperação inteligente multi-canal com IA e automação completa
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">IA Ativa:</span>
            <Switch
              checked={aiOptimization}
              onCheckedChange={(checked) => {
                setAiOptimization(checked);
                toast({
                  title: checked ? "IA Ativada" : "IA Desativada",
                  description: `Otimização por IA ${checked ? 'habilitada' : 'desabilitada'}`,
                });
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Automação:</span>
            <Switch
              checked={automationEnabled}
              onCheckedChange={(checked) => {
                setAutomationEnabled(checked);
                toast({
                  title: checked ? "Automação Ativada" : "Automação Desativada",
                  description: `Sistema de recuperação ${checked ? 'habilitado' : 'desabilitado'}`,
                });
              }}
            />
          </div>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Otimizar com IA
          </Button>
        </div>
      </div>

      {/* Métricas de Recuperação */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {recoveryMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant={metric.change.startsWith('+') ? 'default' : 'destructive'}>
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

      <Tabs defaultValue="carts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="carts">Carrinhos</TabsTrigger>
          <TabsTrigger value="sequences">Sequências</TabsTrigger>
          <TabsTrigger value="channels">Canais</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="segments">Segmentação</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="ai">IA & Predição</TabsTrigger>
        </TabsList>

        <TabsContent value="carts">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="font-oswald">Carrinhos Abandonados - Visão 360°</CardTitle>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="pending">Pendentes</SelectItem>
                      <SelectItem value="recovering">Em Recuperação</SelectItem>
                      <SelectItem value="recovered">Recuperados</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm">
                    <Send className="w-4 h-4 mr-2" />
                    Ação em Lote
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {abandonedCarts.map((cart) => (
                  <div key={cart.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {cart.customer.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">{cart.customer}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{cart.email}</span>
                            <span>{cart.phone}</span>
                            <span>{cart.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Itens</p>
                          <p className="font-bold text-lg">{cart.items}</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Valor</p>
                          <p className="font-bold text-lg text-green-600">{cart.value}</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Abandonado</p>
                          <p className="font-medium">{cart.abandoned}</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Etapa</p>
                          <Badge variant="outline">{cart.stage}</Badge>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Device</p>
                          <Badge variant="outline">{cart.device}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge className={
                        cart.status === 'recuperado' ? 'bg-green-100 text-green-800' :
                        cart.status === 'email_enviado' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {cart.status === 'recuperado' ? 'Recuperado' :
                         cart.status === 'email_enviado' ? 'Em Recuperação' : 'Pendente'}
                      </Badge>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          SMS
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-1" />
                          WhatsApp
                        </Button>
                        <Button size="sm" variant="outline">
                          <Gift className="w-4 h-4 mr-1" />
                          Cupom
                        </Button>
                        <Button size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sequences">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Sequências de Recuperação Inteligentes</h3>
              <Button>
                <Zap className="w-4 h-4 mr-2" />
                Criar com IA
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recoverySequences.map((sequence) => (
                <Card key={sequence.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="font-oswald text-lg">{sequence.name}</CardTitle>
                        <p className="text-sm text-gray-600">{sequence.trigger}</p>
                      </div>
                      <Badge className={sequence.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {sequence.status === 'ativo' ? <Play className="w-3 h-3 mr-1" /> : <Pause className="w-3 h-3 mr-1" />}
                        {sequence.status === 'ativo' ? 'Ativo' : 'Pausado'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Canais</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {sequence.channels.map((channel, index) => (
                              <Badge key={index} variant="outline" className="text-xs">{channel}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Desconto</p>
                          <p className="font-bold text-green-600">{sequence.discount}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Emails</p>
                          <p className="font-bold">{sequence.emails}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Conversão</p>
                          <p className="font-bold text-green-600">{sequence.conversionRate}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Receita</p>
                          <p className="font-bold text-blue-600">{sequence.revenue}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          Analytics
                        </Button>
                        <Button size="sm" variant="outline">
                          {sequence.status === 'ativo' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  
                  {sequence.status === 'ativo' && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="channels">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Performance por Canal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {channelPerformance.map((channel, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-lg">{channel.channel}</h4>
                      <Badge className="bg-green-100 text-green-800">
                        ROI: {channel.roi}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Enviados</p>
                        <p className="font-bold">{channel.sent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Abertos</p>
                        <p className="font-bold">{channel.opened.toLocaleString()}</p>
                        <p className="text-xs text-green-600">
                          {((channel.opened / channel.sent) * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cliques</p>
                        <p className="font-bold">{channel.clicked.toLocaleString()}</p>
                        <p className="text-xs text-blue-600">
                          {channel.clicked > 0 ? ((channel.clicked / channel.opened) * 100).toFixed(1) : '0'}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Conversões</p>
                        <p className="font-bold">{channel.converted}</p>
                        <p className="text-xs text-purple-600">
                          {((channel.converted / channel.sent) * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="font-bold text-green-600">{channel.roi}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Triggers Segmentados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {segmentedTriggers.map((trigger, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{trigger.segment}</h4>
                          <Badge variant="outline">{trigger.channels} canais</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-gray-600">Trigger</p>
                            <p className="font-medium">{trigger.trigger}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Desconto</p>
                            <p className="font-medium text-green-600">{trigger.discount}</p>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="w-full">
                          <Settings className="w-4 h-4 mr-2" />
                          Configurar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Predições de IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Probabilidade de Conversão</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Alto valor (>R$200)</span>
                        <Badge className="bg-green-100 text-green-800">87%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Primeiro abandono</span>
                        <Badge className="bg-yellow-100 text-yellow-800">64%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Mobile checkout</span>
                        <Badge className="bg-red-100 text-red-800">32%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Melhor Horário para Envio</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Terça-feira 14h</span>
                        <Badge className="bg-green-100 text-green-800">+34% CTR</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Quinta-feira 10h</span>
                        <Badge className="bg-blue-100 text-blue-800">+28% CTR</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Otimizações Sugeridas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Aumentar desconto VIP para 25%</p>
                      <p className="text-sm text-gray-600">Potencial: +15% conversão</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Reduzir tempo trigger mobile</p>
                      <p className="text-sm text-gray-600">Sugestão: 20 min em vez de 45 min</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-medium">Adicionar SMS na sequência básica</p>
                      <p className="text-sm text-gray-600">ROI previsto: +180%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CartRecovery;
