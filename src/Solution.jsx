import React from 'react'
import { times } from 'underscore'


export default function Solution({ data, createDescriptionsFor }) {
    const mapElement = createDescriptionsFor(data).map(item =>
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.duration}</p>
            <p>{item.tags}</p>
            <p>{item.hosts}</p>
            <p>{item.genre}</p>
            <p>{item.rating}</p>
            <p>{item.paid}</p>
            <p>{item.description}</p>
        </div>)


    return (
        <h5>
            {mapElement}
        </h5>
    )
}