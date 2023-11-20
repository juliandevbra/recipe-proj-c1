import React, { useState } from 'react'
import { useGlobalStates } from '../Context/SalarioContext'

const ChildComponent = () => {

  console.log('Se renderizó el hijo')
  const {salario} = useGlobalStates()
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
    </div>
  )
}

export default ChildComponent
