import React from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  return (
    <div>
        <Link to={"/addProducts"}> <button className=" btn btn-outline btn-primary text-xl">
        Add Product
      </button></Link>
     
      <div></div>
    </div>
  );
};

export default ManageProducts;
