import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { underscore } from 'underscore'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90],
    [96, 95], 40, 78, 50, [63]
  ];

  const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
  ];



  // const flatten = arr => arr.flat( Infinity )


  // const flatten = arr => arr.reduce((acc, curr) => curr.length > 1 ? acc[ ...curr ] : curr, [])

  const flatten = arr => {
    const newArr = []
    arr.forEach(item => {
      // console.log(Array.isArray(item))
      if (Array.isArray(item)) {
        newArr.push.apply(newArr, item);
      } else {
        newArr.push(item)
      }
    })
    return newArr
  }
console.log(flatten(kittyScores))
  return (
    <>
      <Challange />
      <div className="card">
        <Solution kittyScores={kittyScores} kittyPrizes={kittyPrizes} flatten={flatten} />
      </div>
    </>
  )
}

export default App
