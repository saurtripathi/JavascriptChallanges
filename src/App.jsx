import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const pwd = '9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23'
  // const removeDuplicate = pwd => [...new Set([...pwd])].join('')
  //938dsabj2fcgq

  const removeDuplicate = str => str.split('').reduce((acc, curr) => {
    if( !acc.includes(curr)){
      acc.push(curr)
    }
    return acc
  },[])


  return (
    <>
      <Challange />
      <div className="card">
        <Solution removeDuplicate={removeDuplicate} pwd={pwd} />
      </div>
    </>
  )
}

export default App
