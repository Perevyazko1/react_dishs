import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:8000/api/');
      console.log(response.data)
      setRecipes(response.data);
    };

    fetchRecipes();
  }, []);

  return (
      <div className={'block-content-recipe-list'}>
        {recipes.map(recipe => (
          <div key={recipe.dateCreation}>
              <div className={'title'} >{recipe.category}</div>
              <div className={'title'}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name_dish}</Link>
              </div>
              <img className={'img-recipe-list'} src={recipe.image} alt="picture" />
          </div>
        ))}
      </div>
  );
};

export default RecipeList;