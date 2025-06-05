
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="promo-banner py-12 md:py-20 text-center bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-oswald font-bold mb-4 uppercase tracking-wider">
          COLEÇÃO PERFORMANCE
        </h3>
        <p className="text-lg mb-6 font-roboto font-light">
          Tecnologia e design para você ir além.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider px-8 py-3">
          Conheça
        </Button>
      </div>
    </section>
  );
};

export default NewsletterSection;
