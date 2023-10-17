import Card from "../UI/Card";

const Cart = () => {
  const cartItems = (
    <ul className="list-none m-0 p-0">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>
      <Card className="fixed w-[45%] top-1/2 left-1/2 z-30 transform -translate-x-1/2">
        {cartItems}
        <div className="flex justify-between items-center font-extrabold text-xl">
          <span className="font-sans">Total Amount</span>
          <span className="mr-5 mb-3">$35.62</span>
        </div>
        <div className="text-right">
          <button className="font-inherit cursor-pointer border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white">
            Close
          </button>
          <button className="font-inherit cursor-pointer bg-[#8a2b06] text-white border border-solid border-[#8a2b06] py-2 px-8 rounded-full ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01]">
            Order
          </button>
        </div>
      </Card>
    </>
  );
};

export default Cart;
