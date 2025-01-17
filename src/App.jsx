import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
