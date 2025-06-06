
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Package, MapPin, Clock, CheckCircle, AlertTriangle, Settings, Calculator } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ShippingIntegrations = () => {
  const [carriers, setCarriers] = useState({
    correios: { enabled: true, status: 'connected' },
    jadlog: { enabled: false, status: 'disconnected' },
    total_express: { enabled: false, status: 'disconnected' },
    braspress: { enabled: false, status: 'disconnected' },
    mercado_envios: { enabled: true, status: 'connected' },
    loggi: { enabled: false, status: 'disconnected' },
    rappi: { enabled: false, status: 'disconnected' },
    uber_flash: { enabled: false, status: 'disconnected' }
  });

  const shippingCarriers = [
    {
      id: 'correios',
      name: 'Correios',
      description: 'Empresa oficial dos correios brasileiros',
      icon: <Package className="w-8 h-8 text-yellow-600" />,
      services: ['PAC', 'SEDEX', 'SEDEX 10', 'SEDEX Hoje'],
      coverage: '100% Brasil',
      avgTime: '5-15 dias'
    },
    {
      id: 'jadlog',
      name: 'Jadlog',
      description: 'Transportadora nacional com foco em e-commerce',
      icon: <Truck className="w-8 h-8 text-green-600" />,
      services: ['Jadlog Expresso', 'Jadlog Package', 'Jadlog Cargo'],
      coverage: '95% Brasil',
      avgTime: '2-8 dias'
    },
    {
      id: 'total_express',
      name: 'Total Express',
      description: 'Especialista em logística expressa',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      services: ['Total Next Day', 'Total Express', 'Total Econômico'],
      coverage: '90% Brasil',
      avgTime: '1-5 dias'
    },
    {
      id: 'braspress',
      name: 'Braspress',
      description: 'Líder em transporte rodoviário',
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      services: ['Braspress Expresso', 'Braspress Rodoviário'],
      coverage: '85% Brasil',
      avgTime: '3-10 dias'
    },
    {
      id: 'mercado_envios',
      name: 'Mercado Envios',
      description: 'Solução de envios do Mercado Livre',
      icon: <Package className="w-8 h-8 text-yellow-500" />,
      services: ['Mercado Envios Full', 'Mercado Envios Flex'],
      coverage: '100% Brasil',
      avgTime: '2-7 dias'
    },
    {
      id: 'loggi',
      name: 'Loggi',
      description: 'Entrega urbana same-day',
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      services: ['Loggi Moto', 'Loggi Carro', 'Loggi Express'],
      coverage: 'Principais capitais',
      avgTime: '1-3 horas'
    },
    {
      id: 'rappi',
      name: 'Rappi',
      description: 'Delivery ultra-rápido',
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      services: ['Rappi Prime', 'Rappi Express'],
      coverage: 'Grandes centros',
      avgTime: '30-90 min'
    },
    {
      id: 'uber_flash',
      name: 'Uber Flash',
      description: 'Entrega on-demand da Uber',
      icon: <Truck className="w-8 h-8 text-black" />,
      services: ['Uber Connect', 'Uber Direct'],
      coverage: 'Capitais',
      avgTime: '30-120 min'
    }
  ];

  const toggleCarrier = (id: string) => {
    setCarriers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        enabled: !prev[id].enabled,
        status: !prev[id].enabled ? 'connected' : 'disconnected'
      }
    }));
    
    const carrier = shippingCarriers.find(c => c.id === id);
    toast({
      title: carriers[id].enabled ? "Transportadora Desconectada" : "Transportadora Conectada",
      description: `${carrier?.name} ${carriers[id].enabled ? 'desabilitada' : 'habilitada'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações de Envio
          </h2>
          <p className="text-gray-600">
            Configure transportadoras e métodos de entrega
          </p>
        </div>
        <Button>
          <Calculator className="w-4 h-4 mr-2" />
          Calcular Frete
        </Button>
      </div>

      <Tabs defaultValue="carriers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="carriers">Transportadoras</TabsTrigger>
          <TabsTrigger value="zones">Zonas de Entrega</TabsTrigger>
          <TabsTrigger value="rules">Regras de Frete</TabsTrigger>
          <TabsTrigger value="tracking">Rastreamento</TabsTrigger>
        </TabsList>

        <TabsContent value="carriers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingCarriers.map((carrier) => {
              const integration = carriers[carrier.id];
              const isConnected = integration.enabled && integration.status === 'connected';
              
              return (
                <Card key={carrier.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {carrier.icon}
                        <div>
                          <CardTitle className="font-oswald">{carrier.name}</CardTitle>
                          <p className="text-sm text-gray-600">{carrier.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {isConnected ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                          {isConnected ? 'Ativo' : 'Inativo'}
                        </Badge>
                        <Switch
                          checked={integration.enabled}
                          onCheckedChange={() => toggleCarrier(carrier.id)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Serviços Disponíveis:</h4>
                        <div className="flex flex-wrap gap-1">
                          {carrier.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Cobertura:</span>
                          <p className="font-medium">{carrier.coverage}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Tempo Médio:</span>
                          <p className="font-medium">{carrier.avgTime}</p>
                        </div>
                      </div>

                      {integration.enabled && (
                        <div className="space-y-3 pt-3 border-t">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Token/Usuário</label>
                            <Input placeholder="Token de integração" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Senha/Chave</label>
                            <Input type="password" placeholder="Senha da API" />
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

        <TabsContent value="zones">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Zonas de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Zona 1 - Local</h3>
                      <p className="text-sm text-gray-600 mb-3">Mesmo município</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Taxa fixa:</span>
                          <span className="font-medium">R$ 8,90</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Frete grátis:</span>
                          <span className="font-medium">R$ 99+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Zona 2 - Regional</h3>
                      <p className="text-sm text-gray-600 mb-3">Mesmo estado</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Taxa base:</span>
                          <span className="font-medium">R$ 15,90</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Frete grátis:</span>
                          <span className="font-medium">R$ 149+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Zona 3 - Nacional</h3>
                      <p className="text-sm text-gray-600 mb-3">Todo Brasil</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Taxa base:</span>
                          <span className="font-medium">R$ 25,90</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Frete grátis:</span>
                          <span className="font-medium">R$ 199+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Regras de Frete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Configurações Gerais</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span>Frete Grátis Ativo</span>
                    <Switch defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span>Cálculo por Peso</span>
                    <Switch defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span>Cálculo por Dimensões</span>
                    <Switch />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Frete Grátis</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Valor Mínimo</label>
                    <Input type="number" defaultValue="99" placeholder="R$" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Peso Máximo (kg)</label>
                    <Input type="number" defaultValue="30" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Sistema de Rastreamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Configurações</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between">
                        <span>Rastreamento Automático</span>
                        <Switch defaultChecked />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>Notificações por E-mail</span>
                        <Switch defaultChecked />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>Notificações por SMS</span>
                        <Switch />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>WhatsApp Business</span>
                        <Switch />
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Status Personalizados</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Pedido Confirmado</span>
                        <Badge className="bg-blue-100 text-blue-800">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Em Separação</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Em Transporte</span>
                        <Badge className="bg-orange-100 text-orange-800">Ativo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">Entregue</span>
                        <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShippingIntegrations;
