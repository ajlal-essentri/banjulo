import AboutUs from "./components/pages/about/AboutUs";
import Home from "./components/home/Home";
import NavBar from "./components/layout/navBar/navBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;