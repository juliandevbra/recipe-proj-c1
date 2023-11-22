import axios from 'axios'
import { useReducer } from 'react'
import {createContext, useContext, useState, useEffect} from 'react'

const RecipeStates = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'GET_RECIPES':
            return {...state, recipeList: action.payload}
        case 'GET_RECIPE':
            return {...state, recipeSelected: {}} //completar
        case 'ADD_FAV': 
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAVS':
            //Función para borrar fav
            return {...state, favs: action.payload}
    }
}

const initialState = {
    recipeList: [],
    favs: [],
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey
    
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_RECIPES', payload: res.data.recipes}))
    }, [])

    return (
        <RecipeStates.Provider value={{
            state, dispatch,
            apiKey
        }}>
            {children}
        </RecipeStates.Provider>
    )
}
export default Context

export const useRecipeStates = () => useContext(RecipeStates)