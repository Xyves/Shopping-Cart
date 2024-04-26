import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";
import Icon from "@mdi/react";
import { mdiBasket } from "@mdi/js";

export default function Header() {
  const navItems = [
    ["/shop", "Shop"],
    ["", "Log in"],
    ["/contact", "Contact"],
  ];
  const [cartStatus, setCartStatus] = useState(false);
  const handleClick = () => {
    cartStatus ? setCartStatus(false) : setCartStatus(true);
  };
  return (
    <header className="flex justify-center items-center  bg-[#654062] border-4 border-black border-solid">
      <NavLink className=" header  p-1 inline mr-12" to="/">
        <img src={Logo} alt="shop logo" className="h-28" />
      </NavLink>
      <ul className="text-lg  p-5 text-white">
        {navItems.map(([url, title], index) => (
          <li key={index} className="inline mx-7 text-3xl ">
            <NavLink
              to={url}
              exact={url === ""}
              onClick={(e) => {
                if (url === "") {
                  e.preventDefault();
                  // Refresh the current page
                  window.location.reload();
                }
              }}
              className="border-red-500"
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Icon
        path={mdiBasket}
        size={1.4}
        onclick={handleClick}
        className="text-white"
      />
    </header>
  );
}
