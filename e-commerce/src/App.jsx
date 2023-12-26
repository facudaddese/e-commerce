import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
      <Routes>
        <Route path="/" element={<HombrePages />} />
      </Routes>
    </Router >
  );
}

export default App;