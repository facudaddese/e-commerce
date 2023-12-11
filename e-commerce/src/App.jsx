import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer description="Proximamente E-commerce adidas..." />
    </div>
  );
}

export default App;