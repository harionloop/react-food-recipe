import React from "react";
import "./recipes.css";

export default function Recipes(props) {
  return (
    <>
      <section className="recipe-section">
        <a target="_blank" href={props.recipes.recipe.url}>
          <img
            className="recipes_img"
            src={props.recipes.recipe.image}
            alt={props.recipes.recipe.label}
          />
        </a>
        <p className="recipes_label">{props.recipes.recipe.label}</p>
      </section>
    </>
  );
}
