import { createContext } from "react";

const defaultValue = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const UserContext = createContext(defaultValue);

export default UserContext;
