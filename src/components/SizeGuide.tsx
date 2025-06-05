
import React from 'react';
import { Button } from '@/components/ui/button';

const SizeGuide = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8">
          <Button className="mb-8 bg-black text-white hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider px-8 py-3">
            Voltar
          </Button>
          <h1 className="text-3xl md:text-4xl font-oswald font-bold mb-6 uppercase tracking-wider">
            Guia de Tamanhos OFFSEASON
          </h1>
          <div className="text-gray-700 space-y-4 text-sm font-roboto leading-relaxed">
            <p className="mb-3">
              Encontre o tamanho perfeito para suas peças OFFSEASON! 
              Nossas modelagens são pensadas para o corpo em movimento, aliando conforto e 
              performance. Use as tabelas abaixo como referência. Em caso de dúvida entre dois tamanhos, 
              recomendamos optar pelo maior para um caimento mais solto, ou o menor para um fit mais 
              justo.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h5 className="font-medium font-oswald text-md mb-2 mt-4 uppercase">Parte Superior (Camisetas, Regatas, Tops, Agasalhos)</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs border border-gray-200">
                <thead className="border-b">
                  <tr>
                    <th className="py-1 px-2 font-medium">Tamanho</th>
                    <th className="py-1 px-2 font-medium">Peito (cm)</th>
                    <th className="py-1 px-2 font-medium">Cintura (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-1 px-2">P</td>
                    <td className="py-1 px-2">88-94</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 px-2">M</td>
                    <td className="py-1 px-2">95-101</td>
                    <td className="py-1 px-2">82-87</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 px-2">G</td>
                    <td className="py-1 px-2">102-108</td>
                    <td className="py-1 px-2">88-94</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2">GG</td>
                    <td className="py-1 px-2">109-115</td>
                    <td className="py-1 px-2">95-101</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h5 className="font-medium font-oswald text-md mb-2 mt-5 uppercase">Parte Inferior (Shorts, Leggings, Calças)</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs border border-gray-200">
                <thead className="border-b">
                  <tr>
                    <th className="py-1 px-2 font-medium">Tamanho</th>
                    <th className="py-1 px-2 font-medium">Cintura (cm)</th>
                    <th className="py-1 px-2 font-medium">Quadril (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-1 px-2">P (36-38)</td>
                    <td className="py-1 px-2">70-76</td>
                    <td className="py-1 px-2">90-96</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 px-2">M (40-42)</td>
                    <td className="py-1 px-2">77-83</td>
                    <td className="py-1 px-2">97-103</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 px-2">G (44-46)</td>
                    <td className="py-1 px-2">84-90</td>
                    <td className="py-1 px-2">104-110</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2">GG (48)</td>
                    <td className="py-1 px-2">91-97</td>
                    <td className="py-1 px-2">111-117</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 text-xs">
            <p>
              *Medidas corporais. As medidas da peça podem variar. 
              Se suas medidas estiverem entre dois tamanhos, escolha o menor para um ajuste mais 
              apertado ou o maior para um ajuste mais folgado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
