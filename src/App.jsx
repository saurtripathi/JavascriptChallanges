import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const input = "Peggy Porth"
  // const output = { p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1 }

  const countFrequencyOfLetters = text => {
    const containerLetterFrequency = {}
    text.toLowerCase().split(' ').join('').split('').forEach(letter =>  {
      if (!containerLetterFrequency[letter]) {
        containerLetterFrequency[letter] = 1  
      } else {
        containerLetterFrequency[letter] = containerLetterFrequency[letter] + 1
      }
      return containerLetterFrequency
    })
    return containerLetterFrequency;
  }

  return (
    <>
      <Challange />
      <div className="card">
        <Solution countFrequencyOfLetters={countFrequencyOfLetters} input={input} />
      </div>
    </>
  )
}

export default App
