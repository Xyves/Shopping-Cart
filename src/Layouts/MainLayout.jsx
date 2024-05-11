import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
export const UserContext = createContext();

import Footer from "../components/Footer";
import Cart from "../components/Cart/Cart";
export default function MainLayout() {
  const [cartStatus, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      });
    } else {
      // Item doesn't exist, add it to the cart
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };
  const updateStatus = (newStatus) => {
    setCartStatus(newStatus);
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartStatus,
    updateStatus,
  };
  console.log("Context Value:", contextValue);
  return (
    <UserContext.Provider value={contextValue}>
      <div className="flex flex-col min-h-[100vh]">
        <Header cartStatus={cartStatus} updateStatus={updateStatus} />
        <Outlet context={contextValue} />
        <Cart
          context={contextValue}
          cartStatus={cartStatus}
          cartItems={cartItems}
        />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}
