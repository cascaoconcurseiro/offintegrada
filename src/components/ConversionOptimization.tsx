
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Target, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Eye,
  MousePointer,
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Percent
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ConversionOptimization = () => {
  const [optimizations, setOptimizations] = useState({
    urgencyBanner: { enabled: true, intensity: 'high' },
    scarcityIndicator: { enabled: true, threshold: 10 },
    socialProof: { enabled: true, realTime: true },
    exitIntentPopup: { enabled: true, discount: 15 },
    cartAbandonment: { enabled: true, emailDelay: 60 },
    freeShipping: { enabled: true, threshold: 299 },
    progressBar: { enabled: true, goal: 299 },
    crossSell: { enabled: true, maxItems: 3 },
    upsell: { enabled: true, timing: 'checkout' },
    countdown: { enabled: true, duration: 24 },
    reviews: { enabled: true, minRating: 4.5 },
    trustBadges: { enabled: true, position: 'checkout' },
    chatbot: { enabled: true, triggerDelay: 30 },
    videoTestimonials: { enabled: false, autoplay: false },
    personalization: { enabled: true, aiRecommendations: true }
  });

  const [abTests, setAbTests] = useState([
    { id: 1, name: 'Botão CTA - Cor', status: 'running', conversion: '+12.5%', traffic: '50/50' },
    { id: 2, name: 'Checkout - Etapas', status: 'completed', conversion: '+8.3%', traffic: '100/0' },
    { id: 3, name: 'Hero Banner - Texto', status: 'draft', conversion: 'N/A', traffic: '0/0' }
  ]);

  const conversionMetrics = [
    { name: 'Taxa de Conversão', value: '4.7%', change: '+12%', icon: Target, color: 'text-green-600' },
    { name: 'Carrinho Abandonado', value: '68.2%', change: '-8%', icon: ShoppingCart, color: 'text-yellow-600' },
    { name: 'Tempo na Página', value: '3:42', change: '+15%', icon: Clock, color: 'text-blue-600' },
    { name: 'Bounce Rate', value: '32.1%', change: '-5%', icon: Activity, color: 'text-purple-600' },
    { name: 'AOV (Ticket Médio)', value: 'R$ 287', change: '+23%', icon: DollarSign, color: 'text-emerald-600' },
    { name: 'Click-through Rate', value: '8.9%', change: '+7%', icon: MousePointer, color: 'text-indigo-600' }
  ];

  const funnelData = [
    { stage: 'Visitantes', value: 15420, percentage: 100, dropoff: 0 },
    { stage: 'Visualizações de Produto', value: 8947, percentage: 58, dropoff: 42 },
    { stage: 'Adicionou ao Carrinho', value: 2847, percentage: 18.5, dropoff: 68 },
    { stage: 'Iniciou Checkout', value: 1205, percentage: 7.8, dropoff: 58 },
    { stage: 'Finalizou Compra', value: 587, percentage: 3.8, dropoff: 51 }
  ];

  const toggleOptimization = (key: string, subKey?: string) => {
    setOptimizations(prev => {
      const newState = { ...prev };
      if (subKey) {
        newState[key] = { ...newState[key], [subKey]: !newState[key][subKey] };
      } else {
        newState[key] = { ...newState[key], enabled: !newState[key].enabled };
      }
      return newState;
    });
    
    toast({
      title: "Configuração Atualizada",
      description: "Otimização foi ativada/desativada com sucesso!",
    });
  };

  const updateValue = (key: string, subKey: string, value: any) => {
    setOptimizations(prev => ({
      ...prev,
      [key]: { ...prev[key], [subKey]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Otimização de Conversão
          </h2>
          <p className="text-gray-600">
            Controle total das estratégias de conversão e performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Relatório Completo
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Otimizar Automaticamente
          </Button>
        </div>
      </div>

      {/* Métricas de Conversão */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {conversionMetrics.map((metric, index) => {
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

      <Tabs defaultValue="optimizations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="optimizations">Otimizações</TabsTrigger>
          <TabsTrigger value="abtests">A/B Tests</TabsTrigger>
          <TabsTrigger value="funnel">Funil</TabsTrigger>
          <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
          <TabsTrigger value="personalization">Personalização</TabsTrigger>
        </TabsList>

        <TabsContent value="optimizations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Urgência e Escassez */}
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Urgência e Escassez
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Banner de Urgência</span>
                  <Switch 
                    checked={optimizations.urgencyBanner.enabled}
                    onCheckedChange={() => toggleOptimization('urgencyBanner')}
                  />
                </div>
                {optimizations.urgencyBanner.enabled && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Intensidade</label>
                    <Select 
                      value={optimizations.urgencyBanner.intensity}
                      onValueChange={(value) => updateValue('urgencyBanner', 'intensity', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baixa</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span>Indicador de Estoque</span>
                  <Switch 
                    checked={optimizations.scarcityIndicator.enabled}
                    onCheckedChange={() => toggleOptimization('scarcityIndicator')}
                  />
                </div>
                {optimizations.scarcityIndicator.enabled && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Limite de Estoque para Alerta</label>
                    <Input 
                      type="number" 
                      value={optimizations.scarcityIndicator.threshold}
                      onChange={(e) => updateValue('scarcityIndicator', 'threshold', parseInt(e.target.value))}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span>Countdown Timer</span>
                  <Switch 
                    checked={optimizations.countdown.enabled}
                    onCheckedChange={() => toggleOptimization('countdown')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Prova Social */}
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Prova Social
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Notificações em Tempo Real</span>
                  <Switch 
                    checked={optimizations.socialProof.enabled}
                    onCheckedChange={() => toggleOptimization('socialProof')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Reviews Destacadas</span>
                  <Switch 
                    checked={optimizations.reviews.enabled}
                    onCheckedChange={() => toggleOptimization('reviews')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Selos de Confiança</span>
                  <Switch 
                    checked={optimizations.trustBadges.enabled}
                    onCheckedChange={() => toggleOptimization('trustBadges')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Vídeo Testimonials</span>
                  <Switch 
                    checked={optimizations.videoTestimonials.enabled}
                    onCheckedChange={() => toggleOptimization('videoTestimonials')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Carrinho e Checkout */}
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Carrinho e Checkout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Recuperação de Carrinho</span>
                  <Switch 
                    checked={optimizations.cartAbandonment.enabled}
                    onCheckedChange={() => toggleOptimization('cartAbandonment')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Exit Intent Popup</span>
                  <Switch 
                    checked={optimizations.exitIntentPopup.enabled}
                    onCheckedChange={() => toggleOptimization('exitIntentPopup')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Barra de Progresso Frete</span>
                  <Switch 
                    checked={optimizations.progressBar.enabled}
                    onCheckedChange={() => toggleOptimization('progressBar')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Cross-sell</span>
                  <Switch 
                    checked={optimizations.crossSell.enabled}
                    onCheckedChange={() => toggleOptimization('crossSell')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Upsell</span>
                  <Switch 
                    checked={optimizations.upsell.enabled}
                    onCheckedChange={() => toggleOptimization('upsell')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Suporte e Engajamento */}
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Suporte e Engajamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Chatbot Inteligente</span>
                  <Switch 
                    checked={optimizations.chatbot.enabled}
                    onCheckedChange={() => toggleOptimization('chatbot')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span>Personalização IA</span>
                  <Switch 
                    checked={optimizations.personalization.enabled}
                    onCheckedChange={() => toggleOptimization('personalization')}
                  />
                </div>

                {optimizations.personalization.enabled && (
                  <div className="flex items-center justify-between pl-4">
                    <span>Recomendações IA</span>
                    <Switch 
                      checked={optimizations.personalization.aiRecommendations}
                      onCheckedChange={() => toggleOptimization('personalization', 'aiRecommendations')}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="abtests">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="font-oswald">Testes A/B Ativos</CardTitle>
                <Button>
                  <Target className="w-4 h-4 mr-2" />
                  Novo Teste
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {abTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{test.name}</h4>
                      <p className="text-sm text-gray-600">Tráfego: {test.traffic}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Conversão</p>
                        <p className="font-bold text-green-600">{test.conversion}</p>
                      </div>
                      <Badge className={
                        test.status === 'running' ? 'bg-green-100 text-green-800' :
                        test.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {test.status === 'running' ? 'Rodando' :
                         test.status === 'completed' ? 'Concluído' : 'Rascunho'}
                      </Badge>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funnel">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Funil de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {funnelData.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{stage.stage}</h4>
                          <p className="text-sm text-gray-600">{stage.percentage}% do total</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{stage.value.toLocaleString()}</p>
                        {stage.dropoff > 0 && (
                          <p className="text-sm text-red-600">-{stage.dropoff}% dropoff</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${stage.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Heatmap e Análise de Comportamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Eye className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <h3 className="font-medium">Cliques</h3>
                      <p className="text-2xl font-bold">847</p>
                      <p className="text-sm text-gray-600">nos últimos 7 dias</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <MousePointer className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <h3 className="font-medium">Scroll Depth</h3>
                      <p className="text-2xl font-bold">68%</p>
                      <p className="text-sm text-gray-600">média da página</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                      <h3 className="font-medium">Tempo Médio</h3>
                      <p className="text-2xl font-bold">3:42</p>
                      <p className="text-sm text-gray-600">por sessão</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <PieChart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Heatmap Interativo</h3>
                  <p className="text-gray-600 mb-4">
                    Visualize onde seus clientes clicam, rolam e passam mais tempo
                  </p>
                  <Button>
                    <Activity className="w-4 h-4 mr-2" />
                    Gerar Heatmap
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personalization">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Personalização Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Segmentação de Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Novos Visitantes</span>
                          <Badge>67% (2.847)</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Clientes Recorrentes</span>
                          <Badge>28% (1.189)</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>VIP (5+ compras)</span>
                          <Badge>5% (217)</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recomendações IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Produtos Relacionados</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Baseado em Comportamento</span>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Cross-sell Inteligente</span>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConversionOptimization;
