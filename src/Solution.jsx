import React from 'react'

export default function Solution({ input, countFrequencyOfLetters }) {


    const y = countFrequencyOfLetters(input)
    console.log(y)
    const x = Object.keys(y).map(key => <p key={key}><span>{key} : </span><span>{y[key]}</span></p>)

    return (
        <h5>
            {x}
        </h5>
    )
}