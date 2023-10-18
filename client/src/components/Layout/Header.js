import { useState } from "react";
import promotionBannerImage from "../../assets/PromotionBanner.png";
import HeaderCartButton from "../Cart/HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[10vh] p-2 bg-[#862307] flex justify-between items-center z-30">
        <h1 className="text-white sm:text-3xl text-2xl font-bold font-serif sm:ml-[4vw] ml-[2vw]">
          Nawabi Nosh
        </h1>
        <HeaderCartButton onOpenCart={openModal} />
      </header>
      <div className="pt-14 h-[50vh] lg:h-[60vh] sm:h-[55vh] overflow-hidden">
        <img
          src={promotionBannerImage}
          alt="promotionBannerImage"
          className="w-[100%] max-h-[100%] transform -rotate-[2deg] -translate-y-7"
        />
      </div>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <Cart onCloseCart={closeModal} />}
    </>
  );
};

export default Header;
