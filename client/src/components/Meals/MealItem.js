import React, { memo } from "react";
import { MealItemStyles } from "../../styles/MealsStyles";

const MealItem = ({
  meal,
  cartItems,
  index,
  getQuantityInCart,
  addToCart,
  memoizedDummyMeals,
}) => {
  return (
    <section key={meal.id}>
      <li className={MealItemStyles.mListItem}>
        <div>
          <h3 className={MealItemStyles.itemName}>{meal.name}</h3>
          <span className={MealItemStyles.itemDescription}>
            {meal.description}
          </span>
          <h2 className={MealItemStyles.itemPrice}>${meal.price}</h2>
        </div>

        <div className="">
          <h3 className={MealItemStyles.itemName}>
            Quantity
            <input
              type="text"
              value={getQuantityInCart(cartItems, meal.id)}
              className={MealItemStyles.inputField}
            />
          </h3>
          <button
            onClick={() => addToCart(meal)}
            className={MealItemStyles.addButton}
          >
            +Add
          </button>
        </div>
      </li>

      {index !== memoizedDummyMeals.length - 1 && (
        <hr className={MealItemStyles.hrSeparator} />
      )}
    </section>
  );
};

export default memo(MealItem);
