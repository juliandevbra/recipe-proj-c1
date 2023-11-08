import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DogApi = () => {
    const [dog, setDog] = useState({})
    const [change, setChange] = useState(false)
    const url = 'https://dog.ceo/api/breeds/image/random'
    
   useEffect(() => {
    axios(url)
    .then((response) => setDog(response.data))
   }, [change])

  return (
    <div>
        <button onClick={() => setChange(!change)}>Cambiar perrito</button>
        <img src={dog.message} alt="" />
    </div>
  )
}

export default DogApi