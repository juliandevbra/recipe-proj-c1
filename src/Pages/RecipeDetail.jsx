import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({})
    const params = useParams()
    console.log(params)
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=68d481a0fbc340308fbf934f836ee8c6`


    useEffect(() => {
        axios(url)
        .then(res => setRecipe(res.data))
    }, [])

  return (
    <div className='list'>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
        <p>{recipe.instructions}</p>
    </div>
  )
}

export default RecipeDetail