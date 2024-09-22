import React from "react";







const Category = ({ category, setCategory }) => {
    const handltype = e => {
        e.preventDefault()
        console.log(e.target.value)
        //  settype(e.target.value)
        setCategory(e.target.value)

        
    }

  return (
    <div>
     
        <select onChange={handltype} className="select select-info w-full max-w-xs" >
          <option disabled selected  >
           select Category
          </option>
          <option>Football</option>
          <option>Cricket</option>
          {/* <option>Italian</option> */}
        </select>
      
    </div>
  );
};

export default Category;
