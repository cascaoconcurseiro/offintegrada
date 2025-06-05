
import React from 'react';
import Header from '@/components/Header';
import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
