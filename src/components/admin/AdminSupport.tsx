
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Send
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminSupport = () => {
  const [ticketForm, setTicketForm] = useState({
    priority: 'medium',
    subject: '',
    description: ''
  });

  const supportStats = [
    { label: 'Tickets Abertos', value: '3', status: 'warning' },
    { label: 'Tickets Resolvidos', value: '47', status: 'success' },
    { label: 'Tempo Médio Resposta', value: '2h', status: 'info' },
    { label: 'Satisfação', value: '98%', status: 'success' }
  ];

  const recentTickets = [
    { id: 'SUP-001', subject: 'Problema integração pagamento', status: 'open', priority: 'high', time: '2h' },
    { id: 'SUP-002', subject: 'Configuração transportadora', status: 'resolved', priority: 'medium', time: '1d' },
    { id: 'SUP-003', subject: 'Relatório não gera', status: 'in_progress', priority: 'high', time: '4h' }
  ];

  const handleSubmitTicket = () => {
    if (!ticketForm.subject || !ticketForm.description) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha assunto e descrição do ticket.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Ticket criado com sucesso!",
      description: `Ticket #SUP-${Date.now().toString().slice(-3)} criado. Resposta em até 30 minutos.`,
    });

    setTicketForm({ priority: 'medium', subject: '', description: '' });
  };

  const handleInstantSupport = () => {
    toast({
      title: "Conectando ao suporte...",
      description: "Redirecionando para chat ao vivo em 3 segundos.",
    });
    
    setTimeout(() => {
      window.open('https://wa.me/5511999999999?text=Olá, preciso de suporte administrativo urgente!', '_blank');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Central de Suporte 24/7
          </h2>
          <p className="text-gray-600">
            Suporte profissional para administradores
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleInstantSupport}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat Ao Vivo
          </Button>
          <Button variant="outline">
            <Phone className="w-4 h-4 mr-2" />
            (11) 9999-9999
          </Button>
        </div>
      </div>

      {/* Estatísticas de Suporte */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {supportStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <Badge 
                variant={stat.status === 'success' ? 'default' : stat.status === 'warning' ? 'destructive' : 'secondary'}
                className="mt-2"
              >
                {stat.status === 'success' ? 'Excelente' : stat.status === 'warning' ? 'Atenção' : 'Normal'}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Novo Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald flex items-center gap-2">
              <Send className="w-5 h-5" />
              Criar Novo Ticket
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Prioridade</label>
              <select 
                className="w-full p-2 border rounded-md"
                value={ticketForm.priority}
                onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
              >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <Input
                value={ticketForm.subject}
                onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="Descreva brevemente o problema"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Descrição Detalhada</label>
              <Textarea
                value={ticketForm.description}
                onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descreva o problema em detalhes..."
                rows={4}
              />
            </div>
            
            <Button onClick={handleSubmitTicket} className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Criar Ticket
            </Button>
          </CardContent>
        </Card>

        {/* Tickets Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="font-oswald">Tickets Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTickets.map((ticket, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{ticket.id}</span>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={ticket.priority === 'high' ? 'destructive' : 'secondary'}
                      >
                        {ticket.priority === 'high' ? 'Alta' : 'Média'}
                      </Badge>
                      <Badge 
                        variant={ticket.status === 'resolved' ? 'default' : 'secondary'}
                      >
                        {ticket.status === 'resolved' ? 'Resolvido' : 
                         ticket.status === 'in_progress' ? 'Em Andamento' : 'Aberto'}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{ticket.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">Há {ticket.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contatos Diretos */}
      <Card>
        <CardHeader>
          <CardTitle className="font-oswald">Contatos Diretos de Emergência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col gap-1">
              <Phone className="w-5 h-5" />
              <span className="text-sm">Telefone 24h</span>
              <span className="text-xs text-gray-500">(11) 9999-9999</span>
            </Button>
            
            <Button variant="outline" className="h-16 flex flex-col gap-1">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email Urgente</span>
              <span className="text-xs text-gray-500">admin@offseason.com</span>
            </Button>
            
            <Button variant="outline" className="h-16 flex flex-col gap-1">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
              <span className="text-xs text-gray-500">Resposta imediata</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSupport;
