import React from 'react'

export default function Challange({ anagrams }) {
    const ch = `
    Find anagrams in an array 
`
    const mapElement = anagrams.map(item => <p>{item}</p>)

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            <p>{ch}</p>
            <h2>Example array</h2>
            {mapElement}
        </h3>
    )
}   