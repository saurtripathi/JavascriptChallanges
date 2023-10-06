import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  const sortProducts = products =>
    products.sort((item1, item2) => item1.price - item2.price)

  // sortProducts(data)

  return (
    <>
      <Challange />
      <div >
        <Solution sortProducts={sortProducts} data={data} />
      </div>
    </>
  )
}

export default App
