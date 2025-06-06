
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone, Building2, QrCode, CheckCircle, AlertCircle, Key, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const PaymentIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    mercadopago: { enabled: true, status: 'connected' },
    pagseguro: { enabled: false, status: 'disconnected' },
    pagar_me: { enabled: false, status: 'disconnected' },
    cielo: { enabled: false, status: 'disconnected' },
    getnet: { enabled: false, status: 'disconnected' },
    stone: { enabled: false, status: 'disconnected' },
    paypal: { enabled: false, status: 'disconnected' },
    stripe: { enabled: false, status: 'disconnected' }
  });

  const paymentGateways = [
    {
      id: 'mercadopago',
      name: 'Mercado Pago',
      description: 'Gateway brasileiro completo com PIX, cartões e parcelamento',
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      features: ['PIX', 'Cartão Crédito/Débito', 'Boleto', 'Parcelamento sem juros'],
      fees: '4.99% + R$ 0.39',
      setupTime: '5 minutos'
    },
    {
      id: 'pagseguro',
      name: 'PagSeguro',
      description: 'Solução UOL para pagamentos online',
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      features: ['PIX', 'Cartões', 'Boleto', 'Saldo PagSeguro'],
      fees: '4.99% + R$ 0.40',
      setupTime: '10 minutos'
    },
    {
      id: 'pagar_me',
      name: 'Pagar.me',
      description: 'Gateway moderno com tecnologia Stone',
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      features: ['PIX', 'Cartões', 'Split de pagamento', 'Marketplace'],
      fees: '3.79% + R$ 0.39',
      setupTime: '15 minutos'
    },
    {
      id: 'cielo',
      name: 'Cielo',
      description: 'Líder em adquirência no Brasil',
      icon: <CreditCard className="w-8 h-8 text-blue-800" />,
      features: ['Cartões', 'Débito Online', 'Link de Pagamento'],
      fees: '3.99% + R$ 0.39',
      setupTime: '20 minutos'
    },
    {
      id: 'getnet',
      name: 'Getnet',
      description: 'Santander adquirência digital',
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      features: ['Cartões', 'PIX', 'Boleto', 'Checkout transparente'],
      fees: '3.89% + R$ 0.39',
      setupTime: '25 minutos'
    },
    {
      id: 'stone',
      name: 'Stone',
      description: 'Fintech com taxas competitivas',
      icon: <QrCode className="w-8 h-8 text-purple-600" />,
      features: ['PIX', 'Cartões', 'Tone+', 'Analytics avançado'],
      fees: '3.49% + R$ 0.39',
      setupTime: '15 minutos'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Gateway internacional',
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      features: ['Cartões Internacionais', 'PayPal Wallet', 'Express Checkout'],
      fees: '5.99% + R$ 0.60',
      setupTime: '10 minutos'
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Plataforma global para desenvolvedores',
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      features: ['Cartões Globais', 'Subscriptions', 'Connect', 'Radar'],
      fees: '4.99% + R$ 0.39',
      setupTime: '30 minutos'
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
    
    const gateway = paymentGateways.find(g => g.id === id);
    toast({
      title: integrations[id].enabled ? "Gateway Desconectado" : "Gateway Conectado",
      description: `${gateway?.name} ${integrations[id].enabled ? 'desabilitado' : 'habilitado'} com sucesso!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Integrações de Pagamento
          </h2>
          <p className="text-gray-600">
            Configure gateways de pagamento para aceitar pagamentos online
          </p>
        </div>
        <Button>
          <Key className="w-4 h-4 mr-2" />
          Testar Webhooks
        </Button>
      </div>

      <Tabs defaultValue="gateways" className="space-y-6">
        <TabsList>
          <TabsTrigger value="gateways">Gateways</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="gateways">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentGateways.map((gateway) => {
              const integration = integrations[gateway.id];
              const isConnected = integration.enabled && integration.status === 'connected';
              
              return (
                <Card key={gateway.id} className={`transition-all ${isConnected ? 'border-green-200 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {gateway.icon}
                        <div>
                          <CardTitle className="font-oswald">{gateway.name}</CardTitle>
                          <p className="text-sm text-gray-600">{gateway.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {isConnected ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                          {isConnected ? 'Conectado' : 'Desconectado'}
                        </Badge>
                        <Switch
                          checked={integration.enabled}
                          onCheckedChange={() => toggleIntegration(gateway.id)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Recursos Disponíveis:</h4>
                        <div className="flex flex-wrap gap-1">
                          {gateway.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Taxa:</span>
                          <p className="font-medium">{gateway.fees}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Setup:</span>
                          <p className="font-medium">{gateway.setupTime}</p>
                        </div>
                      </div>

                      {integration.enabled && (
                        <div className="space-y-3 pt-3 border-t">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">API Key</label>
                            <Input type="password" placeholder="Insira sua chave da API" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Secret Key</label>
                            <Input type="password" placeholder="Insira sua chave secreta" />
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

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Configurações Gerais de Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Opções de Checkout</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span>Checkout Transparente</span>
                    <Switch defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span>Salvar Cartões (Tokenização)</span>
                    <Switch defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span>One-Click Purchase</span>
                    <Switch />
                  </label>
                  <label className="flex items-center justify-between">
                    <span>3D Secure</span>
                    <Switch defaultChecked />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Parcelamento</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Máximo de Parcelas</label>
                    <Input type="number" defaultValue="12" min="1" max="24" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Valor Mínimo da Parcela</label>
                    <Input type="number" defaultValue="30" placeholder="R$" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">PIX</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span>PIX Habilitado</span>
                    <Switch defaultChecked />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tempo de Expiração (min)</label>
                      <Input type="number" defaultValue="30" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Desconto PIX (%)</label>
                      <Input type="number" defaultValue="5" step="0.1" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Taxa de Aprovação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">94.2%</div>
                <p className="text-sm text-gray-600">+2.1% vs mês anterior</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Chargebacks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">0.3%</div>
                <p className="text-sm text-gray-600">-0.1% vs mês anterior</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Tempo Médio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">2.1s</div>
                <p className="text-sm text-gray-600">Processamento de pagamento</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentIntegrations;
