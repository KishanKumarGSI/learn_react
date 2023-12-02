import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)


  const addCouter = () => {
    setCount(count +1)
  }
  return (
    <>
     <h1 className='bg-green-400'>Tailwind Test  {count} </h1>
      <button onClick={addCouter}>Change Couter</button>
      <Card username="Kishan Kumar"/>
    </>
  )
}

export default App
