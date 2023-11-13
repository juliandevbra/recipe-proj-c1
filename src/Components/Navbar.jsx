import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    //Ejemplo funcional de useNavigate()
    // let user = 'admin'
    // let userDB = 'admin'
    // const login = () => {
    //     if(user == userDB){
    //         setTimeout(() => {
    //             navigate('/dashboard')
    //         }, 2000)
    //     } else {
    //         navigate('/')
    //     }
    // }


  return (
    <div className='navbar'>
        <button onClick={() => navigate(-1)}>🔙</button>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/about'><h4>About</h4></Link>

            {/* 
            Ejemplo funcional de useNavigate()
            <form>
                <input type="text" /><input type="text" />
            </form>
        <button onClick={login}>Loguear</button> */}
    </div>
  )
}

export default Navbar