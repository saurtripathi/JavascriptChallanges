import React from 'react'

export default function Solution({ kittyScores, kittyPrizes, flatten }) {


    return (
        <h5>
            <p>{flatten(kittyPrizes)}</p>
            <p>{flatten(kittyScores)}</p>
        </h5>
    )
}