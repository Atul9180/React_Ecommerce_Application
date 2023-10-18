import { useContext } from "react";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartItemsCtx = useContext(CartContext);
  console.log({ cartItemsCtx });

  const cartItems = (
    <ul className="list-none m-0 p-0">
      {cartItemsCtx.items.map((item, index) => (
        <li
          id={index}
          key={item.id}
          className="flex items-center justify-between py-2 border-b border-gray-300 last
          :border-b-0"
        >
          {item.name} --Price: {item.price} --Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>

      <Card className="fixed w-[45%] top-1/2 left-1/2 z-30 transform -translate-x-1/2">
        {cartItems}

        <div className="flex justify-between items-center font-extrabold text-xl">
          {cartItemsCtx.items.length !== 0 ? (
            <>
              <span className="font-sans">Total Amount</span>
              <span className="mr-5 mb-3">${cartItemsCtx.totalAmount}</span>
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
