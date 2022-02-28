# React_Recipes_App

Hello world!! This project, is a _recipes app generator_,it is powered by React.js and the data is fetched from the [theMealDB](https://www.themealdb.com/api.php) API. In this app, the user can search recipes by name or ingredient, take a look at the different categories of recipes and generate recipes randomly call from the API.

The _Styling_ was developed with **Sass**, because I consider it a useful and simple way to style the pages and components that make up this project.

For fetching the data, I have used **Axios**, along `useEffect()`, `useState()` and `useCallback()` to manage the functionality. And for navigation **React-Router-Dom**, for its simple and intuitive way of working.

## Current Functionality

- Search Recipes by name or ingredient, currently the user can only get the name of the recipe and its appearance.
- See the different categories of recipes, currently the user can get the categories by name, but not access to them individually.
- Generate random recipes directly from the API, in this page the generated recipe is displayed with a brief explanation of its preparation.

## Future Functionality to Implement

- Improve the styling and appearance of the app, make it more responsive and responsible as well.
- When a recipe is searched, its ingredients and preparation will be accessible and displayed as well in a new page/component.
- When a categorie is generated, all of its recipes, ingredients and preparation will by accessible and displayed as well in a new page/component.
- Improve the user interface of the random generated recipe. Make it a list, instead of a paragraph.

## Usage

- clone` the repository.
- install the dependencies:
  `npm install`
- run the app:
  `npm start`
- you are good to go.

## Live Demo

Just Click on the next Link: [RecipesApp](https://santiagoejm.github.io/React_Recipes_App/)
