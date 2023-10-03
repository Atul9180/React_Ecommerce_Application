import React from "react";
import { useItemsDataContext } from "../context/ItemsDataContext";
import TableReusableComponent from "./TableReusableComponent";

const DisplayOrders = () => {
  const { itemsData, deleteOrder } = useItemsDataContext();

  //grouping orderedItems as per table Number i.e itemsData-->tableNumber
  const groupedTableOrderedItems = itemsData.reduce((ac, item) => {
    ac[item.tableNumber] = ac[item.tableNumber] || [];
    ac[item.tableNumber].push(item);
    return ac;
  }, {});

  //Now render the passed table item on screen from groupedTableOrderedItems array
  const renderOrdersOnScreen = (table) => {
    return groupedTableOrderedItems[table]?.map((item, index) => (
      //creating reusable component for different tables...
      <TableReusableComponent
        key={index}
        item={item}
        onDelete={() => deleteOrder(item)}
      />
    ));
  };

  //creating Tables array
  const tableNumbers = ["Table 1", "Table 2", "Table 3"];

  return (
    <div className="displayOrders">
      {tableNumbers.map((table) => (
        <div key={table}>
          <h3>{`${table}`}</h3>
          {renderOrdersOnScreen(table) || <div>No order...</div>}
        </div>
      ))}
    </div>
  );
};

export default DisplayOrders;
