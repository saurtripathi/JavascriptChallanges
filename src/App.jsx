import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {
  const [count, setCount] = useState(0)









  return (
    <>
      <Challange />
      <div className="card">
        <Solution />
      </div>
    </>
  )
}

export default App
