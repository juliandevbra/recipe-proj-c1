import { useRecipeStates } from '../Context/RecipeContext'
import Card from './Card'

const RecipeList = () => {
    
  const {recipeList} = useRecipeStates()
  
  return (
    <div>
        {recipeList.map(recipe => <Card key={recipe.id} recipe={recipe}/>)}
    </div>
  )
}

export default RecipeList