import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  console.log(data)

  const newData = inputs => inputs.filter(input => input['paid'] === false).map(input => {
    return {
      title: input['title'],
      rating: input['rating'],
      paid: input['paid']
    }
  })

  console.log(newData(data))

  return (
    <>
      <Challange />
      <div className="card">
        <Solution newData={newData} data={data} />
      </div>
    </>
  )
}

export default App
