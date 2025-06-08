
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Package, MapPin, Clock, DollarSign, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ShippingIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    correios: { enabled: true, status: 'connected' },
    jadlog: { enabled: true, status: 'connected' },
    totalexpress: { enabled: false, status: 'disconnected' },
    azulcargo: { enabled: false, status: 'disconnected' },
    rappi: { enabled: false, status: 'disconnected' },
    loggi: { enabled: false, status: 'disconnected' },
    mercadoenvios: { enabled: true, status: 'connected' },
    shopee: { enabled: false, status: 'disconnected' }
  });

  const shippingProviders = [
    {
      id: 'correios',
      name: 'Correios',
      description: 'PAC, SEDEX e demais serviços dos Correios',
      icon: <Package className="w-8 h-8 text-blue-600" />,
      features: ['PAC', 'SEDEX', 'SEDEX 10', 'SEDEX 12', 'SEDEX Hoje'],
      averageCost: 'R$ 15-35',
      deliveryTime: '3-15 dias'
    },
    {
      id: 'jadlog',
      name: 'Jadlog',
      description: 'Transportadora nacional com foco em e-commerce',
      icon: <Truck className="w-8 h-8 text-green-600" />,
      features: ['Jadlog Econômico', 'Jadlog Express', 'Jadlog Corporate'],
      averageCost: 'R$ 12-28',
      deliveryTime: '2-8 dias'
    },
    {
      id: 'totalexpress',
      name: 'Total Express',
      description: 'Especializada em entregas rápidas e logística',
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      features: ['Total Econômico', 'Total Express', 'Total Same Day'],
      averageCost: 'R$ 18-42',
      deliveryTime: '1-5 dias'
    },
    {
      id: 'azulcargo',
      name: 'Azul Cargo',
      description: 'Logística aérea da Azul Linhas Aéreas',
      icon: <Truck className="w-8 h-8 text-blue-700" />,
      features: ['Azul Cargo Express', 'Azul Cargo Econômico'],
      averageCost: 'R$ 25-55',
      deliveryTime: '1-3 dias'
    },
    {
      id: 'rappi',
      name: 'Rappi',
      description: 'Delivery ultrarrápido em grandes centros',
      icon: <Truck className="w-8 h-8 text-pink-600" />,
      features: ['Rappi Express', 'Rappi Same Day', 'Rappi Prime'],
      averageCost: 'R$ 8-22',
      deliveryTime: '30min-4h'
    },
    {
      id: 'loggi',
      name: 'Loggi',
      description: 'Logística urbana e entregas expressas',
      icon: <Truck className="w-8 h-8 text-red-600" />,
      features: ['Loggi Express', 'Loggi Econômico', 'Loggi Agendado'],
      averageCost: 'R$ 10-25',
      deliveryTime: '2h-2 dias'
    },
    {
      id: 'mercadoenvios',
      name: 'Mercado Envios',
      description: 'Solução de frete do Mercado Livre',
      icon: <Package className="w-8 h-8 text-yellow-600" />,
      features: ['Full', 'Flex', 'Coleta', 'Cross Docking'],
      averageCost: 'R$ 0-20',
      deliveryTime: '1-7 dias'
    },
    {
      id: 'shopee',
      name: 'Shopee Expresso',
      description: 'Solução de frete da Shopee Brasil',
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      features: ['Shopee Expresso', 'Shopee Garantido', 'Shopee Grátis'],
      averageCost: 'R$ 0-15',
      deliveryTime: '2-10 dias'
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
    
    const provider = shippingProviders.find(p => p.id === id);
    toast({
      title: integrations[id].enabled ? "Transportadora Desconectada" : "Transportadora Conectada",
      description: `${provider?.name} ${integrations[id].enabled ? 'desabilitada' : 'habilitada'} com sucesso!`,
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
          <Settings className="w-4 h-4 mr-2" />
          Configurar Regras
        </Button>
      </div>

      <Tabs defaultValue="carriers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="carriers">Transportadoras</TabsTrigger>
          <TabsTrigger value="rules">Regras de Frete</TabsTrigger>
          <TabsTrigger value="tracking">Rastreamento</TabsTrigger>
        </TabsList>

        <TabsContent value="carriers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingProviders.map((provider) => {
              const integration = integrations[provider.id];
              const isConnected = integration.enabled && integration.status === 'connected';
              
              return (
                <Card key={provider.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {provider.icon}
                        <div>
                          <CardTitle className="font-oswald">{provider.name}</CardTitle>
                          <p className="text-sm text-gray-600">{provider.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {isConnected ? 'Conectado' : 'Desconectado'}
                        </Badge>
                        <Switch
                          checked={integration.enabled}
                          onCheckedChange={() => toggleIntegration(provider.id)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Serviços Disponíveis:</h4>
                        <div className="flex flex-wrap gap-1">
                          {provider.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            Custo Médio:
                          </span>
                          <p className="font-medium">{provider.averageCost}</p>
                        </div>
                        <div>
                          <span className="text-gray-600 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Prazo:
                          </span>
                          <p className="font-medium">{provider.deliveryTime}</p>
                        </div>
                      </div>

                      {integration.enabled && (
                        <div className="space-y-3 pt-3 border-t">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Código da Empresa</label>
                            <Input placeholder="Digite o código da empresa" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Token/Senha</label>
                            <Input type="password" placeholder="Digite o token de acesso" />
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

        <TabsContent value="rules">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Regras de Frete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Frete Grátis</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span>Ativar Frete Grátis</span>
                    <Switch defaultChecked />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Valor Mínimo</label>
                      <Input type="number" defaultValue="99" placeholder="R$" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Regiões Aplicáveis</label>
                      <select className="w-full p-2 border rounded">
                        <option>Todo o Brasil</option>
                        <option>Sudeste</option>
                        <option>Sul</option>
                        <option>Nordeste</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Configurações Gerais</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Prazo Adicional (dias)</label>
                      <Input type="number" defaultValue="1" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Taxa Adicional (%)</label>
                      <Input type="number" defaultValue="0" step="0.1" />
                    </div>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Rastreamento Automático</h4>
                    <p className="text-sm text-gray-600">Atualiza status dos pedidos automaticamente</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Notificações por Email</h4>
                    <p className="text-sm text-gray-600">Envia atualizações de entrega para clientes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">SMS de Entrega</h4>
                    <p className="text-sm text-gray-600">Notifica por SMS quando saiu para entrega</p>
                  </div>
                  <Switch />
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
