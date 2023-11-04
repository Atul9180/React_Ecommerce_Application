import { useContext, useMemo } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import DUMMY_MEALS from "../../data/data";
import MealItem from "./MealItem";

const MealsList = () => {
  const { cartState, dispatch, getQuantityInCart } = useContext(CartContext);
  const memoizedDummyMeals = useMemo(() => DUMMY_MEALS, []);
  const addToCart = (meal) => {
    const { id, name, description, price } = meal;
    dispatch({
      type: "ADD_CART_ITEM",
      payload: { id, name, description, price, quantity: 1 },
    });
  };

  return (
    <div className="w-[94vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] px-5 py-2 rounded-xl mx-auto bg-white mb-[1em]">
      {memoizedDummyMeals.map((meal, index) => (
        <MealItem
          meal={meal}
          cartItems={cartState.cartItems}
          getQuantityInCart={getQuantityInCart}
          addToCart={addToCart}
          index={index}
          memoizedDummyMeals={memoizedDummyMeals}
        />
      ))}
    </div>
  );
};

export default MealsList;
