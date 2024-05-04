import React from "react";
import { useState } from "react";
useState;
export default function CartItem(props) {
  const [inputQuantity, setInputQuantity] = useState(0);

  const { title, img, price } = props;
  return (
    <div>
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-title">
        <p>{title}</p>
      </div>
      <div className="quantity">
        <input type="text" />
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
      <div className="delete-item">
        <p className="bg-red-900">X</p>
      </div>
    </div>
  );
}
