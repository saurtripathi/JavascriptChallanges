import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys, times } from 'underscore'
import data from '../data'

function App() {

  const awards = ["🏆", "⭐", "💎", "🥇", "👑"];
  function getHosts(data) {
    return data.reduce((acc, current) => [...acc, ...current.hosts], [])
  }

  function assignAwards(data) {
    return getHosts(data).map(host => {
      let random = Math.floor(Math.random() * awards.length)
      return `${awards[random]} ${host}`
    })
  }


  // console.log(getHosts(podcasts));
  console.log(assignAwards(data));

  return (
    <>
      <Challange />
      <div >
        <Solution assignAwards={assignAwards} data={data} />
      </div>
    </>
  )
}

export default App
