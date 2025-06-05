
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  isNew?: boolean;
  sale?: boolean;
}

const ProductImageGallery = ({ images, productName, isNew, sale }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-[600px] object-cover rounded-lg"
        />
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-green-600">NOVO</Badge>
        )}
        {sale && (
          <Badge className="absolute top-4 right-4 bg-red-600">OFERTA</Badge>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-full h-32 rounded border-2 overflow-hidden ${
              selectedImage === index ? 'border-black' : 'border-gray-200'
            }`}
          >
            <img
              src={img}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
