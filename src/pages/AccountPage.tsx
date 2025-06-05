
import React from 'react';
import Header from '@/components/Header';
import UserAccount from '@/components/UserAccount';
import Footer from '@/components/Footer';

const AccountPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <UserAccount />
      <Footer />
    </div>
  );
};

export default AccountPage;
