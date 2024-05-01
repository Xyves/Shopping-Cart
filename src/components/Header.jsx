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
    <header className=" bg-[#6C0345] mb-5">
      <div className="wrap flex items-center justify-center">
        <NavLink className=" header inline mr-12" to="/">
          <img src={Logo} alt="shop logo" className=" w-32" />
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
          onClick={handleClick}
          className="text-white cursor-pointer"
        />
      </div>
      <div className="line bottom w-full left-0  h-[5px] bg-custom-gradient "></div>
    </header>
  );
}
