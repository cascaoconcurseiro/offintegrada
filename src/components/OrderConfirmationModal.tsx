
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderConfirmationModal = ({ isOpen, onClose }: OrderConfirmationModalProps) => {
  if (!isOpen) return null;

  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-oswald font-medium uppercase tracking-wider">
                Pedido Confirmado!
              </h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-roboto text-sm text-gray-600 mb-1">
                Número do Pedido
              </p>
              <p className="font-oswald text-lg font-medium tracking-wider">
                #{orderNumber}
              </p>
            </div>

            <p className="font-roboto text-gray-700">
              Seu pedido foi confirmado com sucesso! Você receberá um e-mail com todos os detalhes.
            </p>

            <div className="space-y-3 pt-4">
              <Link to="/conta" onClick={onClose}>
                <Button className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider">
                  Acompanhar Pedido
                </Button>
              </Link>
              
              <Link to="/loja" onClick={onClose}>
                <Button 
                  variant="outline" 
                  className="w-full font-roboto font-medium uppercase tracking-wider"
                >
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
