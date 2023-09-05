
import { Provider } from 'react-redux';
import store from './components/store/store.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Navbar from './components/Navbar/NavBar.jsx';
import Cart from './components/Cart/Cart.jsx';
import productsData from '/src/components/ProductsData.json'; // JSON с товарами

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="content">
          <ProductList products={productsData} />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
