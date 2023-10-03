import React from 'react'

export default function Solution({ notAfizzBuzz, employeeIdArray }) {
    // console.log(employeeIdArray)
    return (
        <h5>
            {employeeIdArray.map(id => notAfizzBuzz(id))}
        </h5>
    )
}