import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const notAfizzBuzz = id =>

    id % 3 === 0 && id % 5 === 0 ? 'JACKPOT! 1 Million and a Yacht!' :
      id % 3 === 0 ? 'Vacation!' :
        id % 5 === 0 ? '$100,000 bonus!' :
          id % 3 !== 0 || id % 5 !== 0 ? ':( ' : ''

  const employeeIdArray = Array.from({ length: 100 }, (e, i) => i + 1)



  return (
    <>
      <Challange />
      <div className="card">
        <Solution notAfizzBuzz={notAfizzBuzz} employeeIdArray={employeeIdArray} />
      </div>
    </>
  )
}

export default App
