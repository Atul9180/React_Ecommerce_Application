// responsiable for bringing actual  meals list

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Chicken Burger",
    description: "Chicken, raw, meaty",
    price: 15,
  },
  {
    id: "m6",
    name: "Green Peas Burger",
    description: "Green leaves...",
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, index) => (
    <>
      <li
        id={meal.id}
        className="bg-white list-none font-sans px-5 py-3 mb-0 flex justify-between"
      >
        <div>
          <h3 className="font-bold">{meal.name}</h3>
          <span className="italic font-medium text-gray-500">
            {meal.description}
          </span>
          <h2 className="font-bold text-lg text-orange-500"> ${meal.price}</h2>
        </div>

        <div className="">
          <h3 className="font-sans font-bold">
            Amount
            <input
              type="text"
              value="1"
              className="ml-2 border border-gray-300 font-semibold w-8 text-center"
            />
          </h3>
          <button className="mt-2 px-5 text-white bg-red-700 py-1 rounded-2xl font-bold hover:bg-red-900">
            +Add
          </button>
        </div>
      </li>

      {index !== DUMMY_MEALS.length - 1 && (
        <hr className=" border-gray-400 border-opacity-50" />
      )}
    </>
  ));

  return (
    // <div className="w-full bg-gray-600 pb-5">
    <div className="w-[94vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] px-5 py-2 rounded-xl mx-auto bg-white mb-[1em]">
      {mealsList}
    </div>
    // </div>
  );
};

export default AvailableMeals;
