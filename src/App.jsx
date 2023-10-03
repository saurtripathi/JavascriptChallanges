import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {


  // const isAnagram = (word, anotherWord) => {
  //   return word.length === anotherWord.length &&
  //     [...word].sort().every(function (element, index) {
  //       return element === [...anotherWord].sort()[index];
  //     });
  // }

  const isAnagram = (word, anotherWord) =>
    word.length === anotherWord.length &&
    word.split('').sort().join() === anotherWord.split('').sort().join()



  return (
    <>
      <Challange />
      <div className="card">
        <Solution isAnagram={isAnagram} />
      </div>
    </>
  )
}

export default App
