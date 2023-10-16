// import React from "react";
import { FaShoppingCart } from "react-icons/fa";
// import styles from "./Header.module.css";
import promotionBannerImage from "../../assets/PromotionBanner.png";

const Header = () => {
  return (
    <>
      {/* <header className={styles.header}>
        <h1 className={styles.brandName}>Nawabi Nosh</h1>
        <button className={styles.cartBtn}>
          <FaShoppingCart className={styles.cartLogo} />
          <span className={styles.cartHeading}>Your Cart</span>
          <div className={styles.cartItemCount}>
            <span>20</span>
          </div>
        </button>
      </header>

      <div className={styles.headerBanner}>
        <img src={promotionBannerImage} alt="promotionBannerImage" />
      </div>
      <div className={`text-center ${styles.custom_NavbgColor}`}>
        <h2 className="">hi</h2>
      </div> */}

      <header className="fixed top-0 left-0 right-0 h-14 p-2 bg-[#862307] flex justify-between items-center">
        <h1 className="text-white text-2xl ml-10">Nawabi Nosh</h1>
        <button className="flex items-center justify-around px-3 py-1 bg-[#3f0606] rounded-full cursor-pointer mr-10 sm:mr-1">
          <FaShoppingCart className="text-white" />
          <span className="text-white font-semibold ml-2">Your Cart</span>
          <div className="w-auto px-2 h-4 ml-2 rounded-3xl bg-[#e35143] flex items-center justify-center">
            <span className="font-semibold">0</span>
          </div>
        </button>
      </header>

      <div className="pt-14">
        <img
          src={promotionBannerImage}
          alt="promotionBannerImage"
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="bg-[#862307] text-center py-2">
        <h2 className="text-white">hi</h2>
      </div>
    </>
  );
};

export default Header;
