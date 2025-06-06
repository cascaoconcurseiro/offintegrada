
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  DollarSign,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Globe,
  BarChart3,
  Eye,
  Calendar,
  Plane,
  Ship,
  Car
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ShippingIntegrations = () => {
  const [carriers, setCarriers] = useState({
    correios: { 
      enabled: true, 
      status: 'connected',
      services: ['PAC', 'SEDEX', 'SEDEX 10', 'SEDEX Hoje'],
      pricing: 'table',
      tracking: true
    },
    loggi: { 
      enabled: true, 
      status: 'connected',
      services: ['Same Day', 'Next Day', 'Scheduled'],
      pricing: 'api',
      tracking: true
    },
    rappi: { 
      enabled: false, 
      status: 'disconnected',
      services: ['Express', 'Same Day'],
      pricing: 'api',
      tracking: true
    },
    jadlog: { 
      enabled: true, 
      status: 'connected',
      services: ['Package', 'Express', '.COM'],
      pricing: 'contract',
      tracking: true
    },
    total: { 
      enabled: false, 
      status: 'disconnected',
      services: ['Econômico', 'Expresso', 'Rodoviário'],
      pricing: 'table',
      tracking: true
    },
    azul_cargo: { 
      enabled: false, 
      status: 'disconnected',
      services: ['Aéreo', 'Rodoviário', 'Express'],
      pricing: 'contract',
      tracking: true
    }
  });

  const shippingData = [
    { name: 'Correios', market: '45%', cost: 'R$ 12.50', time: '3-5 dias', satisfaction: '4.2', color: '#FFD700' },
    { name: 'Loggi', market: '25%', cost: 'R$ 18.90', time: '1-2 dias', satisfaction: '4.7', color: '#FF6B6B' },
    { name: 'Jadlog', market: '15%', cost: 'R$ 14.20', time: '2-4 dias', satisfaction: '4.1', color: '#4ECDC4' },
    { name: 'Total Express', market: '10%', cost: 'R$ 16.80', time: '2-3 dias', satisfaction: '4.3', color: '#45B7D1' },
    { name: 'Azul Cargo', market: '5%', cost: 'R$ 22.40', time: '1-2 dias', satisfaction: '4.6', color: '#96CEB4' }
  ];

  const trackingEvents = [
    { 
      id: '#OF-2024-001', 
      status: 'Entregue', 
      carrier: 'Correios', 
      destination: 'São Paulo - SP',
      time: '14:30',
      customer: 'João Silva'
    },
    { 
      id: '#OF-2024-002', 
      status: 'Em trânsito', 
      carrier: 'Loggi', 
      destination: 'Rio de Janeiro - RJ',
      time: '12:15',
      customer: 'Maria Santos'
    },
    { 
      id: '#OF-2024-003', 
      status: 'Saiu para entrega', 
      carrier: 'Jadlog', 
      destination: 'Belo Horizonte - MG',
      time: '09:45',
      customer: 'Pedro Costa'
    },
    { 
      id: '#OF-2024-004', 
      status: 'Postado', 
      carrier: 'Correios', 
      destination: 'Porto Alegre - RS',
      time: '08:20',
      customer: 'Ana Oliveira'
    }
  ];

  const shippingMetrics = [
    { name: 'Entregas no Prazo', value: '94.2%', change: '+2.1%', icon: CheckCircle, color: 'text-green-600' },
    { name: 'Custo Médio Frete', value: 'R$ 15.80', change: '-R$ 1.20', icon: DollarSign, color: 'text-blue-600' },
    { name: 'Tempo Médio', value: '2.8 dias', change: '-0.3 dias', icon: Clock, color: 'text-purple-600' },
    { name: 'Taxa de Avarias', value: '0.8%', change: '-0.2%', icon: AlertCircle, color: 'text-orange-600' },
    { name: 'Satisfação Cliente', value: '4.5/5', change: '+0.2', icon: Eye, color: 'text-emerald-600' },
    { name: 'Pedidos Hoje', value: '127', change: '+23', icon: Package, color: 'text-indigo-600' }
  ];

  const zoneMapping = [
    { zone: 'Zona 1 (Local)', states: ['SP Capital', 'RJ Capital'], days: '1-2', price: 'R$ 8.90' },
    { zone: 'Zona 2 (Sudeste)', states: ['SP Interior', 'RJ Interior', 'MG', 'ES'], days: '2-3', price: 'R$ 12.50' },
    { zone: 'Zona 3 (Sul)', states: ['PR', 'SC', 'RS'], days: '3-4', price: 'R$ 15.80' },
    { zone: 'Zona 4 (Nordeste)', states: ['BA', 'PE', 'CE', 'AL', 'SE', 'PB', 'RN', 'PI', 'MA'], days: '4-6', price: 'R$ 18.90' },
    { zone: 'Zona 5 (Centro-Oeste)', states: ['GO', 'MT', 'MS', 'DF'], days: '4-5', price: 'R$ 16.20' },
    { zone: 'Zona 6 (Norte)', states: ['AM', 'PA', 'RO', 'RR', 'AC', 'AP', 'TO'], days: '5-8', price: 'R$ 24.50' }
  ];

  const toggleCarrier = (carrierId: string) => {
    setCarriers(prev => ({
      ...prev,
      [carrierId]: {
        ...prev[carrierId],
        enabled: !prev[carrierId].enabled,
        status: !prev[carrierId].enabled ? 'connected' : 'disconnected'
      }
    }));

    toast({
      title: carriers[carrierId].enabled ? "Transportadora Desabilitada" : "Transportadora Habilitada",
      description: `${carrierId} ${carriers[carrierId].enabled ? 'desconectada' : 'conectada'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações de Envio & Logística
          </h2>
          <p className="text-gray-600">
            Conecte com Correios, transportadoras e serviços de entrega
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Relatório Completo
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Configuração Rápida
          </Button>
        </div>
      </div>

      {/* Métricas de Envio */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shippingMetrics.map((metric, index) => {
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

      <Tabs defaultValue="carriers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="carriers">Transportadoras</TabsTrigger>
          <TabsTrigger value="tracking">Rastreamento</TabsTrigger>
          <TabsTrigger value="zones">Zonas de Entrega</TabsTrigger>
          <TabsTrigger value="rules">Regras</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="carriers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Correios */}
            <Card className={carriers.correios.enabled ? 'border-green-200 bg-green-50' : ''}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-oswald">Correios</CardTitle>
                      <p className="text-sm text-gray-600">Empresa Brasileira de Correios</p>
                    </div>
                  </div>
                  <Switch
                    checked={carriers.correios.enabled}
                    onCheckedChange={() => toggleCarrier('correios')}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Serviços Disponíveis:</p>
                    <div className="flex flex-wrap gap-1">
                      {carriers.correios.services.map((service, index) => (
                        <Badge key={index} variant="outline">{service}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {carriers.correios.enabled && (
                    <div className="space-y-2 pt-2 border-t">
                      <Input placeholder="Código da Agência" />
                      <Input placeholder="Usuário dos Correios" />
                      <Input type="password" placeholder="Senha dos Correios" />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Conectar</Button>
                        <Button size="sm" variant="outline">Testar</Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Loggi */}
            <Card className={carriers.loggi.enabled ? 'border-green-200 bg-green-50' : ''}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-oswald">Loggi</CardTitle>
                      <p className="text-sm text-gray-600">Entrega rápida e confiável</p>
                    </div>
                  </div>
                  <Switch
                    checked={carriers.loggi.enabled}
                    onCheckedChange={() => toggleCarrier('loggi')}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Serviços Disponíveis:</p>
                    <div className="flex flex-wrap gap-1">
                      {carriers.loggi.services.map((service, index) => (
                        <Badge key={index} variant="outline">{service}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {carriers.loggi.enabled && (
                    <div className="space-y-2 pt-2 border-t">
                      <Input placeholder="API Key Loggi" type="password" />
                      <Input placeholder="Client ID" />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Conectar</Button>
                        <Button size="sm" variant="outline">Testar</Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Jadlog */}
            <Card className={carriers.jadlog.enabled ? 'border-green-200 bg-green-50' : ''}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-oswald">Jadlog</CardTitle>
                      <p className="text-sm text-gray-600">Logística inteligente</p>
                    </div>
                  </div>
                  <Switch
                    checked={carriers.jadlog.enabled}
                    onCheckedChange={() => toggleCarrier('jadlog')}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Serviços Disponíveis:</p>
                    <div className="flex flex-wrap gap-1">
                      {carriers.jadlog.services.map((service, index) => (
                        <Badge key={index} variant="outline">{service}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {carriers.jadlog.enabled && (
                    <div className="space-y-2 pt-2 border-t">
                      <Input placeholder="CNPJ da Empresa" />
                      <Input placeholder="Senha Jadlog" type="password" />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Conectar</Button>
                        <Button size="sm" variant="outline">Testar</Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Outras transportadoras */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-oswald">Outras Transportadoras</CardTitle>
                      <p className="text-sm text-gray-600">Total Express, Azul Cargo, Rappi</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar Integrações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Rastreamento em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trackingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        event.status === 'Entregue' ? 'bg-green-600' :
                        event.status === 'Saiu para entrega' ? 'bg-blue-600' :
                        event.status === 'Em trânsito' ? 'bg-yellow-600' : 'bg-gray-600'
                      }`}></div>
                      <div>
                        <h4 className="font-medium">{event.id}</h4>
                        <p className="text-sm text-gray-600">{event.customer} - {event.destination}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Transportadora</p>
                        <p className="font-medium">{event.carrier}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Status</p>
                        <Badge className={
                          event.status === 'Entregue' ? 'bg-green-100 text-green-800' :
                          event.status === 'Saiu para entrega' ? 'bg-blue-100 text-blue-800' :
                          event.status === 'Em trânsito' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {event.status}
                        </Badge>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Última Atualização</p>
                        <p className="font-medium">{event.time}</p>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="zones">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Mapeamento de Zonas de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {zoneMapping.map((zone, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-medium">{zone.zone}</h3>
                      <div className="flex items-center gap-4">
                        <Badge>{zone.days}</Badge>
                        <span className="font-bold text-green-600">{zone.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {zone.states.map((state, stateIndex) => (
                        <Badge key={stateIndex} variant="outline">{state}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Performance por Transportadora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shippingData.map((carrier, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: carrier.color }}
                        ></div>
                        <div>
                          <h4 className="font-medium">{carrier.name}</h4>
                          <p className="text-sm text-gray-600">Market share: {carrier.market}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{carrier.cost}</p>
                        <p className="text-sm text-gray-600">{carrier.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Estatísticas de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Entregas no Prazo</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Entregas Atrasadas</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{width: '4%'}}></div>
                      </div>
                      <span className="font-bold text-yellow-600">4%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Entregas com Problemas</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{width: '2%'}}></div>
                      </div>
                      <span className="font-bold text-red-600">2%</span>
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
                <CardTitle className="font-oswald">Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">CEP de Origem</label>
                  <Input placeholder="01234-567" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Peso Padrão (g)</label>
                  <Input type="number" placeholder="500" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Dimensões Padrão (cm)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Input placeholder="Altura" />
                    <Input placeholder="Largura" />
                    <Input placeholder="Comprimento" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Mão Própria</span>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <span>Aviso de Recebimento</span>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Automações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Cálculo Automático</span>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Etiquetas Automáticas</span>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Notificações de Status</span>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <span>Backup de Dados</span>
                  <Switch defaultChecked />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Margem de Segurança (%)</label>
                  <Input type="number" placeholder="10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShippingIntegrations;
