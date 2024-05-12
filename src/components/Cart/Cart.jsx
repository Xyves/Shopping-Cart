import CartEmpty from "./CartEmpty";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";

export default function Cart(props) {
  const { cartStatus, cartItems, removeFromCart } = props;
  console.log(cartItems);
  let isCartEmpty = cartItems.length === 0 && cartItems !== undefined;
  const handleDeleteItem = (itemId) => {
    removeFromCart(itemId);
  };
  return cartStatus ? (
    <div className="cart p-10 right-0 flex flex-col top-24 mt-1 mr-1 text-white rounded-lg bg-[#0e0f10] absolute ">
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
                handleDeleteItem={handleDeleteItem}
              />
            </li>
          ))}
          <CartFooter cartItems={cartItems} />
        </ul>
      )}
    </div>
  ) : null;
}
