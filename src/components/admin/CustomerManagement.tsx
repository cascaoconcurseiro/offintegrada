
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Search, 
  Filter, 
  Eye, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  DollarSign,
  Star,
  ShoppingBag,
  Download,
  UserPlus,
  Edit
} from 'lucide-react';

const CustomerManagement = () => {
  const [customers] = useState([
    {
      id: 'CUST-001',
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
      city: 'São Paulo',
      state: 'SP',
      registeredAt: '2024-01-15',
      totalOrders: 5,
      totalSpent: 1250.00,
      averageOrder: 250.00,
      tier: 'Gold',
      status: 'active',
      lastOrder: '2024-06-01'
    },
    {
      id: 'CUST-002',
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(21) 88888-8888',
      city: 'Rio de Janeiro',
      state: 'RJ',
      registeredAt: '2024-02-10',
      totalOrders: 3,
      totalSpent: 650.00,
      averageOrder: 216.67,
      tier: 'Silver',
      status: 'active',
      lastOrder: '2024-05-28'
    },
    {
      id: 'CUST-003',
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      phone: '(31) 77777-7777',
      city: 'Belo Horizonte',
      state: 'MG',
      registeredAt: '2024-03-05',
      totalOrders: 1,
      totalSpent: 180.00,
      averageOrder: 180.00,
      tier: 'Bronze',
      status: 'inactive',
      lastOrder: '2024-03-15'
    }
  ]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800';
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Gestão de Clientes
          </h2>
          <p className="text-gray-600">
            Sistema completo para gerenciar clientes e relacionamento
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Novo Cliente
          </Button>
        </div>
      </div>

      {/* Métricas de Clientes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { name: 'Total Clientes', value: customers.length.toString(), icon: Users, color: 'text-blue-600' },
          { name: 'Clientes Ativos', value: customers.filter(c => c.status === 'active').length.toString(), icon: Star, color: 'text-green-600' },
          { name: 'Ticket Médio', value: `R$ ${(customers.reduce((sum, c) => sum + c.averageOrder, 0) / customers.length).toFixed(2)}`, icon: DollarSign, color: 'text-purple-600' },
          { name: 'LTV Médio', value: `R$ ${(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length).toFixed(2)}`, icon: ShoppingBag, color: 'text-orange-600' }
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-600">{metric.name}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Buscar clientes..." className="pl-10" />
              </div>
            </div>
            <select className="px-3 py-2 border rounded">
              <option value="">Todos Tiers</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
            <select className="px-3 py-2 border rounded">
              <option value="">Todos Status</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Clientes */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left p-4">Cliente</th>
                  <th className="text-left p-4">Contato</th>
                  <th className="text-left p-4">Localização</th>
                  <th className="text-left p-4">Pedidos</th>
                  <th className="text-left p-4">Total Gasto</th>
                  <th className="text-left p-4">Tier</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h4 className="font-medium">{customer.name}</h4>
                        <p className="text-sm text-gray-600">{customer.id}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-sm">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-sm">{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{customer.city}, {customer.state}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{customer.totalOrders}</p>
                        <p className="text-xs text-gray-600">Último: {customer.lastOrder}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-bold text-green-600">R$ {customer.totalSpent.toFixed(2)}</p>
                        <p className="text-xs text-gray-600">Média: R$ {customer.averageOrder.toFixed(2)}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getTierColor(customer.tier)}>
                        {customer.tier}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
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
    </div>
  );
};

export default CustomerManagement;
