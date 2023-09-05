import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/action.jsx';

// eslint-disable-next-line react/prop-types
function ProductList({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Список товаров</h2>
      {/* eslint-disable-next-line react/prop-types */}
      {products.map((product) => (
        <div className="product" key={product._id}>
          <h3>{product.name}</h3>
          <p>Цена: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Купить</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
