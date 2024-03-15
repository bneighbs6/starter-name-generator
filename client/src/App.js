import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://starter-name-generator-7ef7.onrender.com/generate')
      .then((res) => res.json())
      .then((name) => setName([name]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
