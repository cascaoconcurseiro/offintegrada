
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
}

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('masculino');

  const products: Product[] = [
    {
      id: 1,
      name: "Camiseta Tech-Solid Slim - Benetton",
      price: 89.90,
      originalPrice: 119.90,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 152,
      category: "masculino",
      isNew: true
    },
    {
      id: 2,
      name: "Camiseta Tech-Solid Slim - Oliva",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 98,
      category: "masculino"
    },
    {
      id: 3,
      name: "Camiseta Tech-Solid Slim - Preta",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 203,
      category: "masculino"
    },
    {
      id: 4,
      name: "Camiseta Tech-Solid Slim - Branca",
      price: 89.90,
      originalPrice: 99.90,
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 167,
      category: "masculino"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveCategory('masculino')}
              className={`px-8 py-3 rounded-full font-roboto font-medium uppercase tracking-wider text-sm transition-all ${
                activeCategory === 'masculino'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              MASCULINO
            </button>
            <button
              onClick={() => setActiveCategory('feminino')}
              className={`px-8 py-3 rounded-full font-roboto font-medium uppercase tracking-wider text-sm transition-all ${
                activeCategory === 'feminino'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              FEMININO
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white text-xs font-roboto">
                      NOVO
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-500 text-white text-xs font-roboto">
                      OFERTA
                    </Badge>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="w-full bg-black hover:bg-gray-800 text-white font-roboto text-xs uppercase tracking-wider">
                    <ShoppingBag className="w-3 h-3 mr-1" />
                    ADICIONAR
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/produto/${product.id}`}>
                  <h3 className="font-roboto text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-roboto">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through font-roboto">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                  <div className="text-lg font-roboto font-bold text-black">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
            ←
          </Button>
          <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
