
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Shield, Truck } from 'lucide-react';

const ProductRecommendationBar = () => {
  const recommendations = [
    {
      icon: <Star className="w-4 h-4" />,
      text: "Produto mais vendido",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Qualidade Premium",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Garantia de 1 ano",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <Truck className="w-4 h-4" />,
      text: "Entrega expressa",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {recommendations.map((item, index) => (
        <Badge key={index} className={`${item.color} flex items-center gap-1 px-3 py-1`}>
          {item.icon}
          <span className="text-xs font-medium">{item.text}</span>
        </Badge>
      ))}
    </div>
  );
};

export default ProductRecommendationBar;
