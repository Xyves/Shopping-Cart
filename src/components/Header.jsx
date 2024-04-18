import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [cartStatus, setCartStatus] = useState(false);
  const handleClick = () => {
    cartStatus ? setCartStatus(false) : setCartStatus(true);
  };
  return (
    <header className="flex p-8 bg-red-700 ">
      <ul className="no-underline list-none  text-lg ">
        <li className="inline">
          <NavLink className=" header text-lg p-3 inline" to="/">
            Home
          </NavLink>
        </li>
        <li className="inline">
          <NavLink to="/shop" className="p-3">
            Shop
          </NavLink>
        </li>
        <li className="inline" onClick={handleClick}>
          Shop
        </li>
        <li className="inline">
          <NavLink to="/about" className="p-3 inline">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
