import { useState } from 'react'

import './Styles/App.css'

import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    {toggle ? 
      <ClassComponent/> :
       <FuncComponent/> 
    }
    <button onClick={() => setToggle(!toggle)}>Cambiar a {toggle ? 'Funcion' : 'Clase'}</button>
    </>
  )
}

export default App
