import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CartFooter(props) {
  const { cartItems } = props;
  const [totalVal, setTotalVal] = useState(0);

  useEffect(() => {
    const newTotalItems = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalVal(newTotalItems.toFixed(2));
  }, [cartItems]);
  return (
    <div className="card-footer  mt-6">
      <div className="line"></div>
      <p className="text-red text-3xl">Total price: $ {totalVal}</p>
      <button className="py-2 px-6 bg-orange-300">
        <NavLink to="/checkout">View checkout</NavLink>
      </button>
    </div>
  );
}
