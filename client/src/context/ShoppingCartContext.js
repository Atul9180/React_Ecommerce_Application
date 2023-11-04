import { useMemo, memo } from "react";
import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";
import { getQuantityInCart } from "./cartUtils";

const CartContext = createContext();

const CartContextProvider = memo(({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });
  const cartItems = cartState.cartItems;

  const totalCartQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

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
});

export { CartContextProvider, CartContext };
