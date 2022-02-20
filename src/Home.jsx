import React from "react";

const Home = ({ recipes }) => {
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
            <button>More Details</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
