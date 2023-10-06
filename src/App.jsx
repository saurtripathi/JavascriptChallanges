import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  function callback(acc, curr) {
    if (curr.type === 'savory') {
      acc + curr
    }
  }

  function totalSavory(arr) {
    // console.log(arr)
    return arr.reduce((acc, curr) => curr.type === 'savory' ? acc + curr.price : 0, 0).toFixed(2)
  }
  console.log(totalSavory(data))


  return (
    <>
      <Challange />
      <div >
        <Solution total={totalSavory} data={data} />
      </div>
    </>
  )
}

export default App
