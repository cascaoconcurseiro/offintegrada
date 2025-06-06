
import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
  size: string;
}

interface ProductReviewsInlineProps {
  productId: number;
  rating: number;
  reviewsCount: number;
}

const ProductReviewsInline = ({ productId, rating, reviewsCount }: ProductReviewsInlineProps) => {
  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      user: "João S.",
      rating: 5,
      comment: "Produto excelente! Tecido muito confortável e boa qualidade. Recomendo!",
      date: "15/03/2024",
      helpful: 12,
      verified: true,
      size: "M"
    },
    {
      id: 2,
      user: "Maria L.",
      rating: 4,
      comment: "Gostei muito do produto, mas achei que ficou um pouco apertado. Talvez seja melhor pedir um tamanho maior.",
      date: "10/03/2024",
      helpful: 8,
      verified: true,
      size: "P"
    },
    {
      id: 3,
      user: "Carlos R.",
      rating: 5,
      comment: "Superou minhas expectativas. Material de primeira qualidade e caimento perfeito.",
      date: "05/03/2024",
      helpful: 15,
      verified: true,
      size: "G"
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 45, percentage: 75 },
    { stars: 4, count: 8, percentage: 13 },
    { stars: 3, count: 4, percentage: 7 },
    { stars: 2, count: 2, percentage: 3 },
    { stars: 1, count: 1, percentage: 2 }
  ];

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <div className="text-6xl font-bold text-gray-900 mb-2">{rating}</div>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600">Baseado em {reviewsCount} avaliações</p>
        </div>

        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2">
              <span className="text-sm w-8">{item.stars}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-8">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        <h3 className="text-xl font-oswald font-medium uppercase tracking-wider">
          Avaliações dos Clientes
        </h3>
        
        {reviews.map((review) => (
          <Card key={review.id} className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.user}</span>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Compra verificada
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">Tamanho: {review.size}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{review.comment}</p>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Útil ({review.helpful})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Button variant="outline" className="w-full">
          Ver Todas as Avaliações
        </Button>
      </div>
    </div>
  );
};

export default ProductReviewsInline;
