import React from 'react'

export default function Solution({ word, isPalindrome }) {
    console.log(word, isPalindrome)
    // console.log(isAnagram("rainbow", "crossbow"))


    return (
        <h5>
            {'' + isPalindrome(word)}
        </h5>
    )
}