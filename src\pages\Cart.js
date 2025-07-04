import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState({});

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            <span>{cart[productId].name}</span>
            <span>x {cart[productId].quantity}</span>
            <span>${cart[productId].price}</span>
          </li>
        ))}
      </ul>
      <p>Total: ${Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;