import CartEmpty from "./CartEmpty";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

export default function Cart(props) {
  const { cartStatus, cartItems } = props;
  const { removeFromCart } = props.context;
  let isCartEmpty = cartItems.length === 0 && cartItems !== undefined;

  return cartStatus ? (
    <div className="cart p-10 right-0 flex flex-col top-24 mt-1 mr-1 text-white rounded-lg bg-[#0e0f10] absolute border-1 border-solid border-slate-500 ">
      {isCartEmpty ? (
        <CartEmpty />
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                img={item.img}
                id={item.id}
                removeFromCart={removeFromCart}
              />
            </li>
          ))}
          <CartFooter cartItems={cartItems} />
        </ul>
      )}
    </div>
  ) : null;
}
Cart.propTypes = {
  cartStatus: PropTypes.bool,
  cartItems: PropTypes.array,
  removeFromCart: PropTypes.func,
};
