import React from "react";

export default function Item() {
  return (
    <div className="itemContainer">
      <div className="item">
        <div className="top-desc">
          <img src="" alt="" />
        </div>
        <div className="bottom-desc">
          <p>20$</p>
          <label htmlFor="">Quantity</label>
          <input type="number" name="" id="" placeholder="1" />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
