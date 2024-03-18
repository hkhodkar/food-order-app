import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./components/store/CartProvider.jsx";

function App() {

  const cardCtx = {
    meals: [],
    total: 0,
    add: onAddHandler
  }
  const [cartValue, setCartValue] = useState(cardCtx);

  const [cartIsShown, setCartIsShown] = useState(false);
  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }



  function onAddHandler(item) {
    setCartValue(prev => {
      return {
        ...prev,
        meals: [item, ...prev.meals]
      }
    })
  }

  return (
    <CartProvider value={cartValue}>
      {cartIsShown && <Cart onAddHandler={onAddHandler} hideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
