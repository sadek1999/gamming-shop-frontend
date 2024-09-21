// import { ShoppingCart } from "lucide-react";
import React from "react";
import Rating from "./Rating";


const Modal = ({ product, onClose, handleAddToCart }: any) => {
  console.log(product,"form Modal")
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-lg rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={product?.img}
            alt={product?.name}
          />
          <div className="p-5 lg:p-11">
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-[50px] mb-2 font-semibold text-blue-500">
                {product?.name}
              </h2>
              <p className="text-xl lg:text-base text-gray-800">
                {product?.description}

              </p>
              <p className="text-2xl lg:text-base text-gray-800">
                Stock:{product?.stockQuantity}

              </p>
              <p className="text-xl lg:text-base text-gray-800">
                Brand:{product?.brand}

              </p>
            </div>
            <div className="flex space-x-5 items-center ">
              <Rating value={product?.ratings} />
            </div>
            

            <div className="grid lg:grid-cols-2 gap-2 mt-3">
              <a
                className="bg-blue-400 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm hover:bg-blue-800 transition duration-300"
                href="#"
                onClick={(e) => handleAddToCart(e, product)}
              >
                {/* <ShoppingCart /> */}
                <span>${product?.price} | Add to Cart</span>
              </a>
              <a
                onClick={onClose}
                className="border border-red-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-red-600 font-semibold text-sm hover:bg-red-50 transition duration-300"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
