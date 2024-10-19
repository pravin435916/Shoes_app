// actions/cartActions.js

export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  };
  
  export const updateCartItem = (id, quantity) => {
    return {
      type: 'UPDATE_CART_ITEM',
      payload: { id, quantity },
    };
  };
  