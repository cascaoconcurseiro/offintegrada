
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const recentActivities = [
  { action: 'Novo pedido #OSN-12847', time: '2 min', status: 'success' },
  { action: 'Cliente cadastrado: João Silva', time: '5 min', status: 'success' },
  { action: 'Produto sem estoque: Camiseta Preta M', time: '12 min', status: 'warning' },
  { action: 'Pagamento aprovado #PAY-8847', time: '15 min', status: 'success' },
  { action: 'Envio realizado #ENV-9922', time: '20 min', status: 'success' }
];

const AdminDashboardActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-oswald">Atividade Recente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-600' : 
                  activity.status === 'warning' ? 'bg-yellow-600' : 'bg-red-600'
                }`}></div>
                <p className="text-sm font-medium">{activity.action}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardActivity;
