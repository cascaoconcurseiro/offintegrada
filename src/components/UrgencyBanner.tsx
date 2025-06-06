
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Clock, Flame } from 'lucide-react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 animate-pulse" />
              <span className="font-oswald font-bold uppercase tracking-wider text-sm">
                OFERTA RELÂMPAGO
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-roboto text-sm">
                Termina em:
              </span>
              <div className="flex items-center gap-1 font-mono font-bold">
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            <span className="font-roboto text-sm">
              30% OFF em toda loja + Frete Grátis
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-white text-red-600 hover:bg-gray-100 font-roboto font-medium uppercase tracking-wider text-xs px-4"
            >
              Aproveitar Agora
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
