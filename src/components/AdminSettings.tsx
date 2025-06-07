
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Settings, 
  User, 
  Shield, 
  Bell, 
  Globe, 
  Palette, 
  Database,
  Mail,
  Lock,
  CreditCard,
  Truck,
  BarChart3,
  Zap,
  Code,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Check,
  X,
  AlertTriangle,
  Info,
  Save,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Users,
  Store,
  Package,
  ShoppingCart,
  Target,
  Heart,
  Star,
  Calendar,
  Clock,
  Filter,
  Search,
  Tag,
  Image,
  Video,
  MessageSquare,
  Phone,
  MapPin,
  Building,
  DollarSign
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    storeName: 'OFFSEASON',
    storeUrl: 'offseason.com.br',
    currency: 'BRL',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    theme: 'light',
    emailNotifications: true,
    pushNotifications: true,
    twoFactorAuth: false,
    maintenanceMode: false,
    autoBackup: true,
    analytics: true,
    cookieConsent: true,
    gdprCompliance: true
  });

  const handleSave = () => {
    toast({
      title: "Configurações Salvas",
      description: "Todas as configurações foram atualizadas com sucesso!",
    });
  };

  const handleResetToDefaults = () => {
    toast({
      title: "Configurações Resetadas",
      description: "Todas as configurações foram restauradas para os valores padrão.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Configurações do Sistema
          </h2>
          <p className="text-gray-600">
            Configurações avançadas para administração da loja
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleResetToDefaults}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Restaurar Padrões
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Tudo
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="payments">Pagamentos</TabsTrigger>
          <TabsTrigger value="shipping">Envios</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Informações da Loja</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome da Loja</label>
                  <Input 
                    value={settings.storeName} 
                    onChange={(e) => setSettings({...settings, storeName: e.target.value})}
                    placeholder="OFFSEASON"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">URL da Loja</label>
                  <Input 
                    value={settings.storeUrl} 
                    onChange={(e) => setSettings({...settings, storeUrl: e.target.value})}
                    placeholder="offseason.com.br"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Descrição</label>
                  <textarea 
                    className="w-full p-3 border rounded h-20"
                    placeholder="Descrição da sua loja..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Logo da Loja</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Clique para upload do logo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações Regionais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Moeda</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={settings.currency}
                    onChange={(e) => setSettings({...settings, currency: e.target.value})}
                  >
                    <option value="BRL">Real Brasileiro (R$)</option>
                    <option value="USD">Dólar Americano ($)</option>
                    <option value="EUR">Euro (€)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Fuso Horário</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={settings.timezone}
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                  >
                    <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                    <option value="America/New_York">Nova York (GMT-5)</option>
                    <option value="Europe/London">Londres (GMT+0)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Idioma</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={settings.language}
                    onChange={(e) => setSettings({...settings, language: e.target.value})}
                  >
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en-US">English (US)</option>
                    <option value="es-ES">Español</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Formato de Data</label>
                  <select className="w-full p-2 border rounded">
                    <option value="DD/MM/YYYY">DD/MM/AAAA</option>
                    <option value="MM/DD/YYYY">MM/DD/AAAA</option>
                    <option value="YYYY-MM-DD">AAAA-MM-DD</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Autenticação e Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Autenticação de Dois Fatores</h4>
                    <p className="text-sm text-gray-600">Adicione uma camada extra de segurança</p>
                  </div>
                  <Switch 
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({...settings, twoFactorAuth: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Modo Manutenção</h4>
                    <p className="text-sm text-gray-600">Temporariamente desabilitar a loja</p>
                  </div>
                  <Switch 
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => setSettings({...settings, maintenanceMode: checked})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Senha Atual</label>
                  <Input type="password" placeholder="Digite sua senha atual" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nova Senha</label>
                  <Input type="password" placeholder="Digite a nova senha" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirmar Nova Senha</label>
                  <Input type="password" placeholder="Confirme a nova senha" />
                </div>

                <Button className="w-full">
                  <Lock className="w-4 h-4 mr-2" />
                  Atualizar Senha
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Políticas de Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tempo de Sessão (minutos)</label>
                  <Input type="number" placeholder="60" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tentativas de Login</label>
                  <Input type="number" placeholder="5" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">IPs Bloqueados</label>
                  <textarea 
                    className="w-full p-3 border rounded h-20"
                    placeholder="192.168.1.1, 10.0.0.1"
                  ></textarea>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Log de Segurança</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 border border-green-200 rounded text-sm">
                      <span className="text-green-800">Login bem-sucedido - admin@offseason.com - 12:34</span>
                    </div>
                    <div className="p-2 bg-red-50 border border-red-200 rounded text-sm">
                      <span className="text-red-800">Tentativa de login falhou - unknown@test.com - 11:22</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Preferências de Notificação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações por Email</h4>
                    <p className="text-sm text-gray-600">Receber alertas por email</p>
                  </div>
                  <Switch 
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Push Notifications</h4>
                    <p className="text-sm text-gray-600">Notificações do navegador</p>
                  </div>
                  <Switch 
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-3">Tipos de Notificação</h4>
                  <div className="space-y-3">
                    {[
                      'Novos pedidos',
                      'Estoque baixo',
                      'Falhas de pagamento',
                      'Reviews de produtos',
                      'Carrinho abandonado',
                      'Relatórios diários'
                    ].map((type) => (
                      <div key={type} className="flex items-center justify-between">
                        <span className="text-sm">{type}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configuração de Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Servidor SMTP</label>
                  <Input placeholder="smtp.gmail.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Porta</label>
                    <Input placeholder="587" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Segurança</label>
                    <select className="w-full p-2 border rounded">
                      <option value="tls">TLS</option>
                      <option value="ssl">SSL</option>
                      <option value="none">Nenhuma</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Remetente</label>
                  <Input placeholder="noreply@offseason.com.br" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nome do Remetente</label>
                  <Input placeholder="OFFSEASON" />
                </div>

                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Testar Configuração
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Configurações de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Moeda Padrão</label>
                    <select className="w-full p-2 border rounded">
                      <option value="BRL">Real Brasileiro (R$)</option>
                      <option value="USD">Dólar Americano ($)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Taxa de Processamento (%)</label>
                    <Input type="number" step="0.01" placeholder="2.99" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Valor Mínimo Pedido</label>
                    <Input type="number" step="0.01" placeholder="50.00" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Métodos de Pagamento Ativos</h4>
                    <div className="space-y-2">
                      {[
                        'Cartão de Crédito',
                        'Cartão de Débito',
                        'PIX',
                        'Boleto Bancário',
                        'PayPal',
                        'Mercado Pago'
                      ].map((method) => (
                        <div key={method} className="flex items-center justify-between">
                          <span className="text-sm">{method}</span>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Configurações de Envio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Endereço de Origem</label>
                    <Input placeholder="Rua da Loja, 123" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">CEP</label>
                      <Input placeholder="01234-567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cidade</label>
                      <Input placeholder="São Paulo" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tempo de Processamento (dias)</label>
                    <Input type="number" placeholder="2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Transportadoras Ativas</h4>
                    <div className="space-y-2">
                      {[
                        'Correios',
                        'Jadlog',
                        'Loggi',
                        'Total Express',
                        'Azul Cargo',
                        'Mercado Envios'
                      ].map((carrier) => (
                        <div key={carrier} className="flex items-center justify-between">
                          <span className="text-sm">{carrier}</span>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">APIs e Integrações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Google Analytics ID</label>
                  <Input placeholder="GA-XXXXXXXXX-X" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Facebook Pixel ID</label>
                  <Input placeholder="123456789012345" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Google Tag Manager ID</label>
                  <Input placeholder="GTM-XXXXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hotjar Site ID</label>
                  <Input placeholder="1234567" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Marketplaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: 'Mercado Livre', status: 'Conectado' },
                    { name: 'Amazon', status: 'Desconectado' },
                    { name: 'Shopee', status: 'Conectado' },
                    { name: 'Magazine Luiza', status: 'Desconectado' },
                    { name: 'Americanas', status: 'Conectado' },
                    { name: 'Casas Bahia', status: 'Desconectado' }
                  ].map((marketplace) => (
                    <div key={marketplace.name} className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">{marketplace.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge className={marketplace.status === 'Conectado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {marketplace.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          {marketplace.status === 'Conectado' ? 'Configurar' : 'Conectar'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Configurações de Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Tracking Avançado</h4>
                      <p className="text-sm text-gray-600">Rastreamento de eventos detalhado</p>
                    </div>
                    <Switch 
                      checked={settings.analytics}
                      onCheckedChange={(checked) => setSettings({...settings, analytics: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cookies de Analytics</h4>
                      <p className="text-sm text-gray-600">Permitir cookies para análise</p>
                    </div>
                    <Switch 
                      checked={settings.cookieConsent}
                      onCheckedChange={(checked) => setSettings({...settings, cookieConsent: checked})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Retenção de Dados (dias)</label>
                    <select className="w-full p-2 border rounded">
                      <option value="30">30 dias</option>
                      <option value="90">90 dias</option>
                      <option value="365">1 ano</option>
                      <option value="forever">Permanente</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Eventos Trackados</h4>
                    <div className="space-y-2">
                      {[
                        'Visualização de página',
                        'Visualização de produto',
                        'Adicionar ao carrinho',
                        'Iniciar checkout',
                        'Compra concluída',
                        'Cadastro de usuário'
                      ].map((event) => (
                        <div key={event} className="flex items-center justify-between">
                          <span className="text-sm">{event}</span>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações Avançadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Backup Automático</h4>
                    <p className="text-sm text-gray-600">Backup diário do banco de dados</p>
                  </div>
                  <Switch 
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => setSettings({...settings, autoBackup: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Compressão de Imagens</h4>
                    <p className="text-sm text-gray-600">Otimizar imagens automaticamente</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cache TTL (segundos)</label>
                  <Input type="number" placeholder="3600" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Max Upload Size (MB)</label>
                  <Input type="number" placeholder="10" />
                </div>

                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Configurações
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Desenvolvimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ambiente</label>
                  <select className="w-full p-2 border rounded">
                    <option value="production">Produção</option>
                    <option value="staging">Staging</option>
                    <option value="development">Desenvolvimento</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Debug Mode</h4>
                    <p className="text-sm text-gray-600">Mostrar logs detalhados</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">API Rate Limiting</h4>
                    <p className="text-sm text-gray-600">Limitar requisições por IP</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Webhooks</h4>
                  <div className="space-y-2">
                    <Input placeholder="https://webhook.site/order-created" />
                    <Button size="sm" variant="outline" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Webhook
                    </Button>
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

export default AdminSettings;
