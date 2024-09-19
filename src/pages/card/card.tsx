import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="card bg-yellow-50  shadow-xl">
        <figure className="p-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
