import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {



  const [count, setCount] = useState(0)
  const capitalizeWord = word => word.slice(0, 1).toUpperCase().concat(word.slice(1))
  const toTitleCase = text => text.split(' ').map(word => capitalizeWord(word)).join(' ')

  return (
    <>
      <Challange />
      <div className="card">
        <Solution capitalizeWord={capitalizeWord} toTitleCase={toTitleCase} />
      </div>
    </>
  )
}

export default App
