
import React from 'react';
import { Star } from 'lucide-react';

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewsCount?: number;
  description: string;
  composition: string;
  care: string;
  onShowReviews: () => void;
}

const ProductInfo = ({
  name,
  price,
  originalPrice,
  rating,
  reviewsCount,
  description,
  composition,
  care,
  onShowReviews
}: ProductInfoProps) => {
  const calculateInstallments = (price: number) => {
    const maxInstallments = 10;
    return Math.floor(price / maxInstallments);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-oswald font-medium uppercase tracking-wider mb-4">
          {name}
        </h1>
        
        {rating && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
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
            <button
              onClick={onShowReviews}
              className="text-sm text-gray-600 font-roboto hover:underline"
            >
              {rating} ({reviewsCount} avaliações)
            </button>
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-roboto font-bold">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          {originalPrice && (
            <span className="text-xl text-gray-500 line-through font-roboto">
              R$ {originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 font-roboto mb-6">
          ou 10x de R$ {calculateInstallments(price).toFixed(2).replace('.', ',')} sem juros
        </p>

        <p className="text-gray-700 font-roboto mb-6">{description}</p>
      </div>

      {/* Product Info */}
      <div className="space-y-4 pt-6 border-t">
        <div>
          <h4 className="font-oswald font-medium mb-2 uppercase tracking-wider text-sm">Composição</h4>
          <p className="text-sm text-gray-600 font-roboto">{composition}</p>
        </div>
        <div>
          <h4 className="font-oswald font-medium mb-2 uppercase tracking-wider text-sm">Cuidados</h4>
          <p className="text-sm text-gray-600 font-roboto">{care}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
