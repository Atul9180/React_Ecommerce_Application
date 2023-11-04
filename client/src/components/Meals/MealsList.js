import { useContext, useMemo } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import DUMMY_MEALS from "../../data/data";
import MealItem from "./MealItem";
import { MealsListStyles } from "../../styles/MealsStyles";

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
    <div className={MealsListStyles.mealsList}>
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
