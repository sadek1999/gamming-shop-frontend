import React from 'react';
import ProductsCard from './ProductsCard';
import { useGetProductsQuery } from '../redux/api/api';

const Products = () => {
const {data,isLoading,isError}=useGetProductsQuery('')
const products=data?.data
console.log(products)

    return (
        <div className="container">
        <h1 className="text-4xl font-bold my-10 text-center">All Products</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {products?.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Products;