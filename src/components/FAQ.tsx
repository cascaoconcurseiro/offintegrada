
import React from 'react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      question: "1. Como faço para rastrear meu pedido?",
      answer: "Assim que seu pedido for despachado, enviaremos um e-mail com o código de rastreamento e o link da transportadora para que você possa acompanhar o status da entrega."
    },
    {
      question: "2. Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos os principais cartões de crédito (Visa, Mastercard, Elo, American Express), Pix e Boleto Bancário."
    },
    {
      question: "3. É possível parcelar minhas compras?",
      answer: "Sim! Parcelamos suas compras em até 10x sem juros nos cartões de crédito, com parcela mínima de R$20,00."
    },
    {
      question: "4. Como funciona a primeira troca grátis?",
      answer: "Se você comprou um produto e o tamanho não ficou ideal, a primeira solicitação de troca por outro tamanho do mesmo modelo (se disponível em estoque) tem o custo de envio de devolução e reenvio por nossa conta. Consulte nossa Política de Trocas e Devoluções para mais detalhes."
    },
    {
      question: "5. Os produtos têm garantia?",
      answer: "Todos os nossos produtos possuem garantia de 90 dias contra defeitos de fabricação, contados a partir da data de recebimento."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-8">
          <Button className="mb-8 bg-black text-white hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider px-8 py-3">
            Voltar
          </Button>
          <h1 className="text-3xl md:text-4xl font-oswald font-bold mb-6 uppercase tracking-wider">
            Perguntas Frequentes
          </h1>
          <div className="text-gray-700 leading-relaxed space-y-4 text-sm font-roboto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h5 className="font-medium font-oswald text-md mb-2 uppercase">{faq.question}</h5>
                  <p className="text-xs">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
