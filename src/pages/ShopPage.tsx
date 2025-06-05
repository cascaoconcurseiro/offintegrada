
import React from 'react';
import Header from '@/components/Header';
import ShopPage from '@/components/ShopPage';
import Footer from '@/components/Footer';

const ShopPageRoute = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ShopPage />
      <Footer />
    </div>
  );
};

export default ShopPageRoute;
