import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Formulario = () => {
    const [user, setUser] = useState({
        nombre: '',
        color: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        console.log(event.target.name)
        setUser({
            ...user,
            [event.target.name]: event.target.value.trim()
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.nombre.length > 3 && !user.nombre.startsWith(' ') && user.color.length > 6) {
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }

  return (
    <div>
        {!show && <form onSubmit={handleSubmit}>
            <input name='nombre' type="text" value={user.nombre} onChange={handleChange}/>
            <input name='color' type="text" value={user.color} onChange={handleChange}/>
            <button>Enviar</button>
        </form>}
        {error && <h4>Por favor verifique la información</h4>}
        {show && <Card user={user}/>}
    </div>
  )
}

export default Formulario