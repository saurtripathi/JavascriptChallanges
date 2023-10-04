import React from 'react'

export default function Solution({ pwd, removeDuplicate }) {
    console.log(pwd, removeDuplicate)
    // console.log(isAnagram("rainbow", "crossbow"))
    console.log(removeDuplicate(pwd).join(''))

    return (
        <h5>
            {removeDuplicate(pwd).join('')}
        </h5>
    )
}