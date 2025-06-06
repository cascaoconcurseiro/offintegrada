
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GitCompare } from 'lucide-react';
import { useProductComparison } from '@/contexts/ProductComparisonContext';

const ComparisonFloatingButton = () => {
  const { comparisonProducts, setIsComparisonOpen } = useProductComparison();

  if (comparisonProducts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setIsComparisonOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 w-14 shadow-lg relative"
        size="lg"
      >
        <GitCompare className="w-6 h-6" />
        <Badge 
          className="absolute -top-2 -right-2 bg-red-600 text-white h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
        >
          {comparisonProducts.length}
        </Badge>
      </Button>
    </div>
  );
};

export default ComparisonFloatingButton;
