import React from 'react';


const Brand = ({brand,setBrand}) => {
    const handelSelect = e => {
        e.preventDefault()
        console.log(e.target.value)
        
        setBrand(e.target.value)
    
        
    }
    return (
        <div>
          <select onChange={handelSelect} className="select select-info w-full max-w-xs" >
          <option disabled selected  >
           select Brand
          </option>
          <option>Adidas</option>
          <option>Kookaburra</option>
         
        </select>   
        </div>
    );
};

export default Brand;