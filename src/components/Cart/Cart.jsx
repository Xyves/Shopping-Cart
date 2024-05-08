import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import React, { useContext } from "react";
import UserContext from "../../UserContext";

export default function Cart({ cartStatus }) {
  console.log("Context from useContext:", useContext(UserContext));
  const { cartItems, removeFromCart } = useContext(UserContext);
  const isCartEmpty = cartItems.length === 0;

  return cartStatus ? (
    <div className="cart w-21 p-2 right-0 flex flex-col top-24 mt-1 mr-1 text-white rounded-lg bg-[#0e0f10] h-24 absolute ">
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                img={item.img}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
