import React from "react";
import "./TableReusableComponent.css";

const TableReusableComponent = ({ item, onDelete }) => {
  return (
    <div className="tables">
      <span>OrderId: {item.uniqueOrderId} ,</span>
      <span>ItemPrice: {item.dishPrice}</span>
      <span>Dish_Name: {item.dishName}</span>
      <span>Table_Number: {item.tableNumber}</span>
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  );
};

export default TableReusableComponent;
