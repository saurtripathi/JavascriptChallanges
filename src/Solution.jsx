import React from 'react'

export default function Solution({ capitalizeWord, toTitleCase }) {

    return (
        <h5>
            {toTitleCase("everything, everywhere, all at once")}
        </h5>
    )
}