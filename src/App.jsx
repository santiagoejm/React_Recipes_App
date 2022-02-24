import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Random from "./components/Random/Random";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
