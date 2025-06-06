
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  X, 
  Gift, 
  Truck, 
  Star, 
  ShoppingBag, 
  Tag,
  Crown,
  Heart,
  Check,
  Info,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface Notification {
  id: string;
  type: 'order' | 'promotion' | 'loyalty' | 'wishlist' | 'general';
  title: string;
  message: string;
  icon: React.ReactNode;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionText?: string;
  actionUrl?: string;
}

const EnhancedNotifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread' | 'orders' | 'promotions'>('all');

  useEffect(() => {
    // Simular notificações baseadas no usuário
    if (user) {
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'order',
          title: 'Pedido Enviado',
          message: 'Seu pedido #ORD002 foi enviado e chegará em 2-3 dias úteis.',
          icon: <Truck className="w-5 h-5 text-blue-500" />,
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
          read: false,
          priority: 'high',
          actionText: 'Rastrear',
          actionUrl: '/pedidos/ORD002'
        },
        {
          id: '2',
          type: 'loyalty',
          title: 'Parabéns! Nível Prata',
          message: 'Você atingiu o nível Prata e desbloqueou 15% de desconto!',
          icon: <Crown className="w-5 h-5 text-gray-400" />,
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
          read: false,
          priority: 'medium',
          actionText: 'Ver Benefícios'
        },
        {
          id: '3',
          type: 'promotion',
          title: 'Oferta Especial - 20% OFF',
          message: 'Desconto especial em toda linha fitness. Válido até amanhã!',
          icon: <Tag className="w-5 h-5 text-red-500" />,
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
          read: true,
          priority: 'high',
          actionText: 'Aproveitar'
        },
        {
          id: '4',
          type: 'wishlist',
          title: 'Item da Lista em Oferta',
          message: 'A Legging High Tech da sua lista de desejos está com 25% de desconto!',
          icon: <Heart className="w-5 h-5 text-pink-500" />,
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
          read: true,
          priority: 'medium',
          actionText: 'Ver Produto'
        },
        {
          id: '5',
          type: 'general',
          title: 'Nova Coleção Disponível',
          message: 'Confira os novos lançamentos da coleção Inverno 2024.',
          icon: <Star className="w-5 h-5 text-yellow-500" />,
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
          read: true,
          priority: 'low',
          actionText: 'Explorar'
        }
      ];
      setNotifications(mockNotifications);
    }
  }, [user]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast({
      title: "Notificação removida",
      description: "A notificação foi removida com sucesso.",
    });
  };

  const getFilteredNotifications = () => {
    let filtered = notifications;
    
    switch (filter) {
      case 'unread':
        filtered = notifications.filter(n => !n.read);
        break;
      case 'orders':
        filtered = notifications.filter(n => n.type === 'order');
        break;
      case 'promotions':
        filtered = notifications.filter(n => n.type === 'promotion');
        break;
    }
    
    return filtered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins}m atrás`;
    } else if (diffHours < 24) {
      return `${diffHours}h atrás`;
    } else {
      return `${diffDays}d atrás`;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      default: return 'border-l-blue-500';
    }
  };

  if (!user) return null;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
            {unreadCount > 9 ? '9+' : unreadCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <h3 className="font-oswald font-bold text-lg uppercase tracking-wider">
                  Notificações
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Filters */}
              <div className="flex gap-2 mt-3">
                {[
                  { key: 'all', label: 'Todas' },
                  { key: 'unread', label: 'Não lidas' },
                  { key: 'orders', label: 'Pedidos' },
                  { key: 'promotions', label: 'Ofertas' }
                ].map(({ key, label }) => (
                  <Button
                    key={key}
                    variant={filter === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(key as any)}
                    className="text-xs font-roboto"
                  >
                    {label}
                  </Button>
                ))}
              </div>

              {unreadCount > 0 && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs font-roboto p-0 h-auto mt-2"
                >
                  Marcar todas como lidas
                </Button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {getFilteredNotifications().length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-roboto">
                    {filter === 'unread' ? 'Nenhuma notificação não lida' : 'Nenhuma notificação'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {getFilteredNotifications().map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${getPriorityColor(notification.priority)} ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {notification.icon}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className={`text-sm font-roboto font-medium ${
                              !notification.read ? 'text-black' : 'text-gray-900'
                            }`}>
                              {notification.title}
                            </h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                              className="h-6 w-6 text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <p className="text-xs text-gray-600 font-roboto mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500 font-roboto">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            
                            {notification.actionText && (
                              <Button
                                variant="link"
                                size="sm"
                                className="text-xs font-roboto p-0 h-auto"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle action
                                  toast({
                                    title: "Ação executada",
                                    description: `${notification.actionText} clicado.`,
                                  });
                                }}
                              >
                                {notification.actionText}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnhancedNotifications;
