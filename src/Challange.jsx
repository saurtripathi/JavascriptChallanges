import React from 'react'

export default function Challange() {
    const ch = `
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 

`

    const g1 = `💕,0`
    const g2 = `🍬,0.89`
    const g3 = `🍫,0.99`
    const g4 = `🧁,0.99`
    const g5 = `📚,0.99`


    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            <p>{ch}</p>
            <p>{g1}</p>
            <p> {g2}</p>
            <p> {g3}</p>
            <p>{g4}</p>
            <p> {g5}</p>
        </h3>
    )
}