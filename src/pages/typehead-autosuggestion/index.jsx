import React, { useEffect, useState } from "react";
import "./typehead.css";

function TypeHeadAutoSuggestion() {
  const [recipes, setRecipes] = useState();
  const [showResults, setShowResults] = useState();
  const [search, setSearch] = useState("");
  const [cache, setCache] = useState({});

  const fetchProducts = async () => {
    if (cache[search]) {
      setRecipes(cache[search]);
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`
      );

      const recipeData = await response.json();
      setRecipes(recipeData.recipes);
      setCache((prev) => ({ ...prev, [search]: recipeData.recipes }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchProducts, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="m-12 text-center text-5xl font-semibold">
        Typehead AutoSuggestion
      </h1>

      <div className="typehead-container">
        <input
          type="text"
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
        />
        {showResults && (
          <div className="suggestion">
            {recipes?.map((item) => (
              <p className="recipe" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TypeHeadAutoSuggestion;
