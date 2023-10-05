import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { underscore } from 'underscore'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
function App() {

  const gameNightFood1 = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5
  }

  const pets = { "🐈 cats": 19, "🐕 dogs": 17 }
  const activity = 'pet'
  const getOptimumObject = obj => {

    let maxKey = null
    let maxValue = 0
    let maxObject = {}
    Object.keys(obj).forEach(key => {
      if (obj[key] > maxValue) {
        maxValue = obj[key]
        maxKey = key
      }
    })
    maxObject[maxKey] = maxValue
    return maxObject
  }
  // console.log(getOptimumObject(gameNightFood2))

  return (
    <>
      <Challange />
      <div className="card">
        <Solution getOptimumObject={getOptimumObject} arg={pets} activity={activity} />
      </div>
    </>
  )
}

export default App
