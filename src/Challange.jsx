import React from 'react'

export default function Challange() {

    const ch = `Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true`

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}
        </h3>
    )
}