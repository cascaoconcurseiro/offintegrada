
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Download, 
  Upload, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  HardDrive,
  Calendar,
  FileText
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BackupRecord {
  id: string;
  name: string;
  type: 'manual' | 'auto';
  size: string;
  date: Date;
  status: 'completed' | 'in_progress' | 'failed';
  tables: string[];
}

const DataBackupSystem = () => {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupProgress, setBackupProgress] = useState(0);
  const [selectedTables, setSelectedTables] = useState<string[]>([]);

  const backupHistory: BackupRecord[] = [
    {
      id: '1',
      name: 'backup_2024_06_10_full',
      type: 'auto',
      size: '247 MB',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: 'completed',
      tables: ['products', 'orders', 'customers', 'subscribers']
    },
    {
      id: '2',
      name: 'backup_2024_06_09_manual',
      type: 'manual',
      size: '185 MB',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      status: 'completed',
      tables: ['products', 'orders']
    },
    {
      id: '3',
      name: 'backup_2024_06_08_full',
      type: 'auto',
      size: '223 MB',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      status: 'completed',
      tables: ['products', 'orders', 'customers', 'subscribers']
    }
  ];

  const availableTables = [
    { name: 'products', label: 'Produtos', records: 2847, size: '45 MB' },
    { name: 'orders', label: 'Pedidos', records: 12847, size: '156 MB' },
    { name: 'customers', label: 'Clientes', records: 5847, size: '23 MB' },
    { name: 'subscribers', label: 'Assinantes', records: 847, size: '8 MB' },
    { name: 'coupons', label: 'Cupons', records: 123, size: '2 MB' },
    { name: 'analytics', label: 'Analytics', records: 45847, size: '89 MB' }
  ];

  const exportFormats = [
    { format: 'json', label: 'JSON', description: 'Formato estruturado para APIs' },
    { format: 'csv', label: 'CSV', description: 'Planilhas e Excel' },
    { format: 'sql', label: 'SQL', description: 'Dump de banco de dados' },
    { format: 'xml', label: 'XML', description: 'Formato para integrações' }
  ];

  const createBackup = async () => {
    setIsBackingUp(true);
    setBackupProgress(0);

    // Simular processo de backup
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          toast({
            title: "Backup Concluído",
            description: "Backup criado com sucesso",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const downloadBackup = (backupId: string) => {
    toast({
      title: "Download Iniciado",
      description: "O arquivo de backup será baixado em instantes",
    });
  };

  const exportData = (format: string) => {
    if (selectedTables.length === 0) {
      toast({
        title: "Erro",
        description: "Selecione pelo menos uma tabela para exportar",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Exportação Iniciada",
      description: `Dados sendo exportados em formato ${format.toUpperCase()}`,
    });
  };

  const toggleTable = (tableName: string) => {
    setSelectedTables(prev => 
      prev.includes(tableName)
        ? prev.filter(t => t !== tableName)
        : [...prev, tableName]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in_progress': return <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />;
      case 'failed': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Backup e Exportação de Dados
          </h2>
          <p className="text-gray-600">
            Gerencie backups automáticos e exporte dados
          </p>
        </div>
        <Button onClick={createBackup} disabled={isBackingUp}>
          <Database className="w-4 h-4 mr-2" />
          {isBackingUp ? 'Criando Backup...' : 'Criar Backup'}
        </Button>
      </div>

      {/* Status do Backup */}
      {isBackingUp && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin" />
              Backup em Progresso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span>{backupProgress}%</span>
              </div>
              <Progress value={backupProgress} className="w-full" />
              <p className="text-xs text-gray-600">
                Criando backup completo de todas as tabelas...
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Estatísticas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="w-5 h-5" />
              Estatísticas de Backup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded">
                <Database className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold">{backupHistory.length}</p>
                <p className="text-sm text-gray-600">Backups Total</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">655 MB</p>
                <p className="text-sm text-gray-600">Espaço Total</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded">
                <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="text-2xl font-bold">Diário</p>
                <p className="text-sm text-gray-600">Frequência Auto</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded">
                <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
                <p className="text-2xl font-bold">03:00</p>
                <p className="text-sm text-gray-600">Horário Auto</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configurações */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Backup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Backup Automático</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Frequência</label>
              <select className="w-full p-2 border rounded">
                <option value="daily">Diário</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Retenção (dias)</label>
              <input type="number" defaultValue="30" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Horário</label>
              <input type="time" defaultValue="03:00" className="w-full p-2 border rounded" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Histórico de Backups */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Backups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {backupHistory.map((backup) => (
              <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  {getStatusIcon(backup.status)}
                  <div>
                    <p className="font-medium">{backup.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={backup.type === 'auto' ? 'default' : 'outline'}>
                        {backup.type === 'auto' ? 'Automático' : 'Manual'}
                      </Badge>
                      <Badge className={getStatusColor(backup.status)}>
                        {backup.status === 'completed' ? 'Concluído' : 
                         backup.status === 'in_progress' ? 'Em Progresso' : 'Falhou'}
                      </Badge>
                      <span className="text-sm text-gray-600">{backup.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {backup.date.toLocaleDateString('pt-BR')}
                  </span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => downloadBackup(backup.id)}
                    disabled={backup.status !== 'completed'}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exportação de Dados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Exportação Personalizada
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Selecionar Tabelas</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableTables.map((table) => (
                  <label key={table.name} className="flex items-center justify-between p-2 border rounded cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedTables.includes(table.name)}
                        onChange={() => toggleTable(table.name)}
                      />
                      <div>
                        <p className="font-medium">{table.label}</p>
                        <p className="text-xs text-gray-600">{table.records.toLocaleString()} registros</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{table.size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Formato de Exportação</h4>
              <div className="space-y-3">
                {exportFormats.map((format) => (
                  <Button
                    key={format.format}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => exportData(format.format)}
                  >
                    <div className="text-left">
                      <p className="font-medium">{format.label}</p>
                      <p className="text-xs text-gray-600">{format.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
              
              {selectedTables.length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm font-medium text-blue-800">
                    {selectedTables.length} tabela(s) selecionada(s)
                  </p>
                  <p className="text-xs text-blue-600">
                    {selectedTables.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataBackupSystem;
