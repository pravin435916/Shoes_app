// components/ShoppingCart.js
import React from 'react';
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart state
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Items Available</h2>
        <button onClick={() => handleAddItem({ id: 1, name: 'Item 1', price: 100 })}>Add Item 1</button>
        <button onClick={() => handleAddItem({ id: 2, name: 'Item 2', price: 200 })}>Add Item 2</button>
        <button onClick={() => handleAddItem({ id: 3, name: 'Item 3', price: 300 })}>Add Item 3</button>
      </div>

      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
