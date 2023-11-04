import { memo } from "react";
import CartItem from "./CartItem";

const CartItemsList = memo(({ cartItems, increaseItem, decreaseQuantity }) => {
  return (
    <section className="m-1.5 min-h-fit max-h-[49vh] overflow-y-auto scroll-smooth shadow-sm">
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
