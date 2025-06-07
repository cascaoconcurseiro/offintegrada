
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  Store, 
  CreditCard, 
  Truck, 
  Mail, 
  Shield, 
  Globe, 
  Database,
  Bell,
  Users,
  BarChart3,
  Zap,
  Save,
  Upload,
  Download,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Eye,
  Lock,
  Key,
  FileText,
  Smartphone,
  Monitor,
  Palette,
  Code,
  Link,
  Search,
  Target,
  Calendar,
  Clock
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminSettingsAdvanced = () => {
  const [settings, setSettings] = useState({
    // Configurações da Loja
    storeName: 'OffSeason Store',
    storeDescription: 'Loja de roupas streetwear premium',
    storeEmail: 'contato@offseason.com.br',
    storePhone: '+55 11 99999-9999',
    storeAddress: 'Rua das Palmeiras, 123 - São Paulo, SP',
    storeCurrency: 'BRL',
    storeLanguage: 'pt-BR',
    storeTimezone: 'America/Sao_Paulo',
    
    // SEO e Analytics
    seoTitle: 'OffSeason - Streetwear Premium',
    seoDescription: 'As melhores roupas streetwear do Brasil',
    googleAnalyticsId: 'GA-XXXXXXXXX',
    facebookPixelId: 'FB-XXXXXXXXX',
    googleTagManagerId: 'GTM-XXXXXXX',
    
    // Configurações de Email
    emailProvider: 'smtp',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: '',
    smtpPassword: '',
    
    // Configurações de Segurança
    twoFactorAuth: false,
    loginAttempts: 5,
    sessionTimeout: 30,
    ipWhitelist: '',
    sslEnabled: true,
    
    // Configurações de Backup
    autoBackup: true,
    backupFrequency: 'daily',
    backupRetention: 30,
    
    // Configurações de Performance
    cacheEnabled: true,
    compressionEnabled: true,
    cdnEnabled: false,
    
    // Configurações de Notificação
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    webhookUrl: '',
    
    // Configurações de API
    apiRateLimit: 1000,
    apiTimeout: 30,
    apiCors: true,
    
    // Configurações de Marketing
    trackingEnabled: true,
    cookieConsent: true,
    retargetingEnabled: true,
    
    // Configurações de Pagamento
    testMode: false,
    minOrderValue: 50.00,
    maxOrderValue: 5000.00,
    
    // Configurações de Envio
    freeShippingThreshold: 199.00,
    defaultShippingMethod: 'correios',
    packagingCost: 5.00
  });

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings:`, settings);
    toast({
      title: "Configurações Salvas",
      description: `Configurações de ${section} foram salvas com sucesso!`,
    });
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'configuracoes-admin.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Exportação Concluída",
      description: "Configurações exportadas com sucesso!",
    });
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const importedSettings = JSON.parse(event.target?.result as string);
            setSettings(importedSettings);
            toast({
              title: "Importação Concluída",
              description: "Configurações importadas com sucesso!",
            });
          } catch (error) {
            toast({
              title: "Erro na Importação",
              description: "Arquivo inválido. Verifique o formato.",
              variant: "destructive"
            });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Configurações Avançadas do Sistema
          </h2>
          <p className="text-gray-600">
            Centro de controle completo da plataforma e-commerce
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleImport}>
            <Upload className="w-4 h-4 mr-2" />
            Importar
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={() => handleSave('todas')}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Tudo
          </Button>
        </div>
      </div>

      <Tabs defaultValue="store" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="store" className="flex items-center gap-2">
            <Store className="w-4 h-4" />
            Loja
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Pagamentos
          </TabsTrigger>
          <TabsTrigger value="shipping" className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Envios
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="marketing" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Marketing
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Sistema
          </TabsTrigger>
        </TabsList>

        <TabsContent value="store">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Informações da Loja</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="storeName">Nome da Loja</Label>
                  <Input
                    id="storeName"
                    value={settings.storeName}
                    onChange={(e) => setSettings(prev => ({ ...prev, storeName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="storeDescription">Descrição</Label>
                  <Textarea
                    id="storeDescription"
                    value={settings.storeDescription}
                    onChange={(e) => setSettings(prev => ({ ...prev, storeDescription: e.target.value }))}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="storeEmail">Email da Loja</Label>
                  <Input
                    id="storeEmail"
                    type="email"
                    value={settings.storeEmail}
                    onChange={(e) => setSettings(prev => ({ ...prev, storeEmail: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="storePhone">Telefone</Label>
                  <Input
                    id="storePhone"
                    value={settings.storePhone}
                    onChange={(e) => setSettings(prev => ({ ...prev, storePhone: e.target.value }))}
                  />
                </div>
                <Button onClick={() => handleSave('loja')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações da Loja
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">SEO e Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">Título SEO</Label>
                  <Input
                    id="seoTitle"
                    value={settings.seoTitle}
                    onChange={(e) => setSettings(prev => ({ ...prev, seoTitle: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="seoDescription">Meta Descrição</Label>
                  <Textarea
                    id="seoDescription"
                    value={settings.seoDescription}
                    onChange={(e) => setSettings(prev => ({ ...prev, seoDescription: e.target.value }))}
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                  <Input
                    id="googleAnalyticsId"
                    value={settings.googleAnalyticsId}
                    onChange={(e) => setSettings(prev => ({ ...prev, googleAnalyticsId: e.target.value }))}
                    placeholder="GA-XXXXXXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                  <Input
                    id="facebookPixelId"
                    value={settings.facebookPixelId}
                    onChange={(e) => setSettings(prev => ({ ...prev, facebookPixelId: e.target.value }))}
                    placeholder="FB-XXXXXXXXX"
                  />
                </div>
                <Button onClick={() => handleSave('seo')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar SEO & Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Modo de Teste</Label>
                  <Switch
                    checked={settings.testMode}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, testMode: checked }))}
                  />
                </div>
                <div>
                  <Label htmlFor="minOrderValue">Valor Mínimo do Pedido (R$)</Label>
                  <Input
                    id="minOrderValue"
                    type="number"
                    value={settings.minOrderValue}
                    onChange={(e) => setSettings(prev => ({ ...prev, minOrderValue: parseFloat(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="maxOrderValue">Valor Máximo do Pedido (R$)</Label>
                  <Input
                    id="maxOrderValue"
                    type="number"
                    value={settings.maxOrderValue}
                    onChange={(e) => setSettings(prev => ({ ...prev, maxOrderValue: parseFloat(e.target.value) }))}
                  />
                </div>
                <Button onClick={() => handleSave('pagamentos')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Pagamento
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Gateways de Pagamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'PIX', enabled: true },
                  { name: 'Cartão de Crédito', enabled: true },
                  { name: 'Cartão de Débito', enabled: true },
                  { name: 'Boleto Bancário', enabled: true },
                  { name: 'PayPal', enabled: false },
                  { name: 'PagSeguro', enabled: false }
                ].map((gateway, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{gateway.name}</span>
                    <Switch defaultChecked={gateway.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shipping">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Configurações de Envio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="freeShippingThreshold">Frete Grátis a partir de (R$)</Label>
                  <Input
                    id="freeShippingThreshold"
                    type="number"
                    value={settings.freeShippingThreshold}
                    onChange={(e) => setSettings(prev => ({ ...prev, freeShippingThreshold: parseFloat(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="defaultShippingMethod">Método Padrão</Label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={settings.defaultShippingMethod}
                    onChange={(e) => setSettings(prev => ({ ...prev, defaultShippingMethod: e.target.value }))}
                  >
                    <option value="correios">Correios</option>
                    <option value="loggi">Loggi</option>
                    <option value="jadlog">Jadlog</option>
                    <option value="total-express">Total Express</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="packagingCost">Custo de Embalagem (R$)</Label>
                  <Input
                    id="packagingCost"
                    type="number"
                    value={settings.packagingCost}
                    onChange={(e) => setSettings(prev => ({ ...prev, packagingCost: parseFloat(e.target.value) }))}
                  />
                </div>
                <Button onClick={() => handleSave('envios')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Envio
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Transportadoras Ativas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Correios PAC', enabled: true, cost: 'Variável' },
                  { name: 'Correios SEDEX', enabled: true, cost: 'Variável' },
                  { name: 'Loggi', enabled: false, cost: 'R$ 15,00' },
                  { name: 'Jadlog', enabled: false, cost: 'R$ 12,00' },
                  { name: 'Total Express', enabled: false, cost: 'R$ 18,00' }
                ].map((carrier, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <span className="font-medium">{carrier.name}</span>
                      <p className="text-sm text-gray-600">{carrier.cost}</p>
                    </div>
                    <Switch defaultChecked={carrier.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Segurança e Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Autenticação de Dois Fatores</Label>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, twoFactorAuth: checked }))}
                  />
                </div>
                <div>
                  <Label htmlFor="loginAttempts">Tentativas de Login</Label>
                  <Input
                    id="loginAttempts"
                    type="number"
                    value={settings.loginAttempts}
                    onChange={(e) => setSettings(prev => ({ ...prev, loginAttempts: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">Timeout da Sessão (min)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>SSL Habilitado</Label>
                  <Switch
                    checked={settings.sslEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, sslEnabled: checked }))}
                  />
                </div>
                <Button onClick={() => handleSave('seguranca')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Segurança
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Backup e Manutenção</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Backup Automático</Label>
                  <Switch
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, autoBackup: checked }))}
                  />
                </div>
                <div>
                  <Label htmlFor="backupFrequency">Frequência do Backup</Label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={settings.backupFrequency}
                    onChange={(e) => setSettings(prev => ({ ...prev, backupFrequency: e.target.value }))}
                  >
                    <option value="hourly">A cada hora</option>
                    <option value="daily">Diário</option>
                    <option value="weekly">Semanal</option>
                    <option value="monthly">Mensal</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="backupRetention">Retenção (dias)</Label>
                  <Input
                    id="backupRetention"
                    type="number"
                    value={settings.backupRetention}
                    onChange={(e) => setSettings(prev => ({ ...prev, backupRetention: parseInt(e.target.value) }))}
                  />
                </div>
                <Button onClick={() => handleSave('backup')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Backup
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketing">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Tracking e Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Tracking Habilitado</Label>
                  <Switch
                    checked={settings.trackingEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, trackingEnabled: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Consentimento de Cookies</Label>
                  <Switch
                    checked={settings.cookieConsent}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, cookieConsent: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Retargeting</Label>
                  <Switch
                    checked={settings.retargetingEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, retargetingEnabled: checked }))}
                  />
                </div>
                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input
                    id="webhookUrl"
                    value={settings.webhookUrl}
                    onChange={(e) => setSettings(prev => ({ ...prev, webhookUrl: e.target.value }))}
                    placeholder="https://..."
                  />
                </div>
                <Button onClick={() => handleSave('marketing')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Marketing
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Notificações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Email</Label>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, emailNotifications: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>SMS</Label>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, smsNotifications: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Push Notifications</Label>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, pushNotifications: checked }))}
                  />
                </div>
                <Button onClick={() => handleSave('notificacoes')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações de Notificação
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Performance e API</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Cache Habilitado</Label>
                  <Switch
                    checked={settings.cacheEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, cacheEnabled: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Compressão</Label>
                  <Switch
                    checked={settings.compressionEnabled}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, compressionEnabled: checked }))}
                  />
                </div>
                <div>
                  <Label htmlFor="apiRateLimit">Rate Limit API (req/min)</Label>
                  <Input
                    id="apiRateLimit"
                    type="number"
                    value={settings.apiRateLimit}
                    onChange={(e) => setSettings(prev => ({ ...prev, apiRateLimit: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="apiTimeout">Timeout API (seg)</Label>
                  <Input
                    id="apiTimeout"
                    type="number"
                    value={settings.apiTimeout}
                    onChange={(e) => setSettings(prev => ({ ...prev, apiTimeout: parseInt(e.target.value) }))}
                  />
                </div>
                <Button onClick={() => handleSave('sistema')} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Configurações do Sistema
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Status do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 border rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Database</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Cache</p>
                    <p className="text-xs text-green-600">Ativo</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">API</p>
                    <p className="text-xs text-green-600">Funcionando</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">CDN</p>
                    <p className="text-xs text-yellow-600">Desabilitado</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Verificar Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettingsAdvanced;
