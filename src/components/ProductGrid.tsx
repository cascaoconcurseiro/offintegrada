
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Regata Premium Masculina",
      price: "R$ 89,90",
      originalPrice: "R$ 119,90",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      isNew: true,
      sale: true
    },
    {
      id: 2,
      name: "Camiseta Compress Pro",
      price: "R$ 129,90",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=400&h=500&fit=crop&crop=center",
      isNew: false,
      sale: false
    },
    {
      id: 3,
      name: "Short Performance Elite",
      price: "R$ 79,90",
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      isNew: true,
      sale: false
    },
    {
      id: 4,
      name: "Legging High Tech",
      price: "R$ 149,90",
      originalPrice: "R$ 189,90",
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=400&h=500&fit=crop&crop=center",
      isNew: false,
      sale: true
    },
    {
      id: 5,
      name: "Top Fitness Feminino",
      price: "R$ 69,90",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
      isNew: false,
      sale: false
    },
    {
      id: 6,
      name: "Agasalho Elite Pro",
      price: "R$ 249,90",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400&h=500&fit=crop&crop=center",
      isNew: true,
      sale: false
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-oswald font-medium mb-4 uppercase tracking-wider">
            Mais Vendidos
          </h2>
          <p className="mt-1 text-gray-600 font-roboto font-light tracking-wider text-sm">
            Os favoritos da comunidade OFFSEASON.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-8 md:gap-y-12">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-none bg-transparent overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">NOVO</span>
                  )}
                  {product.sale && (
                    <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded font-roboto uppercase">OFERTA</span>
                  )}
                </div>

                {/* Hover actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white mb-2">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick add to cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    ADICIONAR AO CARRINHO
                  </Button>
                </div>
              </div>

              <CardContent className="p-0 pt-4">
                <h3 className="font-roboto font-medium text-base mb-2 uppercase tracking-wider">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-roboto font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through font-roboto">{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-12 font-roboto font-medium uppercase tracking-wider">
            VER TODOS OS PRODUTOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
