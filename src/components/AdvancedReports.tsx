
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
  RefreshCw
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdvancedReports = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [reportType, setReportType] = useState('sales');

  // Mock data para os gráficos
  const salesData = [
    { name: 'Jan', vendas: 45000, pedidos: 230 },
    { name: 'Fev', vendas: 52000, pedidos: 280 },
    { name: 'Mar', vendas: 48000, pedidos: 250 },
    { name: 'Abr', vendas: 61000, pedidos: 320 },
    { name: 'Mai', vendas: 55000, pedidos: 290 },
    { name: 'Jun', vendas: 67000, pedidos: 350 }
  ];

  const conversionData = [
    { name: 'Visitantes', value: 15420, color: '#8884d8' },
    { name: 'Carrinho', value: 2847, color: '#82ca9d' },
    { name: 'Checkout', value: 1205, color: '#ffc658' },
    { name: 'Compra', value: 587, color: '#ff7300' }
  ];

  const topProducts = [
    { name: 'Regata Premium', vendas: 145, receita: 14500 },
    { name: 'Camiseta Básica', vendas: 132, receita: 9240 },
    { name: 'Short Moletom', vendas: 98, receita: 11760 },
    { name: 'Jaqueta Jeans', vendas: 67, receita: 13400 }
  ];

  const trafficSources = [
    { name: 'Orgânico', value: 40, color: '#0088FE' },
    { name: 'Google Ads', value: 25, color: '#00C49F' },
    { name: 'Facebook', value: 20, color: '#FFBB28' },
    { name: 'Instagram', value: 10, color: '#FF8042' },
    { name: 'Direto', value: 5, color: '#8884d8' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">
            Relatórios Avançados
          </h2>
          <p className="text-gray-600">
            Análises completas e insights de performance
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 dias</SelectItem>
              <SelectItem value="30d">30 dias</SelectItem>
              <SelectItem value="90d">90 dias</SelectItem>
              <SelectItem value="1y">1 ano</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Receita</p>
                <p className="text-2xl font-bold">R$ 67.4k</p>
                <p className="text-xs text-green-600">+23.5%</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pedidos</p>
                <p className="text-2xl font-bold">347</p>
                <p className="text-xs text-green-600">+18.2%</p>
              </div>
              <ShoppingCart className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversão</p>
                <p className="text-2xl font-bold">3.8%</p>
                <p className="text-xs text-green-600">+0.3%</p>
              </div>
              <Target className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ticket Médio</p>
                <p className="text-2xl font-bold">R$ 194</p>
                <p className="text-xs text-green-600">+12.1%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Visitantes</p>
                <p className="text-2xl font-bold">9.1k</p>
                <p className="text-xs text-green-600">+15.4%</p>
              </div>
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="text-2xl font-bold">347%</p>
                <p className="text-xs text-green-600">+45.2%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-pink-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Vendas por Período</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="vendas" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Funil de Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Performance de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="vendas" fill="#82ca9d" />
                    <Bar dataKey="pedidos" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Métodos de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>PIX</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cartão Crédito</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cartão Débito</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Boleto</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '5%'}}></div>
                      </div>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle className="font-oswald">Produtos Mais Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.vendas} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ {product.receita.toLocaleString()}</p>
                      <Badge className="mt-1">Top Seller</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Fontes de Tráfego</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Segmentação de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Novos Clientes</span>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">67%</Badge>
                      <span className="text-sm">234 clientes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Clientes Recorrentes</span>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">28%</Badge>
                      <span className="text-sm">98 clientes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>VIP (5+ compras)</span>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-800">5%</Badge>
                      <span className="text-sm">17 clientes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">ROI por Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Google Ads</span>
                    <span className="font-bold text-green-600">287%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Facebook</span>
                    <span className="font-bold text-green-600">234%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instagram</span>
                    <span className="font-bold text-green-600">189%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email</span>
                    <span className="font-bold text-green-600">456%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Campanhas Ativas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Black Friday</span>
                    <Badge className="bg-green-100 text-green-800">Ativa</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Retargeting</span>
                    <Badge className="bg-green-100 text-green-800">Ativa</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lookalike</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Pausada</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Conversões</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">587</div>
                    <p className="text-sm text-gray-600">Conversões este mês</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">R$ 28,40</div>
                    <p className="text-sm text-gray-600">Custo por conversão</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="finance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Fluxo de Caixa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Receita Bruta</span>
                    <span className="font-bold text-green-600">R$ 67.421</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Taxas de Pagamento</span>
                    <span className="font-bold text-red-600">- R$ 3.371</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Marketing</span>
                    <span className="font-bold text-red-600">- R$ 8.940</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Operacional</span>
                    <span className="font-bold text-red-600">- R$ 12.450</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Lucro Líquido</span>
                    <span className="font-bold text-green-600">R$ 42.660</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald">Margem por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Camisetas</span>
                    <span className="font-bold">67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Regatas</span>
                    <span className="font-bold">72%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shorts</span>
                    <span className="font-bold">58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Jaquetas</span>
                    <span className="font-bold">45%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedReports;
