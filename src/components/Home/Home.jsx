import React, { useState, useCallback, useContext } from "react";
import "./home.scss";

import { myContext } from "../context/context";

const Home = () => {
  const [searchMeal, setSearchMeal] = useState("");

  const { fetchHome } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHome(searchMeal);
  }, [searchMeal, fetchHome]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Search a meal by name..."
          onChange={(e) => setSearchMeal(e.target.value)}
          value={searchMeal}
        />
        <button onClick={fetchMealsHandler}>Search</button>
      </div>

      <div className="home-meals"></div>
    </div>
  );
};

export default Home;
