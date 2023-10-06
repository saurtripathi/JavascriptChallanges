import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import { keys } from 'underscore'
import data from '../data'

function App() {

  // console.log(data)

  const shoppingCart = data
    .filter(dish => dish.type === 'sweet')
    .map(dish => {
      return {
        item: dish.item,
        price: dish.price
      }
    })

  console.log(shoppingCart)


  return (
    <>
      <Challange />
      <div className="card">
        <Solution shoppingCart={shoppingCart} />
      </div>
    </>
  )
}

export default App
