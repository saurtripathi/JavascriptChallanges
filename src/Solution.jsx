import React from 'react'

export default function Solution({ data, newData }) {

    console.log(newData(data))

    const elm = newData(data).map(input =>
        <div>
            <div>
                <span>title : </span>
                <span>{input.title}</span>
            </div>
            <div>
                <span>rating    : </span>
                <span>{input.rating}</span>
            </div>
            <div>
                <span>paid  : </span>
                <span>{`${input.paid}`}</span>
            </div>
        </div>
    )
    // console.log(elm)
    return (
        <h5>
            {elm}
        </h5>
    )
}