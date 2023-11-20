import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='navbar'>
        <button onClick={() => navigate(-1)}>🔙</button>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/about'><h4>About</h4></Link>
        <LoginForm/>
    </div>
  )
}

export default Navbar