import { useContext } from "react";
import Card from "../UI/Card";
import { CartContext } from "../../context/ShoppingCartContext";
import CartItemsList from "./CartItemsList";
import { CartStyles } from "../../styles/CartStyles";

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
      <div className={CartStyles.overlay}></div>
      <Card className={CartStyles.card}>
        <CartItemsList
          cartItems={cartState.cartItems}
          increaseItem={increaseItem}
          decreaseQuantity={decreaseQuantity}
        />

        <div className={CartStyles.totalAmount}>
          {cartState.cartItems.length !== 0 ? (
            <>
              <span className={CartStyles.cartFont}>Total Amount</span>
              <span className="mr-5 mb-3">${totalCartPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className={CartStyles.cartFont}>Cart Empty....</span>
          )}
        </div>

        <div className="text-right">
          <button
            className={CartStyles.closeButton}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={CartStyles.orderButton}>Order</button>
        </div>
      </Card>
    </>
  );
};

export default Cart;
