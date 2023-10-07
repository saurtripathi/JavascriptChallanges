import React from 'react'


export default function Solution({ data, calcAverageLikes }) {
    console.log(calcAverageLikes(data))
    return (
        <h5>
            {calcAverageLikes(data)}
        </h5>
    )
}