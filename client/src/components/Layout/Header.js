import { FaShoppingCart } from "react-icons/fa";
import promotionBannerImage from "../../assets/PromotionBanner.png";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-14 p-2 bg-[#862307] flex justify-between items-center">
        <h1 className="text-white sm:text-3xl text-2xl font-semibold sm:ml-10 ml-7">
          Nawabi Nosh
        </h1>
        <button className="flex items-center justify-around px-3 py-1 bg-[#3f0606] rounded-full cursor-pointer sm:mr-10 mr-1 ">
          <FaShoppingCart className="text-white" />
          <span className="text-white font-semibold ml-2">Your Cart</span>
          <div className="w-auto px-2 h-4 ml-2 rounded-3xl bg-[#e35143] flex items-center justify-center">
            <span className="font-semibold">0</span>
          </div>
        </button>
      </header>

      <div className="pt-14 w-[100%] -z-20 h-[30rem] overflow-hidden relative bg-zinc-600 ">
        <img
          src={promotionBannerImage}
          alt="promotionBannerImage"
          className="w-[110%] max-h-[100%] transform -rotate-[1.9deg] object-cover"
        />
      </div>
    </>
  );
};

export default Header;
