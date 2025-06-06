
import React, { useState } from 'react';

interface ProductHoverGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

const ProductHoverGallery = ({ images, productName, className = "" }: ProductHoverGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[currentImageIndex]}
        alt={productName}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      
      {isHovered && images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              onMouseEnter={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
      
      {isHovered && images.length > 1 && (
        <div className="absolute inset-0 grid grid-cols-2">
          <div 
            className="cursor-w-resize"
            onMouseEnter={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
          />
          <div 
            className="cursor-e-resize"
            onMouseEnter={() => setCurrentImageIndex(Math.min(images.length - 1, currentImageIndex + 1))}
          />
        </div>
      )}
    </div>
  );
};

export default ProductHoverGallery;
