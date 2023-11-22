import React, { useReducer, useState } from 'react'

const reducer = (state, action) => { // action contiene type (obligatorio) y payload
    switch(action.type) {
        case 'incrementar':
            return {count: state.count + 1}
        case 'decrementar':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        case 'input':
            return {count: action.payload}
    }
}
const initialState = {count: 0}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [num, setNum] = useState(0)
  return (
    <div>
        <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
        <br />
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <input type="number" onChange={(e) => setNum(e.target.value)}/>
        <button onClick={() => dispatch({type: 'input', payload: Number(num)})}>{num}</button>
    </div>
  )
}

export default Counter