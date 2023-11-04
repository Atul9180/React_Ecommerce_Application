import {
  addToCart,
  decreaseCartItemQuantity,
  removeFromCart,
} from "./cartUtils";

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

export default cartReducer;
