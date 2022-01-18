import React, { useState } from "react";
import Axios from "axios";
import Recipes from "./components/recipes";
import "./styles/bootstrap.css";
import "./App.css";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  // const [healthLabel, sethealthLabel] = useState("");

  const app_id = "e87034ad";
  const app_key = "b79d728c92567d520caa124aadcfe238";
  let url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;

  async function getRecipes() {
    let response = await Axios.get(url);
    setrecipes(response.data.hits);
    console.log(recipes);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Find recipes :)</h1>
      <form className="app_form" onSubmit={(e) => onSubmit(e)}>
        <input
          className="app_form_input"
          type="text"
          placeholder="Add ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_form_search" type="submit" value="Search" />

        {/* <select className="app_dropdown">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("No oil added")}>
            No oil added
          </option>
          <option onClick={() => sethealthLabel("Dairy-Free")}>
            Dairy-Free
          </option>
          <option onClick={() => sethealthLabel("Wheat-Free")}>
            Wheat-Free
          </option>
          <option onClick={() => sethealthLabel("Pescatarian")}>
            Pescatarian
          </option>
          <option onClick={() => sethealthLabel("Mediterranean")}>
            Mediterranean
          </option>
        </select> */}
      </form>
      <div className="recipes_container">
        {recipes.map((r, id) => (
          <Recipes key={id} recipes={r} />
        ))}
      </div>
    </div>
  );
}

export default App;
