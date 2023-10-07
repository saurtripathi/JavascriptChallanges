import React from 'react'

export default function Challange() {
    const ch = `
    Our Scrimba Airlines in-flight entertainment package 
    includes a variety of podcasts. We need to add a feature that suggests
    podcasts to our patrons based on whether a flight is short or long. 
    
    Your sort function should take two arguments: the podcast data and
    flight length. If the flight is 60 minutes or less, sort the podcast list 
    from shortest to longest. If it's anything else, sort from longest
    to shortest. 
    
    Your function shouldn't return anything. Instead log a numbered list 
    of the title and duration of 
    each podcast to the console, like this:
`
    const out = `
    
    1. Crime Fan, 150 minutes
    2. Mythical Creatures, 99 minutes
    3. Crime Crime Crime, 70 minutes
    4. Coding Corner, 55 minutes
    5. Scrimba Podcast, 50 minutes
    6. Something about Witches, 35 minutes`
    const outElement = out.split('\n').map(item => <p>{item}</p>)

    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            <p>{ch}</p>
            {outElement}
        </h3>
    )
}   