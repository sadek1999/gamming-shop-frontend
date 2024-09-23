import React, { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import Modal from "./Modal";
import { addProduct } from "../redux/features/cardSlice";

const ProductsCard = ({ product }: { product: any }) => {
  // console.log(product.img)
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };
  const handleAddToCart = (product) => {
    // console.log(product);
    dispatch(addProduct(product));
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
        
        />
      )}

      <div
        
        className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-60 object-cover transition-opacity duration-300 hover:opacity-75"
         
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-blue-500 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
          <p className="text-lg font-bold text-red-600 mb-4">{product.price}</p>
          <div className=" flex justify-center gap-2">

         
          <button
            onClick={() => {
             
              handleAddToCart(product);
            }}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
          <button
           onClick={() => handleShowModal(product)}
          
            className="btn btn-outline btn-primary "
          >
           Details
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
