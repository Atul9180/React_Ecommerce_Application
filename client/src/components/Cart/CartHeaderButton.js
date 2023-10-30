import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/ShoppingCartContext";

const CartHeaderButton = ({ onOpenCart }) => {
  const { cartState, totalCartQuantity } = useContext(CartContext);
  console.log({ cartState });

  return (
    <button
      className="flex items-center justify-around px-5 py-3.5 bg-[#3f0606] rounded-full cursor-pointer sm:mr-[4vw] mr-[2vw] "
      onClick={onOpenCart}
    >
      <FaShoppingCart className="text-white" />
      <span className="text-white font-semibold ml-2">Your Cart</span>
      <div className="w-auto px-3.5 ml-2 rounded-full bg-[#e35143] flex items-center justify-center">
        <span className="font-semibold text-white">{totalCartQuantity}</span>
      </div>
    </button>
  );
};

export default CartHeaderButton;
