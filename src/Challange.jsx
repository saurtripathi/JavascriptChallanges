import React, { createElement } from 'react'

export default function Challange() {

    const ch = `
    It's the day after Halloween 🎃 and all the candy is on sale!
   
    To buy up all the candy, use map() and filter() to put all the
    candy into a "shoppingCart" array. 
    
    The new array should contain only the item and the price, like
    this: 

    `
    const output =
        [
            { item: "🍭", price: 2.99 },
            { item: "🍫", price: 1.99 },
            { item: "🍬", price: 0.89 }
        ]

        const outputElm = output.map(elm => <p><span>{elm.item} : </span><span>{elm.price}</span></p>)

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}
            <br />

           <p>Example : <p>{outputElm}</p></p> 

        </h3>
    )
}