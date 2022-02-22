import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="home">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt="recipe description"
              className="image"
            />
            <h3>{recipe.title}</h3>
            <h4>{`Vegan: ${recipe.vegan}`}</h4>
            <h4>{`Vegetarian: ${recipe.vegetarian}`}</h4>
            <h4>{`Servings: ${recipe.servings}`}</h4>
            <button onClick={toggleHandler}>Show Ingredients</button>
            <ul className={toggle ? "close-toggle" : ""}>
              {recipe.extendedIngredients.map((item) => {
                return (
                  <li key={`${Date.now() * Math.random()}`}>{item.original}</li>
                );
              })}
            </ul>
            <button>
              <Link to={`/details/${recipe.id}`}>More Details</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
