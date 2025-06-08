
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(password);
  };

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
          <p className="text-xs text-gray-500 text-center">
            🔐 Demo: use a senha "admin123"
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
