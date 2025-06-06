
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Bell, Package, Tag, Star, X } from 'lucide-react';

interface Notification {
  id: number;
  type: 'order' | 'promotion' | 'review' | 'stock';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'order',
      title: 'Pedido enviado!',
      message: 'Seu pedido #1234 foi enviado e chegará em 2-3 dias úteis.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min atrás
      read: false,
      actionUrl: '/pedidos'
    },
    {
      id: 2,
      type: 'promotion',
      title: 'Oferta especial!',
      message: '30% OFF em toda linha feminina. Use o cupom: MULHER30',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2h atrás
      read: false,
      actionUrl: '/loja?gender=feminino'
    },
    {
      id: 3,
      type: 'stock',
      title: 'Produto disponível',
      message: 'A Regata Premium M que você queria está de volta ao estoque!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6h atrás
      read: true,
      actionUrl: '/produto/1'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order': return <Package className="w-4 h-4" />;
      case 'promotion': return <Tag className="w-4 h-4" />;
      case 'review': return <Star className="w-4 h-4" />;
      case 'stock': return <Bell className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}min atrás`;
    if (hours < 24) return `${hours}h atrás`;
    return `${days}d atrás`;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-6 w-6" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle className="font-oswald uppercase tracking-wider">
            Notificações ({notifications.length})
          </SheetTitle>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Marcar todas como lidas
            </Button>
          )}
        </SheetHeader>

        <div className="space-y-4 mt-6">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Nenhuma notificação</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border rounded-lg ${
                  notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3 flex-1">
                    <div className={`p-2 rounded ${
                      notification.type === 'order' ? 'bg-green-100 text-green-600' :
                      notification.type === 'promotion' ? 'bg-orange-100 text-orange-600' :
                      notification.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{formatTime(notification.timestamp)}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Marcar como lida
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationSystem;
