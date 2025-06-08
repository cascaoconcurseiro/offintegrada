
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface AdminSectionHeaderProps {
  title: string;
  description: string;
  onBackToDashboard: () => void;
  onRefresh?: () => void;
  children?: React.ReactNode;
}

const AdminSectionHeader = ({ 
  title, 
  description, 
  onBackToDashboard, 
  onRefresh,
  children 
}: AdminSectionHeaderProps) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBackToDashboard}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Dashboard
        </Button>
        <div className="flex gap-2">
          {onRefresh && (
            <Button variant="outline" size="sm" onClick={onRefresh}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
          )}
          {children}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AdminSectionHeader;
