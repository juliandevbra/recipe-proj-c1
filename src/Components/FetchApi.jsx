import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchApi = () => {
    const [chars, setChars] = useState([])
    const url = 'https://rickandmortyapi.com/api/character/'
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setChars(data.results)
        }).catch((err) => console.log(err))
    }, [])
        
    console.log(chars)
  return (
    <div>
        Aca vamos a traer la info
        {(chars.length > 0 && chars) && chars.map((char) => {
            return <div key={char.id}>
                <h3>{char.name}</h3>
                <img src={char.image} alt="" />
            </div>    
        })}
    </div>
  )
}

export default FetchApi