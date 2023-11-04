import promotionBannerImage from "../../assets/PromotionBanner.png";
import CartHeaderButton from "../Cart/CartHeaderButton";
import RestaurentSummary from "../Restaurant/RestaurentSummary";
import HeaderStyles from "../../styles/HeaderStyles";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={HeaderStyles.headerClasses}>
        <h1 className={HeaderStyles.titleClasses}>Nawabi Nosh</h1>
        <CartHeaderButton onOpenCart={onShowCart} />
      </header>

      <div className={HeaderStyles.imageDivClasses}>
        <img
          src={promotionBannerImage}
          alt="promotionBannerImage"
          className={HeaderStyles.imageClasses}
        />
      </div>

      <RestaurentSummary />
    </>
  );
};

export default Header;
