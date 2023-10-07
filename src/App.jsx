import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys, times } from 'underscore'
import data from '../data'

function App() {
  const flightLength = 60
  function sortByDuration(data, flightLength) {
    const copyOfData = data
    return flightLength <= 60 ?
      copyOfData.sort((a, b) => a.duration - b.duration).map(({ title, duration }, index) => `${index + 1}. ${title}, ${duration} minutes`) :
      copyOfData.sort((a, b) => b.duration - a.duration).map(({ title, duration }, index) => `${index + 1}. ${title}, ${duration} minutes`)
  }

  return (
    <>
      <Challange />
      <div >
        <Solution sortByDuration={sortByDuration} data={data} flightLength={flightLength} />
      </div>
    </>
  )
}

export default App
