import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const RecipeListRu = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:8000/api/?category=USA');
      setRecipes(response.data);
    };

    fetchRecipes();
  }, []);

  return (
      <div className={"block-content"}>
        {recipes.map(recipe => (
          <div key={recipe.dateCreation}>
              <div className={'title'}>{recipe.category}</div>
              <div className={'title'}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name_dish}</Link>
              </div>
              <img src={recipe.image} alt="picture" />
              <div className={"recipe"}>{recipe.recipe}</div>
          </div>

        ))}
    </div>
  );
};

export default RecipeListRu;