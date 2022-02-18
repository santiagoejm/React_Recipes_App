import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Home";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://food2fork.ca/api/recipe/")
      .then((res) => res.json())
      .then((data) => setRecipes(data.results));
    console.log(recipes);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
