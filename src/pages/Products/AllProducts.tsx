import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/api";
import Products from "../../components/products";

import Category from "../../components/filter/category";
import Brand from "../../components/filter/Brand";
import ProductsCard from "../../components/ProductsCard";
import { Button } from "@mui/material";



const AllProducts = () => {
  const [brand,setBrand]=useState('')
  const [category,setCategory]=useState('')
  const {data,isLoading,isError}=useGetProductsQuery({category,brand})
  const products=data?.data
  // console.log(brand,"form all products")
  const handelFilter=()=>{
    
    setBrand('')
    setCategory('')
  }
if(isLoading){
  return <p>Loading ...............</p>
}

  return (
    <div className=" md:flex ">
      <div className=" bg-red-200  p-3 space-y-2">
        <p className="text-xl text-black font-semibold">Filter you Products</p>

        <Category category={category} setCategory={setCategory} ></Category>
        <Brand brand={brand} setBrand={setBrand} />
        <Button className="btn btn-outline btn-primary" onClick={handelFilter}>Clear Filter</Button>
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
