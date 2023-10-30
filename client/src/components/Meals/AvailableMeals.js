// responsiable for bringing actual  meals list
import MealsList from "./MealsList";

const AvailableMeals = () => {
  return (
    <div className="w-[94vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] px-5 py-2 rounded-xl mx-auto bg-white mb-[1em]">
      <MealsList />
    </div>
  );
};

export default AvailableMeals;
