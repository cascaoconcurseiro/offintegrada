
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Store, Settings, Link2, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EcommerceIntegration = () => {
  const [isIntegrating, setIsIntegrating] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [apiCredentials, setApiCredentials] = useState({
    storeUrl: '',
    accessToken: '',
    clientId: '',
    clientSecret: ''
  });

  const platforms = [
    {
      id: 'nuvemshop',
      name: 'Nuvemshop',
      description: 'Integração completa com a plataforma Nuvemshop',
      logo: '🛍️',
      features: ['Sincronização de produtos', 'Gestão de pedidos', 'Controle de estoque', 'Webhooks']
    },
    {
      id: 'lojaintegrada',
      name: 'Loja Integrada',
      description: 'Conecte sua loja com a Loja Integrada',
      logo: '🏪',
      features: ['API REST completa', 'Automação de vendas', 'Relatórios detalhados', 'Multi-loja']
    },
    {
      id: 'mercadolivre',
      name: 'Mercado Livre',
      description: 'Venda nos maiores marketplaces do Brasil',
      logo: '🛒',
      features: ['Marketplace integration', 'Gestão de anúncios', 'Mercado Envios', 'Promoções']
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'Plataforma global de e-commerce',
      logo: '🌐',
      features: ['Apps ecosystem', 'Shopify Plus', 'Multi-currency', 'Global shipping']
    }
  ];

  const handleIntegration = async () => {
    if (!selectedPlatform || !apiCredentials.storeUrl) {
      toast({
        title: "Dados incompletos",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setIsIntegrating(true);
    
    // Simulação de integração
    setTimeout(() => {
      setIsIntegrating(false);
      toast({
        title: "Integração realizada com sucesso!",
        description: `Sua loja foi conectada com ${platforms.find(p => p.id === selectedPlatform)?.name}`,
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider mb-4">
          Integrações E-commerce
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conecte sua loja OFFSEASON com as principais plataformas de e-commerce do Brasil e mundo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <Card key={platform.id} className="hover:shadow-lg transition-all duration-200">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{platform.logo}</div>
              <CardTitle className="font-oswald">{platform.name}</CardTitle>
              <p className="text-sm text-gray-600">{platform.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {platform.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedPlatform(platform.id)}
                  >
                    <Link2 className="w-4 h-4 mr-2" />
                    Conectar
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Store className="w-5 h-5" />
                      Conectar com {platform.name}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="storeUrl">URL da Loja *</Label>
                      <Input
                        id="storeUrl"
                        placeholder="https://minhaloja.com.br"
                        value={apiCredentials.storeUrl}
                        onChange={(e) => setApiCredentials(prev => ({
                          ...prev,
                          storeUrl: e.target.value
                        }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="accessToken">Token de Acesso *</Label>
                      <Input
                        id="accessToken"
                        type="password"
                        placeholder="Digite seu token de acesso"
                        value={apiCredentials.accessToken}
                        onChange={(e) => setApiCredentials(prev => ({
                          ...prev,
                          accessToken: e.target.value
                        }))}
                      />
                    </div>
                    
                    {platform.id === 'nuvemshop' && (
                      <>
                        <div>
                          <Label htmlFor="clientId">Client ID</Label>
                          <Input
                            id="clientId"
                            placeholder="Client ID da aplicação"
                            value={apiCredentials.clientId}
                            onChange={(e) => setApiCredentials(prev => ({
                              ...prev,
                              clientId: e.target.value
                            }))}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="clientSecret">Client Secret</Label>
                          <Input
                            id="clientSecret"
                            type="password"
                            placeholder="Client Secret da aplicação"
                            value={apiCredentials.clientSecret}
                            onChange={(e) => setApiCredentials(prev => ({
                              ...prev,
                              clientSecret: e.target.value
                            }))}
                          />
                        </div>
                      </>
                    )}
                    
                    <Button 
                      onClick={handleIntegration}
                      disabled={isIntegrating}
                      className="w-full"
                    >
                      {isIntegrating ? (
                        <>
                          <Settings className="w-4 h-4 mr-2 animate-spin" />
                          Conectando...
                        </>
                      ) : (
                        <>
                          <Link2 className="w-4 h-4 mr-2" />
                          Conectar Agora
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EcommerceIntegration;
