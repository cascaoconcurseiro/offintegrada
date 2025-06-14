
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download, Plus } from 'lucide-react';

interface ProductManagementHeaderProps {
  onImportCSV: () => void;
  onExportProducts: () => void;
  onCreateProduct: () => void;
}

const ProductManagementHeader: React.FC<ProductManagementHeaderProps> = ({
  onImportCSV,
  onExportProducts,
  onCreateProduct,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
          Gestão Avançada de Produtos
        </h2>
        <p className="text-gray-600">
          Sistema completo para gerenciar catálogo, variações, estoque e performance
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onImportCSV}>
          <Upload className="w-4 h-4 mr-2" />
          Importar CSV
        </Button>
        <Button variant="outline" onClick={onExportProducts}>
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
        <Button onClick={onCreateProduct}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Produto
        </Button>
      </div>
    </div>
  );
};

export default ProductManagementHeader;
