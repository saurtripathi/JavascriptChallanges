import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const isPalindrome = (str) => (str.split('').reverse().join('') === str)
  const word = 'madam'
  return (
    <>
      <Challange />
      <div className="card">
        <Solution isPalindrome={isPalindrome} word={word} />
      </div>
    </>
  )
}

export default App
