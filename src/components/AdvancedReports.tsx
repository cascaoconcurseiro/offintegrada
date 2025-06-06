import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Download,
  Calendar,
  Filter,
  FileText,
  Target,
  Eye,
  RefreshCw,
  Globe,
  Smartphone,
  Monitor,
  MapPin,
  Clock,
  Heart,
  Share2,
  AlertTriangle,
  CheckCircle,
  Zap,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area, ComposedChart, Scatter, ScatterChart } from 'recharts';
import { toast } from '@/hooks/use-toast';

const AdvancedReports = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [reportType, setReportType] = useState('sales');
  const [realTimeData, setRealTimeData] = useState(true);

  // Dados em tempo real simulados
  const salesData = [
    { name: 'Jan', vendas: 145000, pedidos: 1230, visitantes: 45230, conversao: 2.7 },
    { name: 'Fev', vendas: 162000, pedidos: 1380, visitantes: 52000, conversao: 2.9 },
    { name: 'Mar', vendas: 148000, pedidos: 1250, visitantes: 48000, conversao: 2.6 },
    { name: 'Abr', vendas: 181000, pedidos: 1520, visitantes: 61000, conversao: 3.2 },
    { name: 'Mai', vendas: 195000, pedidos: 1690, visitantes: 55000, conversao: 3.5 },
    { name: 'Jun', vendas: 267000, pedidos: 2350, visitantes: 67000, conversao: 4.7 }
  ];

  const realtimeMetrics = [
    { name: 'Visitantes Online', value: '2.847', change: '+12%', icon: Users, color: 'text-green-600', trend: 'up' },
    { name: 'Vendas Hora', value: 'R$ 23.4k', change: '+34%', icon: DollarSign, color: 'text-blue-600', trend: 'up' },
    { name: 'Conversão Live', value: '4.8%', change: '+0.3%', icon: Target, color: 'text-purple-600', trend: 'up' },
    { name: 'Carrinho Ativo', value: '156', change: '+23', icon: ShoppingCart, color: 'text-orange-600', trend: 'up' },
    { name: 'Ticket Médio', value: 'R$ 287', change: '+R$ 34', icon: TrendingUp, color: 'text-emerald-600', trend: 'up' },
    { name: 'Abandono Cart', value: '58%', change: '-8%', icon: AlertTriangle, color: 'text-red-600', trend: 'down' }
  ];

  const deviceData = [
    { name: 'Mobile', value: 68, sales: 'R$ 89.2k', color: '#0088FE' },
    { name: 'Desktop', value: 25, sales: 'R$ 67.8k', color: '#00C49F' },
    { name: 'Tablet', value: 7, sales: 'R$ 12.4k', color: '#FFBB28' }
  ];

  const geographicData = [
    { state: 'São Paulo', sales: 'R$ 89.4k', orders: 1247, percentage: 35.2 },
    { state: 'Rio de Janeiro', sales: 'R$ 45.7k', orders: 623, percentage: 18.1 },
    { state: 'Minas Gerais', sales: 'R$ 32.1k', orders: 445, percentage: 12.7 },
    { state: 'Paraná', sales: 'R$ 28.9k', orders: 389, percentage: 11.4 },
    { state: 'Rio Grande do Sul', sales: 'R$ 21.3k', orders: 287, percentage: 8.4 }
  ];

  const cohortData = [
    { month: 'Jan', month1: 100, month2: 85, month3: 72, month4: 65, month5: 58, month6: 54 },
    { month: 'Fev', month1: 100, month2: 88, month3: 75, month4: 68, month5: 61, month6: null },
    { month: 'Mar', month1: 100, month2: 82, month3: 69, month4: 63, month5: null, month6: null },
    { month: 'Abr', month1: 100, month2: 86, month3: 74, month4: null, month5: null, month6: null },
    { month: 'Mai', month1: 100, month2: 89, month3: null, month4: null, month5: null, month6: null },
    { month: 'Jun', month1: 100, month2: null, month3: null, month4: null, month5: null, month6: null }
  ];

  const customerSegments = [
    { segment: 'VIP (10+ compras)', count: 234, revenue: 'R$ 89.4k', ltv: 'R$ 2.890', color: 'bg-purple-600' },
    { segment: 'Frequente (5-9 compras)', count: 567, revenue: 'R$ 67.2k', ltv: 'R$ 1.240', color: 'bg-blue-600' },
    { segment: 'Regular (2-4 compras)', count: 1089, revenue: 'R$ 45.8k', ltv: 'R$ 580', color: 'bg-green-600' },
    { segment: 'Novo (1 compra)', count: 2847, revenue: 'R$ 78.9k', ltv: 'R$ 289', color: 'bg-gray-600' }
  ];

  const exportReport = (type: string) => {
    toast({
      title: "Relatório Exportado",
      description: `Relatório ${type} sendo preparado para download...`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Business Intelligence & Analytics
          </h2>
          <p className="text-gray-600">
            Insights profissionais em tempo real para tomada de decisão estratégica
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24 horas</SelectItem>
              <SelectItem value="7d">7 dias</SelectItem>
              <SelectItem value="30d">30 dias</SelectItem>
              <SelectItem value="90d">90 dias</SelectItem>
              <SelectItem value="1y">1 ano</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Real-time Metrics Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {realtimeMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant={metric.trend === 'up' ? 'default' : 'destructive'}>
                    {metric.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-600">{metric.name}</p>
                </div>
                <div className={`absolute bottom-0 left-0 h-1 w-full ${
                  metric.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                } animate-pulse`}></div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="operations">Operações</TabsTrigger>
          <TabsTrigger value="finance">Financeiro</TabsTrigger>
          <TabsTrigger value="prediction">Predição</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <LineChart className="w-5 h-5" />
                  Performance de Vendas (Tempo Real)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="vendas" fill="#3B82F6" />
                    <Line yAxisId="right" type="monotone" dataKey="conversao" stroke="#EF4444" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Tráfego por Dispositivo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Vendas por Estado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {geographicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="font-medium">{item.state}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{item.sales}</p>
                        <p className="text-sm text-gray-600">{item.orders} pedidos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Segmentação de Clientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerSegments.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                        <div>
                          <h4 className="font-medium">{segment.segment}</h4>
                          <p className="text-sm text-gray-600">{segment.count} clientes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{segment.revenue}</p>
                        <p className="text-sm text-gray-600">LTV: {segment.ltv}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Análise de Cohort - Retenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Mês</th>
                        <th className="text-center p-2">Mês 1</th>
                        <th className="text-center p-2">Mês 2</th>
                        <th className="text-center p-2">Mês 3</th>
                        <th className="text-center p-2">Mês 4</th>
                        <th className="text-center p-2">Mês 5</th>
                        <th className="text-center p-2">Mês 6</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cohortData.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium">{row.month}</td>
                          <td className="text-center p-2 bg-green-100">{row.month1}%</td>
                          <td className={`text-center p-2 ${row.month2 ? `bg-green-${Math.floor(row.month2/10)}00` : 'bg-gray-100'}`}>
                            {row.month2 ? `${row.month2}%` : '-'}
                          </td>
                          <td className={`text-center p-2 ${row.month3 ? `bg-yellow-${Math.floor(row.month3/10)}00` : 'bg-gray-100'}`}>
                            {row.month3 ? `${row.month3}%` : '-'}
                          </td>
                          <td className={`text-center p-2 ${row.month4 ? `bg-orange-${Math.floor(row.month4/10)}00` : 'bg-gray-100'}`}>
                            {row.month4 ? `${row.month4}%` : '-'}
                          </td>
                          <td className={`text-center p-2 ${row.month5 ? `bg-red-${Math.floor(row.month5/10)}00` : 'bg-gray-100'}`}>
                            {row.month5 ? `${row.month5}%` : '-'}
                          </td>
                          <td className={`text-center p-2 ${row.month6 ? `bg-red-${Math.floor(row.month6/10)}00` : 'bg-gray-100'}`}>
                            {row.month6 ? `${row.month6}%` : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Análise de Vendas por Hora</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={[
                    { hour: '00h', sales: 12 }, { hour: '01h', sales: 8 }, { hour: '02h', sales: 5 },
                    { hour: '03h', sales: 3 }, { hour: '04h', sales: 2 }, { hour: '05h', sales: 4 },
                    { hour: '06h', sales: 8 }, { hour: '07h', sales: 15 }, { hour: '08h', sales: 25 },
                    { hour: '09h', sales: 45 }, { hour: '10h', sales: 67 }, { hour: '11h', sales: 89 },
                    { hour: '12h', sales: 78 }, { hour: '13h', sales: 92 }, { hour: '14h', sales: 87 },
                    { hour: '15h', sales: 95 }, { hour: '16h', sales: 82 }, { hour: '17h', sales: 76 },
                    { hour: '18h', sales: 85 }, { hour: '19h', sales: 92 }, { hour: '20h', sales: 98 },
                    { hour: '21h', sales: 89 }, { hour: '22h', sales: 67 }, { hour: '23h', sales: 34 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="prediction">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Predições e Insights de IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="font-bold">Previsão 30 dias</h3>
                        <p className="text-sm text-gray-600">Baseado em IA</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Vendas previstas:</span>
                        <span className="font-bold text-green-600">R$ 298k</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pedidos estimados:</span>
                        <span className="font-bold">2.847</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Precisão do modelo:</span>
                        <span className="font-bold text-blue-600">94.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-8 h-8 text-orange-600" />
                      <div>
                        <h3 className="font-bold">Alertas Inteligentes</h3>
                        <p className="text-sm text-gray-600">Insights automáticos</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-red-50 border border-red-200 rounded text-sm">
                        <strong>Estoque baixo:</strong> 3 produtos críticos
                      </div>
                      <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
                        <strong>Conversão baixa:</strong> Página de checkout
                      </div>
                      <div className="p-2 bg-green-50 border border-green-200 rounded text-sm">
                        <strong>Oportunidade:</strong> +15% vendas com desconto
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-8 h-8 text-purple-600" />
                      <div>
                        <h3 className="font-bold">Recomendações</h3>
                        <p className="text-sm text-gray-600">Otimizações sugeridas</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Ativar recuperação de carrinho</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Criar campanha para VIPs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Otimizar checkout mobile</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedReports;
