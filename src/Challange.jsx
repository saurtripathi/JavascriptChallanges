import React from 'react'

export default function Challange() {
    const ch = `
    As a software dev at ScrimFlix, you're working on a feature 
    to let users browse TV shows by tag. The first step is to collect all 
    the tags from our data into a new array. Then we'll need 
    to filter out the duplicate tags. 
    
    Write a function that takes in the media data and returns
    a flat array of unique tags.
`
    const out = `
Expected output: 
    ["supernatural", "horror", "drama",
    "fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]`


    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            <p>{ch}</p>
            <p>{out}</p>
        </h3>
    )
}