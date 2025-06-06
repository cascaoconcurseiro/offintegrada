
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, Clock } from 'lucide-react';

const MysteryBoxHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge className="bg-black text-white font-roboto text-xs uppercase tracking-wider">
                DIA DOS NAMORADOS
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold tracking-wider uppercase">
                MYSTERY B<span className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mx-2">
                  <Gift className="w-6 h-6" />
                </span>X
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-roboto text-gray-600">
                Nas compras acima de <span className="font-bold text-black">R$499,90</span>,
              </p>
              <p className="text-xl font-roboto font-medium">
                você ganha um presente misterioso*
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-roboto font-medium uppercase tracking-wider px-8"
            >
              O mistério começa aqui
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-600 font-roboto">
              <Clock className="w-4 h-4" />
              <span>Atenção - Adicione a Mystery Box no checkout.</span>
            </div>

            <p className="text-xs text-gray-500 font-roboto italic">
              *Produto sujeito disponibilidade, ou presente surpresa 
              e não acúmula com outras promoções da categoria.
            </p>
          </div>

          {/* Right Content - Mystery Boxes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="bg-black text-white p-8 rounded-lg shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-oswald font-bold tracking-wider">
                      Trust<br />us
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="bg-black text-white p-8 rounded-lg shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-oswald font-bold tracking-wider">
                      Trust<br />us
                    </div>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxHero;
