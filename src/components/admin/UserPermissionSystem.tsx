
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Shield, 
  Lock, 
  Unlock, 
  UserPlus, 
  Edit, 
  Trash2,
  Search,
  Filter,
  Eye,
  Settings
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'operator' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: Date;
  permissions: string[];
}

const UserPermissionSystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [showAddUser, setShowAddUser] = useState(false);

  const users: User[] = [
    {
      id: '1',
      name: 'Admin Master',
      email: 'admin@exemplo.com',
      role: 'admin',
      status: 'active',
      lastLogin: new Date(Date.now() - 5 * 60000),
      permissions: ['all']
    },
    {
      id: '2',
      name: 'João Manager',
      email: 'joao@exemplo.com',
      role: 'manager',
      status: 'active',
      lastLogin: new Date(Date.now() - 30 * 60000),
      permissions: ['products', 'orders', 'customers', 'reports']
    },
    {
      id: '3',
      name: 'Maria Operadora',
      email: 'maria@exemplo.com',
      role: 'operator',
      status: 'active',
      lastLogin: new Date(Date.now() - 2 * 60 * 60000),
      permissions: ['orders', 'customers']
    },
    {
      id: '4',
      name: 'Pedro Viewer',
      email: 'pedro@exemplo.com',
      role: 'viewer',
      status: 'inactive',
      lastLogin: new Date(Date.now() - 24 * 60 * 60000),
      permissions: ['reports']
    }
  ];

  const roles = [
    { value: 'admin', label: 'Administrador', color: 'bg-red-100 text-red-800' },
    { value: 'manager', label: 'Gerente', color: 'bg-blue-100 text-blue-800' },
    { value: 'operator', label: 'Operador', color: 'bg-green-100 text-green-800' },
    { value: 'viewer', label: 'Visualizador', color: 'bg-gray-100 text-gray-800' }
  ];

  const permissions = [
    { id: 'products', label: 'Gestão de Produtos' },
    { id: 'orders', label: 'Gestão de Pedidos' },
    { id: 'customers', label: 'Gestão de Clientes' },
    { id: 'payments', label: 'Gestão de Pagamentos' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'reports', label: 'Relatórios' },
    { id: 'settings', label: 'Configurações' },
    { id: 'users', label: 'Gestão de Usuários' }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    
    return matchesSearch && matchesRole;
  });

  const getRoleLabel = (role: string) => {
    return roles.find(r => r.value === role)?.label || role;
  };

  const getRoleColor = (role: string) => {
    return roles.find(r => r.value === role)?.color || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddUser = () => {
    setShowAddUser(true);
    toast({
      title: "Formulário de Usuário",
      description: "Funcionalidade de adicionar usuário em desenvolvimento",
    });
  };

  const handleEditUser = (userId: string) => {
    toast({
      title: "Editar Usuário",
      description: `Editando usuário ${userId}`,
    });
  };

  const handleDeleteUser = (userId: string) => {
    toast({
      title: "Remover Usuário",
      description: `Usuário ${userId} será removido`,
      variant: "destructive"
    });
  };

  const toggleUserStatus = (userId: string) => {
    toast({
      title: "Status Alterado",
      description: "Status do usuário foi alterado",
    });
  };

  const formatLastLogin = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 60) return `${minutes}min atrás`;
    const hours = Math.floor(minutes / 60);
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
            Gerenciamento de usuários e permissões
          </p>
        </div>
        <Button onClick={handleAddUser}>
          <UserPlus className="w-4 h-4 mr-2" />
          Novo Usuário
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar Usuário</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Função</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">Todas as funções</option>
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
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
            <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{users.length}</p>
            <p className="text-sm text-gray-600">Total Usuários</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {users.filter(u => u.status === 'active').length}
            </p>
            <p className="text-sm text-gray-600">Usuários Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Lock className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-2xl font-bold">
              {users.filter(u => u.role === 'admin').length}
            </p>
            <p className="text-sm text-gray-600">Administradores</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">
              {permissions.length}
            </p>
            <p className="text-sm text-gray-600">Permissões</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle>Usuários ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-medium text-blue-600">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{user.name}</span>
                      <Badge className={getRoleColor(user.role)}>
                        {getRoleLabel(user.role)}
                      </Badge>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">
                      Último acesso: {formatLastLogin(user.lastLogin)}
                    </p>
                  </div>
                  
                  <div className="text-right text-sm">
                    <p className="font-medium">Permissões:</p>
                    <p className="text-gray-600">
                      {user.permissions.includes('all') ? 'Todas' : user.permissions.length}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    {user.status === 'active' ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <Unlock className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEditUser(user.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-600">Nenhum usuário encontrado</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Matriz de Permissões */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Matriz de Permissões por Função
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Permissão</th>
                  {roles.map(role => (
                    <th key={role.value} className="text-center p-2">
                      {role.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissions.map(permission => (
                  <tr key={permission.id} className="border-b">
                    <td className="p-2 font-medium">{permission.label}</td>
                    <td className="text-center p-2">✅</td>
                    <td className="text-center p-2">
                      {['products', 'orders', 'customers', 'reports'].includes(permission.id) ? '✅' : '❌'}
                    </td>
                    <td className="text-center p-2">
                      {['orders', 'customers'].includes(permission.id) ? '✅' : '❌'}
                    </td>
                    <td className="text-center p-2">
                      {permission.id === 'reports' ? '✅' : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPermissionSystem;
