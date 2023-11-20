import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const Card = ({recipe}) => {
  const {favs, setFavs} = useRecipeStates()
  return (
    <div>
    <Link to={'/detail/' + recipe.id}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
        <button onClick={() => setFavs([...favs, recipe])}>⭐</button>
    </Link>
    </div>
  )
}

export default Card