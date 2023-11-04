import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/ShoppingCartContext";
import { CartHeaderButtonStyles } from "../../styles/CartStyles";

const CartHeaderButton = ({ onOpenCart }) => {
  const { totalCartQuantity } = useContext(CartContext);

  return (
    <button className={CartHeaderButtonStyles.buttonClass} onClick={onOpenCart}>
      <FaShoppingCart className={CartHeaderButtonStyles.cartIconClass} />
      <span className={CartHeaderButtonStyles.cartTextClass}>Your Cart</span>
      <div className={CartHeaderButtonStyles.badgeWrapperClass}>
        <span className={CartHeaderButtonStyles.badgeTextClass}>
          {totalCartQuantity}
        </span>
      </div>
    </button>
  );
};

export default CartHeaderButton;
