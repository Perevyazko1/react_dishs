import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
    const { paramsId } = useParams();
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(`http://localhost:8000/api/?id=${paramsId}`);
      setRecipes(response.data);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <div className={"block-content"}>
        {recipes.map(recipe => (
          <div key={recipe.dateCreation}>
              <div className={'title'}>{recipe.category}</div>
              <div className={'title'}>{recipe.name_dish}</div>
              <img src={recipe.image} alt="picture" />
              <div className={"recipe"}>{recipe.recipe}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;