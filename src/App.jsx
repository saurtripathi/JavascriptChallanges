import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  // function getUniqueTags(data) {
  //   const tags = data.reduce((acc, curr) => {
  //     return [...acc, ...curr.tags]
  //   }, [])
  //   return [... new Set(tags)]
  // }

  function getUniqueTags(data) {

    const uniqueTags = {}
    const tags = data.map(curr => curr.tags).flat()
    tags.forEach(tag => {
      if (!uniqueTags[tag]) {
        // uniqueTags= { ...uniqueTags, [tag]: true }
        uniqueTags[tag]=true
      }
    })
    return Object.keys(uniqueTags)
  }

  console.log(getUniqueTags(data))

  return (
    <>
      <Challange />
      <div >
        <Solution getUniqueTags={getUniqueTags} data={data} />
      </div>
    </>
  )
}

export default App
