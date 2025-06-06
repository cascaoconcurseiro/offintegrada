
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-oswald font-bold mb-4 uppercase tracking-wider">
            Fique por dentro das novidades
          </h3>
          <p className="text-gray-300 mb-6 font-roboto">
            Seja o primeiro a saber sobre lançamentos, ofertas exclusivas e conteúdos especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-white text-black placeholder:text-gray-500 border-none"
            />
            <Button className="bg-white text-black hover:bg-gray-100 font-roboto font-medium uppercase tracking-wider px-8">
              Inscrever
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-oswald font-bold mb-4 uppercase tracking-wider">OFFSEASON</h3>
            <p className="text-gray-400 mb-6 font-roboto text-sm leading-relaxed">
              Supere seus limites com estilo. Desenvolvemos roupas que combinam performance e design para quem busca excelência em cada movimento.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/loja?gender=masculino" className="text-gray-400 hover:text-white transition-colors font-roboto">Masculino</Link></li>
              <li><Link to="/loja?gender=feminino" className="text-gray-400 hover:text-white transition-colors font-roboto">Feminino</Link></li>
              <li><Link to="/loja?category=camiseta" className="text-gray-400 hover:text-white transition-colors font-roboto">Camisetas</Link></li>
              <li><Link to="/loja?category=regata" className="text-gray-400 hover:text-white transition-colors font-roboto">Regatas</Link></li>
              <li><Link to="/loja?category=shorts" className="text-gray-400 hover:text-white transition-colors font-roboto">Shorts</Link></li>
              <li><Link to="/loja?category=legging" className="text-gray-400 hover:text-white transition-colors font-roboto">Leggings</Link></li>
              <li><Link to="/loja?new=true" className="text-gray-400 hover:text-white transition-colors font-roboto">Lançamentos</Link></li>
              <li><Link to="/loja?sale=true" className="text-gray-400 hover:text-white transition-colors font-roboto">Ofertas</Link></li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">Ajuda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors font-roboto">FAQ</Link></li>
              <li><Link to="/guia-tamanhos" className="text-gray-400 hover:text-white transition-colors font-roboto">Guia de Tamanhos</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors font-roboto">Trocas e Devoluções</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors font-roboto">Entrega e Frete</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors font-roboto">Formas de Pagamento</Link></li>
              <li><Link to="/revendedor" className="text-gray-400 hover:text-white transition-colors font-roboto">Seja um Revendedor</Link></li>
              <li><Link to="/conta" className="text-gray-400 hover:text-white transition-colors font-roboto">Minha Conta</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-oswald font-medium mb-4 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400 font-roboto">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400 font-roboto">contato@offseason.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-gray-400 font-roboto text-xs leading-relaxed">
                  Rua das Olimpíadas, 123<br />
                  Vila Madalena - São Paulo/SP<br />
                  CEP: 05404-000
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-medium mb-2 uppercase tracking-wider text-sm">Horário de Atendimento</h5>
              <p className="text-gray-400 text-xs font-roboto">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 14h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-roboto">
              © 2024 Offseason. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="#" className="hover:text-white transition-colors font-roboto">Termos de Uso</Link>
              <Link to="#" className="hover:text-white transition-colors font-roboto">Política de Privacidade</Link>
              <Link to="#" className="hover:text-white transition-colors font-roboto">Cookies</Link>
              <Link to="#" className="hover:text-white transition-colors font-roboto">LGPD</Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs mb-3 font-roboto">Formas de pagamento aceitas:</p>
            <div className="flex justify-center gap-4 text-gray-400">
              <span className="text-xs font-roboto">VISA</span>
              <span className="text-xs font-roboto">MASTERCARD</span>
              <span className="text-xs font-roboto">ELO</span>
              <span className="text-xs font-roboto">PIX</span>
              <span className="text-xs font-roboto">BOLETO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
