import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

export default function Cart({ cartStatus, cartItems }) {
  console.log(cartItems);
  let isCartEmpty = cartItems.length === 0 && cartItems !== undefined;

  return cartStatus ? (
    <div className="cart w-21 p-2 right-0 flex flex-col top-24 mt-1 mr-1 text-white rounded-lg bg-[#0e0f10] h-24 absolute ">
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
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
