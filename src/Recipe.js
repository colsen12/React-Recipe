import React from "react";
import './Recipe.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
	return(
		<div className="recipe">
			<h1>{title}</h1>
			<h2 className="ingredients">Ingredients:</h2>
				<ol>
				{ingredients.map((ingredient, index) => (
				<li key={index}>{ingredient.text}</li>))}
				</ol>
			<a className="link" href={url}>Steps to make it</a>
			<p>{calories} calories</p>
			<img src={image} alt=""/>
		</div>
		);
}

export default Recipe; 