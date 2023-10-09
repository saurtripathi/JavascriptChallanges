import React from 'react'
import { times } from 'underscore'


export default function Solution({ anagram, anagrams, isAnagramInArray }) {

    const mapElement = isAnagramInArray(anagram, anagrams).map(item =>
        <div>
            <p>{item}</p>
        </div>)


    return (

        <>
        <h2>Solution : </h2>
        {mapElement}
        </>
           
        
    )
}