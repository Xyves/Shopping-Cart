import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-600 flex w-50">
      <ul className="no-underline list-none bg-red-700">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </header>
  );
}
