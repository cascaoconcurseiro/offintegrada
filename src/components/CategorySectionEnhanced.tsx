
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CategorySectionEnhanced = () => {
  const categories = [
    {
      title: "Camisetas",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8e8c?w=600&h=800&fit=crop",
      link: "/loja?category=camiseta",
      buttonText: "VER TUDO"
    },
    {
      title: "Calças",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      link: "/loja?category=calca",
      buttonText: "VER TUDO"
    },
    {
      title: "Regatas",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      link: "/loja?category=regata",
      buttonText: "VER TUDO"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-96">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300" />
              
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-oswald font-bold mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Link to={category.link}>
                    {category.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySectionEnhanced;
