
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Settings, 
  Store, 
  Users, 
  Shield, 
  Mail, 
  Globe,
  Palette,
  Database,
  Zap,
  Bell,
  Lock,
  Key,
  Smartphone,
  CreditCard,
  Truck,
  BarChart3,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Save,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  AlertTriangle,
  Info,
  Gear,
  Cloud,
  HardDrive,
  Wifi,
  Monitor,
  Headphones,
  Calendar,
  Clock
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    store: {
      name: 'OFFSEASON',
      description: 'Moda fitness premium para seu lifestyle',
      email: 'contato@offseason.com.br',
      phone: '+55 11 99999-9999',
      address: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zipcode: '01234-567',
      logo: '',
      favicon: '',
      timezone: 'America/Sao_Paulo',
      currency: 'BRL',
      language: 'pt-BR'
    },
    notifications: {
      emailOrders: true,
      emailStock: true,
      emailReviews: true,
      smsOrders: false,
      smsStock: true,
      pushOrders: true,
      pushPromotion: false
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5,
      ipWhitelist: '',
      sslEnabled: true,
      securityHeaders: true
    },
    performance: {
      cacheEnabled: true,
      compressionEnabled: true,
      cdnEnabled: true,
      lazyLoading: true,
      imageOptimization: true,
      minification: true
    },
    integrations: {
      googleAnalytics: 'GA_MEASUREMENT_ID',
      facebookPixel: 'FACEBOOK_PIXEL_ID',
      googleTagManager: 'GTM_ID',
      hotjar: 'HOTJAR_ID',
      crisp: 'CRISP_ID',
      zendesk: '',
      mailchimp: 'MAILCHIMP_API_KEY',
      zapier: 'ZAPIER_WEBHOOK_URL'
    },
    taxes: {
      taxEnabled: true,
      taxRate: 18,
      taxIncluded: true,
      regionalTax: true,
      taxCalculation: 'automatic'
    }
  });

  const [users, setUsers] = useState([
    { id: 1, name: 'Admin Principal', email: 'admin@offseason.com.br', role: 'admin', status: 'active', lastLogin: '2024-06-06 14:30' },
    { id: 2, name: 'Gerente Marketing', email: 'marketing@offseason.com.br', role: 'manager', status: 'active', lastLogin: '2024-06-06 12:15' },
    { id: 3, name: 'Operador Vendas', email: 'vendas@offseason.com.br', role: 'operator', status: 'active', lastLogin: '2024-06-05 18:45' }
  ]);

  const handleSaveSettings = () => {
    toast({
      title: "Configurações Salvas",
      description: "Todas as configurações foram atualizadas com sucesso!",
    });
  };

  const handleBackup = () => {
    toast({
      title: "Backup Iniciado",
      description: "O backup completo do sistema foi iniciado.",
    });
  };

  const handleRestore = () => {
    toast({
      title: "Restauração Iniciada",
      description: "O processo de restauração foi iniciado.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Configurações Avançadas do Sistema
          </h2>
          <p className="text-gray-600">
            Configuração completa e profissional de todos os aspectos da loja
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBackup}>
            <Download className="w-4 h-4 mr-2" />
            Backup
          </Button>
          <Button onClick={handleSaveSettings}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Tudo
          </Button>
        </div>
      </div>

      <Tabs defaultValue="store" className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="store">Loja</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="taxes">Impostos</TabsTrigger>
          <TabsTrigger value="system">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="store">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Store className="w-5 h-5" />
                  Informações da Loja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome da Loja</label>
                  <Input value={settings.store.name} onChange={(e) => setSettings({...settings, store: {...settings.store, name: e.target.value}})} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Descrição</label>
                  <textarea 
                    className="w-full p-3 border rounded h-20"
                    value={settings.store.description}
                    onChange={(e) => setSettings({...settings, store: {...settings.store, description: e.target.value}})}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail Principal</label>
                    <Input type="email" value={settings.store.email} onChange={(e) => setSettings({...settings, store: {...settings.store, email: e.target.value}})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input value={settings.store.phone} onChange={(e) => setSettings({...settings, store: {...settings.store, phone: e.target.value}})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Endereço</label>
                  <Input value={settings.store.address} onChange={(e) => setSettings({...settings, store: {...settings.store, address: e.target.value}})} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cidade</label>
                    <Input value={settings.store.city} onChange={(e) => setSettings({...settings, store: {...settings.store, city: e.target.value}})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Estado</label>
                    <select className="w-full p-2 border rounded" value={settings.store.state}>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CEP</label>
                    <Input value={settings.store.zipcode} onChange={(e) => setSettings({...settings, store: {...settings.store, zipcode: e.target.value}})} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Configurações Visuais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Logo da Loja</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Clique para upload do logo</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Favicon</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Upload favicon (16x16)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Fuso Horário</label>
                    <select className="w-full p-2 border rounded" value={settings.store.timezone}>
                      <option value="America/Sao_Paulo">América/São Paulo</option>
                      <option value="America/New_York">América/Nova York</option>
                      <option value="Europe/London">Europa/Londres</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Moeda</label>
                    <select className="w-full p-2 border rounded" value={settings.store.currency}>
                      <option value="BRL">Real (R$)</option>
                      <option value="USD">Dólar ($)</option>
                      <option value="EUR">Euro (€)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Idioma</label>
                  <select className="w-full p-2 border rounded" value={settings.store.language}>
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en-US">Inglês (EUA)</option>
                    <option value="es-ES">Espanhol</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-oswald font-bold">Gerenciamento de Usuários</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Usuário
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4">Usuário</th>
                        <th className="text-left p-4">Função</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Último Login</th>
                        <th className="text-left p-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div>
                              <h4 className="font-medium">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={
                              user.role === 'admin' ? 'bg-red-100 text-red-800' :
                              user.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }>
                              {user.role === 'admin' ? 'Administrador' : 
                               user.role === 'manager' ? 'Gerente' : 'Operador'}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className={user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {user.status === 'active' ? 'Ativo' : 'Inativo'}
                            </Badge>
                          </td>
                          <td className="p-4 text-sm text-gray-600">{user.lastLogin}</td>
                          <td className="p-4">
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Lock className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-oswald">Permissões por Função</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { permission: 'Gerenciar Produtos', admin: true, manager: true, operator: false },
                    { permission: 'Processar Pedidos', admin: true, manager: true, operator: true },
                    { permission: 'Acessar Relatórios', admin: true, manager: true, operator: false },
                    { permission: 'Configurar Sistema', admin: true, manager: false, operator: false },
                    { permission: 'Gerenciar Usuários', admin: true, manager: false, operator: false }
                  ].map((perm, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <span className="text-sm">{perm.permission}</span>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                          <span className="text-xs">Admin</span>
                          <CheckCircle className={`w-4 h-4 ${perm.admin ? 'text-green-600' : 'text-gray-300'}`} />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">Manager</span>
                          <CheckCircle className={`w-4 h-4 ${perm.manager ? 'text-green-600' : 'text-gray-300'}`} />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">Operator</span>
                          <CheckCircle className={`w-4 h-4 ${perm.operator ? 'text-green-600' : 'text-gray-300'}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-oswald">Sessões Ativas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { user: 'Admin Principal', device: 'Chrome/Windows', ip: '192.168.1.100', time: '2h 30m' },
                    { user: 'Gerente Marketing', device: 'Safari/MacOS', ip: '192.168.1.101', time: '45m' },
                    { user: 'Operador Vendas', device: 'Firefox/Linux', ip: '192.168.1.102', time: '1h 15m' }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h5 className="font-medium text-sm">{session.user}</h5>
                        <p className="text-xs text-gray-600">{session.device} • {session.ip}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{session.time}</p>
                        <Button size="sm" variant="outline" className="text-xs">
                          Encerrar
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Configurações de Segurança
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Autenticação de Dois Fatores</h4>
                    <p className="text-sm text-gray-600">Adiciona uma camada extra de segurança</p>
                  </div>
                  <Switch 
                    checked={settings.security.twoFactor}
                    onCheckedChange={(checked) => setSettings({...settings, security: {...settings.security, twoFactor: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SSL/HTTPS Forçado</h4>
                    <p className="text-sm text-gray-600">Força conexões seguras</p>
                  </div>
                  <Switch 
                    checked={settings.security.sslEnabled}
                    onCheckedChange={(checked) => setSettings({...settings, security: {...settings.security, sslEnabled: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Headers de Segurança</h4>
                    <p className="text-sm text-gray-600">HSTS, CSP, X-Frame-Options</p>
                  </div>
                  <Switch 
                    checked={settings.security.securityHeaders}
                    onCheckedChange={(checked) => setSettings({...settings, security: {...settings.security, securityHeaders: checked}})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeout de Sessão (minutos)</label>
                  <Input 
                    type="number" 
                    value={settings.security.sessionTimeout}
                    onChange={(e) => setSettings({...settings, security: {...settings.security, sessionTimeout: parseInt(e.target.value)}})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tentativas de Login (máximo)</label>
                  <Input 
                    type="number" 
                    value={settings.security.loginAttempts}
                    onChange={(e) => setSettings({...settings, security: {...settings.security, loginAttempts: parseInt(e.target.value)}})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Expiração de Senha (dias)</label>
                  <Input 
                    type="number" 
                    value={settings.security.passwordExpiry}
                    onChange={(e) => setSettings({...settings, security: {...settings.security, passwordExpiry: parseInt(e.target.value)}})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Controle de Acesso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">IP Whitelist</label>
                  <textarea 
                    className="w-full p-3 border rounded h-20"
                    placeholder="192.168.1.0/24&#10;10.0.0.1&#10;203.0.113.1"
                    value={settings.security.ipWhitelist}
                    onChange={(e) => setSettings({...settings, security: {...settings.security, ipWhitelist: e.target.value}})}
                  ></textarea>
                  <p className="text-xs text-gray-600 mt-1">Um IP por linha</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Logs de Segurança Recentes</h4>
                  <div className="space-y-2">
                    {[
                      { type: 'success', message: 'Login bem-sucedido', user: 'admin@offseason.com.br', time: '14:30' },
                      { type: 'warning', message: 'Tentativa de login inválida', user: 'unknown@test.com', time: '14:15' },
                      { type: 'info', message: 'Senha alterada', user: 'marketing@offseason.com.br', time: '13:45' }
                    ].map((log, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 border rounded text-sm">
                        {log.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {log.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
                        {log.type === 'info' && <Info className="w-4 h-4 text-blue-600" />}
                        <div className="flex-1">
                          <p>{log.message}</p>
                          <p className="text-xs text-gray-600">{log.user}</p>
                        </div>
                        <span className="text-xs text-gray-500">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notificações de E-mail
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Novos Pedidos</h4>
                    <p className="text-sm text-gray-600">Receber e-mail quando houver novo pedido</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.emailOrders}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, emailOrders: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Estoque Baixo</h4>
                    <p className="text-sm text-gray-600">Alertas quando produtos com estoque baixo</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.emailStock}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, emailStock: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Novas Avaliações</h4>
                    <p className="text-sm text-gray-600">Notificar sobre novas avaliações de produtos</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.emailReviews}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, emailReviews: checked}})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Notificações SMS & Push
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Pedidos Urgentes</h4>
                    <p className="text-sm text-gray-600">SMS para pedidos de alto valor</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.smsOrders}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, smsOrders: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Estoque Crítico</h4>
                    <p className="text-sm text-gray-600">SMS quando estoque zerado</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.smsStock}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, smsStock: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Pedidos</h4>
                    <p className="text-sm text-gray-600">Notificações push para novos pedidos</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.pushOrders}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, pushOrders: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Promoções</h4>
                    <p className="text-sm text-gray-600">Notificações sobre promoções ativas</p>
                  </div>
                  <Switch 
                    checked={settings.notifications.pushPromotion}
                    onCheckedChange={(checked) => setSettings({...settings, notifications: {...settings.notifications, pushPromotion: checked}})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Integrações de APIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(settings.integrations).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <label className="block text-sm font-medium">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </label>
                      <div className="flex gap-2">
                        <Input 
                          type={key.includes('key') || key.includes('id') ? 'password' : 'text'}
                          value={value}
                          onChange={(e) => setSettings({
                            ...settings, 
                            integrations: {...settings.integrations, [key]: e.target.value}
                          })}
                          placeholder={`${key.toUpperCase()}_VALUE`}
                        />
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Otimização de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Cache Ativado</h4>
                    <p className="text-sm text-gray-600">Melhora velocidade de carregamento</p>
                  </div>
                  <Switch 
                    checked={settings.performance.cacheEnabled}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, cacheEnabled: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Compressão GZIP</h4>
                    <p className="text-sm text-gray-600">Reduz tamanho dos arquivos</p>
                  </div>
                  <Switch 
                    checked={settings.performance.compressionEnabled}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, compressionEnabled: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">CDN Global</h4>
                    <p className="text-sm text-gray-600">Distribui conteúdo globalmente</p>
                  </div>
                  <Switch 
                    checked={settings.performance.cdnEnabled}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, cdnEnabled: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Lazy Loading</h4>
                    <p className="text-sm text-gray-600">Carrega imagens conforme necessário</p>
                  </div>
                  <Switch 
                    checked={settings.performance.lazyLoading}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, lazyLoading: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Otimização de Imagens</h4>
                    <p className="text-sm text-gray-600">Comprime imagens automaticamente</p>
                  </div>
                  <Switch 
                    checked={settings.performance.imageOptimization}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, imageOptimization: checked}})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Minificação CSS/JS</h4>
                    <p className="text-sm text-gray-600">Remove espaços e comentários</p>
                  </div>
                  <Switch 
                    checked={settings.performance.minification}
                    onCheckedChange={(checked) => setSettings({...settings, performance: {...settings.performance, minification: checked}})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Métricas de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Tempo de Carregamento', value: '1.2s', status: 'good' },
                  { name: 'First Contentful Paint', value: '0.8s', status: 'good' },
                  { name: 'Largest Contentful Paint', value: '2.1s', status: 'needs-improvement' },
                  { name: 'Cumulative Layout Shift', value: '0.05', status: 'good' },
                  { name: 'Time to Interactive', value: '2.8s', status: 'needs-improvement' }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <span className="text-sm">{metric.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{metric.value}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        metric.status === 'good' ? 'bg-green-500' : 
                        metric.status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Executar Teste de Performance
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="taxes">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Configurações Fiscais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cálculo de Impostos Ativo</h4>
                      <p className="text-sm text-gray-600">Ativa cálculo automático de impostos</p>
                    </div>
                    <Switch 
                      checked={settings.taxes.taxEnabled}
                      onCheckedChange={(checked) => setSettings({...settings, taxes: {...settings.taxes, taxEnabled: checked}})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Taxa de Imposto Padrão (%)</label>
                    <Input 
                      type="number" 
                      step="0.01"
                      value={settings.taxes.taxRate}
                      onChange={(e) => setSettings({...settings, taxes: {...settings.taxes, taxRate: parseFloat(e.target.value)}})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Preços Incluem Impostos</h4>
                      <p className="text-sm text-gray-600">Impostos já inclusos no preço</p>
                    </div>
                    <Switch 
                      checked={settings.taxes.taxIncluded}
                      onCheckedChange={(checked) => setSettings({...settings, taxes: {...settings.taxes, taxIncluded: checked}})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Impostos Regionais</h4>
                      <p className="text-sm text-gray-600">Calcula impostos por estado</p>
                    </div>
                    <Switch 
                      checked={settings.taxes.regionalTax}
                      onCheckedChange={(checked) => setSettings({...settings, taxes: {...settings.taxes, regionalTax: checked}})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Cálculo</label>
                    <select 
                      className="w-full p-2 border rounded"
                      value={settings.taxes.taxCalculation}
                      onChange={(e) => setSettings({...settings, taxes: {...settings.taxes, taxCalculation: e.target.value}})}
                    >
                      <option value="automatic">Automático</option>
                      <option value="manual">Manual</option>
                      <option value="api">Por API Externa</option>
                    </select>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Impostos por Estado</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {[
                        { state: 'SP', tax: 18 },
                        { state: 'RJ', tax: 20 },
                        { state: 'MG', tax: 18 },
                        { state: 'RS', tax: 17 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                          <span>{item.state}</span>
                          <span>{item.tax}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Backup & Restauração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full" onClick={handleBackup}>
                    <Download className="w-4 h-4 mr-2" />
                    Criar Backup Completo
                  </Button>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Carregar arquivo de backup</p>
                    <Button variant="outline" size="sm" onClick={handleRestore}>
                      Restaurar Sistema
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Backups Automáticos</h4>
                  <div className="space-y-2">
                    {[
                      { date: '2024-06-06 02:00', size: '234 MB', status: 'success' },
                      { date: '2024-06-05 02:00', size: '231 MB', status: 'success' },
                      { date: '2024-06-04 02:00', size: '228 MB', status: 'success' }
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                        <div>
                          <span className="font-medium">{backup.date}</span>
                          <span className="text-gray-600 ml-2">{backup.size}</span>
                        </div>
                        <div className="flex gap-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Gear className="w-5 h-5" />
                  Informações do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Versão:</span>
                    <span className="font-medium ml-2">v2.4.1</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Última Atualização:</span>
                    <span className="font-medium ml-2">2024-06-01</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Uptime:</span>
                    <span className="font-medium ml-2">15d 8h 23m</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Servidor:</span>
                    <span className="font-medium ml-2">AWS us-east-1</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Status dos Serviços</h4>
                  <div className="space-y-2">
                    {[
                      { service: 'Banco de Dados', status: 'online' },
                      { service: 'Gateway de Pagamento', status: 'online' },
                      { service: 'Serviço de Email', status: 'online' },
                      { service: 'CDN', status: 'online' },
                      { service: 'Backup Automático', status: 'online' }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                        <span>{service.service}</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${service.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className={service.status === 'online' ? 'text-green-600' : 'text-red-600'}>
                            {service.status === 'online' ? 'Online' : 'Offline'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Verificar Atualizações
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
