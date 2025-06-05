
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ResellerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui implementaria o envio do formulário
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-8">
          <Button className="mb-8 bg-black text-white hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider px-8 py-3">
            Voltar
          </Button>
          <h1 className="text-3xl md:text-4xl font-oswald font-bold mb-6 uppercase tracking-wider">
            Seja um Revendedor OFFSEASON
          </h1>
          <div className="text-gray-700 space-y-4 text-sm font-roboto leading-relaxed">
            <p className="text-xl font-medium">Em Breve!</p>
            <p>
              Estamos a preparar um espaço com dicas de treino, nutrição, lifestyle e as 
              últimas tendências do universo fitness. Fique atento às novidades!
            </p>
            
            <h4 className="font-medium font-oswald text-lg mt-5 uppercase">Vantagens de ser um Revendedor OFFSEASON:</h4>
            <ul className="list-disc list-inside space-y-1 text-left max-w-2xl mx-auto">
              <li>Acesso a produtos de alta performance com design exclusivo.</li>
              <li>Condições comerciais atrativas e margens competitivas.</li>
              <li>Suporte de marketing e material de ponto de venda.</li>
              <li>Fazer parte de uma marca em crescimento e com forte identidade.</li>
            </ul>

            <h4 className="font-medium font-oswald text-lg mt-5 uppercase">Como se Tornar um Revendedor:</h4>
            <p>
              Se você tem interesse em se tornar um revendedor autorizado dos produtos 
              OFFSEASON, entre em contato conosco através do e-mail{' '}
              <a href="mailto:revenda@offseason.com.br" className="text-black underline hover:text-gray-700">
                revenda@offseason.com.br
              </a>.
            </p>
            <p>
              Por favor, inclua informações sobre a sua loja ou negócio, localização e por 
              que gostaria de ser um parceiro OFFSEASON. A nossa equipa comercial analisará o seu 
              pedido e entrará em contacto em breve.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="font-medium font-oswald text-lg mb-3 mt-6 uppercase">Canais de Atendimento:</h4>
          <div className="text-sm space-y-2 mb-8">
            <p><strong>E-mail:</strong> <a href="mailto:contato@offseason.com.br" className="text-black underline hover:text-gray-700">contato@offseason.com.br</a></p>
            <p><strong>Whatsapp:</strong> <a href="https://wa.me/55119XXXXXXXX" target="_blank" className="text-black underline hover:text-gray-700">(XX) XXXXX-XXXX</a></p>
            <p>(Segunda a Sexta, das 9h às 18h)</p>
            <p><strong>Redes Sociais:</strong> Envie-nos uma mensagem direta no <a href="#" className="text-black underline hover:text-gray-700">Instagram</a> ou <a href="#" className="text-black underline hover:text-gray-700">Facebook</a>.</p>
          </div>

          <h4 className="font-medium font-oswald text-lg mb-3 mt-6 uppercase">Envie-nos uma Mensagem:</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="contact-name" className="block text-xs font-medium text-gray-700 uppercase">Nome Completo</Label>
              <Input 
                type="text" 
                name="name" 
                id="contact-name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <Label htmlFor="contact-email" className="block text-xs font-medium text-gray-700 uppercase">E-mail</Label>
              <Input 
                type="email" 
                name="email" 
                id="contact-email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <Label htmlFor="contact-subject" className="block text-xs font-medium text-gray-700 uppercase">Assunto</Label>
              <Input 
                type="text" 
                name="subject" 
                id="contact-subject" 
                required 
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <Label htmlFor="contact-message" className="block text-xs font-medium text-gray-700 uppercase">Mensagem</Label>
              <Textarea 
                name="message" 
                id="contact-message" 
                rows={4}
                required 
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800 font-roboto font-medium py-2.5 px-6 text-sm uppercase tracking-wider">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
