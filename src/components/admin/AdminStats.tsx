
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  Users, 
  ShoppingCart,
  TrendingUp, 
  DollarSign,
  Star,
  AlertTriangle,
  Target
} from 'lucide-react';

const AdminStats = ({ onAnalyticsClick }: { onAnalyticsClick: () => void }) => {
  const stats = [
    {
      title: 'Vendas Hoje',
      value: 'R$ 47.891',
      change: '+34%',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Pedidos',
      value: '127',
      change: '+28%',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Visitantes',
      value: '5.247',
      change: '+18%',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Taxa Conversão',
      value: '4.7%',
      change: '+1.2%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-indigo-600'
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 276',
      change: '+22%',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-emerald-600'
    },
    {
      title: 'Reviews',
      value: '4.9',
      change: '+0.3',
      icon: <Star className="w-5 h-5" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Carrinho Abandonado',
      value: '58%',
      change: '-12%',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'text-red-600'
    },
    {
      title: 'ROI Marketing',
      value: '367%',
      change: '+45%',
      icon: <Target className="w-5 h-5" />,
      color: 'text-pink-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onAnalyticsClick}>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-black text-white p-2 rounded-lg mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-gray-600 mb-1">{stat.title}</p>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className={`text-xs ${stat.color}`}>{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminStats;
