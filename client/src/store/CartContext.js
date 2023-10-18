import { createContext, useReducer } from "react";

const CartContext = createContext();

//initial cart state
const defaultCartState = { items: [], totalAmount: 0, quantity: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const updatedQuantity = +state.quantity + 1;
    // state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
      quantity: updatedQuantity,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedQuantity = +state.quantity - 1;
    const updatedTotalAmount =
      state.totalAmount -
      state.items[action.id].amount * state.items[action.id].price;
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
      quantity: updatedQuantity,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartCurrentState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (itemToAdd) => {
    dispatchCartAction({ type: "ADD_ITEM", item: itemToAdd });
  };

  const removeItemFromCartHandler = (idToRemove) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: idToRemove });
  };

  const cartContext = {
    items: cartCurrentState.items,
    totalAmount: cartCurrentState.totalAmount,
    totalQuantity: cartCurrentState.quantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
