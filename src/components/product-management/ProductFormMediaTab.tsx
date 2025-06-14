
import React from 'react';
import { Input } from '@/components/ui/input';
import { Upload, Video, Globe } from 'lucide-react';
// import type { Product } from '@/types/product'; // If needed for props

interface ProductFormMediaTabProps {
  // selectedProduct: Product | null;
  // Add specific form field states and handlers as props
}

const ProductFormMediaTab: React.FC<ProductFormMediaTabProps> = (/*{ selectedProduct }*/) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Imagens do Produto</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Clique para upload</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-4">Vídeos do Produto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Video className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Upload de Vídeo</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">URL do Vídeo (YouTube/Vimeo)</label>
            <Input placeholder="https://youtube.com/watch?v=..." />
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-4">Galeria 360°</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Globe className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Upload para visualização 360°</p>
        </div>
      </div>
    </div>
  );
};

export default ProductFormMediaTab;
