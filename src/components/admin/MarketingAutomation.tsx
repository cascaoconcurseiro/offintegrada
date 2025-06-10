
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, 
  Mail, 
  MessageSquare, 
  Users, 
  Target,
  Play,
  Pause,
  Edit,
  Trash2,
  Plus,
  Settings,
  TrendingUp,
  Calendar,
  Bell
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Automation {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'push' | 'webhook';
  trigger: string;
  status: 'active' | 'paused' | 'draft';
  sent: number;
  opened: number;
  clicked: number;
  lastRun: Date;
}

const MarketingAutomation = () => {
  const [automations, setAutomations] = useState<Automation[]>([
    {
      id: '1',
      name: 'Carrinho Abandonado - 1h',
      type: 'email',
      trigger: 'Carrinho abandonado há 1 hora',
      status: 'active',
      sent: 234,
      opened: 156,
      clicked: 89,
      lastRun: new Date(Date.now() - 30 * 60000)
    },
    {
      id: '2',
      name: 'Welcome Series - Novo Cliente',
      type: 'email',
      trigger: 'Cliente se cadastra',
      status: 'active',
      sent: 89,
      opened: 67,
      clicked: 23,
      lastRun: new Date(Date.now() - 2 * 60 * 60000)
    },
    {
      id: '3',
      name: 'SMS - Pedido Enviado',
      type: 'sms',
      trigger: 'Status do pedido muda para enviado',
      status: 'paused',
      sent: 156,
      opened: 145,
      clicked: 0,
      lastRun: new Date(Date.now() - 24 * 60 * 60000)
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAutomation, setNewAutomation] = useState({
    name: '',
    type: 'email' as const,
    trigger: '',
    template: ''
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'sms': return <MessageSquare className="w-4 h-4" />;
      case 'push': return <Bell className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleAutomation = (id: string) => {
    setAutomations(prev => prev.map(auto => 
      auto.id === id 
        ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' }
        : auto
    ));
    toast({
      title: "Status Alterado",
      description: "Automação foi ativada/pausada com sucesso",
    });
  };

  const handleCreateAutomation = () => {
    if (!newAutomation.name || !newAutomation.trigger) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const automation: Automation = {
      id: Date.now().toString(),
      name: newAutomation.name,
      type: newAutomation.type,
      trigger: newAutomation.trigger,
      status: 'draft',
      sent: 0,
      opened: 0,
      clicked: 0,
      lastRun: new Date()
    };

    setAutomations(prev => [...prev, automation]);
    setNewAutomation({ name: '', type: 'email', trigger: '', template: '' });
    setShowCreateForm(false);
    
    toast({
      title: "Automação Criada",
      description: "Nova automação foi criada com sucesso",
    });
  };

  const deleteAutomation = (id: string) => {
    setAutomations(prev => prev.filter(auto => auto.id !== id));
    toast({
      title: "Automação Excluída",
      description: "Automação foi removida com sucesso",
    });
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 60) return `${minutes}min atrás`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h atrás`;
    return `${Math.floor(hours / 24)}d atrás`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Automação de Marketing</h3>
          <p className="text-gray-600">Campanhas automatizadas e triggers</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nova Automação
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{automations.length}</p>
            <p className="text-sm text-gray-600">Automações</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Play className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {automations.filter(a => a.status === 'active').length}
            </p>
            <p className="text-sm text-gray-600">Ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Mail className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">
              {automations.reduce((sum, a) => sum + a.sent, 0)}
            </p>
            <p className="text-sm text-gray-600">Enviados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">
              {Math.round((automations.reduce((sum, a) => sum + a.opened, 0) / automations.reduce((sum, a) => sum + a.sent, 0)) * 100) || 0}%
            </p>
            <p className="text-sm text-gray-600">Taxa Abertura</p>
          </CardContent>
        </Card>
      </div>

      {/* Formulário de Criação */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Automação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome da Automação</label>
                <Input
                  value={newAutomation.name}
                  onChange={(e) => setNewAutomation(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ex: Boas-vindas novos clientes"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <select 
                  className="w-full border rounded px-3 py-2"
                  value={newAutomation.type}
                  onChange={(e) => setNewAutomation(prev => ({ ...prev, type: e.target.value as any }))}
                >
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                  <option value="push">Push Notification</option>
                  <option value="webhook">Webhook</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Trigger</label>
              <Input
                value={newAutomation.trigger}
                onChange={(e) => setNewAutomation(prev => ({ ...prev, trigger: e.target.value }))}
                placeholder="Ex: Cliente se cadastra"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreateAutomation}>Criar Automação</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="automations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="automations">Automações</TabsTrigger>
          <TabsTrigger value="triggers">Triggers</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="automations">
          <Card>
            <CardHeader>
              <CardTitle>Automações Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automations.map((automation) => (
                  <div key={automation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(automation.type)}
                        <div>
                          <p className="font-medium">{automation.name}</p>
                          <p className="text-sm text-gray-600">{automation.trigger}</p>
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(automation.status)}>
                        {automation.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-bold">{automation.sent}</p>
                        <p className="text-gray-600">Enviados</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{automation.opened}</p>
                        <p className="text-gray-600">Abertos</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{automation.clicked}</p>
                        <p className="text-gray-600">Cliques</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{formatTime(automation.lastRun)}</p>
                        <p className="text-gray-600">Última exec.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleAutomation(automation.id)}
                      >
                        {automation.status === 'active' ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => deleteAutomation(automation.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="triggers">
          <Card>
            <CardHeader>
              <CardTitle>Triggers Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Cliente se cadastra',
                  'Carrinho abandonado',
                  'Primeira compra',
                  'Pedido enviado',
                  'Produto favoritado',
                  'Aniversário do cliente',
                  'Inatividade por X dias',
                  'Meta de compra atingida'
                ].map((trigger, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{trigger}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Welcome Email', type: 'email', usage: 89 },
                  { name: 'Carrinho Abandonado', type: 'email', usage: 234 },
                  { name: 'Produto Enviado', type: 'sms', usage: 156 },
                  { name: 'Oferta Especial', type: 'email', usage: 67 }
                ].map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(template.type)}
                      <span className="font-medium">{template.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">{template.usage} usos</span>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Performance das Automações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">479</p>
                    <p className="text-sm text-gray-600">Total Enviados (7d)</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">68%</p>
                    <p className="text-sm text-gray-600">Taxa de Abertura</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded">
                    <p className="text-2xl font-bold text-purple-600">23%</p>
                    <p className="text-sm text-gray-600">Taxa de Clique</p>
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

export default MarketingAutomation;
