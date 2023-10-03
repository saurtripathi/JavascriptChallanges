import React from 'react'

export default function Solution({ emojifyWord, emojifySentence }) {
    console.log(emojifyWord(':smile:'))
    return (
        <h5>
            {emojifySentence("I :heart: my :cat:")}
        </h5>
    )
}