import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./store/CartContext";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart &&
        createPortal(
          <Cart onCloseCart={() => setShowCart(false)} />,
          document.body
        )}

      <Header onShowCart={() => setShowCart(true)} />
      <Meals />
    </CartProvider>
  );
};

export default App;
