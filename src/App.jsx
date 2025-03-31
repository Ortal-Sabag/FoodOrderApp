import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cartContext";
import { UserProgressContectProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContectProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContectProvider>

  );
}

export default App;
