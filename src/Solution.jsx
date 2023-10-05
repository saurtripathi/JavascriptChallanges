import React from 'react'

export default function Solution({ activity, arg, getOptimumObject }) {

    let a = null
    let b = 0
    const obj = getOptimumObject(arg)
    Object.keys(obj).forEach(key => {
        a = key
        b = obj[key]
    }
    )
    console.log(a, b,activity)
    return (
        <h5>
            <p>Maximum liked {activity} : {a} </p>
            <p>Votes recieved by maximum liked {activity} : {b} </p>

        </h5>
    )
}