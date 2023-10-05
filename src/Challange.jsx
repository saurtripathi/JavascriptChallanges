import React from 'react'

export default function Challange() {

    const ch = `
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  
`
    const inp = `Example input: {"🐈 cats": 19, "🐕 dogs": 17}`
    const out = `Example output: The winner is 🐈 cats with 19 votes!`
    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}

            <p>
                {inp}
            </p>

            <p>{out}</p>
        </h3>
    )
}