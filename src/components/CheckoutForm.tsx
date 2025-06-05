
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { CreditCard, Truck, MapPin, User, Phone, Mail } from 'lucide-react';
import OrderSummary from '@/components/OrderSummary';
import PaymentMethods from '@/components/PaymentMethods';
import ShippingMethods from '@/components/ShippingMethods';
import OrderConfirmationModal from '@/components/OrderConfirmationModal';

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string;
}

interface AddressData {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const CheckoutForm = () => {
  const { items, getTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [customerData, setCustomerData] = useState<CustomerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: ''
  });

  const [addressData, setAddressData] = useState<AddressData>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('');

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinishOrder = () => {
    setShowConfirmation(true);
    clearCart();
  };

  if (items.length === 0 && !showConfirmation) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-oswald font-medium mb-4 uppercase tracking-wider">
          Carrinho Vazio
        </h2>
        <p className="text-gray-600 font-roboto mb-8">
          Adicione produtos ao seu carrinho para continuar
        </p>
        <Button className="bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider">
          Voltar às Compras
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="flex-1">
            {/* Steps Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-roboto font-medium ${
                    currentStep >= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  <span className={`ml-2 font-roboto text-sm ${
                    currentStep >= step ? 'text-black' : 'text-gray-500'
                  }`}>
                    {step === 1 && 'Dados Pessoais'}
                    {step === 2 && 'Endereço'}
                    {step === 3 && 'Entrega'}
                    {step === 4 && 'Pagamento'}
                  </span>
                  {step < 4 && <div className="mx-4 flex-1 h-px bg-gray-200" />}
                </div>
              ))}
            </div>

            {/* Step 1: Customer Data */}
            {currentStep === 1 && (
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-6">
                  <User className="w-5 h-5 mr-2" />
                  <h3 className="font-oswald text-lg font-medium uppercase tracking-wider">
                    Dados Pessoais
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input
                      id="firstName"
                      value={customerData.firstName}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome *</Label>
                    <Input
                      id="lastName"
                      value={customerData.lastName}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input
                      id="cpf"
                      value={customerData.cpf}
                      onChange={(e) => setCustomerData(prev => ({ ...prev, cpf: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 2 && (
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <h3 className="font-oswald text-lg font-medium uppercase tracking-wider">
                    Endereço de Entrega
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      value={addressData.cep}
                      onChange={(e) => setAddressData(prev => ({ ...prev, cep: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="street">Rua *</Label>
                    <Input
                      id="street"
                      value={addressData.street}
                      onChange={(e) => setAddressData(prev => ({ ...prev, street: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Número *</Label>
                    <Input
                      id="number"
                      value={addressData.number}
                      onChange={(e) => setAddressData(prev => ({ ...prev, number: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      value={addressData.complement}
                      onChange={(e) => setAddressData(prev => ({ ...prev, complement: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Input
                      id="neighborhood"
                      value={addressData.neighborhood}
                      onChange={(e) => setAddressData(prev => ({ ...prev, neighborhood: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      value={addressData.city}
                      onChange={(e) => setAddressData(prev => ({ ...prev, city: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="state">Estado *</Label>
                    <Input
                      id="state"
                      value={addressData.state}
                      onChange={(e) => setAddressData(prev => ({ ...prev, state: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Shipping */}
            {currentStep === 3 && (
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-6">
                  <Truck className="w-5 h-5 mr-2" />
                  <h3 className="font-oswald text-lg font-medium uppercase tracking-wider">
                    Forma de Entrega
                  </h3>
                </div>
                <ShippingMethods 
                  selectedShipping={selectedShipping}
                  onShippingChange={setSelectedShipping}
                />
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-5 h-5 mr-2" />
                  <h3 className="font-oswald text-lg font-medium uppercase tracking-wider">
                    Forma de Pagamento
                  </h3>
                </div>
                <PaymentMethods 
                  selectedPayment={selectedPayment}
                  onPaymentChange={setSelectedPayment}
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="font-roboto font-medium uppercase tracking-wider"
              >
                Voltar
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={handleNextStep}
                  className="bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  onClick={handleFinishOrder}
                  className="bg-green-600 hover:bg-green-700 font-roboto font-medium uppercase tracking-wider"
                >
                  Finalizar Pedido
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-96">
            <OrderSummary />
          </div>
        </div>
      </div>

      <OrderConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
};

export default CheckoutForm;
