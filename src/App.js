import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const App_ID = "1394370f";
  const App_Key = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
      const getRecipes = async () => {
      const response = await fetch
      (`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
      const data = await response.json();
      setRecipes(data.hits);
      }
      getRecipes();
    }, [query, App_Key]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  };


  return(
      <div className="App">
          <form onSubmit={getSearch} className="search-form">
           <input 
           className="search-bar" 
           type="text" value={search} 
           onChange={updateSearch}
           placeholder="Find a recipe" />
             <button className="search-button" type="submit">
             Search
             </button>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.uri}
            url={recipe.recipe.url}
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
