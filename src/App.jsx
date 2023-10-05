import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  const getFormattedData = inputs => inputs.map(input => {
    return {
      'fullName': `${input.name.first} ${input.name.last} `,
      'birthday': new Date(input.dob.date).toDateString()
    }
  })





  return (
    <>
      <Challange />
      <div className="card">
        <Solution getFormattedData={getFormattedData} d={data} />
      </div>
    </>
  )
}

export default App
