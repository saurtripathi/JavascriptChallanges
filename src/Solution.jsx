import React from 'react'

export default function Solution({ data, getUniqueTags }) {

    const uniqueTags = getUniqueTags(data)
    const uniqueTagElements = uniqueTags.map(tag => <p>{tag}</p>)
    return (
        <h5>
            {uniqueTagElements}
        </h5>
    )
}