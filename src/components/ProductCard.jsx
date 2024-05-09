import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

import PropTypes from "prop-types";
export default function Item(props) {
  const context = useOutletContext();

  if (!context) {
    console.error("useOutletContext is returning null");
    return null; // or handle the case when context is null
  }

  const { cartItems, addToCart } = context;
  const { title, img, price, id, rating, reviews } = props;
  const [inputValue, setInputValue] = useState(1);
  const [itemInCart, setItemInCart] = useState(false);

  const handleAddingItem = (event) => {
    console.log(inputValue);
    event.preventDefault();
    const newCartItem = {
      id,
      title,
      img,
      price,
      quantity: inputValue,
    };
    addToCart(newCartItem);
    setItemInCart(!itemInCart);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    let numValue = Number(value);
    if (!isNaN(numValue)) {
      if (numValue > 99) {
        value = "99";
      } else if (numValue < 0) {
        value = "1";
      }
    } else {
      value = "";
    }
    setInputValue(value);
  };
  const handleAddition = () => {
    const currentValue = Number(inputValue);
    currentValue < 99 ? setInputValue(String(currentValue + 1)) : null;
  };
  const handleSubtraction = () => {
    const currentValue = Number(inputValue);
    currentValue > 1 ? setInputValue(String(currentValue - 1)) : null;
  };
  return (
    <div className="card flex flex-col   justify-center items-center border-itemBorder border-2 border-solid my-5">
      <div className="top  w-1/3  flex max-h-1/3 mt-2">
        <img src={img} alt="" className=" h-34 my-5" />
      </div>
      <div className="middle items-center self-start">
        <p className="font-bold text-base md:text-3xl px-1 py-1 sm:text-base">
          {title}
        </p>
        <div className="rating">
          <div className="rating-stars inline">{rating}⭐</div>
          <div className="rating-num inline">({reviews})</div>
        </div>
        <div className="price font-bold text-2xl ml-1">{price}$</div>
      </div>
      <div className="bottom flex align-center flex-col justify-center">
        <div className="quantity">
          <button
            onClick={handleSubtraction}
            className="border-1 border-solid border-black rounded-full bg-green-100 p-1"
          >
            -
          </button>
          <input
            type="number"
            name="quantity"
            min="1"
            max="40"
            step="1"
            className="mx-1 p-2 border-1 border-solid border-black"
            placeholder="1"
            value={inputValue}
            onChange={handleInputChange}
            disabled={itemInCart}
          />
          <button
            className="border-1 border-solid border-black rounded-full bg-green-100 p-1"
            onClick={handleAddition}
          >
            +
          </button>
        </div>
        {!itemInCart ? (
          <button
            className="bg-blue-500 p-3 rounded-md text-white my-2 "
            onClick={handleAddingItem}
            type="button"
          >
            Add to cart <FaBagShopping className="inline" />
          </button>
        ) : (
          <button
            className=" my-2 rounded-md p-3 text-white bg-blue-500"
            onClick={handleAddingItem}
            type="button"
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}
Item.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func,
  rating: PropTypes.number,
  reviews: PropTypes.number,
};
