import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState([]);

  const fetchHome = useCallback((meal) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);

  const fetchRandom = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandom(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHome,
        meals,
        fetchCategories,
        categories,
        fetchRandom,
        random,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
