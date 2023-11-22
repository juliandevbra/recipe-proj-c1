import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const Card = ({recipe}) => {
  const {dispatch} = useRecipeStates()
  return (
    <div className='card'>
      <Link to={'/detail/' + recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt="" width={400}/>  
      </Link>
      <button onClick={() => dispatch({type: 'ADD_FAV', payload: recipe})}>⭐</button>
    </div>
  )
}

export default Card