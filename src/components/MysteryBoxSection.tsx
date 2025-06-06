
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Sparkles } from 'lucide-react';

const MysteryBoxSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <Badge className="bg-yellow-400 text-black font-medium">
                DIA DOS NAMORADOS
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wider">
              Mystery Box
            </h2>
            
            <div className="space-y-2">
              <p className="text-xl font-roboto">
                Nas compras acima de <span className="font-bold text-yellow-400">R$499,90</span>,
              </p>
              <p className="text-xl font-roboto">
                você ganha um <span className="font-bold">presente misterioso</span>.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  alt="Cliente" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm">Atenção - Adicione a Mystery Box no checkout.</p>
                <p className="text-xs text-gray-300">*Confira os termos e condições de entrega</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-roboto font-medium uppercase tracking-wider px-8"
            >
              <Gift className="w-5 h-5 mr-2" />
              ADICIONE CONOSCO AQUI
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop" 
                alt="Mystery Box" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <Badge className="bg-yellow-400 text-black font-bold text-lg px-4 py-2">
                  Trust Us
                </Badge>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxSection;
