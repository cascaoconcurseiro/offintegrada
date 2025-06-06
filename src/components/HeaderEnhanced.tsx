
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, Search, User, Heart, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import SideCart from './SideCart';
import EnhancedNotifications from './EnhancedNotifications';
import WishlistModal from './WishlistModal';
import IntelligentSearch from './IntelligentSearch';

const HeaderEnhanced = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const { getItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  const navigation = [
    { name: 'Masculino', href: '/loja?gender=masculino' },
    { name: 'Feminino', href: '/loja?gender=feminino' },
    { name: 'Lançamentos', href: '/loja?new=true' },
    { name: 'Ofertas', href: '/loja?sale=true' },
  ];

  return (
    <>
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-oswald font-bold tracking-wider bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                OFFSEASON
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-900 hover:text-gray-600 font-roboto font-medium uppercase tracking-wider text-sm transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="hover:bg-gray-100 transition-colors"
              >
                <Search className="h-6 w-6" />
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 transition-colors">
                <Link to="/conta">
                  <User className="h-6 w-6" />
                </Link>
              </Button>

              {/* Notifications */}
              <EnhancedNotifications />

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-gray-100 transition-colors"
                onClick={() => setShowWishlist(true)}
              >
                <Heart className="h-6 w-6" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <SideCart />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-gradient-to-r from-gray-50 to-white">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-900 hover:text-gray-600 hover:bg-gray-100 rounded-md font-roboto font-medium uppercase tracking-wider text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <IntelligentSearch
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={showWishlist}
        onClose={() => setShowWishlist(false)}
      />
    </>
  );
};

export default HeaderEnhanced;
