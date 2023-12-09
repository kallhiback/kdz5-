import React, { useState } from 'react';
import productsData from '../data/products.json';

const ProductList = () => {
  const [cart, setCart] = useState({});
  const [products] = useState(productsData);

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = (updatedCart[productId] || 0) + 1;
      return updatedCart;
    });

    sendCartToServer(cart);
  };

  const sendCartToServer = (cartData) => {
    console.log('Отправка корзины на сервер:', cartData);
  };

  return (
    <div>
        <p>Cart Count: {Object.values(cart).reduce((acc, curr) => acc + curr, 0)}</p>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <img src={product.picture} alt={product.name} />
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
            <p>Quantity in Cart: {cart[product._id] || 0}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ProductList;