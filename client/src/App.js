import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/ShoppingCartContext";
import AvailableMeals from "./components/Meals/AvailableMeals";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      {showCart &&
        createPortal(
          <Cart onCloseCart={() => setShowCart(false)} />,
          document.body
        )}

      <Header onShowCart={() => setShowCart(true)} />
      <AvailableMeals />
    </CartContextProvider>
  );
};

export default App;
