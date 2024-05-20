import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="background w-screen">
        <Body/>
      </div>
    </>
  )
}

export default App
