import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([])
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey
    
    useEffect(() => {
        axios(url)
        .then(res => setRecipeList(res.data.recipes))
    }, [])

  return (
    <div>
        {recipeList.map(recipe => <Card key={recipe.id} recipe={recipe}/>)}
    </div>
  )
}

export default RecipeList