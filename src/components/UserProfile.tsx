
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Package, 
  Heart, 
  Star,
  Crown,
  Gift,
  Award,
  Truck,
  Calendar
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  if (!user) {
    return null;
  }

  const handleSave = () => {
    // Here you would update the user data
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || ''
    });
    setIsEditing(false);
  };

  const userLevel = user.loyaltyPoints >= 500 ? 'Ouro' : user.loyaltyPoints >= 200 ? 'Prata' : 'Bronze';
  const levelColor = userLevel === 'Ouro' ? 'text-yellow-600' : userLevel === 'Prata' ? 'text-gray-500' : 'text-orange-600';

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-black to-gray-800 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-white">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-lg font-oswald bg-gray-700">
                  {user.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-oswald font-bold">{user.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Crown className={`w-4 h-4 ${levelColor}`} />
                  <span className={`font-roboto font-medium ${levelColor}`}>
                    Nível {userLevel}
                  </span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {user.loyaltyPoints || 0} pontos
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Camera className="w-4 h-4 mr-2" />
              Alterar Foto
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Package className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-oswald font-bold">12</div>
            <div className="text-sm text-gray-600 font-roboto">Pedidos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-oswald font-bold">8</div>
            <div className="text-sm text-gray-600 font-roboto">Favoritos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-oswald font-bold">4.8</div>
            <div className="text-sm text-gray-600 font-roboto">Avaliação</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-oswald font-bold">3</div>
            <div className="text-sm text-gray-600 font-roboto">Cupons</div>
          </CardContent>
        </Card>
      </div>

      {/* User Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-oswald">
            <User className="w-5 h-5" />
            Informações Pessoais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-600">{user.name || 'Não informado'}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-600">{user.email || 'Não informado'}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-600">{user.phone || 'Não informado'}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address">Endereço</Label>
              {isEditing ? (
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                />
              ) : (
                <p className="mt-1 text-sm text-gray-600">{user.address || 'Não informado'}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="font-roboto">
                  Salvar Alterações
                </Button>
                <Button variant="outline" onClick={handleCancel} className="font-roboto">
                  Cancelar
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="font-roboto">
                Editar Perfil
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-oswald">
            <Package className="w-5 h-5" />
            Pedidos Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-roboto font-medium">Pedido #000{order}</p>
                    <p className="text-sm text-gray-600">2 itens • R$ 179,80</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">
                    <Truck className="w-3 h-3 mr-1" />
                    Entregue
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">15/05/2024</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 font-roboto">
            Ver Todos os Pedidos
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
