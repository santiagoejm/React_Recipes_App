import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import Detail from "./Detail";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);
  console.log(recipes);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
