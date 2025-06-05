
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const LoginForm = () => (
    <form className="mt-8 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-oswald font-medium text-center uppercase">Login</h2>
      <div>
        <Label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</Label>
        <Input 
          type="email" 
          id="login-email" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Palavra-passe</Label>
        <Input 
          type="password" 
          id="login-password" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <Button type="submit" className="bg-black text-white hover:bg-gray-800 w-full font-roboto uppercase tracking-wider">
        Entrar
      </Button>
    </form>
  );

  const RegisterForm = () => (
    <form className="mt-8 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-oswald font-medium text-center uppercase">Criar Conta</h2>
      <div>
        <Label htmlFor="register-name" className="block text-sm font-medium text-gray-700">Nome Completo</Label>
        <Input 
          type="text" 
          id="register-name" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email</Label>
        <Input 
          type="email" 
          id="register-email" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Palavra-passe</Label>
        <Input 
          type="password" 
          id="register-password" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Palavra-passe</Label>
        <Input 
          type="password" 
          id="register-confirm-password" 
          required 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        />
      </div>
      <Button type="submit" className="bg-black text-white hover:bg-gray-800 w-full font-roboto uppercase tracking-wider">
        Registar
      </Button>
    </form>
  );

  const AccountContent = () => (
    <div className="text-center">
      <p className="text-center text-gray-700 mb-6">Acesse sua conta para ver seus pedidos, alterar seus dados e mais.</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Button 
          onClick={() => setShowLoginForm(true)} 
          className="bg-black text-white hover:bg-gray-800 px-8 font-roboto uppercase tracking-wider"
        >
          Login
        </Button>
        <Button 
          onClick={() => setShowRegisterForm(true)} 
          className="bg-white text-black border border-black hover:bg-gray-100 px-8 font-roboto uppercase tracking-wider"
        >
          Criar Conta
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-8">
          <Button className="mb-8 bg-black text-white hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider px-8 py-3">
            Voltar ao Carrinho
          </Button>
          <h1 className="text-3xl md:text-4xl font-oswald font-bold mb-8 text-center uppercase tracking-wider">
            Minha Conta
          </h1>

          {!showLoginForm && !showRegisterForm ? (
            <AccountContent />
          ) : showLoginForm ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
