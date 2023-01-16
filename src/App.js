import './App.css';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductList from './ProductList'
import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import GlobalContext from './Context';
import Cart from './Cart';
function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

  const handleCart = async (newProduct) => {
    let product = cartProducts.find((product) => product.title === newProduct.title);
    if (!product) {
      setCartProducts((prevProduct) => [...prevProduct, newProduct]);
    } else {
      alert('already added in cart')
    }

  }

  const getProducts = async () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data);
    })
  }

  useEffect(() => {
    getProducts();
  })
  return (
    <Container className="my-5">
      <GlobalContext.Provider value={{ products, handleCart, cartProducts }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </Container>
  );
}

export default App;
