import React from "react";
import "./TableReusableComponent.css";

const TableReusableComponent = ({ item, onDelete }) => {
  return (
    <div className="tables">
      <span>
        OrderId:
        <span> {item.uniqueOrderId} ,</span>
      </span>
      <span>
        ItemPrice: <span>{item.dishPrice} ,</span>
      </span>
      <span>
        Dish_Name: <span>{item.dishName} ,</span>
      </span>
      <span>
        Table_Number: <span>{item.tableNumber}</span>
      </span>
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  );
};

export default TableReusableComponent;
