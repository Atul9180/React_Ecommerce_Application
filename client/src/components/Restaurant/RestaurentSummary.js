import RestaurentSummaryStyles from "../../styles/RestaurentSummary";

const RestaurentSummary = () => {
  return (
    <div className={RestaurentSummaryStyles.container}>
      <h2 className={RestaurentSummaryStyles.heading}>
        Delicious Food, Delivered To You
      </h2>
      <p className={RestaurentSummaryStyles.paragraph}>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={RestaurentSummaryStyles.additionalInfo}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default RestaurentSummary;
