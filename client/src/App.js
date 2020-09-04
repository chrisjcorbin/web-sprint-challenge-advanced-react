import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

// Dark Mode - Stretch

// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/globalStyles";
// import { lightTheme, darkTheme } from "./components/Themes";



function App() {
  // Dark Mode - Stretch
    // const [theme, setTheme] = useState("light");
    // const themeToggler = () => {
    //   theme === "light" ? setTheme("dark") : setTheme("light");
    // };

  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

return (
  // <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
  //     <>
  //     <GlobalStyles/>
    <div>
      <Router>
        <nav className="container">
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
    // </>
    // </ThemeProvider>
  );
}

export default App;