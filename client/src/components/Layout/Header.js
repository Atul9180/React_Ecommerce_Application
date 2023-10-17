import { FaShoppingCart } from "react-icons/fa";
import promotionBannerImage from "../../assets/PromotionBanner.png";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[10vh] p-2 bg-[#862307] flex justify-between items-center z-30">
        <h1 className="text-white sm:text-3xl text-2xl font-bold font-serif sm:ml-[4vw] ml-[2vw]">
          Nawabi Nosh
        </h1>
        <button className="flex items-center justify-around px-5 py-3.5 bg-[#3f0606] rounded-full cursor-pointer sm:mr-[4vw] mr-[2vw] ">
          <FaShoppingCart className="text-white" />
          <span className="text-white font-semibold ml-2">Your Cart</span>
          <div className="w-auto px-3.5 ml-2 rounded-full bg-[#e35143] flex items-center justify-center">
            <span className="font-semibold">0</span>
          </div>
        </button>
      </header>

      <div className="pt-14 h-[50vh] lg:h-[60vh] sm:h-[55vh] overflow-hidden">
        <img
          src={promotionBannerImage}
          alt="promotionBannerImage"
          className="w-[100%] max-h-[100%] transform -rotate-[2deg] -translate-y-7"
        />
      </div>
    </>
  );
};

export default Header;
