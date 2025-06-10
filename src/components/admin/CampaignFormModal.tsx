
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Smartphone, Save, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CampaignFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CampaignFormModal = ({ open, onOpenChange }: CampaignFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'email',
    trigger: '1h',
    subject: '',
    message: '',
    discount: '',
    minScore: '60'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campanha Criada!",
      description: `Campanha "${formData.name}" foi criada com sucesso.`,
    });
    onOpenChange(false);
    setFormData({
      name: '',
      type: 'email',
      trigger: '1h',
      subject: '',
      message: '',
      discount: '',
      minScore: '60'
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald text-xl">
            Nova Campanha de Recuperação
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Configurações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configurações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome da Campanha</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ex: Recuperação Email 24h"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Canal</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={formData.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                  >
                    <option value="email">📧 Email</option>
                    <option value="sms">📱 SMS</option>
                    <option value="push">🔔 Push Notification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Trigger (Tempo)</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={formData.trigger}
                    onChange={(e) => handleChange('trigger', e.target.value)}
                  >
                    <option value="30m">30 minutos</option>
                    <option value="1h">1 hora</option>
                    <option value="3h">3 horas</option>
                    <option value="24h">24 horas</option>
                    <option value="3d">3 dias</option>
                    <option value="7d">7 dias</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configurações de Conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conteúdo da Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {formData.type === 'email' ? 'Assunto do Email' : 'Título da Mensagem'}
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder={formData.type === 'email' ? 
                    "Ex: Você esqueceu algo no seu carrinho! 🛒" : 
                    "Ex: Finalize sua compra agora!"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full p-3 border rounded h-24 resize-none"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Digite a mensagem que será enviada para recuperar o carrinho..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Desconto (%)</label>
                  <Input
                    type="number"
                    value={formData.discount}
                    onChange={(e) => handleChange('discount', e.target.value)}
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Score Mínimo IA</label>
                  <Input
                    type="number"
                    value={formData.minScore}
                    onChange={(e) => handleChange('minScore', e.target.value)}
                    placeholder="60"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preview da Campanha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded bg-gray-50">
                <div className="flex items-center gap-2 mb-3">
                  {formData.type === 'email' && <Mail className="w-5 h-5 text-blue-600" />}
                  {formData.type === 'sms' && <Smartphone className="w-5 h-5 text-green-600" />}
                  {formData.type === 'push' && <MessageSquare className="w-5 h-5 text-purple-600" />}
                  <Badge variant="outline">{formData.trigger} após abandono</Badge>
                </div>
                <h4 className="font-bold">{formData.subject || 'Título da mensagem'}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  {formData.message || 'Conteúdo da mensagem aparecerá aqui...'}
                </p>
                {formData.discount && (
                  <div className="mt-3 p-2 bg-green-100 rounded">
                    <p className="text-green-800 font-medium">
                      🎁 Desconto especial: {formData.discount}% OFF
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Botões */}
          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Criar Campanha
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignFormModal;
