import React from 'react'

export default function Solution() {

    // "I'm so happy it's Monday" Example output: "I'M So hApPy iT'S MoNdAy"

    const altCaps = text => text.split('').map((token, index) => index % 2 === 0 ? token.toUpperCase() : token).join('')
    return (
        <h5>
            {altCaps("I'm so happy it's Monday")}
        </h5>
    )
}