
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from '@/components/UserProfile';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  UserPlus, 
  ArrowLeft,
  Crown,
  Star,
  Gift
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EnhancedUserAccount = () => {
  const { user, login, register, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'profile'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(loginForm.email, loginForm.password);
      if (success) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        setActiveTab('profile');
      } else {
        toast({
          title: "Erro no login",
          description: "Email ou senha incorretos. Tente: admin@offseason.com / admin123",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Erro no cadastro",
        description: "As senhas não coincidem.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(registerForm.name, registerForm.email, registerForm.password);
      if (success) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Bem-vindo à OFFSEASON! Você ganhou 100 pontos de boas-vindas!",
        });
        setActiveTab('profile');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (user && activeTab !== 'profile') {
    setActiveTab('profile');
  }

  const LoginForm = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">Login</h2>
          <p className="text-gray-600 font-roboto mt-2">Entre na sua conta</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="login-email" className="font-roboto font-medium">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                id="login-email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="login-password" className="font-roboto font-medium">Senha</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                id="login-password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className="pl-10 pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black font-roboto font-medium uppercase tracking-wider"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 font-roboto">
            Ainda não tem conta?{' '}
            <button
              onClick={() => setActiveTab('register')}
              className="text-black font-medium hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-700 font-roboto">
            <strong>Demo:</strong> admin@offseason.com / admin123
          </p>
        </div>
      </div>
    </div>
  );

  const RegisterForm = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">Cadastro</h2>
          <p className="text-gray-600 font-roboto mt-2">Crie sua conta</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <Label htmlFor="register-name" className="font-roboto font-medium">Nome Completo</Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                id="register-name"
                value={registerForm.name}
                onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                className="pl-10"
                placeholder="Seu nome completo"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="register-email" className="font-roboto font-medium">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                id="register-email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="register-password" className="font-roboto font-medium">Senha</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                id="register-password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                className="pl-10 pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="register-confirm-password" className="font-roboto font-medium">Confirmar Senha</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                id="register-confirm-password"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 font-roboto font-medium uppercase tracking-wider"
          >
            {isLoading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 font-roboto">
            Já tem conta?{' '}
            <button
              onClick={() => setActiveTab('login')}
              className="text-black font-medium hover:underline"
            >
              Faça login
            </button>
          </p>
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-green-600" />
            <p className="text-xs text-green-700 font-roboto">
              <strong>Ganhe 100 pontos</strong> ao se cadastrar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const WelcomeSection = () => (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border shadow-lg">
        <h1 className="text-3xl md:text-4xl font-oswald font-bold mb-4 uppercase tracking-wider">
          Minha Conta
        </h1>
        <p className="text-gray-600 font-roboto mb-6">
          Acesse sua conta para ver seus pedidos, alterar seus dados e aproveitar benefícios exclusivos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setActiveTab('login')}
            className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black font-roboto font-medium uppercase tracking-wider px-8"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Fazer Login
          </Button>
          <Button
            onClick={() => setActiveTab('register')}
            variant="outline"
            className="border-2 border-black hover:bg-black hover:text-white font-roboto font-medium uppercase tracking-wider px-8"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Criar Conta
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-oswald font-bold text-blue-800">Programa de Fidelidade</h3>
            <p className="text-xs text-blue-600 font-roboto">Ganhe pontos e suba de nível</p>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <Gift className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-oswald font-bold text-green-800">Descontos Exclusivos</h3>
            <p className="text-xs text-green-600 font-roboto">Ofertas especiais para membros</p>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <Crown className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-oswald font-bold text-purple-800">Níveis VIP</h3>
            <p className="text-xs text-purple-600 font-roboto">Bronze, Prata e Ouro</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {user ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-oswald font-bold uppercase tracking-wider">
                Olá, {user.name}!
              </h1>
              <Button
                onClick={logout}
                variant="outline"
                className="font-roboto font-medium uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
            <UserProfile />
          </>
        ) : (
          <>
            {activeTab === 'login' || activeTab === 'register' ? null : <WelcomeSection />}
            {activeTab === 'login' && <LoginForm />}
            {activeTab === 'register' && <RegisterForm />}
          </>
        )}
      </div>
    </section>
  );
};

export default EnhancedUserAccount;
