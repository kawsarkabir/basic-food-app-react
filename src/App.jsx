// App.js

import React, { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import WantToCooke from "./components/WantToCooke/WantToCooke";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipes([...selectedRecipes, recipe]);
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="grid grid-cols-12">
        {/* all item card recipe */}
        <div className="col-span-7">
          <Cards recipes={recipes} onRecipeSelect={handleRecipeSelect} />
        </div>
        <div className="col-span-5">
          {/* Asidebar */}
          <WantToCooke selectedRecipes={selectedRecipes} />
        </div>
      </div>
    </>
  );
}

export default App;
