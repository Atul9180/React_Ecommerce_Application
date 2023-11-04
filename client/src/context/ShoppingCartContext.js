import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";
import { getQuantityInCart } from "./cartUtils";

const CartContext = createContext();

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
      value={{
        cartState,
        dispatch,
        totalCartQuantity,
        totalCartPrice,
        getQuantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
