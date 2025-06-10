
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Search, 
  Filter, 
  Download, 
  User, 
  Settings, 
  ShoppingCart, 
  Package,
  Calendar,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AuditLog {
  id: string;
  timestamp: Date;
  user: string;
  action: string;
  resource: string;
  details: string;
  ip: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'success' | 'failed' | 'warning';
}

const AuditLogSystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedUser, setSelectedUser] = useState('all');

  const auditLogs: AuditLog[] = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 5 * 60000),
      user: 'admin@exemplo.com',
      action: 'LOGIN',
      resource: 'Sistema',
      details: 'Login realizado com sucesso',
      ip: '192.168.1.100',
      severity: 'low',
      status: 'success'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 15 * 60000),
      user: 'admin@exemplo.com',
      action: 'UPDATE_PRODUCT',
      resource: 'Produto #12847',
      details: 'Preço alterado de R$ 50,00 para R$ 45,00',
      ip: '192.168.1.100',
      severity: 'medium',
      status: 'success'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 30 * 60000),
      user: 'vendedor@exemplo.com',
      action: 'CREATE_ORDER',
      resource: 'Pedido #OSN-9923',
      details: 'Novo pedido criado no valor de R$ 187,50',
      ip: '192.168.1.105',
      severity: 'low',
      status: 'success'
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 45 * 60000),
      user: 'admin@exemplo.com',
      action: 'DELETE_PRODUCT',
      resource: 'Produto #12846',
      details: 'Produto removido do catálogo',
      ip: '192.168.1.100',
      severity: 'high',
      status: 'success'
    },
    {
      id: '5',
      timestamp: new Date(Date.now() - 60 * 60000),
      user: 'sistema',
      action: 'BACKUP',
      resource: 'Database',
      details: 'Backup automático executado',
      ip: 'localhost',
      severity: 'low',
      status: 'success'
    },
    {
      id: '6',
      timestamp: new Date(Date.now() - 90 * 60000),
      user: 'admin@exemplo.com',
      action: 'FAILED_LOGIN',
      resource: 'Sistema',
      details: 'Tentativa de login com senha incorreta',
      ip: '192.168.1.100',
      severity: 'medium',
      status: 'failed'
    },
    {
      id: '7',
      timestamp: new Date(Date.now() - 120 * 60000),
      user: 'vendedor@exemplo.com',
      action: 'UPDATE_SETTINGS',
      resource: 'Configurações',
      details: 'Taxa de frete alterada',
      ip: '192.168.1.105',
      severity: 'medium',
      status: 'success'
    }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = searchTerm === '' || 
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = selectedSeverity === 'all' || log.severity === selectedSeverity;
    const matchesUser = selectedUser === 'all' || log.user === selectedUser;
    
    return matchesSearch && matchesSeverity && matchesUser;
  });

  const uniqueUsers = [...new Set(auditLogs.map(log => log.user))];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('LOGIN')) return <User className="w-4 h-4" />;
    if (action.includes('PRODUCT')) return <Package className="w-4 h-4" />;
    if (action.includes('ORDER')) return <ShoppingCart className="w-4 h-4" />;
    if (action.includes('SETTINGS')) return <Settings className="w-4 h-4" />;
    return <Shield className="w-4 h-4" />;
  };

  const exportLogs = () => {
    toast({
      title: "Exportando Logs",
      description: "Arquivo de auditoria será baixado em instantes",
    });
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Logs de Auditoria
          </h2>
          <p className="text-gray-600">
            Histórico completo de ações do sistema
          </p>
        </div>
        <Button onClick={exportLogs}>
          <Download className="w-4 h-4 mr-2" />
          Exportar Logs
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Severidade</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="critical">Crítico</option>
                <option value="high">Alto</option>
                <option value="medium">Médio</option>
                <option value="low">Baixo</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Usuário</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="all">Todos</option>
                {uniqueUsers.map(user => (
                  <option key={user} value={user}>{user}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{auditLogs.length}</p>
            <p className="text-sm text-gray-600">Total de Logs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <User className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">{uniqueUsers.length}</p>
            <p className="text-sm text-gray-600">Usuários Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl font-bold">
              {auditLogs.filter(log => log.status === 'failed').length}
            </p>
            <p className="text-sm text-gray-600">Falhas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">24h</p>
            <p className="text-sm text-gray-600">Período</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Ações ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-2">
                    {getActionIcon(log.action)}
                    <span className="font-mono text-sm">{formatTimestamp(log.timestamp)}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{log.user}</span>
                      <Badge className={getSeverityColor(log.severity)}>
                        {log.severity.toUpperCase()}
                      </Badge>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{log.action}</span> em {log.resource}
                    </p>
                    <p className="text-sm text-gray-500">{log.details}</p>
                  </div>
                  
                  <div className="text-right text-xs text-gray-500">
                    IP: {log.ip}
                  </div>
                </div>
                
                <Button size="sm" variant="ghost">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          
          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <Shield className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-600">Nenhum log encontrado</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditLogSystem;
