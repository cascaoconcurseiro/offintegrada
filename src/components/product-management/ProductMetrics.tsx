
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product, ProductMetricData } from '@/types/product';
import { Package, CheckCircle, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

interface ProductMetricsProps {
  products: Product[];
}

const ProductMetrics: React.FC<ProductMetricsProps> = ({ products }) => {
  const metrics: ProductMetricData[] = [
    { name: 'Total Produtos', value: products.length.toString(), change: '+12', icon: Package },
    { name: 'Produtos Ativos', value: products.filter(p => p.status === 'active').length.toString(), change: '+8', icon: CheckCircle },
    { name: 'Estoque Baixo', value: products.filter(p => p.stock < 10).length.toString(), change: '-3', icon: AlertTriangle },
    { name: 'Mais Vendidos', value: products.filter(p => p.sales > 100).length.toString(), change: '+5', icon: TrendingUp },
    { name: 'Receita Total', value: `R$ ${products.reduce((sum, p) => sum + parseFloat(p.revenue.replace('R$ ', '').replace(/\./g, '').replace(',', '.')), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: '+23%', icon: DollarSign }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <IconComponent className="w-5 h-5 text-blue-600" />
                <Badge variant="outline">{metric.change}</Badge>
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
  );
};

export default ProductMetrics;
