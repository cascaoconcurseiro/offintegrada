
import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="bg-black text-white text-center py-2 text-sm">
          FRETE GRÁTIS PARA TODO BRASIL ACIMA DE R$ 299 | PARCELAMOS EM ATÉ 12X
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black tracking-wider">ELITE BR</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">NOVIDADES</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">ROUPAS</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">ACESSÓRIOS</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">CALÇADOS</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium transition-colors">OUTLET</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-800 font-medium">NOVIDADES</a>
              <a href="#" className="text-gray-800 font-medium">ROUPAS</a>
              <a href="#" className="text-gray-800 font-medium">ACESSÓRIOS</a>
              <a href="#" className="text-gray-800 font-medium">CALÇADOS</a>
              <a href="#" className="text-gray-800 font-medium">OUTLET</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
