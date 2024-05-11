import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";
import Icon from "@mdi/react";
import { mdiBasket } from "@mdi/js";
import PropTypes from "prop-types";
import UserContext from "../UserContext";

export default function Header({ cartStatus, updateStatus }) {
  const navItems = [
    ["/", "home"],
    ["/shop", "shop"],
    ["/contact", "contact"],
  ];
  const handleClick = () => {
    console.log(`Before cartStatus: ${cartStatus}`);
    updateStatus(!cartStatus);
    console.log(`Current cartStatus: ${cartStatus}`);
  };
  return (
    <header className="">
      <div className="wrap flex items-center justify-center mr-5 md:text-lg lg:text-2xl">
        <NavLink className=" header inline mr-auto ml-5" to="/">
          <img src={Logo} alt="shop logo" className=" w-28 h-24" />
        </NavLink>
        <ul className="  p-3 text-white">
          {navItems.map(([url, title], index) => (
            <li
              key={index}
              className="inline mx-7  lg:text-3xl md:text-2xl sm:text-base"
            >
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
