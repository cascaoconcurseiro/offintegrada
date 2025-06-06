
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Ruler } from 'lucide-react';

interface ProductSizeChartProps {
  category: string;
}

const ProductSizeChart = ({ category }: ProductSizeChartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeData = {
    regata: {
      sizes: ['P', 'M', 'G', 'GG'],
      measurements: [
        { size: 'P', chest: '92-96', length: '70', shoulder: '42' },
        { size: 'M', chest: '96-100', length: '72', shoulder: '44' },
        { size: 'G', chest: '100-104', length: '74', shoulder: '46' },
        { size: 'GG', chest: '104-108', length: '76', shoulder: '48' }
      ]
    },
    camiseta: {
      sizes: ['P', 'M', 'G', 'GG'],
      measurements: [
        { size: 'P', chest: '92-96', length: '70', shoulder: '42' },
        { size: 'M', chest: '96-100', length: '72', shoulder: '44' },
        { size: 'G', chest: '100-104', length: '74', shoulder: '46' },
        { size: 'GG', chest: '104-108', length: '76', shoulder: '48' }
      ]
    }
  };

  const currentSizeData = sizeData[category as keyof typeof sizeData] || sizeData.regata;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          <Ruler className="w-4 h-4 mr-1" />
          Tabela de Medidas
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-oswald uppercase tracking-wider">
            Tabela de Medidas
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-oswald">Tamanho</th>
                  <th className="text-left p-2 font-oswald">Peito (cm)</th>
                  <th className="text-left p-2 font-oswald">Comprimento (cm)</th>
                  <th className="text-left p-2 font-oswald">Ombro (cm)</th>
                </tr>
              </thead>
              <tbody>
                {currentSizeData.measurements.map((measurement) => (
                  <tr key={measurement.size} className="border-b">
                    <td className="p-2 font-medium">{measurement.size}</td>
                    <td className="p-2">{measurement.chest}</td>
                    <td className="p-2">{measurement.length}</td>
                    <td className="p-2">{measurement.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-gray-600 space-y-2">
            <p><strong>Como medir:</strong></p>
            <p>• <strong>Peito:</strong> Meça na parte mais larga do peito</p>
            <p>• <strong>Comprimento:</strong> Da base do pescoço até a barra</p>
            <p>• <strong>Ombro:</strong> De ombro a ombro</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductSizeChart;
