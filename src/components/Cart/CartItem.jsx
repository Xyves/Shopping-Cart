import PropTypes from "prop-types";
export default function CartItem(props) {
  const { title, img, price, quantity } = props;
  return (
    <div>
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-title">
        <p>{title}</p>
      </div>
      <div className="quantity">
        <input type="text" value={quantity} />
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
      <div className="delete-item">
        <p className="bg-red-900">X</p>
      </div>
    </div>
  );
}
CartItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
