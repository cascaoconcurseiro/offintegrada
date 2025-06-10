
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Download, 
  Upload, 
  Calendar, 
  Settings,
  Clock,
  CheckCircle,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DataBackupSystem = () => {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(true);

  const backupHistory = [
    {
      id: '1',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      type: 'Automático',
      size: '2.4 MB',
      status: 'Sucesso'
    },
    {
      id: '2',
      date: new Date(Date.now() - 48 * 60 * 60 * 1000),
      type: 'Manual',
      size: '2.3 MB',
      status: 'Sucesso'
    },
    {
      id: '3',
      date: new Date(Date.now() - 72 * 60 * 60 * 1000),
      type: 'Automático',
      size: '2.2 MB',
      status: 'Erro'
    }
  ];

  const handleManualBackup = async () => {
    setIsBackingUp(true);
    setBackupProgress(0);

    // Simular progresso do backup
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          toast({
            title: "Backup Concluído",
            description: "Backup manual criado com sucesso",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleExportData = (type: string) => {
    toast({
      title: "Exportando Dados",
      description: `Arquivo de ${type} será baixado em instantes`,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Sistema de Backup
          </h2>
          <p className="text-gray-600">
            Backup automático e exportação de dados
          </p>
        </div>
      </div>

      {/* Status do Backup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Database className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">2.4 MB</p>
            <p className="text-sm text-gray-600">Último Backup</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">Diário</p>
            <p className="text-sm text-gray-600">Frequência</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-gray-600">Backups Armazenados</p>
          </CardContent>
        </Card>
      </div>

      {/* Backup Manual */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Backup Manual
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Criar Backup Completo</p>
              <p className="text-sm text-gray-600">Inclui todos os dados do sistema</p>
            </div>
            <Button 
              onClick={handleManualBackup} 
              disabled={isBackingUp}
              className="flex items-center gap-2"
            >
              {isBackingUp ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isBackingUp ? 'Criando...' : 'Criar Backup'}
            </Button>
          </div>

          {isBackingUp && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso do backup</span>
                <span>{backupProgress}%</span>
              </div>
              <Progress value={backupProgress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Exportação de Dados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Exportação de Dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              onClick={() => handleExportData('Produtos')}
              className="flex items-center justify-center gap-2 h-16"
            >
              <Database className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium">Produtos</p>
                <p className="text-xs text-gray-600">CSV, Excel</p>
              </div>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExportData('Pedidos')}
              className="flex items-center justify-center gap-2 h-16"
            >
              <Database className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium">Pedidos</p>
                <p className="text-xs text-gray-600">CSV, Excel</p>
              </div>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExportData('Clientes')}
              className="flex items-center justify-center gap-2 h-16"
            >
              <Database className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium">Clientes</p>
                <p className="text-xs text-gray-600">CSV, Excel</p>
              </div>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExportData('Analytics')}
              className="flex items-center justify-center gap-2 h-16"
            >
              <Database className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium">Analytics</p>
                <p className="text-xs text-gray-600">PDF, Excel</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Configurações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Configurações de Backup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Backup Automático</p>
              <p className="text-sm text-gray-600">Backup diário às 02:00</p>
            </div>
            <Button 
              variant={autoBackupEnabled ? "default" : "outline"}
              onClick={() => setAutoBackupEnabled(!autoBackupEnabled)}
            >
              {autoBackupEnabled ? 'Ativado' : 'Desativado'}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Retenção</p>
              <p className="text-sm text-gray-600">Manter backups por 30 dias</p>
            </div>
            <Button variant="outline">Configurar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Histórico */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Backups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {backupHistory.map((backup) => (
              <div key={backup.id} className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{formatDate(backup.date)}</p>
                    <p className="text-sm text-gray-600">{backup.type} • {backup.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {backup.status === 'Sucesso' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    backup.status === 'Sucesso' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {backup.status}
                  </span>
                  {backup.status === 'Sucesso' && (
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataBackupSystem;
