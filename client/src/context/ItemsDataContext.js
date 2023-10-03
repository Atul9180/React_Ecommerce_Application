import React, { createContext, useContext, useState, useEffect } from "react";

const ItemsDataContext = createContext();

export const useItemsDataContext = () => {
  return useContext(ItemsDataContext);
};

export const ItemsDataContextProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const storedItemsData = JSON.parse(localStorage.getItem("itemsList"));
    if (storedItemsData) setItemsData(storedItemsData);
  }, []);

  const addTableOrder = (item) => {
    const updatedOrderItem = [...itemsData, item];
    setItemsData(updatedOrderItem);
    localStorage.setItem("itemsList", JSON.stringify(updatedOrderItem));
  };

  //delete order of selected table..
  const deleteOrder = (orderToDelete) => {
    const updatedOrders = itemsData.filter((i) => i !== orderToDelete);
    setItemsData(updatedOrders);
    localStorage.setItem("itemsList", JSON.stringify(updatedOrders));
  };

  return (
    <ItemsDataContext.Provider
      value={{ itemsData, addTableOrder, deleteOrder }}
    >
      {children}
    </ItemsDataContext.Provider>
  );
};

export default ItemsDataContext;
