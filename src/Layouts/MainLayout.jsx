import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { createContext } from "react";
import UserContext from "../UserContext";

import Footer from "../components/Footer";
import Cart from "../components/Cart/Cart";
export default function MainLayout() {
  const UserContext = createContext();

  const [cartStatus, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };
  const updateStatus = (newStatus) => {
    console.log(`Updating cartStatus from ${cartStatus} to ${newStatus}`);
    setCartStatus(newStatus);
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  console.log("Context Value:", contextValue);
  return (
    <UserContext.Provider value={contextValue}>
      <div className="flex flex-col min-h-[100vh]">
        <Header
          cartStatus={cartStatus}
          updateCartStatus={() => setCartStatus(!cartStatus)}
        />
        <Outlet context={contextValue} />
        <Cart cartStatus={cartStatus} />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}
