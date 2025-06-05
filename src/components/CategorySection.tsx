
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CategorySection = () => {
  const categories = [
    {
      name: "Regatas",
      description: "Performance e estilo para seus treinos",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&crop=center",
      filter: "regata"
    },
    {
      name: "Camisetas", 
      description: "Conforto e design em cada peça",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=500&h=600&fit=crop&crop=center",
      filter: "camiseta"
    },
    {
      name: "Shorts",
      description: "Liberdade de movimento total",
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=500&h=600&fit=crop&crop=center", 
      filter: "shorts"
    },
    {
      name: "Leggings",
      description: "Tecnologia e estilo feminino",
      image: "https://images.unsplash.com/photo-1506629905138-e9edb9c83ee5?w=500&h=600&fit=crop&crop=center",
      filter: "legging"
    },
    {
      name: "Tops",
      description: "Suporte e conforto para ela",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&crop=center",
      filter: "top"
    },
    {
      name: "Agasalhos",
      description: "Aquecimento com performance",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=500&h=600&fit=crop&crop=center",
      filter: "agasalho"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-oswald font-medium text-center mb-10 uppercase tracking-wider">
          Navegue por Categorias
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 text-center">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="category-text-item hover:underline font-roboto text-sm uppercase tracking-wider"
            >
              <p>{category.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
