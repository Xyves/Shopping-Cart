import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Icon from "@mdi/react";
import { mdiBasket } from "@mdi/js";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Header({ cartStatus, updateStatus }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    ["/", "home"],
    ["/shop", "shop"],
    ["/contact", "contact"],
  ];
  const handleClick = () => {
    updateStatus(!cartStatus);
  };
  return (
    <header data-testid="main-header">
      <div className="flex wrap items-center justify-center mr-5 md:text-lg lg:text-2xl">
        <NavLink className="inline mr-auto ml-5" to="/">
          <img src={Logo} alt="shop logo" className=" w-28 h-24" />
        </NavLink>
        <section className="MOBILE-MENU flex mr-6 sm:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hidden"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {navItems.map(([url, title], index) => (
                <li
                  key={index}
                  className="inline mx-7  text-4xl sm:text-base active:text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setIsNavOpen((prev) => !prev);
                  }}
                >
                  <NavLink to={url} className="border-red-500">
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ul className="p-3 lg:flex text-white max-sm:hidden">
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
      <div className="w-full left-0  h-[.5px] bg-custom-gradient "></div>
      <style>{`
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
}
Header.propTypes = {
  cartStatus: PropTypes.bool,
  updateCartStatus: PropTypes.func,
  updateStatus: PropTypes.func,
};
