import React from 'react'

export default function Solution() {



    const panic = text => {

        const lenthOfSplitArray = text.split(" ").length

        let textModified = text.includes(' ') ?

            text.split(' ').map((token, index) => lenthOfSplitArray - 1 !== index ? `${token.toUpperCase()} 😱` : `${token.toUpperCase()} !`)
            :

            `${text.toUpperCase()}!`

        return textModified
    }





    return (
        <h5>
            {panic("special tea")}
            <br/>
            {panic("bravo")}
        </h5>
    )
}