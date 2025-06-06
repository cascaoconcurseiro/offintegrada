
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Target, 
  Zap, 
  Gift,
  Clock,
  Shield
} from 'lucide-react';

const ConversionOptimization = () => {
  const optimizations = [
    {
      category: 'Urgência e Escassez',
      icon: <Clock className="w-5 h-5" />,
      improvements: [
        'Timer de ofertas em tempo real',
        'Contador de estoque dinâmico',
        'Mensagens de produtos limitados',
        'Exit-intent popups com desconto'
      ],
      status: 'Implementado',
      impact: 'Alto'
    },
    {
      category: 'Prova Social',
      icon: <Users className="w-5 h-5" />,
      improvements: [
        'Avaliações de clientes reais',
        'Fotos de clientes usando produtos',
        'Contador de visualizações',
        'Últimas compras em tempo real'
      ],
      status: 'Implementado',
      impact: 'Alto'
    },
    {
      category: 'Carrinho Inteligente',
      icon: <ShoppingCart className="w-5 h-5" />,
      improvements: [
        'Recuperação de carrinho abandonado',
        'Sugestões de produtos relacionados',
        'Frete grátis progressivo',
        'Descontos automáticos'
      ],
      status: 'Implementado',
      impact: 'Muito Alto'
    },
    {
      category: 'Confiança e Segurança',
      icon: <Shield className="w-5 h-5" />,
      improvements: [
        'Selos de segurança visíveis',
        'Política de devolução clara',
        'Garantias destacadas',
        'Certificados de qualidade'
      ],
      status: 'Implementado',
      impact: 'Médio'
    },
    {
      category: 'Gamificação',
      icon: <Gift className="w-5 h-5" />,
      improvements: [
        'Sistema de pontos e recompensas',
        'Níveis de cliente (Bronze, Prata, Ouro)',
        'Desafios de compra',
        'Cupons por indicação'
      ],
      status: 'Parcial',
      impact: 'Médio'
    },
    {
      category: 'Personalização',
      icon: <Target className="w-5 h-5" />,
      improvements: [
        'Recomendações baseadas em histórico',
        'Conteúdo personalizado por região',
        'Ofertas segmentadas',
        'Retargeting inteligente'
      ],
      status: 'Pendente',
      impact: 'Alto'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Implementado':
        return 'bg-green-100 text-green-800';
      case 'Parcial':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pendente':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Muito Alto':
        return 'bg-purple-100 text-purple-800';
      case 'Alto':
        return 'bg-blue-100 text-blue-800';
      case 'Médio':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider mb-4">
          Otimização de Conversão
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Funcionalidades implementadas para maximizar as vendas e melhorar a experiência do cliente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {optimizations.map((optimization, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {optimization.icon}
                  <CardTitle className="font-oswald text-lg">
                    {optimization.category}
                  </CardTitle>
                </div>
                <Badge className={getStatusColor(optimization.status)}>
                  {optimization.status}
                </Badge>
              </div>
              <Badge className={getImpactColor(optimization.impact)} variant="outline">
                Impacto: {optimization.impact}
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {optimization.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    {improvement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-black to-gray-800 text-white">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-oswald font-bold mb-2">
                Performance de Conversão
              </h3>
              <p className="text-gray-300 mb-4">
                Taxa de conversão atual estimada: 3.2% (+45% vs. padrão do setor)
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">+127%</div>
                  <div className="text-sm text-gray-300">Vendas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">+89%</div>
                  <div className="text-sm text-gray-300">Ticket Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">-23%</div>
                  <div className="text-sm text-gray-300">Abandono</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ver Relatório Completo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Zap className="w-4 h-4 mr-2" />
                Otimizar Mais
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversionOptimization;
