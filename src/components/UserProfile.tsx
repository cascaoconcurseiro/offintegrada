
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { User, Package, Star, Gift, Edit2, Crown } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const UserProfile = () => {
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  if (!user) return null;

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Ouro': return 'bg-yellow-500';
      case 'Prata': return 'bg-gray-400';
      default: return 'bg-amber-600';
    }
  };

  const getTierIcon = (tier: string) => {
    return <Crown className={`w-4 h-4 ${tier === 'Ouro' ? 'text-yellow-500' : tier === 'Prata' ? 'text-gray-400' : 'text-amber-600'}`} />;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-gray-400" />
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm" className="flex-1">
                      Salvar
                    </Button>
                    <Button 
                      onClick={() => setIsEditing(false)} 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-oswald font-bold uppercase tracking-wider">{user.name}</h2>
                  <p className="text-gray-600 font-roboto">{user.email}</p>
                  <Button 
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    size="sm"
                    className="mt-3"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </>
              )}
            </div>

            {/* Loyalty Program */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-roboto font-medium">Programa de Fidelidade</span>
                <Badge className={`${getTierColor(user.tier)} text-white flex items-center gap-1`}>
                  {getTierIcon(user.tier)}
                  {user.tier}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Pontos</span>
                <span className="font-roboto font-bold">{user.loyaltyPoints}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getTierColor(user.tier)}`}
                  style={{ width: `${Math.min((user.loyaltyPoints % 1000) / 10, 100)}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-500 mt-1">
                {user.tier === 'Ouro' ? 'Parabéns! Você atingiu o nível máximo!' : 
                 `Faltam ${user.tier === 'Bronze' ? 1000 - user.loyaltyPoints : 2000 - user.loyaltyPoints} pontos para ${user.tier === 'Bronze' ? 'Prata' : 'Ouro'}`}
              </p>
            </div>

            <Button 
              onClick={logout} 
              variant="destructive" 
              className="w-full mt-6"
            >
              Sair da Conta
            </Button>
          </div>
        </div>

        {/* Orders and Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 font-roboto text-sm">Total de Pedidos</p>
                  <p className="text-2xl font-oswald font-bold text-blue-800">{user.orders.length}</p>
                </div>
                <Package className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 font-roboto text-sm">Pontos Totais</p>
                  <p className="text-2xl font-oswald font-bold text-green-800">{user.loyaltyPoints}</p>
                </div>
                <Star className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 font-roboto text-sm">Nível VIP</p>
                  <p className="text-2xl font-oswald font-bold text-purple-800">{user.tier}</p>
                </div>
                <Gift className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-lg border">
            <div className="p-6 border-b">
              <h3 className="font-oswald font-bold text-xl uppercase tracking-wider">Pedidos Recentes</h3>
            </div>
            
            <div className="p-6">
              {user.orders.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-roboto">Nenhum pedido encontrado</p>
                  <Button className="mt-4 bg-black hover:bg-gray-800">
                    Começar a Comprar
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {user.orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-roboto font-medium">Pedido #{order.id}</p>
                        <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-roboto font-bold">R$ {order.total.toFixed(2).replace('.', ',')}</p>
                        <Badge variant={
                          order.status === 'delivered' ? 'default' :
                          order.status === 'shipped' ? 'secondary' :
                          order.status === 'processing' ? 'secondary' : 'outline'
                        }>
                          {order.status === 'delivered' ? 'Entregue' :
                           order.status === 'shipped' ? 'Enviado' :
                           order.status === 'processing' ? 'Processando' : 'Pendente'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
