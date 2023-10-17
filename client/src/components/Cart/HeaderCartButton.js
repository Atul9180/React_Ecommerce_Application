import { FaShoppingCart } from "react-icons/fa";

const HeaderCartButton = () => {
  return (
    <button className="flex items-center justify-around px-5 py-3.5 bg-[#3f0606] rounded-full cursor-pointer sm:mr-[4vw] mr-[2vw] ">
      <FaShoppingCart className="text-white" />
      <span className="text-white font-semibold ml-2">Your Cart</span>
      <div className="w-auto px-3.5 ml-2 rounded-full bg-[#e35143] flex items-center justify-center">
        <span className="font-semibold">0</span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
