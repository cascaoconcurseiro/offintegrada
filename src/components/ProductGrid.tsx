
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta Elite Premium",
      price: "R$ 189,90",
      originalPrice: "R$ 249,90",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      isNew: true,
      sale: true
    },
    {
      id: 2,
      name: "Hoodie Urban Black",
      price: "R$ 299,90",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=400",
      isNew: false,
      sale: false
    },
    {
      id: 3,
      name: "Tênis Elite Sport",
      price: "R$ 449,90",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      isNew: true,
      sale: false
    },
    {
      id: 4,
      name: "Boné Signature",
      price: "R$ 129,90",
      originalPrice: "R$ 169,90",
      image: "https://images.unsplash.com/photo-1588117472013-59bb13edafec?w=400",
      isNew: false,
      sale: true
    },
    {
      id: 5,
      name: "Calça Jogger Premium",
      price: "R$ 259,90",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400",
      isNew: false,
      sale: false
    },
    {
      id: 6,
      name: "Jaqueta Bomber Elite",
      price: "R$ 399,90",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      isNew: true,
      sale: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">PRODUTOS EM DESTAQUE</h2>
          <p className="text-gray-600 text-lg">Descubra nossa seleção exclusiva</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 text-xs font-bold rounded">NOVO</span>
                  )}
                  {product.sale && (
                    <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">OFERTA</span>
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
                  <Button className="w-full bg-black hover:bg-gray-800">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    ADICIONAR AO CARRINHO
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-12">
            VER TODOS OS PRODUTOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
