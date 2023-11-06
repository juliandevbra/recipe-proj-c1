import React from 'react'

const Card = ({user}) => {
  return (
    <div>
        <h3>Bien ahí, {user.nombre}!</h3>
        <h4 style={{color: user.color}}>Tremendo el color {user.color}.</h4>
    </div>
  )
}

export default Card