
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-oswald font-bold mb-4 uppercase tracking-wider">OFFSEASON</h3>
            <p className="text-gray-400 mb-6 font-roboto">
              OFFSEASON: Supere Seus Limites. Com Estilo.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>

          {/* Nossa História */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">Nossa História</h4>
            <p className="text-gray-400 text-sm font-roboto leading-relaxed">
              A OFFSEASON nasceu da confluência de duas paixões: o universo dinâmico do esporte de alta performance e a busca incessante pela sofisticação no design de vestuário.
            </p>
          </div>

          {/* Nossa Missão */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">Nossa Missão</h4>
            <p className="text-gray-400 text-sm font-roboto leading-relaxed">
              Nossa missão é oferecer roupas que combinem funcionalidade premium com uma estética de luxo minimalista.
            </p>
          </div>

          {/* O Conceito Offseason */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">O Conceito Offseason</h4>
            <p className="text-gray-400 text-sm font-roboto leading-relaxed">
              Peças que transcendem as quatro linhas e se integram perfeitamente ao lifestyle contemporâneo.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-roboto">
              © 2024 Offseason. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors font-roboto">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors font-roboto">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors font-roboto">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
