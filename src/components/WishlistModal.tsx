
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
  const { items, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: 'M', // Default size
      color: 'Preto' // Default color
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${item.name} foi adicionado ao carrinho.`,
    });
  };

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);
    toast({
      title: "Removido da lista de desejos",
      description: "Produto removido da sua lista de desejos.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald text-2xl uppercase tracking-wider">
            Lista de Desejos ({items.length})
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl font-oswald font-medium mb-4 text-gray-600">
              Sua lista de desejos está vazia
            </p>
            <p className="text-gray-500 font-roboto mb-6">
              Adicione produtos que você gostaria de comprar mais tarde
            </p>
            <Button asChild className="bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider">
              <Link to="/loja" onClick={onClose}>
                Explorar Produtos
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4 space-y-3">
                  <Link
                    to={`/produto/${item.id}`}
                    onClick={onClose}
                    className="block hover:underline"
                  >
                    <h3 className="font-roboto font-medium text-base uppercase tracking-wider">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <p className="text-lg font-roboto font-bold">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </p>
                  
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider text-xs"
                      size="sm"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                    
                    <Button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      variant="outline"
                      className="w-full font-roboto font-medium uppercase tracking-wider text-xs"
                      size="sm"
                    >
                      <Heart className="w-4 h-4 mr-2 fill-current" />
                      Remover dos Favoritos
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WishlistModal;
