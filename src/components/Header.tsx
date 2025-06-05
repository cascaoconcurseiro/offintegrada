
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = {
    masculino: ['Regatas', 'Camisetas', 'Shorts', 'Calças', 'Agasalhos & Moletons'],
    feminino: ['Regatas', 'Camisetas', 'Shorts', 'Leggings', 'Tops', 'Agasalhos']
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="bg-black text-white text-center py-2 text-sm font-roboto tracking-wider">
          FRETE GRÁTIS PARA TODO BRASIL ACIMA DE R$ 299 | PARCELAMOS EM ATÉ 12X
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-4xl font-oswald font-bold text-black tracking-wider uppercase">
              OFFSEASON
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:bg-gray-100 block py-2 font-roboto font-medium uppercase tracking-wider text-sm transition-colors">
              NOVIDADES
            </a>
            
            {/* Dropdown Masculino */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredCategory('masculino')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <a href="#" className="text-black hover:bg-gray-100 block py-2 font-roboto font-medium uppercase tracking-wider text-sm transition-colors inline-flex items-center">
                MASCULINO <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              {hoveredCategory === 'masculino' && (
                <div className="absolute top-full left-0 bg-white shadow-lg border mt-1 w-48 z-50">
                  {categories.masculino.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-roboto">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown Feminino */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredCategory('feminino')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <a href="#" className="text-black hover:bg-gray-100 block py-2 font-roboto font-medium uppercase tracking-wider text-sm transition-colors inline-flex items-center">
                FEMININO <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              {hoveredCategory === 'feminino' && (
                <div className="absolute top-full left-0 bg-white shadow-lg border mt-1 w-48 z-50">
                  {categories.feminino.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-roboto">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-black hover:bg-gray-100 block py-2 font-roboto font-medium uppercase tracking-wider text-sm transition-colors">
              OUTLET
            </a>
            <a href="#" className="text-black hover:bg-gray-100 block py-2 font-roboto font-medium uppercase tracking-wider text-sm transition-colors">
              CONTATO
            </a>
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
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
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
              <a href="#" className="text-black font-roboto font-medium uppercase tracking-wider">NOVIDADES</a>
              <a href="#" className="text-black font-roboto font-medium uppercase tracking-wider">MASCULINO</a>
              <a href="#" className="text-black font-roboto font-medium uppercase tracking-wider">FEMININO</a>
              <a href="#" className="text-black font-roboto font-medium uppercase tracking-wider">OUTLET</a>
              <a href="#" className="text-black font-roboto font-medium uppercase tracking-wider">CONTATO</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
