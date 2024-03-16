/* eslint-disable react/prop-types */
import { useState } from "react";

function Cards({ recipes, onRecipeSelect }) {
  const handleCookButtonClick = (recipe) => {
    onRecipeSelect(recipe);
  };

  return (
    <div className="shadow-lg rounded-lg grid grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipe_id}
          className="card bg-white p-3 shadow rounded"
        >
          <figure>
            <img
              src={recipe.recipe_image}
              alt={recipe.recipe_name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.recipe_name}</h2>
            <p>{recipe.short_description}</p>
            <div className="divider"></div>
            <div>
              <h2 className="card-title">
                Ingredients: {recipe.ingredients.length}
              </h2>
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
            <div className="divider"></div>
            <div className="card-actions justify-end">
              <p className="text-gray-700 mb-2">
                <i className="fa-regular fa-clock"></i> {recipe.preparing_time}
              </p>
              <p className="text-gray-700">
                <i className="fa-solid fa-fire"></i> {recipe.calories}
              </p>
            </div>

            <div className="card-actions">
              <button
                onClick={() => handleCookButtonClick(recipe)}
                className="w-2/4 py-2 px-3 rounded-full bg-[#0BE58A] font-semibold text-black hover:bg-[#0be58a9c]"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
