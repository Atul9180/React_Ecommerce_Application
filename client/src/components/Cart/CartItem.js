import { useCallback, memo } from "react";
import { CartItemStyles } from "../../styles/CartStyles";

//using memo to Memoizing it helps prevent unnecessary renders when its parent component renders.
const CartItem = memo(({ item, increaseItem, decreaseQuantity }) => {
  const handleDecrease = useCallback(() => {
    decreaseQuantity(item.id);
  }, [decreaseQuantity, item.id]);

  const handleIncrease = useCallback(() => {
    increaseItem(item.id);
  }, [increaseItem, item.id]);

  return (
    <section key={item.id}>
      <li
        key={item.id}
        id={item.id}
        className={CartItemStyles.listItemContainer}
      >
        <div>
          <h3 className={CartItemStyles.itemName}>{item.name}</h3>
          <h2 className={CartItemStyles.itemPrice}>
            ${item.price}
            <input
              type="text"
              value={`x ${item.quantity}`}
              className={CartItemStyles.quantityInput}
            />
          </h2>
        </div>

        <div className={CartItemStyles.actionButtonsContainer}>
          <button
            onClick={handleDecrease}
            className={CartItemStyles.decreaseButton}
          >
            -
          </button>

          <button
            onClick={handleIncrease}
            className={CartItemStyles.increaseButton}
          >
            +
          </button>
        </div>
      </li>

      <hr className={CartItemStyles.hrDivider} />
    </section>
  );
});

export default CartItem;

// In CartItem, we use useCallback to create memoized versions of handleDecrease and handleIncrease functions. This ensures that these functions don't change between renders unless decreaseQuantity or increaseItem dependencies change.
// We use useMemo for expensive calculations that don't need to be recomputed on every render.
