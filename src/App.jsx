import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys, times } from 'underscore'
import data from '../data'

function App() {

  const description = "Scrimba Podcast is a 50 minute education podcast hosted by Alex Booker."
  console.log(description.split('by')[1])
  function createDescriptionsFor(data) {
    return data.map(pod => {
      return { ...pod, description: description.split('by')[0].concat(' by ').concat([pod.hosts]) }
    })
  }

  return (
    <>
      <Challange />
      <div >
        <Solution createDescriptionsFor={createDescriptionsFor} data={data} />
      </div>
    </>
  )
}

export default App
