
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Edit
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CartRecovery = () => {
  const [automationEnabled, setAutomationEnabled] = useState(true);

  const abandonedCarts = [
    {
      id: 1,
      customer: 'Ana Silva',
      email: 'ana@email.com',
      items: 3,
      value: 'R$ 189,90',
      abandoned: '2 horas',
      status: 'pendente'
    },
    {
      id: 2,
      customer: 'João Santos',
      email: 'joao@email.com',
      items: 1,
      value: 'R$ 89,90',
      abandoned: '1 dia',
      status: 'email_enviado'
    },
    {
      id: 3,
      customer: 'Maria Costa',
      email: 'maria@email.com',
      items: 2,
      value: 'R$ 299,90',
      abandoned: '3 dias',
      status: 'recuperado'
    }
  ];

  const recoverySequences = [
    {
      id: 1,
      name: 'Sequência Principal',
      trigger: '1 hora após abandono',
      emails: 3,
      conversionRate: '12.5%',
      status: 'ativo'
    },
    {
      id: 2,
      name: 'VIP Customers',
      trigger: '30 min após abandono',
      emails: 2,
      conversionRate: '18.3%',
      status: 'ativo'
    },
    {
      id: 3,
      name: 'Primeiro Abandono',
      trigger: '2 horas após abandono',
      emails: 4,
      conversionRate: '15.7%',
      status: 'pausado'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Recuperação de Carrinho
          </h2>
          <p className="text-gray-600">
            Automatize a recuperação de vendas perdidas
          </p>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
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
          </label>
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Configurar
          </Button>
        </div>
      </div>

      {/* KPIs de Recuperação */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Carrinhos Abandonados</p>
                <p className="text-2xl font-bold">147</p>
                <p className="text-xs text-red-600">+8 hoje</p>
              </div>
              <ShoppingCart className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taxa Recuperação</p>
                <p className="text-2xl font-bold">14.2%</p>
                <p className="text-xs text-green-600">+2.1%</p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Receita Recuperada</p>
                <p className="text-2xl font-bold">R$ 8.9k</p>
                <p className="text-xs text-green-600">+23%</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Emails Enviados</p>
                <p className="text-2xl font-bold">432</p>
                <p className="text-xs text-blue-600">Esta semana</p>
              </div>
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="carts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="carts">Carrinhos</TabsTrigger>
          <TabsTrigger value="sequences">Sequências</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="carts">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Carrinhos Abandonados Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {abandonedCarts.map((cart) => (
                  <div key={cart.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                      <div>
                        <h4 className="font-medium">{cart.customer}</h4>
                        <p className="text-sm text-gray-600">{cart.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Items</p>
                        <p className="font-medium">{cart.items}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Valor</p>
                        <p className="font-medium">{cart.value}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Abandonado</p>
                        <p className="font-medium">{cart.abandoned}</p>
                      </div>
                      
                      <Badge className={
                        cart.status === 'recuperado' ? 'bg-green-100 text-green-800' :
                        cart.status === 'email_enviado' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {cart.status === 'recuperado' ? 'Recuperado' :
                         cart.status === 'email_enviado' ? 'Email Enviado' : 'Pendente'}
                      </Badge>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4 mr-1" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          WhatsApp
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
              <h3 className="text-lg font-medium">Sequências de Recuperação</h3>
              <Button>
                <Play className="w-4 h-4 mr-2" />
                Nova Sequência
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recoverySequences.map((sequence) => (
                <Card key={sequence.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-oswald text-lg">{sequence.name}</CardTitle>
                      <Badge className={sequence.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {sequence.status === 'ativo' ? <Play className="w-3 h-3 mr-1" /> : <Pause className="w-3 h-3 mr-1" />}
                        {sequence.status === 'ativo' ? 'Ativo' : 'Pausado'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Trigger:</p>
                        <p className="font-medium">{sequence.trigger}</p>
                      </div>
                      
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Emails</p>
                          <p className="font-medium">{sequence.emails}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Conversão</p>
                          <p className="font-medium text-green-600">{sequence.conversionRate}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline">
                          {sequence.status === 'ativo' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Templates de Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Template 1 - Lembrete</h3>
                      <p className="text-sm text-gray-600 mb-3">Enviado 1 hora após abandono</p>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-500">Assunto:</p>
                        <p className="text-sm">"Você esqueceu algo na OFFSEASON..."</p>
                      </div>
                      <Button size="sm" className="w-full mt-3">Editar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Template 2 - Desconto</h3>
                      <p className="text-sm text-gray-600 mb-3">Enviado 1 dia após abandono</p>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-500">Assunto:</p>
                        <p className="text-sm">"10% OFF no seu carrinho!"</p>
                      </div>
                      <Button size="sm" className="w-full mt-3">Editar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Template 3 - Urgência</h3>
                      <p className="text-sm text-gray-600 mb-3">Enviado 3 dias após abandono</p>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-500">Assunto:</p>
                        <p className="text-sm">"Últimas peças disponíveis!"</p>
                      </div>
                      <Button size="sm" className="w-full mt-3">Editar</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Performance por Sequência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Sequência Principal</span>
                    <div className="text-right">
                      <p className="font-bold">12.5%</p>
                      <p className="text-sm text-gray-600">87 recuperações</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>VIP Customers</span>
                    <div className="text-right">
                      <p className="font-bold">18.3%</p>
                      <p className="text-sm text-gray-600">34 recuperações</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Primeiro Abandono</span>
                    <div className="text-right">
                      <p className="font-bold">15.7%</p>
                      <p className="text-sm text-gray-600">23 recuperações</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Tendência de Recuperação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Esta semana</span>
                    <span className="font-bold text-green-600">+23%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Este mês</span>
                    <span className="font-bold text-green-600">+18%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Último trimestre</span>
                    <span className="font-bold text-green-600">+34%</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">R$ 23.4k</p>
                      <p className="text-sm text-gray-600">Receita recuperada (30 dias)</p>
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
