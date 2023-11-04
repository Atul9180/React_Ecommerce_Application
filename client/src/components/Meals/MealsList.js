import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import DUMMY_MEALS from "../../data/data";

const MealsList = () => {
  const { cartState, dispatch, getQuantityInCart } = useContext(CartContext);

  const addToCart = (meal) => {
    const { id, name, description, price } = meal;
    dispatch({
      type: "ADD_CART_ITEM",
      payload: { id, name, description, price, quantity: 1 },
    });
  };

  return (
    <div className="w-[94vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] px-5 py-2 rounded-xl mx-auto bg-white mb-[1em]">
      {DUMMY_MEALS.map((meal, index) => (
        <section key={meal.id}>
          <li className="bg-white list-none font-sans px-5 py-3 mb-0 flex justify-between">
            <div>
              <h3 className="font-bold">{meal.name}</h3>
              <span className="italic font-medium text-gray-500">
                {meal.description}
              </span>
              <h2 className="font-bold text-lg text-orange-500">
                {" "}
                ${meal.price}
              </h2>
            </div>

            <div className="">
              <h3 className="font-sans font-bold">
                Quantity
                <input
                  type="text"
                  value={getQuantityInCart(cartState.cartItems, meal.id)}
                  className="ml-2 border border-gray-300 font-semibold w-8 text-center"
                />
              </h3>
              <button
                onClick={() => addToCart(meal)}
                className="mt-2 px-5 text-white bg-red-700 py-1 rounded-2xl font-bold hover:bg-red-900"
              >
                +Add
              </button>
            </div>
          </li>

          {index !== DUMMY_MEALS.length - 1 && (
            <hr className=" border-gray-400 border-opacity-50" />
          )}
        </section>
      ))}
    </div>
  );
};

export default MealsList;
