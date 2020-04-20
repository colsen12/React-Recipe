import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const App_ID = "1394370f";
  const App_Key = "f0dfd5e9b41bb794f9805d1c2826ff9b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
      getRecipes();
    }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  };

  return(
      <div className="App">
          <form onSubmit={getSearch} className="search-form">
           <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
             <button className="search-button" type="submit">
             Search
             </button>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}/>
          ))}
          </div>
      </div>
    );
}

export default App;
