import React from 'react'

export default function Solution() {

    const whisper = text => text.endsWith('!') ?
        'sh... ' + text.toLowerCase().slice(0, text.indexOf('!')) :
        'sh... ' + text.toLowerCase()
    return (
        <h5>
            {whisper("MA'AM, this is a Wendy's")}
        </h5>
    )
}