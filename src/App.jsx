import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
  ]


  // const reversedString = str => str.split("").reduce((acc, char) => char + acc, "")

  // const reversedString = str => str.split("").reverse().join("")

  const reversedString = str => [...str].reverse().join("")

  function reverseManually(str) {
    let reversedString = ''
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i]
    }
    return reversedString
  }




  return (
    <>
      <Challange />
      <div className="card">
        <Solution messages={messages} reverseManually={reverseManually} reversedString={reversedString} word="maerc eci yrT" />
      </div>
    </>
  )
}

export default App
