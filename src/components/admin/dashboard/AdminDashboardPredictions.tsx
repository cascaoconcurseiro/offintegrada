
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const predictions = [
  { metric: 'Vendas Amanhã', prediction: 'R$ 15.200', confidence: '92%' },
  { metric: 'Pedidos Semana', prediction: '1.847', confidence: '88%' },
  { metric: 'Receita Mês', prediction: 'R$ 385.000', confidence: '85%' },
  { metric: 'Conversão Média', prediction: '3.8%', confidence: '91%' }
];

const AdminDashboardPredictions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-oswald flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Predições IA - Teste
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {predictions.map((pred, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">{pred.metric}</p>
                <p className="text-2xl font-bold text-blue-600">{pred.prediction}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Confiança</p>
                <p className="font-bold text-green-600">{pred.confidence}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboardPredictions;
