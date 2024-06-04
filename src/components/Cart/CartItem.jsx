import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

export default function CartItem(props) {
  const { title, img, price, quantity, id, removeFromCart } = props;
  const fullPrice = () => {
    return price * quantity;
  };

  return (
    <div className=" flex h-16 my-3 items-center justify-around border-solid border-1 border-white py-12">
      <div className=" mx-5 h-20 self-center items-center mt-4">
        <img src={img} alt="" className="h-16" />
      </div>
      <div className="item-title text-ellipsis	">
        <p className="w-24">{title}</p>
      </div>
      <div className="quantity p-1 mx-2 select-none border-solid  border-1 rounded-lg">
        <p>{quantity}</p>
      </div>
      <div className="price mr-2">
        <p>{quantity === 1 ? price : fullPrice}</p>
      </div>
      <TiDelete
        className="bg-red-900 cursor-pointer hover:bg-red-500 rounded-lg "
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
