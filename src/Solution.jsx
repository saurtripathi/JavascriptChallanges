import React from 'react'


export default function Solution({ data, sortByDuration, flightLength }) {

    const uniqueTags = sortByDuration(data, flightLength)

    const uniqueTagElements = uniqueTags.map(tag =>
        <p>
            {tag}
        </p>

    )




    return (
        <h5>
            {uniqueTagElements}
        </h5>
    )
}