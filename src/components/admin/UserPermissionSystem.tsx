
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Shield, 
  Plus, 
  Edit, 
  Trash2, 
  Key, 
  UserCheck,
  AlertTriangle,
  Crown,
  User
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface UserRole {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  isDefault?: boolean;
}

interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: Date;
  createdAt: Date;
}

const UserPermissionSystem = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showCreateRole, setShowCreateRole] = useState(false);

  const availablePermissions = [
    { id: 'read_products', name: 'Visualizar Produtos', category: 'Produtos' },
    { id: 'write_products', name: 'Criar/Editar Produtos', category: 'Produtos' },
    { id: 'delete_products', name: 'Excluir Produtos', category: 'Produtos' },
    { id: 'read_orders', name: 'Visualizar Pedidos', category: 'Pedidos' },
    { id: 'write_orders', name: 'Editar Pedidos', category: 'Pedidos' },
    { id: 'cancel_orders', name: 'Cancelar Pedidos', category: 'Pedidos' },
    { id: 'read_customers', name: 'Visualizar Clientes', category: 'Clientes' },
    { id: 'write_customers', name: 'Editar Clientes', category: 'Clientes' },
    { id: 'read_analytics', name: 'Visualizar Analytics', category: 'Relatórios' },
    { id: 'export_data', name: 'Exportar Dados', category: 'Relatórios' },
    { id: 'manage_users', name: 'Gerenciar Usuários', category: 'Sistema' },
    { id: 'system_settings', name: 'Configurações Sistema', category: 'Sistema' },
    { id: 'backup_restore', name: 'Backup/Restauração', category: 'Sistema' },
    { id: 'audit_logs', name: 'Logs de Auditoria', category: 'Sistema' }
  ];

  const userRoles: UserRole[] = [
    {
      id: '1',
      name: 'Administrador',
      description: 'Acesso total ao sistema',
      permissions: availablePermissions.map(p => p.id),
      userCount: 2,
      isDefault: true
    },
    {
      id: '2',
      name: 'Gerente',
      description: 'Acesso a vendas e relatórios',
      permissions: [
        'read_products', 'write_products',
        'read_orders', 'write_orders',
        'read_customers', 'write_customers',
        'read_analytics', 'export_data'
      ],
      userCount: 5
    },
    {
      id: '3',
      name: 'Vendedor',
      description: 'Acesso limitado a vendas',
      permissions: [
        'read_products',
        'read_orders', 'write_orders',
        'read_customers'
      ],
      userCount: 12
    },
    {
      id: '4',
      name: 'Suporte',
      description: 'Acesso a clientes e pedidos',
      permissions: [
        'read_products',
        'read_orders',
        'read_customers', 'write_customers'
      ],
      userCount: 8
    }
  ];

  const systemUsers: SystemUser[] = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@exemplo.com',
      role: 'Administrador',
      status: 'active',
      lastLogin: new Date(Date.now() - 2 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@exemplo.com',
      role: 'Gerente',
      status: 'active',
      lastLogin: new Date(Date.now() - 4 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000)
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@exemplo.com',
      role: 'Vendedor',
      status: 'inactive',
      lastLogin: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000)
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (roleName: string) => {
    if (roleName === 'Administrador') return <Crown className="w-4 h-4 text-yellow-600" />;
    if (roleName === 'Gerente') return <Shield className="w-4 h-4 text-blue-600" />;
    return <User className="w-4 h-4 text-gray-600" />;
  };

  const createUser = () => {
    toast({
      title: "Usuário Criado",
      description: "Novo usuário adicionado ao sistema",
    });
  };

  const toggleUserStatus = (userId: string) => {
    toast({
      title: "Status Atualizado",
      description: "Status do usuário foi alterado",
    });
  };

  const deleteUser = (userId: string) => {
    toast({
      title: "Usuário Removido",
      description: "Usuário foi removido do sistema",
    });
  };

  const formatLastLogin = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 24) return `${hours}h atrás`;
    const days = Math.floor(hours / 24);
    return `${days}d atrás`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Sistema de Permissões
          </h2>
          <p className="text-gray-600">
            Gerencie usuários, funções e permissões do sistema
          </p>
        </div>
        <Button onClick={createUser}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{systemUsers.length}</p>
            <p className="text-sm text-gray-600">Usuários Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <UserCheck className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {systemUsers.filter(u => u.status === 'active').length}
            </p>
            <p className="text-sm text-gray-600">Usuários Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">{userRoles.length}</p>
            <p className="text-sm text-gray-600">Funções</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Key className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">{availablePermissions.length}</p>
            <p className="text-sm text-gray-600">Permissões</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funções e Permissões */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Funções do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userRoles.map((role) => (
                <div key={role.id} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getRoleIcon(role.name)}
                      <span className="font-medium">{role.name}</span>
                      {role.isDefault && (
                        <Badge variant="outline" className="text-xs">Padrão</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{role.userCount} usuários</span>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{role.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 3).map((permId) => {
                      const perm = availablePermissions.find(p => p.id === permId);
                      return perm ? (
                        <Badge key={permId} variant="outline" className="text-xs">
                          {perm.name}
                        </Badge>
                      ) : null;
                    })}
                    {role.permissions.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{role.permissions.length - 3} mais
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Permissões Disponíveis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5" />
              Permissões do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Produtos', 'Pedidos', 'Clientes', 'Relatórios', 'Sistema'].map((category) => (
                <div key={category}>
                  <h4 className="font-medium text-sm mb-2">{category}</h4>
                  <div className="space-y-1">
                    {availablePermissions
                      .filter(p => p.category === category)
                      .map((permission) => (
                        <div key={permission.id} className="flex items-center justify-between text-sm">
                          <span>{permission.name}</span>
                          <Switch size="sm" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle>Usuários do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {systemUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{user.name}</span>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status === 'active' ? 'Ativo' : 
                         user.status === 'inactive' ? 'Inativo' : 'Suspenso'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                      <span>Função: {user.role}</span>
                      <span>Último login: {formatLastLogin(user.lastLogin)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    <UserCheck className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => deleteUser(user.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPermissionSystem;
