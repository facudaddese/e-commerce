import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InicioPages from "./Pages/InicioPages/InicioPages";
import MujeresPages from "./Pages/MujeresPages/MujeresPages";
import HombrePages from "./pages/HombrePages/HombrePages";
import NiñoPages from "./pages/NiñoPages/NiñoPages";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/inicio" element={<InicioPages />} />
          <Route path="/mujer" element={<MujeresPages />} />
          <Route path="/hombre" element={<HombrePages />} />
          <Route path="/niño" element={<NiñoPages />} />
        </Routes>
      </div>
      <ItemListContainer />
    </Router>

  );
}

export default App;