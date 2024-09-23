// import React from "react";
import CartDetails from "../../components/cardDetails";
import OrderSummary from "../../components/OrderSummary";
import { useAppSelector } from "../../redux/hook";
// import  store  from './../../redux/store';


const Card = () => {

  const products=useAppSelector((store)=>store.card.products)
  return <div className="container mt-10 mx-auto">
    <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40">
      <div className="  space-y-4 lg:mt-0 mt-5">
      {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500"> not product found</p>
          )}
      </div>
      <OrderSummary></OrderSummary>
    </div>
  </div>;
};

export default Card;
