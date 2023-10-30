import { createContext, useReducer } from "react";
import {
  addToCart,
  decreaseCartItemQuantity,
  removeFromCart,
} from "./cartUtils";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return addToCart(state, action);

    case "REMOVE_CART_ITEM":
      return removeFromCart(state, action);

    case "DECREASE_CARTITEM_QUANTITY":
      return decreaseCartItemQuantity(state, action);

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const totalCartQuantity = cartState.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCartPrice = cartState.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartState, dispatch, totalCartQuantity, totalCartPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
