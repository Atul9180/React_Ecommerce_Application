import React, { memo } from "react";

const MealItem = memo(
  ({
    meal,
    cartItems,
    index,
    getQuantityInCart,
    addToCart,
    memoizedDummyMeals,
  }) => {
    return (
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
                value={getQuantityInCart(cartItems, meal.id)}
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

        {index !== memoizedDummyMeals.length - 1 && (
          <hr className=" border-gray-400 border-opacity-50" />
        )}
      </section>
    );
  }
);

export default MealItem;
