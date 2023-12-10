import "./App.css";

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <ItemListContainer description="Proximamente E-commerce adidas..." />
      </div>
    );
  }
}

export default App;