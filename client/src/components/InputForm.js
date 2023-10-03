import React, { useRef } from "react";
import { useItemsDataContext } from "../context/ItemsDataContext";

const InputForm = () => {
  const uniqueOrderIdRef = useRef();
  const itemPriceRef = useRef();
  const dishNameRef = useRef();
  const tableIdRef = useRef();
  const { addTableOrder } = useItemsDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueOrderId = uniqueOrderIdRef.current.value;
    const dishPrice = itemPriceRef.current.value;
    const dishName = dishNameRef.current.value;
    const tableNumber = tableIdRef.current.value;

    if (
      uniqueOrderId.trim().length === 0 ||
      dishName.trim().length === 0 ||
      dishPrice.trim().length === 0 ||
      tableNumber.trim().length === 0
    )
      return;

    addTableOrder({ uniqueOrderId, dishPrice, dishName, tableNumber });

    uniqueOrderIdRef.current.value = "";
    itemPriceRef.current.value = "";
    dishNameRef.current.value = "";
    tableIdRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uniqueOrderId">uniqueOrderId</label>
        <input type="text" name="uniqueOrderId" ref={uniqueOrderIdRef} />

        <label htmlFor="DishPrice">Choose Price</label>
        <input type="number" min="1" name="DishPrice" ref={itemPriceRef} />

        <label htmlFor="DishName">Choose Dish</label>
        <input type="text" name="DishName" ref={dishNameRef} />

        <label htmlFor="TableNumber">Choose Table</label>
        <select id="TableNumber" name="TableNumber" ref={tableIdRef}>
          <option value="">Choose Table... </option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>

        <button type="submit">Add to Bill</button>
      </form>
    </>
  );
};

export default InputForm;
