import React from 'react'


export default function Solution({ data, assignAwards }) {
    console.log(assignAwards(data))
    const mapElement = assignAwards(data).map(item => <p>{item}</p>)
    return (
        <h5>
            {mapElement}
        </h5>
    )
}