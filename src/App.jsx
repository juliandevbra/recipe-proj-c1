import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ChildComponent from './Clase 13/ChildComponent'
import LoboEstepario from './Clase 13/LoboEstepario'
import ParentComponent from './Clase 13/ParentComponent'
import Navbar from './Components/Navbar'
import SalarioContext from './Context/SalarioContext'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import RecipeDetail from './Pages/RecipeDetail'
import './Styles/App.css'


function App() {
  return (
    <>
    {/* <SalarioContext>
      <ParentComponent/>
      <LoboEstepario />
    </SalarioContext> */}
    

    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<RecipeDetail />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
