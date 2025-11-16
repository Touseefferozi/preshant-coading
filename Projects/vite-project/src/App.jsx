import "./App.css";
import { Routes, Route } from "react-router-dom";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Time from "./components/Time";
import Home from "./components/Home";
import About from "./components/About";
import Modal from "./Modal";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Counter from "./components/Counter";
import NotFound from "./components/404.jsx";

function App() {
  let fooditems = [
    "Dal",
    "Sabzi",
    "Mutton",
    "Biryani",
    "Korma",
    "Aloo Mattar",
    "Kheer",
    "Pulao",
  ];
  return (
    <>
      <Navbar />

      <div className="container my-4">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/time" element={<Time />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/about" element={<About name="Touseef" age={23} />} />
          <Route path="/item" element={<Item items={fooditems} />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>

        {/* Optional center content - remove in production */}

        <hr />
      </div>

      <Footer />
    </>
  );
}

export default App;
