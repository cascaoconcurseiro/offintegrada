
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, Clock, Package } from 'lucide-react';

const MysteryBoxSection = () => {
  const mysteryBoxes = [
    {
      id: 1,
      name: "Mystery Box Fitness",
      price: 199.90,
      originalPrice: 299.90,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
      items: ["2-3 Peças Premium", "Acessórios Exclusivos", "Brinde Surpresa"],
      discount: 33,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Mystery Box Casual",
      price: 149.90,
      originalPrice: 249.90,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      items: ["3-4 Peças Selecionadas", "Mix de Estilos", "Desconto Futuro"],
      discount: 40,
      rating: 4.6,
      reviews: 89
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-oswald font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mystery Boxes
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
            Receba produtos exclusivos com desconto especial. Uma surpresa incrível te espera!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mysteryBoxes.map((box) => (
            <Card key={box.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="relative">
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                  {box.discount}% OFF
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{box.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-oswald font-bold mb-3 uppercase tracking-wider">
                  {box.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    R$ {box.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    R$ {box.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {box.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700 font-roboto">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600 font-roboto">Oferta limitada</span>
                  </div>
                  <span className="text-xs text-gray-500 font-roboto">
                    {box.reviews} avaliações
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-roboto font-medium uppercase tracking-wider">
                  Comprar Mystery Box
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxSection;
