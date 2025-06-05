
import React from 'react';
import { CreditCard, Banknote, QrCode } from 'lucide-react';

interface PaymentMethodsProps {
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
}

const PaymentMethods = ({ selectedPayment, onPaymentChange }: PaymentMethodsProps) => {
  const paymentMethods = [
    {
      id: 'credit',
      name: 'Cartão de Crédito',
      description: 'Parcelamento em até 12x sem juros',
      icon: CreditCard,
      installments: true
    },
    {
      id: 'debit',
      name: 'Cartão de Débito',
      description: 'Débito à vista com desconto de 5%',
      icon: CreditCard,
      installments: false
    },
    {
      id: 'pix',
      name: 'PIX',
      description: 'Pagamento instantâneo com desconto de 10%',
      icon: QrCode,
      installments: false
    },
    {
      id: 'boleto',
      name: 'Boleto Bancário',
      description: 'Vencimento em 3 dias úteis',
      icon: Banknote,
      installments: false
    }
  ];

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => {
        const IconComponent = method.icon;
        return (
          <div key={method.id} className="border rounded-lg p-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={selectedPayment === method.id}
                onChange={(e) => onPaymentChange(e.target.value)}
                className="mt-1"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <IconComponent className="w-5 h-5" />
                  <span className="font-roboto font-medium">{method.name}</span>
                </div>
                <p className="text-sm text-gray-600 font-roboto mt-1">
                  {method.description}
                </p>
                
                {selectedPayment === method.id && method.installments && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="block font-roboto text-sm font-medium mb-1">
                        Número do Cartão *
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 border border-gray-300 rounded font-roboto"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block font-roboto text-sm font-medium mb-1">
                          Mês *
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded font-roboto">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-roboto text-sm font-medium mb-1">
                          Ano *
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded font-roboto">
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-roboto text-sm font-medium mb-1">
                          CVV *
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded font-roboto"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-roboto text-sm font-medium mb-1">
                        Nome no Cartão *
                      </label>
                      <input
                        type="text"
                        placeholder="Nome como impresso no cartão"
                        className="w-full px-3 py-2 border border-gray-300 rounded font-roboto"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-roboto text-sm font-medium mb-1">
                        Parcelas
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded font-roboto">
                        <option>1x à vista</option>
                        <option>2x sem juros</option>
                        <option>3x sem juros</option>
                        <option>4x sem juros</option>
                        <option>5x sem juros</option>
                        <option>6x sem juros</option>
                        <option>7x sem juros</option>
                        <option>8x sem juros</option>
                        <option>9x sem juros</option>
                        <option>10x sem juros</option>
                        <option>11x sem juros</option>
                        <option>12x sem juros</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentMethods;
