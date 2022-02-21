import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Detail = () => {
  const [recipe, setRecipe] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);
  // console.log(recipe);

  let ingredients = recipe.extendedIngredients;
  // console.log(ingredients);

  return (
    <div className="recipe-info">
      <div className="recipe-info-card">
        <img
          src={recipe.image}
          alt="recipe description"
          className="description-image"
        />
        <h3>{recipe.title}</h3>
        <h4>{`Vegan: ${recipe.vegan}`}</h4>
        <h4>{`Vegetarian: ${recipe.vegetarian}`}</h4>
        <h4>{`Servings: ${recipe.servings}`}</h4>
        <h4>Ingredients:</h4>
        {/* {ingredients.map((item) => {
          return <li key={item.id}>{item.original}</li>;
        })} */}
        <p>{`Instructions: ${recipe.instructions}`}</p>
      </div>
    </div>
  );
};

export default Detail;
