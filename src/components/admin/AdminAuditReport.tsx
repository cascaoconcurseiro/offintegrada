
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';

const AdminAuditReport = () => {
  const auditResults = {
    functional: [
      "Login/Logout do sistema administrativo",
      "Navegação entre abas",
      "Dashboard com métricas em tempo real",
      "Sistema de relatórios básico",
      "Suporte com criação de tickets",
      "Gestão de clientes (visualização)",
      "Gestão de pedidos (visualização)",
      "Modal de campanhas de recuperação",
      "Formulários básicos de produto e cupom"
    ],
    partiallyFunctional: [
      "Sistema de produtos (falta CRUD completo)",
      "Sistema de cupons (falta validação)",
      "Integrações de pagamento (apenas UI)",
      "Integrações de envio (apenas UI)",
      "Marketing automations (apenas UI)",
      "Recuperação de carrinho (falta backend)",
      "Otimização de conversão (apenas UI)",
      "Configurações avançadas (falta persistência)"
    ],
    notFunctional: [
      "Integração real com APIs de pagamento",
      "Integração real com transportadoras",
      "Sistema de notificações em tempo real",
      "Backup automático de dados",
      "Analytics avançados com dados reais",
      "Sistema de permissões de usuário",
      "Exportação real de dados",
      "Integração com marketplaces",
      "Sistema de logs e auditoria",
      "Recuperação de senha funcional"
    ],
    requiresBackend: [
      "Autenticação real com JWT",
      "Base de dados para produtos",
      "Base de dados para clientes",
      "Base de dados para pedidos",
      "Sistema de emails automáticos",
      "Integração com APIs externas",
      "Sistema de arquivos/uploads",
      "Cache e performance",
      "Relatórios com dados reais",
      "Backup e restauração"
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider mb-2">
          Auditoria do Sistema Administrativo
        </h2>
        <p className="text-gray-600">
          Relatório completo do status de funcionalidades
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funcionalidades Ativas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              Totalmente Funcionais ({auditResults.functional.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditResults.functional.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Parcialmente Funcionais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600">
              <Clock className="w-5 h-5" />
              Parcialmente Funcionais ({auditResults.partiallyFunctional.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditResults.partiallyFunctional.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 rounded">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Não Funcionais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <XCircle className="w-5 h-5" />
              Não Funcionais ({auditResults.notFunctional.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditResults.notFunctional.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Requer Backend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <AlertTriangle className="w-5 h-5" />
              Requer Backend ({auditResults.requiresBackend.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditResults.requiresBackend.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                  <AlertTriangle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumo */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo da Auditoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded">
              <div className="text-2xl font-bold text-green-600">{auditResults.functional.length}</div>
              <div className="text-sm text-gray-600">Funcionais</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded">
              <div className="text-2xl font-bold text-yellow-600">{auditResults.partiallyFunctional.length}</div>
              <div className="text-sm text-gray-600">Parciais</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded">
              <div className="text-2xl font-bold text-red-600">{auditResults.notFunctional.length}</div>
              <div className="text-sm text-gray-600">Não Funcionais</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded">
              <div className="text-2xl font-bold text-purple-600">{auditResults.requiresBackend.length}</div>
              <div className="text-sm text-gray-600">Requer Backend</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded">
            <h4 className="font-semibold mb-2">Recomendações:</h4>
            <ul className="text-sm space-y-1">
              <li>• Priorizar implementação de funcionalidades parciais</li>
              <li>• Conectar com Supabase para funcionalidades de backend</li>
              <li>• Implementar validações e tratamento de erros</li>
              <li>• Adicionar testes automatizados</li>
              <li>• Melhorar UX/UI dos formulários</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuditReport;
