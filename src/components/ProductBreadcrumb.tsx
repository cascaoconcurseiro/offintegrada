
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductBreadcrumbProps {
  gender: string;
  productName: string;
}

const ProductBreadcrumb = ({ gender, productName }: ProductBreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 font-roboto">
      <Link to="/" className="hover:text-black">Home</Link>
      <span>/</span>
      <Link to="/loja" className="hover:text-black">Loja</Link>
      <span>/</span>
      <span className="capitalize">{gender}</span>
      <span>/</span>
      <span>{productName}</span>
    </div>
  );
};

export default ProductBreadcrumb;
