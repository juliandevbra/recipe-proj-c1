import React from 'react'
import { useGlobalStates } from '../Context/SalarioContext'
import lobo from './lobo.png'

const LoboEstepario = () => {
  console.log('Se renderizó el lobo')
  const {salario, setSalario} = useGlobalStates()
  return (
    <div className='lobo-estepario'>
        <img className='lobo' src={lobo} alt='lobo' width={60}/>
        <h3>Total: {salario*6}</h3>
        <button onClick={() => setSalario(salario + 50000)}>Pedir aumento</button>
    </div>
  )
} 

export default LoboEstepario