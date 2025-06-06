
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    avatar?: string;
  };
  onUpdate: (userData: any) => void;
}

const UserProfile = ({ user, onUpdate }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || ''
  });

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    });
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-oswald">
          <User className="w-5 h-5" />
          Perfil do Usuário
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar Section */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-lg font-oswald">
              {user.name?.split(' ').map(n => n[0]).join('') || 'U'}
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            <Camera className="w-4 h-4 mr-2" />
            Alterar Foto
          </Button>
        </div>

        {/* User Information */}
        <div className="space-y-4">
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

          {/* Action Buttons */}
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
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
