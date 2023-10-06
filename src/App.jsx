import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  function total(arr) {
    return arr.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
  }

  console.log(total(data))


  return (
    <>
      <Challange />
      <div >
        <Solution total={total} data={data} />
      </div>
    </>
  )
}

export default App
