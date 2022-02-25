import React, { useEffect, useContext } from "react";
import { myContext } from "../context/context";
import "./random.scss";

const Random = () => {
  const { random, fetchRandom } = useContext(myContext);

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  return (
    <div className="random">
      {random.map((meal) => {
        return (
          <div className="random-grid" key={meal.idMeal}>
            <div className="random-grid-controls">
              <img src={meal.strMealThumb} alt="#" />
              <button onClick={fetchRandom}>New meal</button>
            </div>

            <div className="random-grid-instructions">
              <h4>Intructions</h4>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Random;
