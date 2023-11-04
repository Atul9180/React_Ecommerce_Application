import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/ShoppingCartContext";
import MealsList from "./components/Meals/MealsList";

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
      <MealsList />
    </CartContextProvider>
  );
};

export default App;
