
import React from 'react';
import Header from '@/components/Header';
import ShopPageRefactored from '@/components/ShopPageRefactored';
import Footer from '@/components/Footer';

const ShopPageRoute = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ShopPageRefactored />
      <Footer />
    </div>
  );
};

export default ShopPageRoute;
