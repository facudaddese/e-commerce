import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import InicioPages from "./Pages/InicioPages/InicioPages";
// import MujeresPages from "./Pages/MujeresPages/MujeresPages";
// import HombrePages from "./pages/HombrePages/HombrePages";
// import NiñoPages from "./pages/NiñoPages/NiñoPages";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/* <Route path="/category/:categoryId" element={<ItemListContainer />} /> */}
          {/* <Route path="/item/:id" element={<ItemDetailContainer />} /> */}
        </Routes>
      </div>
      <ItemListContainer />
    </Router>

  );
}

export default App;