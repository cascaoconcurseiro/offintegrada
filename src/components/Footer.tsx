
import React from 'react';
import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ELITE BR</h3>
            <p className="text-gray-400 mb-6">
              Lifestyle premium para o público brasileiro. Qualidade, estilo e exclusividade.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
              <Mail className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">ATENDIMENTO</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Troca</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rastreamento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">EMPRESA</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">CONTATO</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@elitebr.com.br</span>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Horário de Atendimento:</p>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Elite BR. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
