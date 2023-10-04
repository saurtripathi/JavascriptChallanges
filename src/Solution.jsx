import React from 'react'

export default function Solution({ messages, reverseManually, reversedString, word }) {
    console.log(messages, reverseManually, reversedString, word)
    // console.log(isAnagram("rainbow", "crossbow"))

    const reversedMessages = messages.map(message => <p>{reversedString(message)}</p>)
    return (
        <h5>
            {/* {reversedString(word)} */}
            {/* {reverseManually(word)} */}
            {reversedMessages}
        </h5>
    )
}