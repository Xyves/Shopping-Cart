import { useState } from "react";
export default function Item(props) {
  const { title, desc, img, price, description } = props;
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    let value = e.target.value;
    let numValue = Number(value);
    if (!isNaN(numValue)) {
      if (numValue > 99) {
        value = "99";
      } else if (numValue < 0) {
        value = "0";
      }
    } else {
      value = "";
    }
    setInputValue(value);
  };
  const handleAddition = (e) => {
    const currentValue = Number(inputValue);
    currentValue < 99 ? setInputValue(String(currentValue + 1)) : null;
  };
  const handleSubtraction = (e) => {
    const currentValue = Number(inputValue);
    currentValue > 1 ? setInputValue(String(currentValue - 1)) : null;
  };
  return (
    <div className="card flex flex-col  bg-purple-300 justify-center items-center">
      <div className="top  w-1/3  flex ">
        <img src={img} alt="" className=" h-34 my-5" />
      </div>
      <div className="middle items-center self-start">
        <p className="font-bold text-xl ">{title}</p>
        <div className="rating">
          <div className="rating-stars"></div>
          <div className="rating-num"></div>
        </div>
        <div className="price">{price}</div>
      </div>
      <div className="bottom">
        <div className="quantity">
          <button onClick={handleSubtraction}>-</button>
          <input
            type="number"
            name="quantity"
            min="1"
            max="40"
            step="1"
            className=" mx-2 p-2"
            placeholder="1"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddition}>+</button>
        </div>
        <button className="bg-blue-500 p-2 rounded-md text-white inline items-center jusitfy-center my-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
