import React from 'react'

export default function Challange() {
    const ch = `
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.
Eample : output = 73.44
`

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}
        </h3>
    )
}