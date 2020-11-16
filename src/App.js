import React, { Component } from "react";

import "./App.css";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShopPage />
      </div>
    );
  }
}

export default App;
