export const CartStyles = {
  overlay: "fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20",
  card: "w-[45%] min-h-fit max-h-[65%] top-[24vh] left-1 right-1 z-20 fixed shadow-md shadow-orange-200",
  totalAmount: "flex justify-between items-center font-extrabold text-xl",
  closeButton:
    "font-inherit cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white",
  orderButton:
    "font-inherit cursor-pointer bg-[#8a2b06] text-white border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01]",
  cartFont: "font-sans",
};

export const CartHeaderButtonStyles = {
  buttonClass:
    "flex items-center justify-around px-5 py-3.5 bg-[#3f0606] rounded-full cursor-pointer sm:mr-[4vw] mr-[2vw]",
  cartIconClass: "text-white",
  cartTextClass: "text-white font-semibold ml-2",
  badgeWrapperClass:
    "w-auto px-3.5 ml-2 rounded-full bg-[#e35143] flex items-center justify-center",
  badgeTextClass: "font-semibold text-white",
};

export const CartItemStyles = {
  listItemContainer:
    "bg-white list-none font-sans px-5 py-3 mb-0 flex justify-between",
  itemName: "font-bold mb-1",
  itemPrice: "font-bold text-lg text-orange-500",
  quantityInput:
    "ml-7 px-1 border border-gray-300 font-medium w-10 text-center",
  actionButtonsContainer: "text-center font-bold",
  decreaseButton: "mr-2 px-3 text-red-700 rounded-sm border border-red-800",
  increaseButton:
    "ml-2 px-3 text-white bg-red-700 rounded-sm border border-white hover:bg-red-900",
  hrDivider: "border-red-600 m-1 border-1",
};

export const CartItemsListStyles = {
  itemsList:
    "m-1.5 min-h-fit max-h-[49vh] overflow-y-auto scroll-smooth shadow-sm",
};
