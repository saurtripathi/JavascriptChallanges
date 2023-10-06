import React from 'react'

export default function Challange() {
    const ch = `
    Use reduce() and only reduce() to calculate and return 
    the total cost of only the savory
    items in the shopping cart.
    
    Expected output: 9.97  
`

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}
        </h3>
    )
}