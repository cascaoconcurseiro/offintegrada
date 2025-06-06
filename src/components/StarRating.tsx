
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  readonly = false,
  onRatingChange 
}: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  const handleStarClick = (clickedRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(clickedRating);
    }
  };

  const handleStarHover = (hoveredStar: number) => {
    if (!readonly) {
      setHoveredRating(hoveredStar);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoveredRating(0);
    }
  };

  return (
    <div className="flex gap-1" onMouseLeave={handleMouseLeave}>
      {[...Array(maxRating)].map((_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= (hoveredRating || rating);
        const isPartiallyFilled = rating > index && rating < starNumber;

        return (
          <button
            key={index}
            className={`transition-colors duration-200 ${!readonly ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
            onClick={() => handleStarClick(starNumber)}
            onMouseEnter={() => handleStarHover(starNumber)}
            disabled={readonly}
            type="button"
          >
            <Star
              className={`${sizeClasses[size]} ${
                isFilled || isPartiallyFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              } transition-all duration-200`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
