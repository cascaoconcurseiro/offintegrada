
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CategorySection = () => {
  const categories = [
    {
      name: "ROUPAS",
      description: "Camisetas, hoodies e muito mais",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      link: "#"
    },
    {
      name: "ACESSÓRIOS",
      description: "Bonés, relógios e joias",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      link: "#"
    },
    {
      name: "CALÇADOS",
      description: "Tênis premium e exclusivos",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">CATEGORIAS</h2>
          <p className="text-gray-600 text-lg">Explore nossas principais categorias</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <span className="text-yellow-400 font-semibold group-hover:underline">
                    EXPLORAR →
                  </span>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
