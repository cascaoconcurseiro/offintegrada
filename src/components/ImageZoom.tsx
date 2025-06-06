
import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageZoom = ({ src, alt, className = "" }: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !isZoomed) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div
        ref={imageRef}
        className="relative cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          style={{
            transformOrigin: isZoomed ? `${mousePosition.x}% ${mousePosition.y}%` : 'center'
          }}
        />
        
        {/* Zoom Indicator */}
        <div className={`absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-opacity duration-300 ${
          isZoomed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
