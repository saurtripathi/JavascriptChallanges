import React from 'react'

export default function Solution() {



    const panic = text => text.split(' ').join(' 😱 ') + '!'





    return (
        <h5>
            {panic("I'm out of coffee")}
            <br/>
            {panic("bravo")}
        </h5>
    )
}