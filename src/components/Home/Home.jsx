import React, { useState, useCallback, useContext } from "react";
import "./home.scss";
import { myContext } from "../context/context";

const Home = () => {
  const [searchMeal, setSearchMeal] = useState("");

  const { fetchHome, meals } = useContext(myContext);

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

      <div className="home-meals-grid">
        {meals ? (
          meals.map((meal) => {
            <div className="home-meals" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>;
          })
        ) : (
          <h2>Please try another search! Not matches found...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
