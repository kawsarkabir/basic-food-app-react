/* eslint-disable react/prop-types */
import { useState } from "react";

const WantToCooke = ({ selectedRecipes }) => {
  const [cookingRecipes, setCookingRecipes] = useState([]);
  const [hiddenRecipes, setHiddenRecipes] = useState([]);

  const handlePreparationClick = (recipe) => {
    if (!cookingRecipes.includes(recipe)) {
      setHiddenRecipes([...hiddenRecipes, recipe]);
      setCookingRecipes([...cookingRecipes, recipe]);
    } else {
      alert("This recipe has already been prepared!");
    }
  };

  return (
    <div>
      <div className=" bg-base-100 shadow-lg ml-5 rounded-lg">
        <div className="p-4">
          <div className="text-[#282828] font-semibold text-2xl text-center">
            <h3>
              Want to cook: {selectedRecipes.length - hiddenRecipes.length}
            </h3>
          </div>
          <div className="divider lg:px-16"></div>
          <div className=" text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedRecipes.map((recipe, index) => (
                    <tr
                      key={index}
                      className={`bg-base-200 ${
                        hiddenRecipes.includes(recipe) ? "hidden" : ""
                      }`}
                    >
                      <th>{index + 1}</th>
                      <td>{recipe.recipe_name}</td>
                      <td>{recipe.preparing_time}</td>
                      <td>{recipe.calories}</td>
                      <td>
                        {!hiddenRecipes.includes(recipe) && (
                          <button
                            onClick={() => handlePreparationClick(recipe)}
                            className="btn bg-[#0BE58A] rounded-full"
                          >
                            Preparation
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-[#282828] font-semibold text-2xl text-center lg:mt-8">
              Currently cooking: {cookingRecipes.length}
            </h1>
          </div>
          <div className="divider lg:px-16"></div>
          <div className="text-[#878787]">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {cookingRecipes.map((recipe, index) => (
                    <tr key={index} className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{recipe.recipe_name}</td>
                      <td>{recipe.preparing_time}</td>
                      <td>{recipe.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantToCooke;
