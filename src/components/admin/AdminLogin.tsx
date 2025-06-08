
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, ArrowLeft, Key } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleLogin = () => {
    onLogin(password);
  };

  const handleRecovery = () => {
    if (!recoveryEmail) {
      toast({
        title: "Email obrigatório",
        description: "Digite seu email para recuperar a senha.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Email enviado!",
      description: "Instruções de recuperação foram enviadas para seu email.",
    });
    setShowRecovery(false);
  };

  const handleBackToStore = () => {
    window.location.href = '/';
  };

  if (showRecovery) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-oswald text-2xl uppercase tracking-wider">
              Recuperar Senha
            </CardTitle>
            <p className="text-gray-600">Digite seu email administrativo</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email do Administrador</label>
              <Input
                type="email"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                placeholder="admin@offseason.com"
              />
            </div>
            <Button onClick={handleRecovery} className="w-full">
              <Key className="w-4 h-4 mr-2" />
              Enviar Instruções
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowRecovery(false)} 
              className="w-full"
            >
              Voltar ao Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="font-oswald text-2xl uppercase tracking-wider">
            Acesso Administrativo Profissional
          </CardTitle>
          <p className="text-gray-600">Sistema de gestão empresarial nível Nike/Adidas</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Senha do Administrador</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            <CheckCircle className="w-4 h-4 mr-2" />
            Acessar Sistema
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleBackToStore} 
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à Loja
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowRecovery(true)} 
              className="flex-1"
            >
              <Key className="w-4 h-4 mr-2" />
              Recuperar Senha
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            🔐 Demo: use a senha "admin123"
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
