import PropTypes from "prop-types";
import UserContext from "../../UserContext";
import { TiDelete } from "react-icons/ti";

import { useContext } from "react";
export default function CartItem(props) {
  const { title, img, price, quantity, id, removeFromCart } = props;
  const fullPrice = () => {
    return price * quantity;
  };

  return (
    <div className=" flex  border-1 h-16   my-5 items-center justify-around">
      <div className=" mx-5 h-20 self-center items-center mt-4">
        <img src={img} alt="" className="h-16" />
      </div>
      <div className="item-title text-ellipsis	">
        <p className="w-24">{title}</p>
      </div>
      <div className="quantity p-1 mx-4 select-none border-solid border-yellow-400 border-2 rounded-lg">
        <p>{quantity}</p>
      </div>
      <div className="price mr-2">
        <p>{quantity === 1 ? price : fullPrice}</p>
      </div>
      <TiDelete
        className="bg-red-900"
        type="button"
        onClick={() => {
          removeFromCart(id);
          console.log("Deleting");
        }}
        size={25}
      />
    </div>
  );
}
CartItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.number,
};
