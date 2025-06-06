
import React from 'react';
import BrazilianPaymentMethods from './BrazilianPaymentMethods';

interface PaymentMethodsProps {
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
  totalAmount?: number;
}

const PaymentMethods = ({ selectedPayment, onPaymentChange, totalAmount = 100 }: PaymentMethodsProps) => {
  return (
    <BrazilianPaymentMethods
      selectedPayment={selectedPayment}
      onPaymentChange={onPaymentChange}
      totalAmount={totalAmount}
    />
  );
};

export default PaymentMethods;
