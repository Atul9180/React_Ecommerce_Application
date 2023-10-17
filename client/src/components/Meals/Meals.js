// responsiable for rendering meals list

import RestaurentSummary from "../Restaurant/RestaurentSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      <RestaurentSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
