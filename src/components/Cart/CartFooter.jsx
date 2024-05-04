import React from "react";
import { NavLink } from "react-router-dom";
export default function CartFooter() {
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
