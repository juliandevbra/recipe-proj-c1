import React, { useState } from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
  console.log('Se renderizó el padre')
  return (
    <div className='parent'>

        <h1>ParentComponent</h1>
        <ChildComponent />
        {/* <p>Salario: {salario}</p> */}
    </div>
  )
}

export default ParentComponent