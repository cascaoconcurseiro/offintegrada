
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarketingAutomation from '@/components/admin/MarketingAutomation';
import CustomReports from '@/components/admin/CustomReports';
import { 
  Target, 
  Mail, 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Youtube,
  Zap,
  BarChart3,
  Settings,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const MarketingIntegrations = () => {
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([
    'google-ads',
    'facebook-ads',
    'mailchimp'
  ]);

  const integrations = [
    {
      id: 'google-ads',
      name: 'Google Ads',
      description: 'Campanhas de busca e display',
      icon: Target,
      category: 'ads',
      status: 'connected'
    },
    {
      id: 'facebook-ads',
      name: 'Facebook Ads',
      description: 'Campanhas no Facebook e Instagram',
      icon: Facebook,
      category: 'ads',
      status: 'connected'
    },
    {
      id: 'instagram-ads',
      name: 'Instagram Ads',
      description: 'Campanhas no Instagram',
      icon: Instagram,
      category: 'ads',
      status: 'available'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Email marketing automation',
      icon: Mail,
      category: 'email',
      status: 'connected'
    },
    {
      id: 'klaviyo',
      name: 'Klaviyo',
      description: 'Email e SMS marketing',
      icon: MessageSquare,
      category: 'email',
      status: 'available'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Automação entre aplicativos',
      icon: Zap,
      category: 'automation',
      status: 'available'
    }
  ];

  const handleConnect = (integrationId: string) => {
    setActiveIntegrations(prev => [...prev, integrationId]);
    toast({
      title: "Integração Conectada",
      description: "Integração configurada com sucesso",
    });
  };

  const handleDisconnect = (integrationId: string) => {
    setActiveIntegrations(prev => prev.filter(id => id !== integrationId));
    toast({
      title: "Integração Desconectada",
      description: "Integração foi removida",
    });
  };

  const isConnected = (integrationId: string) => {
    return activeIntegrations.includes(integrationId);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="integrations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations">
          <div className="space-y-6">
            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold">{activeIntegrations.length}</p>
                  <p className="text-sm text-gray-600">Conectadas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <BarChart3 className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-600">Campanhas Ativas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Mail className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-2xl font-bold">2.847</p>
                  <p className="text-sm text-gray-600">Emails Enviados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <MessageSquare className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                  <p className="text-2xl font-bold">R$ 23.456</p>
                  <p className="text-sm text-gray-600">ROI Total</p>
                </CardContent>
              </Card>
            </div>

            {/* Integrações por Categoria */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publicidade e Anúncios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrations.filter(i => i.category === 'ads').map((integration) => {
                      const IconComponent = integration.icon;
                      const connected = isConnected(integration.id);
                      
                      return (
                        <div key={integration.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-8 h-8 text-blue-600" />
                              <div>
                                <h4 className="font-medium">{integration.name}</h4>
                                <p className="text-sm text-gray-600">{integration.description}</p>
                              </div>
                            </div>
                            {connected ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            {connected ? (
                              <>
                                <Button size="sm" variant="outline">
                                  <Settings className="w-4 h-4 mr-1" />
                                  Configurar
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => handleDisconnect(integration.id)}
                                >
                                  Desconectar
                                </Button>
                              </>
                            ) : (
                              <Button 
                                size="sm"
                                onClick={() => handleConnect(integration.id)}
                              >
                                Conectar
                              </Button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrations.filter(i => i.category === 'email').map((integration) => {
                      const IconComponent = integration.icon;
                      const connected = isConnected(integration.id);
                      
                      return (
                        <div key={integration.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-8 h-8 text-blue-600" />
                              <div>
                                <h4 className="font-medium">{integration.name}</h4>
                                <p className="text-sm text-gray-600">{integration.description}</p>
                              </div>
                            </div>
                            {connected ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            {connected ? (
                              <>
                                <Button size="sm" variant="outline">
                                  <Settings className="w-4 h-4 mr-1" />
                                  Configurar
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => handleDisconnect(integration.id)}
                                >
                                  Desconectar
                                </Button>
                              </>
                            ) : (
                              <Button 
                                size="sm"
                                onClick={() => handleConnect(integration.id)}
                              >
                                Conectar
                              </Button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Automação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrations.filter(i => i.category === 'automation').map((integration) => {
                      const IconComponent = integration.icon;
                      const connected = isConnected(integration.id);
                      
                      return (
                        <div key={integration.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-8 h-8 text-blue-600" />
                              <div>
                                <h4 className="font-medium">{integration.name}</h4>
                                <p className="text-sm text-gray-600">{integration.description}</p>
                              </div>
                            </div>
                            {connected ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            {connected ? (
                              <>
                                <Button size="sm" variant="outline">
                                  <Settings className="w-4 h-4 mr-1" />
                                  Configurar
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => handleDisconnect(integration.id)}
                                >
                                  Desconectar
                                </Button>
                              </>
                            ) : (
                              <Button 
                                size="sm"
                                onClick={() => handleConnect(integration.id)}
                              >
                                Conectar
                              </Button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="automation">
          <MarketingAutomation />
        </TabsContent>

        <TabsContent value="reports">
          <CustomReports />
        </TabsContent>

        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle>Campanhas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: 'Black Friday 2024',
                    platform: 'Google Ads + Facebook',
                    budget: 'R$ 5.000',
                    spent: 'R$ 2.847',
                    conversions: 89,
                    status: 'active'
                  },
                  {
                    name: 'Verão Collection',
                    platform: 'Instagram Ads',
                    budget: 'R$ 2.000',
                    spent: 'R$ 1.234',
                    conversions: 45,
                    status: 'active'
                  },
                  {
                    name: 'Email - Welcome Series',
                    platform: 'Mailchimp',
                    budget: 'R$ 500',
                    spent: 'R$ 156',
                    conversions: 234,
                    status: 'active'
                  }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{campaign.name}</h4>
                      <p className="text-sm text-gray-600">{campaign.platform}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-bold">{campaign.budget}</p>
                        <p className="text-gray-600">Orçamento</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{campaign.spent}</p>
                        <p className="text-gray-600">Gasto</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{campaign.conversions}</p>
                        <p className="text-gray-600">Conversões</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {campaign.status.toUpperCase()}
                      </Badge>
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
