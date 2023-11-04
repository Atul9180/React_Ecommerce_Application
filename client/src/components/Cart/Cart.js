import { useContext } from "react";
import Card from "../UI/Card";
import { CartContext } from "../../context/ShoppingCartContext";
import CartItemsList from "./CartItemsList";

const Cart = (props) => {
  const { cartState, dispatch, totalCartPrice } = useContext(CartContext);

  const increaseItem = (id) => {
    dispatch({ type: "ADD_CART_ITEM", payload: { id, quantity: 1 } });
  };

  const decreaseQuantity = (id) => {
    const item = cartState.cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      dispatch({ type: "REMOVE_CART_ITEM", payload: { id, quantity: 1 } });
    } else {
      dispatch({
        type: "DECREASE_CARTITEM_QUANTITY",
        payload: { id, quantity: 1 },
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>
      <Card className="w-[45%]  min-h-fit max-h-[65%] top-[24vh]  left-1 right-1 z-20 fixed shadow-md shadow-orange-200 ">
        <CartItemsList
          cartItems={cartState.cartItems}
          increaseItem={increaseItem}
          decreaseQuantity={decreaseQuantity}
        />

        <div className="flex justify-between items-center font-extrabold text-xl ">
          {cartState.cartItems.length !== 0 ? (
            <>
              <span className="font-sans">Total Amount</span>
              <span className="mr-5 mb-3">${totalCartPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-sans">Cart Empty....</span>
          )}
        </div>

        <div className="text-right">
          <button
            className="font-inherit cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white"
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className="font-inherit cursor-pointer bg-[#8a2b06] text-white border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01]">
            Order
          </button>
        </div>
      </Card>
    </>
  );
};

export default Cart;
