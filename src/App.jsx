import { Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import RecipeDetail from './Pages/RecipeDetail'
import './Styles/App.css'

function App() {
  return (
    <>  
    {/* <Counter/> */}

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
