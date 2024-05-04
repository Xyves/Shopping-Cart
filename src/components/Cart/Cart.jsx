import { useState } from "react";
import CartEmpty from "./CartEmpty";
useState;
export default function Cart({ cartStatus }) {
  const isCartEmpty = true;
  console.log(cartStatus + "H");
  return cartStatus ? (
    <div className="cart w-21 p-2 right-0 flex flex-col top-24 mt-1 mr-1 text-white rounded-lg bg-[#0e0f10] h-24 absolute ">
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <ul>
          {/* Li cart.map((item)=>(<CartItem title={item.title} price={item.price} quantity={item.quantity} img={item.src}/>)) */}
        </ul>
      )}
    </div>
  ) : null;
}
