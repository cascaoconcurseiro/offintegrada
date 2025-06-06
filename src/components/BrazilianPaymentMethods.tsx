
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Banknote, QrCode, Smartphone, Calendar } from 'lucide-react';

interface BrazilianPaymentMethodsProps {
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
  totalAmount: number;
}

const BrazilianPaymentMethods = ({ selectedPayment, onPaymentChange, totalAmount }: BrazilianPaymentMethodsProps) => {
  const [installments, setInstallments] = useState(1);

  const paymentMethods = [
    {
      id: 'pix',
      name: 'PIX',
      description: 'Pagamento instantâneo',
      icon: QrCode,
      discount: 10,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'credit',
      name: 'Cartão de Crédito',
      description: 'Parcelamento em até 12x',
      icon: CreditCard,
      discount: 0,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'debit',
      name: 'Cartão de Débito',
      description: 'Débito à vista',
      icon: CreditCard,
      discount: 5,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'boleto',
      name: 'Boleto Bancário',
      description: 'Vencimento em 3 dias úteis',
      icon: Banknote,
      discount: 5,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'pix_parcelado',
      name: 'PIX Parcelado',
      description: 'Parcelamento via PIX',
      icon: Smartphone,
      discount: 2,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    }
  ];

  const calculateFinalPrice = (method: any) => {
    const discount = method.discount / 100;
    return totalAmount * (1 - discount);
  };

  const calculateInstallmentValue = (amount: number, installments: number) => {
    return amount / installments;
  };

  const getInstallmentOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      const value = calculateInstallmentValue(totalAmount, i);
      options.push({
        installments: i,
        value: value,
        total: totalAmount,
        label: i === 1 ? 'À vista' : `${i}x de R$ ${value.toFixed(2).replace('.', ',')}`
      });
    }
    return options;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-oswald font-bold uppercase tracking-wider mb-4">
          Forma de Pagamento
        </h3>
        
        <div className="grid gap-3">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            const finalPrice = calculateFinalPrice(method);
            const isSelected = selectedPayment === method.id;
            
            return (
              <Card 
                key={method.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected 
                    ? `${method.bgColor} ${method.borderColor} border-2` 
                    : 'border hover:border-gray-300'
                }`}
                onClick={() => onPaymentChange(method.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${method.bgColor}`}>
                        <IconComponent className={`w-5 h-5 ${method.color}`} />
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{method.name}</span>
                          {method.discount > 0 && (
                            <Badge className="bg-green-500 text-white text-xs">
                              -{method.discount}%
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {method.discount > 0 && (
                        <div className="text-sm text-gray-500 line-through">
                          R$ {totalAmount.toFixed(2).replace('.', ',')}
                        </div>
                      )}
                      <div className="font-bold text-lg text-green-600">
                        R$ {finalPrice.toFixed(2).replace('.', ',')}
                      </div>
                      {method.discount > 0 && (
                        <div className="text-xs text-green-600">
                          Economia: R$ {(totalAmount - finalPrice).toFixed(2).replace('.', ',')}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Parcelamento para Cartão de Crédito */}
      {selectedPayment === 'credit' && (
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Parcelamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 max-h-48 overflow-y-auto">
              {getInstallmentOptions().map((option) => (
                <label key={option.installments} className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="installments"
                      value={option.installments}
                      checked={installments === option.installments}
                      onChange={() => setInstallments(option.installments)}
                    />
                    <span>{option.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      R$ {option.total.toFixed(2).replace('.', ',')}
                    </div>
                    {option.installments > 1 && (
                      <div className="text-xs text-gray-500">sem juros</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dados do Cartão */}
      {(selectedPayment === 'credit' || selectedPayment === 'debit') && (
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Dados do Cartão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Número do Cartão</label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full px-3 py-2 border rounded"
                maxLength={19}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Mês</label>
                <select className="w-full px-3 py-2 border rounded">
                  {Array.from({length: 12}, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ano</label>
                <select className="w-full px-3 py-2 border rounded">
                  {Array.from({length: 10}, (_, i) => (
                    <option key={i} value={2024 + i}>
                      {2024 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-3 py-2 border rounded"
                  maxLength={4}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Nome no Cartão</label>
              <input
                type="text"
                placeholder="Nome como no cartão"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* QR Code PIX */}
      {selectedPayment === 'pix' && (
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">PIX - Pagamento Instantâneo</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-48 h-48 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600">
              QR Code será gerado após confirmação do pedido
            </p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-green-800 font-medium">
                💰 Desconto de 10% aplicado: R$ {(totalAmount * 0.1).toFixed(2).replace('.', ',')}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BrazilianPaymentMethods;
