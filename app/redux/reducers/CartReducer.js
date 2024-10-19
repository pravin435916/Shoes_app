// reducers/cartReducer.js

const initialState = {
    cartItems: [], // Empty cart initially
  };
  
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.cartItems.find((i) => i.id === item.id);
  
        if (existItem) {
          // If the item already exists in the cart, update the quantity
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.id === existItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        } else {
          // If the item does not exist, add it to the cart
          return {
            ...state,
            cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i.id !== action.payload),
        };
  
      case 'UPDATE_CART_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: action.payload.quantity }
              : i
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default CartReducer;
  