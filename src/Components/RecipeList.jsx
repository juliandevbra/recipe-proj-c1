import { useRecipeStates } from '../Context/RecipeContext'
import Card from './Card'

const RecipeList = () => {
    
  const {state} = useRecipeStates()
  
  return (
    <div>
        {state.recipeList.map(recipe => <Card key={recipe.id} recipe={recipe}/>)}
    </div>
  )
}

export default RecipeList