import React, { useState } from "react";
import { useAddProductsMutation } from "../../../redux/api/api";

const AddProducts = () => {

    const [data,{isError}]=useAddProductsMutation();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    ratings: "",
    stockQuantity: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
   try{
    await data(product).unwrap();
    console.log('product added successfully');
   }catch(error){
    console.log(error)
   }
    // Here you can send the product data to your backend
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-6 bg-base-100 rounded shadow"
      >
        <div className="form-control mb-4">
          <label className="label font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Ratings</label>
          <input
            type="number"
            name="ratings"
            value={product.ratings}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Stock Quantity</label>
          <input
            type="number"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-bold">Image URL</label>
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
