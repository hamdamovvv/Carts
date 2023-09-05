import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/action.jsx';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <h3>{item.name}</h3>
          <p>Цена: {item.price}</p>
          <button onClick={() => handleRemoveFromCart(item._id)}>Удалить</button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-controls">
          <button onClick={handleClearCart}>Очистить корзину</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
