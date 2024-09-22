import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import Products from "../../components/products";

import Category from "../../components/filter/category";
import Brand from "../../components/filter/Brand";
import ProductsCard from "../../components/ProductsCard";


const AllProducts = () => {
  const [params,setParams]=useState('')
  const [category,setCategory]=useState('')
  const {data,isLoading,isError}=useGetProductsQuery(category)
  const products=data?.data
  console.log(category,"form all products")


  return (
    <div className=" md:flex">
      <div className=" bg-red-200  p-3">
        <p className="text-xl text-black font-semibold">Filter you Products</p>

        <Category category={category} setCategory={setCategory} ></Category>
        <Brand />
      </div>
      <div className="md:w-3/4">
        <div className="container">
          <h1 className="text-4xl font-bold my-10 text-center">All Products</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {products?.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
