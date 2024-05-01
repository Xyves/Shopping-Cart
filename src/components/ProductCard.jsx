import React from "react";
const generateQuantity = () => {
  Math.floor(Math.floor() * 9 + 1);
};
export default function Item(props) {
  const { title, desc, img, price, description } = props;
  return (
    <div className="item bg-red-700 flex  wrap justify-center ">
      <div className=" flex mx-4 items-center w-3/4 ">
        <div className="left-content  h-3/4 w-3/4">
          <img src={img} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="right-content my-6 wrap text-center w-3/4">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-[11px] flex-end text-center">{desc}X</p>
        <div className="rating"></div>

        <p>{price}$</p>
        <div className="colors mt-4">
          <p>Choose your colors:</p>
          <button className="rounded-full bg-black w-5 h-5 mx-2"></button>
          <button className="rounded-full bg-white w-5 h-5"></button>
        </div>
        <div className="bottom-content my-5 inline">
          <label htmlFor="quantity text-sm">Quantity:</label>
          <input
            type="number"
            name="quantity"
            min="1"
            max="15"
            step="1"
            className=" ml-2 h-12"
            placeholder="1"
            // TBA border
          />

          <button className="bg-blue-500 p-2 rounded-md text-white inline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
