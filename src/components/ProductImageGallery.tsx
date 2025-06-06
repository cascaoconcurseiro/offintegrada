
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  isNew?: boolean;
  sale?: boolean;
  videoId?: string;
}

const ProductImageGallery = ({ images, productName, isNew, sale, videoId }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const allMedia = videoId ? [...images, 'video'] : images;

  const handleMediaClick = (index: number) => {
    if (allMedia[index] === 'video') {
      setShowVideo(true);
    } else {
      setSelectedImage(index);
      setShowVideo(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        {showVideo && videoId ? (
          <div className="w-full h-[600px] bg-black rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <Play className="w-16 h-16 mx-auto mb-4" />
              <p>Vídeo do Produto</p>
              <p className="text-sm opacity-75">ID: {videoId}</p>
            </div>
          </div>
        ) : (
          <div className="relative group cursor-pointer" onClick={() => setIsZoomed(!isZoomed)}>
            <img
              src={images[selectedImage]}
              alt={productName}
              className={`w-full h-[600px] object-cover rounded-lg transition-transform duration-300 ${
                isZoomed ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        )}
        
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-green-600">NOVO</Badge>
        )}
        {sale && (
          <Badge className="absolute top-4 right-4 bg-red-600">OFERTA</Badge>
        )}
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {allMedia.map((media, index) => (
          <button
            key={index}
            onClick={() => handleMediaClick(index)}
            className={`w-full h-24 rounded border-2 overflow-hidden transition-all duration-200 ${
              (showVideo && media === 'video') || (!showVideo && selectedImage === index)
                ? 'border-black scale-105' 
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            {media === 'video' ? (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            ) : (
              <img
                src={media}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
