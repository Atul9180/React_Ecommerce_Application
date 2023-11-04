//state=>{cartItems[],payload}
//action => {payload={id}}

//adding item to cart
const addToCart = (state, action) => {
  const isExistingCartItem = state.cartItems.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedCartItems =
    isExistingCartItem > -1
      ? state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      : [...state.cartItems, action.payload];

  const updatedTotalCartQuantity =
    state.totalCartQuantity + action.payload.quantity;
  const updatedTotalCartPrice =
    state.totalCartPrice + action.payload.price * action.payload.quantity;
  return {
    ...state,
    cartItems: updatedCartItems,
    totalCartQuantity: updatedTotalCartQuantity,
    totalCartPrice: updatedTotalCartPrice,
  };
};

//decrease one item at a time
const decreaseCartItemQuantity = (state, action) => {
  const updatedItems = state.cartItems
    .map((item) => {
      if (item.id === action.payload.id) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };

        if (updatedItem.quantity === 0) {
          return null; // If quantity reaches 0, remove the item from the cart
        }
        return updatedItem;
      }
      return item;
    })
    .filter(Boolean);

  const updatedTotalCartQuantity = state.totalCartQuantity - 1;
  const updatedTotalCartPrice = state.totalCartPrice - action.payload.price;

  return {
    ...state,
    cartItems: updatedItems,
    totalCartQuantity: updatedTotalCartQuantity,
    totalCartPrice: updatedTotalCartPrice,
  };
};

//manually update cart item by entering value
const manuallyUpdateCartQuantity = (state, action) => {
  const updatedItems = state.cartItems.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: action.payload.newQuantity };
    }
    return item;
  });
  const updatedTotalCartQuantity = updatedItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const updatedTotalCartPrice = updatedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return {
    ...state,
    cartItems: updatedItems,
    totalCartQuantity: updatedTotalCartQuantity,
    totalCartPrice: updatedTotalCartPrice,
  };
};

//remove last quantity item from cart...
const removeFromCart = (state, action) => {
  const removedItem = state.cartItems.find(
    (item) => item.id === action.payload.id
  );

  if (!removedItem) {
    return state; // If item is not found, return the same state
  }

  const updatedCartItems = state.cartItems.filter(
    (item) => item.id !== action.payload.id
  );
  const updatedTotalCartQuantity =
    state.totalCartQuantity - removedItem.quantity;
  const updatedTotalCartPrice =
    state.totalCartPrice - removedItem.price * removedItem.quantity;

  return {
    ...state,
    cartItems: updatedCartItems,
    totalCartQuantity: updatedTotalCartQuantity,
    totalCartPrice: updatedTotalCartPrice,
  };
};

export {
  addToCart,
  decreaseCartItemQuantity,
  removeFromCart,
  manuallyUpdateCartQuantity,
};
