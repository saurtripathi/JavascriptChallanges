import React from 'react'

export default function Solution({ d, getFormattedData }) {

    const elm = getFormattedData(d).map(input =>
        <p key={input['fullName']}>
            <p>{input['fullName']} </p>
            <p>{input['birthday']}</p>
        </p>)
    return (
        <h5>
            {elm}
        </h5>
    )
}