import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";
import Icon from "@mdi/react";
import { mdiBasket } from "@mdi/js";
import PropTypes from "prop-types";

export default function Header({ cartStatus, updateCartStatus }) {
  const navItems = [
    ["/", "home"],
    ["/shop", "shop"],
    ["/contact", "contact"],
  ];
  const handleClick = () => {
    console.log(`Current cartStatus: ${cartStatus}`);
    updateCartStatus(!cartStatus);
  };
  return (
    <header className="">
      <div className="wrap flex items-center justify-center mr-5">
        <NavLink className=" header inline mr-auto ml-5" to="/">
          <img src={Logo} alt="shop logo" className=" w-28 h-24" />
        </NavLink>
        <ul className="text-lg  p-3 text-white">
          {navItems.map(([url, title], index) => (
            <li key={index} className="inline mx-7 text-3xl ">
              <NavLink to={url} className="border-red-500">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Icon
          path={mdiBasket}
          size={1.4}
          onClick={handleClick}
          className="text-white cursor-pointer mr-5"
        />
      </div>
      <div className="line bottom w-full left-0  h-[.5px] bg-custom-gradient "></div>
    </header>
  );
}
Header.propTypes = {
  cartStatus: PropTypes.bool,
  updateCartStatus: PropTypes.func,
};
