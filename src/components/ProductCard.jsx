import React from "react";
const generateQuantity = () => {
  Math.floor(Math.floor() * 9 + 1);
};
export default function Item(props) {
  const { title, desc, img, price } = props;
  return (
    <div className="itemContainer  bg-red-600 ">
      <div className="item">
        <div className="top-desc w-1/2">
          <img src={img[0]} alt="" className="w-" />
        </div>
        <div className="bottom-desc ">
          <p>{title}</p>
          <p>{price}$</p>
          <label htmlFor="quantity">Quantity 15</label>
          <input type="number" name="" id="" placeholder="1" />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
