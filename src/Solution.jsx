import React from 'react'

export default function Solution({ isAnagram }) {
    console.log(isAnagram("allergy", "gallery"))
    // console.log(isAnagram("rainbow", "crossbow"))
    return (
        <h5>
            {''+isAnagram("allergy", "gallery")}
            {/* {''+isAnagram("rainbow", "crossbow")} */}
        </h5>
    )
}