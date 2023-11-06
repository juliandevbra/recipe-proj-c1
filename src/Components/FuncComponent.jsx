import React from 'react'
import { useState, useEffect } from 'react'

const FuncComponent = () => {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    console.log('Se ejecuta la parte lógica')

    useEffect(() => {
        console.log('Esto se ejecuta una sola vez')
    }, [])

    useEffect(() => {
        console.log('Se modificó el estado name y loading')
    }, [name, loading])

    useEffect(() => {
        return () => {
            console.log('El componente de función fue desmontado')
        }
    }, [])

  return (
    <div>
        {console.log('Se ejecuta el render')}
        <label htmlFor="">Function Component</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        {name}
    </div>
  )
}

export default FuncComponent