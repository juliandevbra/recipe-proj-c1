import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <form className='form' onSubmit={handleClick}>
        <h5>Acceder a Recetas DH</h5>
        <input role='email' type="email" placeholder='Email'/>
        <input data-testid='password' type="password" placeholder='Password'/>
        <button >Enviar</button>
    </form >
  )
}

export default LoginForm