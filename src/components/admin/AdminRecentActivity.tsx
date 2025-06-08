
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminRecentActivity = () => {
  const recentOrders = [
    { id: '#1234', customer: 'João Silva', value: 'R$ 189,90', status: 'pending', items: 2 },
    { id: '#1235', customer: 'Maria Santos', value: 'R$ 299,90', status: 'completed', items: 3 },
    { id: '#1236', customer: 'Pedro Costa', value: 'R$ 159,90', status: 'processing', items: 1 },
    { id: '#1237', customer: 'Ana Oliveira', value: 'R$ 249,90', status: 'completed', items: 2 },
    { id: '#1238', customer: 'Carlos Lima', value: 'R$ 89,90', status: 'pending', items: 1 }
  ];

  const topProducts = [
    { name: 'Regata Premium Masculina', sales: 89, revenue: 'R$ 7.921,00' },
    { name: 'Camiseta Feminina Básica', sales: 67, revenue: 'R$ 4.689,00' },
    { name: 'Short Moletom Unissex', sales: 45, revenue: 'R$ 6.750,00' },
    { name: 'Jaqueta Jeans Feminina', sales: 34, revenue: 'R$ 8.160,00' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-oswald">Pedidos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{order.id}</h4>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{order.value}</p>
                  <Badge className={
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }>
                    {order.status === 'completed' ? 'Concluído' :
                     order.status === 'processing' ? 'Processando' : 'Pendente'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-oswald">Produtos Mais Vendidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.sales} vendas</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRecentActivity;
