
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import AdminSectionHeader from './AdminSectionHeader';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Eye, 
  Truck, 
  Package, 
  DollarSign,
  Calendar,
  Edit,
  Download
} from 'lucide-react';

interface OrderManagementProps {
  onBackToDashboard: () => void;
}

const OrderManagement = ({ onBackToDashboard }: OrderManagementProps) => {
  const [orders] = useState([
    {
      id: '#OSN-001234',
      customer: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
      date: '2024-06-08',
      status: 'processing',
      total: 289.90,
      items: 3,
      shipping: 'PAC',
      address: 'Rua das Flores, 123 - São Paulo/SP',
      payment: 'Cartão de Crédito',
      tracking: 'BR123456789'
    },
    {
      id: '#OSN-001235',
      customer: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(21) 88888-8888',
      date: '2024-06-07',
      status: 'shipped',
      total: 189.90,
      items: 2,
      shipping: 'SEDEX',
      address: 'Av. Paulista, 456 - São Paulo/SP',
      payment: 'PIX',
      tracking: 'BR987654321'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'processing': return 'Processando';
      case 'shipped': return 'Enviado';
      case 'delivered': return 'Entregue';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <AdminSectionHeader
        title="Gestão de Pedidos"
        description="Sistema completo para gerenciar pedidos, envios e fulfillment"
        onBackToDashboard={onBackToDashboard}
      >
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
      </AdminSectionHeader>

      <div className="space-y-6">
        {/* Métricas de Pedidos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: 'Pedidos Hoje', value: '23', icon: ShoppingCart, color: 'text-blue-600' },
            { name: 'Aguardando Envio', value: '12', icon: Package, color: 'text-yellow-600' },
            { name: 'Em Trânsito', value: '45', icon: Truck, color: 'text-purple-600' },
            { name: 'Faturamento', value: 'R$ 8.920', icon: DollarSign, color: 'text-green-600' }
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
                  <Input placeholder="Buscar pedidos..." className="pl-10" />
                </div>
              </div>
              <select className="px-3 py-2 border rounded">
                <option value="">Todos Status</option>
                <option value="pending">Pendente</option>
                <option value="processing">Processando</option>
                <option value="shipped">Enviado</option>
                <option value="delivered">Entregue</option>
              </select>
              <Input type="date" className="w-auto" />
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Pedidos */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Pedido</th>
                    <th className="text-left p-4">Cliente</th>
                    <th className="text-left p-4">Data</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Envio</th>
                    <th className="text-left p-4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <h4 className="font-medium">{order.id}</h4>
                          <p className="text-sm text-gray-600">{order.items} itens</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <h4 className="font-medium">{order.customer}</h4>
                          <p className="text-sm text-gray-600">{order.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{order.date}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusText(order.status)}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-green-600">R$ {order.total.toFixed(2)}</p>
                        <p className="text-xs text-gray-600">{order.payment}</p>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm font-medium">{order.shipping}</p>
                          {order.tracking && (
                            <p className="text-xs text-gray-600">{order.tracking}</p>
                          )}
                        </div>
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
                            <Truck className="w-4 h-4" />
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
    </div>
  );
};

export default OrderManagement;
