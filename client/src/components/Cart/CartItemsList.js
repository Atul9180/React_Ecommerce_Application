import { memo } from "react";
import CartItem from "./CartItem";
import { CartItemsListStyles } from "../../styles/CartStyles";

const CartItemsList = memo(({ cartItems, increaseItem, decreaseQuantity }) => {
  return (
    <section className={CartItemsListStyles.itemsList}>
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseItem={increaseItem}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </section>
  );
});

export default CartItemsList;
