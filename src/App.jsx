import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys, times } from 'underscore'
import data from '../data'

function App() {

  const calcAverageLikes = data => data.reduce((acc, curr) => acc + curr.likes, 0) / data.length

  console.log(calcAverageLikes(data))

  return (
    <>
      <Challange />
      <div >
        <Solution calcAverageLikes={calcAverageLikes} data={data} />
      </div>
    </>
  )
}

export default App
