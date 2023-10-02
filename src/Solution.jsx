import React from 'react'

export default function Solution() {

    // input: "The KITTENS are SLEEPING!"
    // output: "shh... the kittens are sleeping"

    const whisper = text => {
        text = text.endsWith('!') ? text.slice(0, text.length - 1).toLowerCase() : text.toLowerCase()
        return 'sh...'.concat(text)
    }

    return (
        <h5>
            {whisper("MA'AM, this is a Wendy's!")}
        </h5>
    )
}