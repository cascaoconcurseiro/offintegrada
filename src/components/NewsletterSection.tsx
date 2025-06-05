
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">FIQUE POR DENTRO</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Seja o primeiro a saber sobre novos lançamentos, ofertas exclusivas e eventos especiais da Elite BR
        </p>
        
        <div className="max-w-md mx-auto flex gap-4">
          <Input 
            type="email" 
            placeholder="Seu melhor e-mail"
            className="bg-white text-black border-0 flex-1"
          />
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8">
            INSCREVER
          </Button>
        </div>
        
        <p className="text-gray-400 text-sm mt-4">
          Ao se inscrever, você concorda com nossa política de privacidade
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
