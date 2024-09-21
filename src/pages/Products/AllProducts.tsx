import React from 'react';
import { useGetProductsQuery } from '../../redux/api/api';
import Products from '../../components/products';



const AllProducts = () => {
    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default AllProducts;