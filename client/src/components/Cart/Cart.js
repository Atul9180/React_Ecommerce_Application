import { useContext } from "react";
import Card from "../UI/Card";
import { CartContext } from "../../context/ShoppingCartContext";

const Cart = (props) => {
  const { cartState, dispatch, totalCartPrice } = useContext(CartContext);
  console.log({ res: cartState.cartItems });

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

  const cartItems = (
    <section className=" m-1.5 min-h-fit max-h-[49vh] overflow-y-auto scroll-smooth shadow-sm">
      {cartState?.cartItems?.map((item, index) => (
        <section key={item.id}>
          <li
            key={item.id}
            id={index}
            className="bg-white list-none font-sans px-5 py-3 mb-0 flex justify-between"
          >
            <div>
              <h3 className="font-bold mb-1">{item.name}</h3>
              <h2 className="font-bold text-lg text-orange-500">
                ${item.price}
                <input
                  type="text"
                  value={`x ${item.quantity}`}
                  className="ml-7 px-1 border border-gray-300 font-medium w-10 text-center"
                />
              </h2>
            </div>

            <div className="text-center font-bold">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="mr-2 px-3 text-red-700 rounded-sm border border-red-800"
              >
                -
              </button>

              <button
                onClick={() => increaseItem(item.id)}
                className="ml-2 px-3 text-white bg-red-700 rounded-sm border border-white hover:bg-red-900"
              >
                +
              </button>
            </div>
          </li>

          <hr className=" border-red-600 m-1 border-1" />
        </section>
      ))}
    </section>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>

      <Card className="w-[45%]  min-h-fit max-h-[65%] top-[24vh]  left-1 right-1 z-20 fixed shadow-md shadow-orange-200 ">
        {cartItems}

        <div className="flex justify-between items-center font-extrabold text-xl ">
          {cartState.cartItems.length !== 0 ? (
            <>
              <span className="font-sans">Total Amount</span>
              <span className="mr-5 mb-3">{totalCartPrice}</span>
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
