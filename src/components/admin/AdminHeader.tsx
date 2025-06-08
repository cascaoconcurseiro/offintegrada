
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, BarChart3 } from 'lucide-react';

interface AdminHeaderProps {
  onLogout: () => void;
  onRefresh: () => void;
}

const AdminHeader = ({ onLogout, onRefresh }: AdminHeaderProps) => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-oswald font-bold uppercase tracking-wider mb-2">
          Central Administrativa Empresarial
        </h1>
        <p className="text-gray-600">
          Sistema completo de gestão e-commerce nível Nike/Adidas com 50+ funcionalidades
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Atualizar Dashboard
        </Button>
        <Button variant="outline" size="sm" onClick={onRefresh}>
          <BarChart3 className="w-4 h-4 mr-2" />
          Analytics
        </Button>
        <Button variant="outline" onClick={onLogout}>
          Sair do Sistema
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
