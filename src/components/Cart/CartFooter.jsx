import React from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Layouts/MainLayout";
import { useContext } from "react";
export default function CartFooter() {
  const { cartItems, addToCart, removeFromCart } = useContext(UserContext);

  return (
    <div className="card-footer">
      <div className="line"></div>
      <p>Total price: $ {}</p>
      <button className="py-2 px-6 bg-orange-300">
        <NavLink to="/checkout">View checkout</NavLink>
      </button>
    </div>
  );
}
