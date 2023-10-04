import React from 'react'

export default function Challange() {

    const ch = `
    Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 
    `

    const input = [1, [4, 5], [4, 7, 6, 4], 3, 5]
    const output = [1, 4, 5, 4, 7, 6, 4, 3, 5]

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}

            <p>Input : [1, [4, 5], [4, 7, 6, 4], 3, 5]</p>
          
            <p>Output : [1, 4, 5, 4, 7, 6, 4, 3, 5]</p>
        </h3>
    )
}