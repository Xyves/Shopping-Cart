import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

export default function Item(props) {
  const context = useOutletContext();
  const { cartItems, addToCart, removeFromCart } = context;
  const { title, img, price, id, rating, reviews } = props;
  const [inputValue, setInputValue] = useState(1);
  const itemInCart = cartItems.some((item) => item.id === id);

  const handleRemovingItem = () => {
    removeFromCart(id);
  };

  const handleAddingItem = () => {
    const newCartItem = {
      id,
      title,
      img,
      price,
      quantity: parseInt(inputValue),
    };
    addToCart(newCartItem);
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
    <div className=" flex flex-col items-center my-5 rounded-xl hover:bg-gray-300 hover:text-black text-white group border-blue-300 border-2 border-solid w-full">
      <div className="top  md:max-h-48 lg:min-h-42 h-36 flex mt-4 w-2/4 border-1 px-1">
        <img src={img} alt="item" className="my-5 rounded-md" />
      </div>
      <div className="self-start ml-1 w-full px-2">
        <p className="font-bold text-base md:text-2xl overflow-ellipsis max-h-16  overflow-hidden py-1 sm:text-base ">
          {title}
        </p>
        <div className="rating my-1 p-1">
          <div className="rating-stars inline">{rating}⭐</div>
          <div className="rating-num inline">({reviews})</div>
        </div>
        <div className="price font-bold text-2xl ml-1 my-2">${price}</div>
      </div>
      <div>
        <div className="ml-3">
          <button
            onClick={handleSubtraction}
            className="border-1 border-solid border-black rounded-full bg-item p-1"
            disabled={itemInCart}
          >
            -
          </button>
          <input
            type="number"
            name="quantity"
            min="1"
            max="40"
            step="1"
            className="mx-1 p-2 border-1 border-solid border-item rounded-lg bg-main  group-hover:bg-white"
            placeholder="1"
            value={inputValue}
            onChange={handleInputChange}
            disabled={itemInCart}
          />
          <button
            className="border-1 border-solid border-black rounded-full 0 p-1 bg-item "
            onClick={handleAddition}
            disabled={itemInCart}
          >
            +
          </button>
        </div>
        {!itemInCart ? (
          <button
            className="bg-item p-3 rounded-md text-white my-2"
            onClick={handleAddingItem}
            type="button"
          >
            Add to cart <FaBagShopping className="inline" />
          </button>
        ) : (
          <button
            className="my-2 rounded-md p-3 text-white bg-blue-500"
            onClick={() => handleRemovingItem(id)}
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
